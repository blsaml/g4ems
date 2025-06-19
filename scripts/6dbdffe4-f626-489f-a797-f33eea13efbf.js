jQuery(document).ready(function($) {
    // Function to handle the click event for "Load More"
    function bindLoadMore() {
        console.log('[INFO] Attempting to bind Load More button');

        $('#load-more').off('click').on('click', function(e) {
            console.log('[EVENT] Load More button clicked');
            e.preventDefault();
            var $button = $(this),
                currentPage = parseInt($button.data('page')) || 1,
                maxPages = parseInt($button.data('max')) || 1,
                category = $button.data('category') || '',
                tag = $button.data('tag') || '',
                sortOrder = $('#mt_order_cat').val() || ''; // Get the sorting value from the dropdown

            console.log('[EVENT] Load More button clicked');
            console.log('[DEBUG] Current Page:', currentPage);
            console.log('[DEBUG] Max Pages:', maxPages);
            console.log('[DEBUG] Category:', category);
            console.log('[DEBUG] Tag:', tag);
            console.log('[DEBUG] Sort Order:', sortOrder);

            if (currentPage >= maxPages) {
                console.log('[INFO] No more pages to load');
                return; // No more pages to load
            }

            currentPage++;

     $.ajax({
    url: myLoadMore.ajaxurl,
    type: 'POST',
    data: {
        action: 'load_more_games',
        page: currentPage,
        category: category,
        tag: tag,
        order: sortOrder
    },
    beforeSend: function() {
        console.log('[INFO] Sending AJAX request:', {
            action: 'load_more_games',
            page: currentPage,
            category: category,
            tag: tag,
            order: sortOrder
        });
        $button.text('Loading...');
    },
    success: function(response, status, xhr) {
        console.log('[INFO] AJAX response received');
        const totalPages = parseInt(xhr.getResponseHeader('X-Total-Pages')); // Get total pages from header
        console.log('[DEBUG] Total Pages:', totalPages);
        console.log('[DEBUG] Current Page:', currentPage);

        if (response.trim().length) {
            $button.data('page', currentPage).text('Load More Games');
            $('ul.lst-gams.cate-grid').append(response);

            // Remove button if we've loaded the last page
            if (currentPage >= totalPages) {
                console.log('[INFO] All posts loaded. Removing Load More button.');
                $button.remove();
            }
        } else {
            console.log('[WARNING] No more content to load');
            $button.remove();
        }
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error('[ERROR] AJAX error:', textStatus, errorThrown);
    }
});

        });
    }

    // Initial binding of the "Load More" button
    bindLoadMore();

    // When sorting option changes
    $('#mt_order_cat').change(function() {
        var selectedSort = $(this).val();
        console.log('[EVENT] Sorting option changed to:', selectedSort);

        // Make an AJAX call to reload the games based on the new sorting
        var category = $('#load-more').data('category') || '';
        var tag = $('#load-more').data('tag') || '';

        console.log('[DEBUG] Reloading games for sorting');
        console.log('[DEBUG] Category:', category);
        console.log('[DEBUG] Tag:', tag);

        $.ajax({
            url: myLoadMore.ajaxurl,
            type: 'POST',
            data: {
                action: 'load_more_games',
                page: 1, // Always start from page 1 on sorting change
                category: category,
                tag: tag,
                order: selectedSort // Pass the new sorting value
            },
            beforeSend: function() {
                console.log('[INFO] Sending AJAX request for sorting');
                $('#ajaxcat > main').html('<span id="loading" class="fa-spinner">Loading...</span>'); // Show loading spinner
            },
            success: function(response) {
                console.log('[INFO] Sorting AJAX response received');
                $('#ajaxcat > main').html(response); // Replace the entire game list with the new sorted content
                console.log('[SUCCESS] Games list replaced after sorting');

                // Re-bind the click event to the "Load More" button after sorting
                bindLoadMore(); // Re-initialize the "Load More" button
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('[ERROR] AJAX error during sorting:', textStatus, errorThrown);
            }
        });
    });
});
