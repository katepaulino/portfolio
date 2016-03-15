function Project (opts) {
  this.author = opts.author;
  this.title = opts.title;
  this.category = opts.category;
  this.authorUrl = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Project.all = [];

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

Project.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
};


Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.loadAll(localStorage.rawData);
    projectView.initIndexPage();
  } else {
    $.getJSON('/data/projects.json', function(rawData){
      Project.loadAll(rawData);
      localStorage.setItem('rawData', JSON.stringify(rawData));
      ProjectView.initIndexPage();
    });
  }
};
