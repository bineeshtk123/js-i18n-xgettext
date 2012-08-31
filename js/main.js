require(["jquery", "handlebars", "translations", "domReady"], function($, Handlebars, i18n, domReady) {
    // var locale_data = {
    //     "messages" : {
    //         "" : {
    //             "domain" : "messages",
    //             "lang"   : "nl",
    //             "plural_forms" : "nplurals=2; plural=(n != 1);"
    //         },
    //         "Beer is" : [ null, "Bier is"]
    //     }
    // };
    // 
    // 
    // var i18n = new Jed({
    //   // Generally output by a .po file conversion
    //   locale_data : locale_data,
    //   "domain" : "messages"
    // });

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
