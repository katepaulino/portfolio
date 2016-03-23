(function(module) {
  var repos = {};
  repos.all = [];

  repos.requestRepos = function(view) {
    $.ajax({
      url: 'https://api.github.com/users/katepaulino/repos' +
        '?per_page=5&sort=updated',
      headers: {'Authorization': 'token ' + githubToken},
      success: function (data) {
        repos.all=data;
        view(data);
      }
    });
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
