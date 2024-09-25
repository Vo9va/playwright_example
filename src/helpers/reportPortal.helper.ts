import {LOG_LEVELS, ReportingApi} from '@reportportal/agent-js-playwright';

const TAG = process.env.TAG;

class ReportPortalHelper {
  getReportConfig() {
    return {
      apiKey: 'test_ZNvJRl6USuWNBL0JfC_SXu0Sp9LJxlJniCi1qQwwwRC74MIJJZpKhimAuToWY27w',
      endpoint: 'https://rtportal.devopdata.co/api/v1',
      project: 'trade_logiq',
      launch: 'test1',
      mode: 'DEFAULT',
      debug: false,
      attributes: TAG !== undefined ? [{ key: 'tag', value: TAG }] : [],
      includeTestSteps: true,
    };
  }

  async logInfo(message: any) {
    ReportingApi.log(LOG_LEVELS.INFO, message);
  }

}

export const reportPortalHelper = new ReportPortalHelper();
