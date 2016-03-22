(function(module) {
  var projectController = {};

  Project.fetchAll(projectView.initIndexPage);

  projectController.index = function() {
    $('.main-nav').on('click', '.tab', function(e) {
      $('.tab-content').hide();
      $('#projects').show();
    });
  };

  module.projectController = projectController;
})(window);
