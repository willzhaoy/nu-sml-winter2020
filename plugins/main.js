// Include this script to include everything you need.

(function() {
  var head = document.getElementsByTagName('head')[0];

  function includeScript(src, text) {
    var script = document.createElement('script');
    script.src = src;
    if (text) script.text = text;
    head.appendChild(script);
    return script;
  }

  function includeStylesheet(href) {
    var css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('href', href);
    head.appendChild(css);
    return css;
  }

  function initMathJax(scriptLocation, fallbackScriptLocation) {
    if (typeof(sfig) != 'undefined') return;  // Already loaded through sfig
    var script = includeScript(scriptLocation);
    var buf = '';
    buf += 'MathJax.Hub.Config({';
    buf += '  extensions: ["tex2jax.js", "TeX/AMSmath.js", "TeX/AMSsymbols.js"],';
    buf += '  tex2jax: {inlineMath: [["$", "$"]]},';
    buf += '});';
    script.innerHTML = buf;

    // If fail, try the fallback location
    script.onerror = function() {
      if (fallbackScriptLocation)
        initMathJax(fallbackScriptLocation, null);
    }
  }

  initMathJax('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=default');

  includeScript('plugins/jquery.min.js');
  includeStylesheet('plugins/main.css');
})();


