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
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  if (!this.publishedOn) {
    $newProject.addClass('draft');
  }

  $newProject.data('category', this.category);
  $newProject.find('.byline a').html(this.author);
  $newProject.find('.byline a').attr('href', this.authorUrl);
  $newProject.find('h1').html(this.title);
  $newProject.find('.article-body').html(this.body);
  $newProject.find('time[pubdate]').attr('datetime', this.publishedOn);
  $newProject.find('time[pubdate]').attr('title', this.publishedOn);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  return $newProject;
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
