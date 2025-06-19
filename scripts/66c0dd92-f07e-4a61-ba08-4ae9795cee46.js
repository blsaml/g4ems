document.addEventListener("DOMContentLoaded", function () {
  var refreshGameBtn = document.getElementById("refreshGameBtn");
  var gameFrame = document.getElementById("playframe");
  
  refreshGameBtn.onclick = function () {
    var gameSrc = gameFrame.src;
    gameFrame.src = "";
    setTimeout(function () {
      gameFrame.src = gameSrc;
    }, 100);
  };
});
