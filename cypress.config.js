const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ydtsgf',
  e2e: {
    setupNodeEvents(on, config) {
      // Força saída após os testes
      on('after:run', () => {
        process.exit(0)
      })
    },
    baseUrl: "http://localhost:3000",
    viewportWidth: 1280,
    viewportHeight: 720,
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
})