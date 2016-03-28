var user = {
  /**
  * Function to login with existing user
  * @param  {Object} testData 
  * @Return {Object} Return page object for chaining
  */
  login: function(testData) {
    this.navigate(testData.url)
      .waitForElementVisible('@loginBtn', 30000)
      .click('@loginBtn')
      .waitForElementVisible('@userName', 30000)
      .setValue('@userName', testData.userName)
      .setValue('@password', testData.password)
      .click('@loginSubmit');
    return this; 
  },
  /**
  * Function to logout current user session
  * @Return {Object} Return page object for chaining
  */
  logout: function() {
    this.waitForElementVisible('@logoutBtn', 30000)
      .click('@logoutBtn');
    return this; 
  },
  /**
  * Function to open user topics list
  * @param  {Object} testData 
  * @Return {Object} Return page object for chaining
  */
  openUserTopicsList: function(testData) {
    this.navigate(testData.url)
      .waitForElementVisible('@userTopicsBtn', 30000)
      .click('@userTopicsBtn')
      .waitForElementVisible('@userTopicsFirstTitle', 30000);
    return this; 
  }
};

module.exports = {
  commands: [user],
  elements: {
    loginBtn: { selector: '.btn_login' },
    logoutBtn: { selector: '.signOut' },
    userName: { selector: '[name="LoginForm[login]"]'},
    password: { selector: '[name="LoginForm[password]'},
    loginSubmit: { selector: '#LoginForm .loginBTN'},
    loggedUserName: { selector: '.profileWidget  .username'},
    userTopicsBtn: { selector: '.summary .topics a'},
    userTopicsFirstTitle: { selector: '.listingBox .searchbits .firstChild h3 a'}
  }
};