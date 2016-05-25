module.exports = {
  elements: {
    firstSearchResult: { selector: '#res h3 a' }
  },
  commands: [{
    /**
    * Function to click first item in search list results
    * @Return {Object} Return page object for chaining
    */
    clickFirstResult: function() {
      this
        .waitForElementVisible('@firstSearchResult')
        .click('@firstSearchResult');
      return this.api; 
    }
  }]
};