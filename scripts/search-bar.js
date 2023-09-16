$(function () {
    var recentSearches = [];

    if (localStorage.getItem('recentSearches')) {
        recentSearches = JSON.parse(localStorage.getItem('recentSearches'));
        displayRecentSearches(recentSearches);
    }

    function displayRecentSearches(searches) {
        searches = searches.slice(0, 5);

        $('.hist1').text(searches[0]);
        $('.hist2').text(searches[1]);
        $('.hist3').text(searches[2]);
        $('.hist4').text(searches[3]);
        $('.hist5').text(searches[4]);
    }

    $('.search-field').focus(function () {
        $('.search-history').show();
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest('.search-field, .search-history').length) {
            $('.search-history').hide();
        }
    });

    // Populate the text field with the clicked history item and hide the search history
    $('.hist1, .hist2, .hist3, .hist4, .hist5').click(function () {
        var clickedText = $(this).text();
        $('.search-field').val(clickedText);
        $('.search-history').hide();
    });

    function addSearchToHistory(query) {
        var index = recentSearches.indexOf(query); // check if the query already exists in the recentSearches array
        
        if (index !== -1) {
            recentSearches.splice(index, 1); //if the query exists, remove it from the array
        }
       
        recentSearches.unshift(query); // Add the new query to the beginning of the array
        recentSearches = recentSearches.slice(0, 5); // Limit to the 5 most recent searches

        //update the local storage and display the recent searches
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
        displayRecentSearches(recentSearches);
    }

    $('.search-bar').submit(function (e) {
        e.preventDefault();
        
        var searchTerm = $('.search-field').val();

        if (searchTerm.trim() !== '') {
            addSearchToHistory(searchTerm);
            window.location.href = './search-result.html';
        }
    });

});