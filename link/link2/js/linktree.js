document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      e.preventDefault();
    }
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
    }
    if (e.key === 'F12') {
      e.preventDefault();
    }
  });

  (function () {
    const devToolsOpen = function () {};
    devToolsOpen.toString = function () {
      return 'devToolsOpen';
    };
    console.log('%c', devToolsOpen);
  })();

//   setInterval(function () {
//     if (('devToolsOpen').length !== 11) {
//       alert('Developer Tools terdeteksi!');
//       window.location.href = 'about:blank';
//     }
//   }, 1000);