(function(module) {

  function Project(opts) {
    Object.keys(opts).forEach(function(p, idx, keys) {
      this[p] = opts[p];
    },this);
  }

  Project.all = [];

  Project.prototype.toHtml = function() {
    var template = Handlebars.compile($('#project-template').text());
    return template(this);
  };

  Project.loadAll = function(rawData) {
    Project.all = rawData.map(function(ele) {
      return new Project(ele);
    });
  };

  Project.fetchAll = function(next) {
    if (localStorage.rawData) {
      Project.loadAll(JSON.parse(localStorage.rawData));
      next();
    } else {
      $.getJSON('/data/projects.json', function(rawData){
        Project.loadAll(rawData);
        localStorage.setItem('rawData', JSON.stringify(rawData));
        projectView.initIndexPage();
      });
    }
  };

  module.Project = Project;
})(window);
