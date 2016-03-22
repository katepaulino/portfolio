(function(module) {

  var projectView = {};

  projectView.populateFilter = function() {
    $('article').each(function() {
      if (!$(this).hasClass('template')) {
        var val = $(this).attr('data-category');
        var optionTag = '<option value="' + val + '">' + val + '</option>';
        if ($('#category-filter option[value="' + val + '"]').length === 0) {
          $('#category-filter').append(optionTag);
        }
      }
    });
  };

  projectView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-category="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
    });
  };

  projectView.initIndexPage = function() {
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml());
    });

    projectView.populateFilter();
    projectView.handleCategoryFilter();
  };

  module.projectView = projectView;
})(window);
