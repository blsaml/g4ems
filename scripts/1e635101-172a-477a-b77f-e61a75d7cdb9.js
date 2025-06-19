(function () {
  //var adSenseLoaded = false;
  var playwireLoaded = false;
  var izootoLoaded = false;
  //var adsterraLoaded = false;

  function loadScript(src, callback, isHead) {
    var script = document.createElement('script');
    script.src = src;
    script.async = true;
    if (callback) script.onload = callback;
    if (isHead) {
      document.head.appendChild(script);
    } else {
      document.body.appendChild(script);
    }
  }

  function loadAdSense() {
    if (adSenseLoaded) return;
    adSenseLoaded = true;

    loadScript(
      //'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1221017596528038',
      function () {
        if (typeof adsbygoogle !== 'undefined') {
          (adsbygoogle = window.adsbygoogle || []).push({});
        }
      },
      true
    );
  }

  function loadPlaywire() {
    if (playwireLoaded) return;
    playwireLoaded = true;
    loadScript('//cdn.intergient.com/1024849/73983/ramp.js', false);
  }

  function loadIzooto() {
    if (izootoLoaded) return;
    izootoLoaded = true;
    loadScript('https://cdn.izooto.com/scripts/fde515974298bf1c2840f1c6888ede91c9a4d283.js', true);
  }

  function loadAdsterra() {
    if (adsterraLoaded) return;
    adsterraLoaded = true;
    //loadScript('//www.highperformanceformat.com/4dde8827bd8959df7a00e2a4047dde79/invoke.js', false);
  }

  function triggerLoad() {
    //loadAdSense();
    loadPlaywire();
    loadIzooto();
   // loadAdsterra(); // ✅ Load Adsterra on user interaction
  }

  function listenForInteraction() {
    var events = ['scroll', 'mousemove', 'keydown', 'touchstart', 'wheel'];
    events.forEach(function (event) {
      document.addEventListener(
        event,
        function handler() {
          triggerLoad();
          events.forEach(function (e) {
            document.removeEventListener(e, handler);
          });
        },
        { once: true }
      );
    });

    // Fallback: Load all scripts after 2.5 seconds
    setTimeout(triggerLoad, 2000);
  }

  window.addEventListener('load', listenForInteraction);
})();

