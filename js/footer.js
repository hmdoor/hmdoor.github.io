/* ===================================================================
 * Shared footer
 * Replaces <div id="site-footer"></div> with the contents of footer.html
 * ------------------------------------------------------------------- */

(function() {

    var slot = document.getElementById('site-footer');
    if (!slot) return;

    fetch('footer.html')
        .then(function(response) {
            return response.ok ? response.text() : '';
        })
        .then(function(html) {
            if (html) slot.outerHTML = html;
        });

})();
