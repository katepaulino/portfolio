var projectView = {};

projectView.populateFilters = function() {
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
    $('#category-filter').val('');
  });
};

projectView.handleMainNav = function() {
  $('.nav li').on('click', function() {
    $('.tab-content').hide();
    $('.tab-content[data-content="' + $(this).text() + '"]');
    $('#'+$(this).attr('data-content')).show();
  });
  $('.nav .tab:first').click();
};


ProjectView.initIndexPage = function() {
  Project.all.forEach(function(a){
    $('#projects').append(a.toHtml());
  });

  $('document').ready(function() {
    projectView.populateFilters();
    projectView.handleMainNav();
    projectView.handleCategoryFilter();
  });
};