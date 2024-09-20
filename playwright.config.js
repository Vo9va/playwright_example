import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false, // вкл полную паралельность, тоесть можна запускать все тесты паралеьно, если они независимые
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // reporter: 'html', //создание репорта
  use: {
    baseURL: 'http://localhost/',
    trace: 'on-first-retry',
    screenshot: 'on-failure',
    video: 'on',
    workers: 1,  // паралеьность но нужно удалить fullyParallel или фолс поставить
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile_Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
});
