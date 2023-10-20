const { DetoxCircusEnvironment } = require('detox/runners/jest');
const { log, worker } = require('detox/internals')

// Make sure we don't use two different versions of jest-allure2-reporter
const { allure } = require(require.resolve('jest-allure2-reporter', { paths: ['..'] }));
const { WithAllure2 } = require(require.resolve('jest-allure2-reporter/environment-decorator', { paths: ['..'] }));

class CustomDetoxEnvironment extends WithAllure2(DetoxCircusEnvironment) {
  constructor(config, context) {
    super(config, context);
    log.trace({ cat: 'lifecycle,jest-environment', data: config }, 'created Jest test environment');
  }

  async setup() {
    await super.setup();

    worker.device.takeScreenshot = allure.createFileAttachment(worker.device.takeScreenshot, '%s');
    this.global.__waitUntilArtifactsManagerIsIdle__ = () => {
      return worker._artifactsManager._idlePromise;
    };
  }
}

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

module.exports = CustomDetoxEnvironment;
