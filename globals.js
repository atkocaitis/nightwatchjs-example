module.exports = {
    'default': { 
        baseURL : 'http://www.google.com'
    },
    
    // Abord all on test fail
    abortOnAssertionFailure: true,

    // Duration between two checks
    waitForConditionPollInterval: 300,

    // Timeout duration
    waitForConditionTimeout: 5000,

    // this will cause waitFor commands on elements to throw an error if multiple
  	// elements are found using the given locate strategy and selector
  	throwOnMultipleElementsReturned : false,

    beforeEach: function(browser, done) {
        browser
            .log("browser started", "message")
            .windowMaximize()
            .url(this.baseURL).perform(function() {
              done();
            });
    },

    afterEach: function(browser, done) {
        browser
            .end()
            .log("browser stoped", "message").perform(function() {
              done();
            });
    }
};