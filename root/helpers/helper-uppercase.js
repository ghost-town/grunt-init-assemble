(function() {
  module.exports.register = function(Handlebars, options) {

    /*
     * Override default "uppercase" helper with one that handles
     * either 
     */
    Handlebars.registerHelper('uppercase', function(options) {
      if(options && typeof options === "string") {
        return options.toUpperCase();
      } else if(options && typeof options === "object") {
        return options.fn(this).toUpperCase();
      }
    });

  };
}).call(this);
