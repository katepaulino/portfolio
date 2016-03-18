(function(module) {

  function Project(opts) {
    this.author = opts.author;
    this.title = opts.title;
    this.category = opts.category;
    this.authorUrl = opts.authorUrl;
    this.publishedOn = opts.publishedOn;
    this.body = opts.body;
  }

  Project.all = [];

  Project.prototype.toHtml = function() {
    var template = Handlebars.compile($('#project-template').text());
    return template(this);
  };

  Project.loadAll = function(rawData) {
    rawData.forEach(function(ele) {
      Project.all.push(new Project(ele));
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
        next();
      });
    }
  };

  module.Project = Project;
})(window);
