/** @typedef {import('@jest/reporters').Reporter} Reporter */

const { JestMetadataReporter } = require('jest-metadata/reporter');

const {
  DetoxIPCReporter,
  DetoxReporterDispatcher,
  DetoxSummaryReporter,
  DetoxVerboseReporter,
} = require('./reporters');

/** @implements {Reporter} */
class DetoxReporter extends DetoxReporterDispatcher {
  constructor(globalConfig) {
    super(globalConfig, {
      JestMetadataReporter,
      DetoxSummaryReporter,
      DetoxVerboseReporter,
      DetoxIPCReporter,
    });
  }
}

module.exports = DetoxReporter;
