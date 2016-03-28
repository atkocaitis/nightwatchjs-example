var forum = {
  /**
  * Function to open forum by title
  * @param  {Object} testData 
  * @Return {Object} Return page object for chaining
  */
  openForum: function(testData) {
    this.navigate(testData.url)
      .waitForElementVisible('@forum', 30000)
      .click('xpath','//h3/a[contains(., "' + testData.forum + '")]');
    return this; 
  },
  /**
  * Function to create new forum thread
  * @param  {Object} testData 
  * @Return {Object} Return page object for chaining
  */
  createNewThread: function(testData) {
    this.waitForElementVisible('@create', 30000)
      .click('@create')
      .waitForElementVisible('@newThreadTitle', 30000)
      .setValue('@newThreadTitle', testData.title)
      .setValue('@newThreadText', testData.text)
      .click('@newThreadSubmit');
    return this; 
  }
};

module.exports = {
  commands: [forum],
  elements: {
    forum: { selector: '.forumOverviewListingBoxItem' },
    title: { selector: 'h1' },
    threadTitle: { selector: 'h1.firstPostTitle' },
    create: { selector: '.newTopic' },
    newThreadTitle: { selector: '[name="NewThreadForm[title]"]'},
    newThreadText: { selector: '[name="NewThreadForm[pagetext]"]'},
    newThreadSubmit: { selector: '#post_submit'}
  }
};