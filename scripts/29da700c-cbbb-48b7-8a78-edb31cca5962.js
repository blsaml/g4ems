document.addEventListener('DOMContentLoaded', function() {
            // Query the ratings span using a class or id specific to the ratings element.
            // This is a generic selector; you may need to adjust it to fit your actual HTML structure.
            var ratingsSpans = document.querySelectorAll('span.ratings');

            ratingsSpans.forEach(function(span) {
                // Add the itemprop attribute
                span.setAttribute('itemprop', 'ratingValue');
            });
        });