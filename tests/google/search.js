var testData = require('../testData');

module.exports = {
  tags: ['search'],
  'Search for text' : function(browser) {
    browser
      .page.home()
      .search(testData.google.search)
      .page.list()
      .clickFirstResult().perform(function() {
        browser.assert.title(testData.google.title);
      });
  }
};
