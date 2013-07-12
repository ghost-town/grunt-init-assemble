(function() {
  module.exports.register = function(Handlebars, options) {

    /*
     * Add tracking codes for Google Analytics.
     * You must have event tracking setup with google analytics first:
     * https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide?hl=pt-PT
     */
    Handlebars.registerHelper('track', function(obj) {
      var code = 'onclick="_gaq.push([\'_trackEvent\', \'' + obj.category + '\', \'' + obj.action + '\', \'' + obj.label + '\']);"';
      return new Handlebars.SafeString(code);
    });


  };
}).call(this);
