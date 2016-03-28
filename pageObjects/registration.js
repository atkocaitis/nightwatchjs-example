var registration = {
  /**
  * Function to create new forum user
  * @param  {Object} testData 
  * @Return {Object} Return page object for chaining
  */
  createNewUser: function(testData) {
    var timeStamp = new Date().getTime();
    this.navigate(testData.url)
      .waitForElementVisible('@registrationBtn', 30000)
      .click('@registrationBtn')
      .waitForElementVisible('@userName', 30000)
      .setValue('@userName', testData.userName + "-" + timeStamp)
      .setValue('@email', timeStamp + "-" + testData.email)
      .setValue('@city', testData.city)
      .setValue('@password', testData.password)
      .click('@newsletter')
      .click('@terms')
      .click('@registrationSubmit');
    return this; 
  }
};

module.exports = {
  commands: [registration],
  elements: {
    registrationBtn: { selector: '.btn_register' },
    userName: { selector: '[name="SignupForm[username]"]'},
    email: { selector: '[name="SignupForm[email]"]'},
    city: { selector: '#customfield_5'},
    password: { selector: '[name="SignupForm[password]"]'},
    newsletter: { selector: '#customfield_21_1'},
    terms: { selector: '#terms'},
    registrationSubmit: { selector: '.registerBTN'}
  }
};