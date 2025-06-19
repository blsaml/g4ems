document.addEventListener("DOMContentLoaded", function () {
    var modal = document.querySelector(".game-report-modal");
    var btn = document.getElementById("reportBtn");
    var span = document.querySelector(".close");

    // Open the modal when the report button is clicked
    btn.onclick = function () {
        modal.style.display = "block";
    };

    // Close the modal on clicking the 'x' (close) button
    span.onclick = function () {
        modal.style.display = "none";
    };

    // Close the modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
