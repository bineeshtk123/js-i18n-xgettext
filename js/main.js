define(["domReady", "jquery", "test"], function(domReady, $, test) {
    domReady(function () {
        //This function is called once the DOM is ready.
        //It will be safe to query the DOM and manipulate
        //DOM nodes in this function.

        // Put the rendered template into the DOM
        $('#test-container').html(test);

    });
});
