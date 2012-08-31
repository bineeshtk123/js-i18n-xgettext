$(function () {

    var locale_data = {
        "messages" : {
            "" : {
                "domain" : "messages",
                "lang"   : "nl",
                "plural_forms" : "nplurals=2; plural=(n != 1);"
            },
            "Beer is" : [ null, "Bier is"]
        }
    };


    var i18n = new Jed({
      // Generally output by a .po file conversion
      locale_data : locale_data,
      "domain" : "messages"
    });

    Handlebars.registerHelper('_', function(key) {
      return i18n.gettext(key);
    });

    // Compile the template
    var source   = $("#test-template").html();
    var template = Handlebars.compile(source);

    // Render the template
    var context  = {
        beer: 'Yummy!'
    }
    $('#test-container').html(template(context));
});
