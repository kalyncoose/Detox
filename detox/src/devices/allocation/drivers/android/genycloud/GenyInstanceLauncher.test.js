// @ts-nocheck
describe('Genymotion-Cloud instance launcher', () => {
  const recipeName = 'mock-recipe-name';

  const anInstance = () => {
    const instance = new GenyInstance();
    instance.uuid = 'mock-instance-uuid';
    instance.name = 'mock-instance-name';
    instance.recipeName = recipeName;
    instance.toString = () => 'mock-instance-toString()';
    return instance;
  };

  const anOfflineInstance = () => {
    const instance = anInstance();
    instance.isAdbConnected.mockReturnValue(false);
    instance.isOnline.mockReturnValue(false);
    instance.adbName = '0.0.0.0';
    return instance;
  };

  const anOnlineInstance = () => {
    const instance = anOfflineInstance();
    instance.isOnline.mockReturnValue(true);
    return instance;
  };

  const aDisconnectedInstance = anOnlineInstance;
  const aFullyConnectedInstance = () => {
    const instance = anOnlineInstance();
    instance.isAdbConnected.mockReturnValue(true);
    instance.adbName = 'localhost:1234';
    return instance;
  };

  const givenInstanceQueryResult = (instance) => instanceLookupService.getInstance.mockResolvedValue(instance);
  const givenAnInstanceDeletionError = () => instanceLifecycleService.deleteInstance.mockRejectedValue(new Error());
  const givenInstanceConnectResult = (instance) => instanceLifecycleService.adbConnectInstance.mockResolvedValue(instance);

  let retry;
  let deviceCleanupRegistry;
  let instanceLookupService;
  let instanceLifecycleService;
  let GenyInstance;
  let uut;
  beforeEach(() => {
    jest.mock('../../../../../utils/retry');
    retry = require('../../../../../utils/retry');
    retry.mockImplementation((options, func) => func());

    const InstanceLifecycleService = jest.genMockFromModule('./services/GenyInstanceLifecycleService');
    instanceLifecycleService = new InstanceLifecycleService();

    const InstanceLookupService = jest.genMockFromModule('./services/GenyInstanceLookupService');
    instanceLookupService = new InstanceLookupService();

    const DeviceRegistry = jest.genMockFromModule('../../../../DeviceRegistry');
    deviceCleanupRegistry = new DeviceRegistry();

    GenyInstance = jest.genMockFromModule('./services/dto/GenyInstance');

    const GenyInstanceLauncher = require('./GenyInstanceLauncher');
    uut = new GenyInstanceLauncher({
      instanceLifecycleService,
      instanceLookupService,
      deviceCleanupRegistry,
    });
  });

  describe('Launch', () => {
    it('should register a *fresh* instance in cleanup registry', async () => {
      const instance = anOnlineInstance();
      givenInstanceQueryResult(instance);
      givenInstanceConnectResult(instance);

      await uut.launch(instance, true);
      expect(deviceCleanupRegistry.allocateDevice).toHaveBeenCalledWith(instance.uuid, { name: instance.name });
    });

    it('should not register instance in cleanup registry if not a fresh instance', async () => {
      const instance = anOnlineInstance();
      givenInstanceQueryResult(instance);
      givenInstanceConnectResult(instance);

      await uut.launch(instance, false);
      expect(deviceCleanupRegistry.allocateDevice).not.toHaveBeenCalled();
    });

    it('should register instance in cleanup registry by default', async () => {
      const instance = anOnlineInstance();
      givenInstanceQueryResult(instance);
      givenInstanceConnectResult(instance);

      await uut.launch(instance);
      expect(deviceCleanupRegistry.allocateDevice).toHaveBeenCalledWith(instance.uuid, { name: instance.name });
    });

    it('should wait for the cloud instance to become online', async () => {
      const instance = anOfflineInstance();
      const instanceOnline = anOnlineInstance();
      givenInstanceQueryResult(instanceOnline);
      givenInstanceConnectResult(instanceOnline);

      retry.mockImplementationOnce(async (options, func) => {
        const instance = await func();
        expect(instanceLookupService.getInstance).toHaveBeenCalledWith(instance.uuid);
        return instance;
      });

      const result = await uut.launch(instance);
      expect(result).toEqual(instanceOnline);
      expect(retry).toHaveBeenCalled();
    });

    it('should not wait for cloud instance to become online if already online', async () => {
      const instance = anOnlineInstance();
      givenInstanceQueryResult(instance);
      givenInstanceConnectResult(instance);

      const result = await uut.launch(instance);
      expect(instanceLookupService.getInstance).not.toHaveBeenCalled();
      expect(retry).not.toHaveBeenCalled();
      expect(result).toEqual(instance);
    });

    it('should fail if instance never becomes online', async () => {
      const instanceOffline = anOfflineInstance();
      givenInstanceQueryResult(instanceOffline);
      givenInstanceConnectResult(instanceOffline);

      await expect(uut.launch(instanceOffline))
        .rejects
        .toThrowError(`Timeout waiting for instance ${instanceOffline.uuid} to be ready`);
    });

    it('should wait for the cloud instance to become online, with decent retry arguments', async () => {
      const expectedRetryArgs = {
        initialSleep: 45000,
        backoff: 'none',
        interval: 5000,
        retries: 25,
      };
      const instance = anOfflineInstance();
      const instanceOnline = anOnlineInstance();
      givenInstanceQueryResult(instanceOnline);
      givenInstanceConnectResult(instanceOnline);

      await uut.launch(instance);
      expect(retry).toHaveBeenCalledWith(expect.objectContaining(expectedRetryArgs), expect.any(Function));
    });

    it('should adb-connect to instance if disconnected', async () => {
      const disconnectedInstance = aDisconnectedInstance();
      const connectedInstance = aFullyConnectedInstance();
      givenInstanceQueryResult(disconnectedInstance);
      givenInstanceConnectResult(connectedInstance);

      const result = await uut.launch(disconnectedInstance);
      expect(instanceLifecycleService.adbConnectInstance).toHaveBeenCalledWith(disconnectedInstance.uuid);
      expect(result).toEqual(connectedInstance);
    });

    it('should not connect a connected instance', async () => {
      const connectedInstance = aFullyConnectedInstance();
      givenInstanceQueryResult(connectedInstance);
      givenInstanceConnectResult(connectedInstance);

      await uut.launch(connectedInstance);

      expect(instanceLifecycleService.adbConnectInstance).not.toHaveBeenCalled();
    });
  });

  describe('Shutdown', () => {
    it('should delete the associated instance', async () => {
      const instance = anInstance();
      await uut.shutdown(instance);
      expect(instanceLifecycleService.deleteInstance).toHaveBeenCalledWith(instance.uuid);
    });

    it('should fail if deletion fails', async () => {
      givenAnInstanceDeletionError();

      const instance = anInstance();
      await expect(uut.shutdown(instance)).rejects.toThrowError();
    });

    it('should remove the instance from the cleanup registry', async () => {
      const instance = anInstance();
      await uut.shutdown(instance);
      expect(deviceCleanupRegistry.disposeDevice).toHaveBeenCalledWith(instance.uuid);
    });
  });
});
