window.TrelloPowerUp.initialize({
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
