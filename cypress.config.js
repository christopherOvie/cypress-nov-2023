const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads');
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const xlsx = require('node-xlsx').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', verifyDownloadTasks);
      on('task', {downloadFile})
      // implement node event listeners here
    },
  //  baseUrl: "https://opensource-demo.orangehrmlive.com/",
  baseUrl: "https://demoblaze.com/",
    watchForFileChanges:false,
   // "chromeWebSecurity":false,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 60000,
    //failOnStatusCode: false,
    experimentalRunAllSpecs:true
  },
});
