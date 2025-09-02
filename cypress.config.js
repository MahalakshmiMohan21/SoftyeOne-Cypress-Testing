const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
   video: true,

  reporterOptions: {

    charts: true,

    reportPageTitle: 'Cypress Inline Reporter',

    embeddedScreenshots: true, 

    inlineAssets: true, //Adds the asserts inline

  },
  e2e: {
    baseUrl: 'https://softye-invoice-qa-2.softyetech.cloud',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@shelex/cypress-allure-plugin/writer')(on, config); // ✅ Allure writer
     return config;
    },
    env: {
     allure: true,
    },
  },
});
