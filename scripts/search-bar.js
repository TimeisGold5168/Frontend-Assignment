$(function () {
    const MAX_RECENT_SEARCHES = 5;
    const $searchField = $('.search-field');
    const $searchHistory = $('.search-history');
    const $historyItems = $('.hist1, .hist2, .hist3, .hist4, .hist5');

    let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];

    function displayRecentSearches(searches) {
        $historyItems.each((index, item) => {
            $(item).text(searches[index] || '');
        });
    }

    $searchField.focus(() => {
        $searchHistory.show();
    });

    $(document).on('click', (event) => {
        if (!$(event.target).closest('.search-field, .search-history').length) {
            $searchHistory.hide();
        }
    });

    $historyItems.click(function () {
        $searchField.val($(this).text());
        $searchHistory.hide();
    });

    function addSearchToHistory(query) {
        const index = recentSearches.indexOf(query);
        if (index !== -1) {
            recentSearches.splice(index, 1);
        }
        recentSearches.unshift(query);
        recentSearches = recentSearches.slice(0, MAX_RECENT_SEARCHES);
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
        displayRecentSearches(recentSearches);
    }

    $('.search-bar').submit(function (e) {
        e.preventDefault();
        const searchTerm = $searchField.val().trim();
        if (searchTerm !== '') {
            addSearchToHistory(searchTerm);
            window.location.href = './search-result.html';
        }
    });

    // Initial display of recent searches
    displayRecentSearches(recentSearches);
});
