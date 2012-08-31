require(["jed", "handlebars"], function (Jed, Handlebars) {
  var i18n = new Jed({
    // Generally output by a .po file conversion
    locale_data : {
      "messages" : {
        "" : {
          "domain" : "messages",
          "lang"   : "en",
          "plural_forms" : "nplurals=2; plural=(n != 1);"
        },
        "some key" : [ null, "some value"]
      }
    },
    "domain" : "messages"
  });

    Handlebars.registerHelper('_', function(key) {
        return i18n.gettext(key);
    });


    return i18n;
});
