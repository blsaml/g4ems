jQuery(document).ready(function($) {
    // Mobile screens
    $('#toggle-button').click(function() {
        if ($(window).width() <= 768) {
            $('#mobile-menu').addClass('show');
        }
    });
    $('#close-button').click(function() {
        $('#mobile-menu').removeClass('show');
    });
    // Desktop screens
    if ($(window).width() > 768) {
        $('#menu-container').hover(
            function() { // mouse enter
                $('#mobile-menu').addClass('show');
            },
            function() { // mouse leave
                $('#mobile-menu').removeClass('show');
            }
        );
    }
    $('#close-button').click(function() {
        $('#mobile-menu').removeClass('show');
        $('#toggle-button').show();
    });
});