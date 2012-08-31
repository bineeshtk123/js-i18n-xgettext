// hbtemplate.js plugin for requirejs / text.js
// it loads and compiles Handlebars templates
// http://stackoverflow.com/a/11061975/231332
define(['handlebars', 'nls'],
function (Handlebars) {

    var loadResource = function (resourceName, parentRequire, callback, config) {
        parentRequire([("text!" + resourceName)],
            function (templateContent) {
                var template = Handlebars.compile(templateContent);
                callback(template);
            }
        );
    };

    return {
        load: loadResource
    };

});
