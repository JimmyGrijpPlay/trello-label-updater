window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: './images/icon-light.png',
      text: 'Update Labels',
      callback: function(t) {
        return t.popup({
          title: 'Label Updater',
          url: './index.html',
          height: 200
        });
      }
    }];
  }
}); 