var timeStamp = new Date().getTime();
var testData = {
  url: "http://forum.meetinsided.com",
  userName: "testUser-76367",
  password: "p4ssw0rd",
  forum: "Special 38",
  title: "Test-title-" + timeStamp,
  text: "Lorem-ipsum-" + timeStamp
};

module.exports = {
  tags: ['forum'],
  before : function(client) {
    // Resize browser
    client.windowMaximize();
  },
  after : function(client) {
    // Close browser session
    client.end();
  },
  'login' : function(client) {
    var user = client.page.user();

    // Login user
    user.login(testData);

    // Check if user is logged in
    user.waitForElementVisible('@loggedUserName', 30000)
      .assert.containsText('@loggedUserName', testData.userName);
  },
  'Create new Thread' : function(client) {
    var forum = client.page.forum();

    // Open forum
    forum.openForum(testData);

    // Check if forum title visible
    forum.waitForElementVisible('@title', 30000)
      .assert.containsText('@title', testData.forum);

    // Create new Thread
    forum.createNewThread(testData);

    // Check if new Thread is created
    forum.waitForElementVisible('@threadTitle', 30000)
      .assert.containsText('@threadTitle', testData.title);
  },
  'Check if new Thread appears in user profile' : function(client) {
    var user = client.page.user();

    // Open user topics list
    user.openUserTopicsList(testData);

    // Check if topic title is correct
    user.assert.containsText('@userTopicsFirstTitle', testData.title);
  }
};