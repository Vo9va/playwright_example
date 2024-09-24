import { defineConfig, devices } from '@playwright/test';
import { reportPortalHelper } from './helpers/reportPortal.helper';

const REPORT = process.env.REPORT || '';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter:  REPORT === 'true' ? [['@reportportal/agent-js-playwright', reportPortalHelper.getReportConfig()]] : '',
  use: {
    baseURL: 'http://localhost/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    // video: 'on',
    workers: 3,  // паралеьность, работает при парметре тру в fullyParallel
  },
  projects: [
    {
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'Mobile_Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
  ],
});
