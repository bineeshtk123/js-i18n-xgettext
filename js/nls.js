require(["jed", "handlebars", "i18n!nls/locale_data"], function (Jed, Handlebars, locale_data) {
  var i18n = new Jed({
    // Generally output by a .po file conversion
    locale_data : locale_data,
    "domain" : "messages"
  });

    Handlebars.registerHelper('_', function(key) {
        return i18n.gettext(key);
    });

    return i18n;
});
