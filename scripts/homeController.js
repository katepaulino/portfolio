(function(module) {
  var homeController = {};

  homeController.index = function() {
    $('.main-nav').on('click', '.tab', function(e) {
      $('.tab-content').hide();
      $('#home').show();
    });
  };
  module.homeController = homeController;
})(window);
