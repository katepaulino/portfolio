(function(module) {
  var repos = {};
  repos.all = [];

  repos.requestRepos = function(view) {
    $.get('github/users/katepaulino/repos' +
            '?per_page=50' +
            '&sort=updated')
      .done(function(data, message, xhr) {
        repos.all = data;
      })
      .done(view);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
