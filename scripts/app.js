var projects = [];

function Project (opts) {
  this.author = opts.author;
  this.title = opts.title;
  this.category = opts.category;
  this.authorUrl = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

projectData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});

// hide and show menu content on click
var projectView = {};

projectView.handleMainNav = function() {
  $('.nav li').on('click', function() {
    $('.tab-content').hide();
    $('.tab-content[data-content="' + $(this).text() + '"]');
    $('#'+$(this).attr('data-content')).show();
  });
  $('.nav .tab:first').click();
};

$('document').ready(function() {
  projectView.handleMainNav();
});
