var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';

// we can access Bluebird Promises as follows
var Promise = TrelloPowerUp.Promise;

// We need to call initialize to get all of our capability handles set up and registered with Trello
TrelloPowerUp.initialize({
  // NOTE about asynchronous responses
  // If you need to make an asynchronous request or action before you can reply to Trello
  // you can return a Promise (bluebird promises are included at TrelloPowerUp.Promise)
  // The Promise should resolve to the object type that is expected to be returned
  'board-buttons': function(t, options){
    return [{
      text: 'Callback',
      callback: function(t){
        return t.popup({
          title: "Example Popup",
          url: './index.html',
        });
      }
    }];
  },
  'card-buttons': function(t, options) {
    return [{
      // usually you will provide an icon. for card buttons, the icon gets shown in the list of buttons
      // when the user clicks the card back section
      icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
      // You'll want to make sure your text makes sense in context and includes exactly what you're doing
      text: 'Change Label',
      // By default, card buttons are only shown to members of the board
      condition: 'always',
      callback: function(t) {
        return t.popup({
          title: "Change Card Label",
          url: './index.html'
        });
      }
    }];
  }
}); 
