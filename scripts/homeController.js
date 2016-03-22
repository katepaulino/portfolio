(function(module) {
  var homeController = {};
  console.log('yoooo');
  homeController.index = function() {
    $('.tab-content').hide();
    $('#home').show();
  };

  module.homeController = homeController;
})(window);
