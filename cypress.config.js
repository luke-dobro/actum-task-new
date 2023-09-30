const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      baseUrl: "https://www.demoblaze.com/",
      baseUrlApi: "https://restful-booker.herokuapp.com/",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
