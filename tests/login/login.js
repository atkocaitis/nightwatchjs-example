var testData = {
  url: "http://forum.meetinsided.com",
  userName: "testUser-76367",
  password: "p4ssw0rd"
};

module.exports = {
  tags: ['login'],
  before : function(client) {
    // Resize browser
    client.windowMaximize();
  },
  after : function(client) {
    // Close browser session
    client.end();
  },
  'Login as a user' : function(client) {
    var user = client.page.user();

    // Login user
    user.login(testData);

    // Check if user is logged in
    user.waitForElementVisible('@loggedUserName', 30000)
      .assert.containsText('@loggedUserName', testData.userName);
  },
  'Logout user' : function(client) {
    var user = client.page.user();

    // Logout user
    user.logout();

    // Check if user cannot access user details
    user.waitForElementNotPresent('@loggedUserName', 5000);
  }
};