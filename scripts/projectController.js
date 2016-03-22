(function(module) {
  var projectController = {};


  projectController.index = function() {
    console.log('hey');
    $('.tab-content').hide();
    $('#projects').show();
  };

  Project.fetchAll(projectView.initIndexPage);
  module.projectController = projectController;
})(window);
