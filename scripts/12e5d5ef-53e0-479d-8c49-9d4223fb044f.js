jQuery(document).ready(function ($) {
    const searchInput = $("#custom-search-input");
    const searchResults = $("#custom-search-results");
    const searchIcon = $("#custom-search-icon");

    function displayResults(data) {
        let output = "";

        data.forEach(item => {
            output += `<div class="search-item">
                          <a href="${item.link}">
                              <img src="${item.thumbnail}" alt="${item.title}" />
                              <span>${item.title}</span>
                          </a>
                       </div>`;
        });

        output += `<div class="search-all">
                      <a href="/?s=${searchInput.val()}">Search All</a>
                   </div>`;

        searchResults.html(output).show().appendTo(searchInput.parent());
    }

    function toggleSearch() {
        $("#custom-search-container").toggleClass("active");
        if ($("#custom-search-container").hasClass("active")) {
            searchInput.focus();
        }
    }

    searchIcon.on("click", function () {
        toggleSearch();
    });

    searchInput.on("input", function () {
        if ($(this).val().length >= 3) {
            $.ajax({
                url: customSearchData.ajaxurl,
                method: "POST",
                dataType: "json",
                data: {
                    action: "custom_search",
                    search: $(this).val(),
                    nonce: customSearchData.nonce,
                },
                success: function (data) {
                    displayResults(data);
                },
            });
        } else {
            searchResults.hide();
        }
    });

    $(document).on("click", function (e) {
        if (!$(e.target).closest("#custom-search-container").length && !$(e.target).is("#custom-search-icon")) {
            searchResults.hide();
            $("#custom-search-container").removeClass("active");
        }
    });

    // hide search box on load for mobile and tablet devices
    if ($(window).width() < 992) {
        $("#custom-search-container").removeClass("active");
    }
});
