// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  reporter: 'html',

  timeout: 70 * 1000,

  expect: {
    timeout: 7000,
  },

  use: {
    browserName: 'chromium',
    headless: false,   // must be false to see browser
    launchOptions: {
    slowMo: 500,     // 500ms delay between actions
  },
  },
});


