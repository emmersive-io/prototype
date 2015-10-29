// Boot the app
(function() {
  var onReady = function() {
    angular.bootstrap(document, ['emmersive']);
  };

  if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
  }
  else {
    angular.element(document).ready(onReady);
  }
})();
