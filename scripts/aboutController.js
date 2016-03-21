(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('.main-nav').on('click', '.tab', function(e) {
      $('.tab-content').hide();
      $('#about').show();
    });
  };

  module.aboutController = aboutController;
})(window);
