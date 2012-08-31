define(["hbtemplate!tpl/test.html"], function(template) {
    // Return a rendered template

    var context  = {
        beer: 'Yummy!'
    }

    return template(context);

});
