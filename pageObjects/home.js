module.exports = {
  elements: {
    searchText: { selector: 'input#lst-ib' },
    searchSubmit: { selector: 'input[name="btnK"]' }
  },
  commands: [{
    /**
    * Function to perform search in home page
    * @param  {String} value Search string value 
    * @Return {Object} Return page object for chaining
    */
    search: function(value) {
      this
        .waitForElementVisible('@searchText')
        .setValue('@searchText', value)
        .click('@searchSubmit');
      return this.api; 
    }
  }]
};