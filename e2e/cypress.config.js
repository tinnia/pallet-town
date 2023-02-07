const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    BASE_URL: 'http://frontiers.kbstar.com',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://frontiers.kbstar.com',
  },
  viewportWidth: 1600,
  viewportHeight: 900,
})
