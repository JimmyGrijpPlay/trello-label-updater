window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://jimmygrijpplay.github.io/trello-label-updater/images/icon-light.png',
      text: 'Change Label-Id',
      callback: function(t) {
        return t.popup({
          title: 'Change Label-Id of any card',
          url: './index.html',
          height: 200
        });
      }
    }];
  }
}); 
