import { defineConfig, devices } from '@playwright/test';
import { reportPortalHelper } from './helpers/reportPortal.helper';

const REPORT = process.env.REPORT || '';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false, // вкл полную паралельность, тоесть можна запускать все тесты паралеьно, если они независимые
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter:  REPORT === 'true' ? [['@reportportal/agent-js-playwright', reportPortalHelper.getReportConfig()]] : '',
  use: {
    baseURL: 'http://localhost/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on',
    workers: 3,  // паралеьность но нужно удалить fullyParallel или фолс поставить
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'Mobile_Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
  ],
});
