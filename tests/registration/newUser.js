var testData = {
  url: "http://forum.meetinsided.com",
  userName: "testUser",
  email: "test@test.lt",
  city: "Amsterdam",
  password: "p4ssw0rd"
};

module.exports = {
  tags: ['registration'],
  before : function(client) {
    // Resize browser
    client.windowMaximize();
  },
  after : function(client) {
    // Close browser session
    client.end();
  },
  'Registering as a new user' : function(client) {
    var registration = client.page.registration();

    // Register new user
    registration.createNewUser(testData);

    // Check if new user is created
    var user = client.page.user();
    user.waitForElementVisible('@loggedUserName', 30000)
      .assert.containsText('@loggedUserName', testData.userName + "-");
  }
};