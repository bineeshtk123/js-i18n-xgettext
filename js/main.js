require(["jquery", "handlebars", "domReady", "nls"], function($, Handlebars, domReady) {
    domReady(function () {
        //This function is called once the DOM is ready.
        //It will be safe to query the DOM and manipulate
        //DOM nodes in this function.

        // Compile the template
        var source   = $("#test-template").html();
        var template = Handlebars.compile(source);

        // Render the template
        var context  = {
            beer: 'Yummy!'
        }
        $('#test-container').html(template(context));

    });
});
