document.addEventListener("DOMContentLoaded", function () {
        const thumbnailContainer = document.getElementById("thumbnailContainer");
        const gameBox = document.querySelector(".game-box");
        const playButton = document.getElementById("playButton");
        const iframe = document.getElementById("playframe");
        const iframeNotAllowed = document.getElementById("iframe-not-allowed");
        const isMobile = window.innerWidth <= 768;

        // Hide iframe and iframe-not-allowed initially
        if (iframe) iframe.style.display = "none";
        if (iframeNotAllowed) iframeNotAllowed.style.display = "none";

        const gameURL = iframe ? iframe.getAttribute("data-game-src") : "https://www.easyfun.gg/embed/roblox.html?start=1&amp;inv=800004";

        function enterFullscreen(element) {
            if (element.requestFullscreen) element.requestFullscreen();
            else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
            else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
            else if (element.msRequestFullscreen) element.msRequestFullscreen();
        }

        // Handle restricted URLs
        if ("" === "1") {
            if (thumbnailContainer) {
                thumbnailContainer.style.cursor = "pointer";
                thumbnailContainer.addEventListener("click", function () {
                    window.open(gameURL, "_blank", "width=800,height=600");
                });
            }
            return;
        }

        function loadGame() {
            if (thumbnailContainer) thumbnailContainer.style.display = "none";
            if (iframe) {
                const dynamicSrc = iframe.getAttribute("data-game-src") || gameURL;
                iframe.setAttribute("src", dynamicSrc);
                iframe.style.display = "block";
                if (isMobile) enterFullscreen(iframe);
            }
        }

        if (gameBox) {
            gameBox.addEventListener("click", function (e) {
                if (!e.target.classList.contains('play-now-button')) {
                    loadGame();
                }
            });
        }

        if (playButton) {
            playButton.addEventListener("click", function (e) {
                e.stopPropagation();
                loadGame();
            });
        }
    });