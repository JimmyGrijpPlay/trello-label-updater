var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';

window.TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      icon: {
        dark: GRAY_ICON,
        light: GRAY_ICON
      },
      text: 'Label Changer',
      callback: function(t) {
        return t.popup({
          title: 'Change Labels',
          url: 'index.html'
        });
      }
    }];
  },
  'card-buttons': function(t, options) {
    console.log('Card buttons loaded');
    return [{
      icon: 'https://jimmygrijpplay.github.io/trello-label-updater/images/icon-light.png',
      text: 'Change Label-Id',
      callback: function(t) {
        return t.popup({
          title: 'Change Label-Id of any card',
          url: 'https://jimmygrijpplay.github.io/trello-label-updater/index.html',
          height: 200
        });
      }
    }];
  },
  'card-detail-badges': function(t, options) {
    return [{
      title: 'Label Manager',
      text: 'Change Labels',
      color: 'blue',
      callback: function(t) {
        return t.popup({
          title: 'Change Label-Id of any card',
          url: 'https://jimmygrijpplay.github.io/trello-label-updater/index.html',
          height: 200
        });
      }
    }];
  }
}); 
