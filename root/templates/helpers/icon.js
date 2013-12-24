/**
 * Handlebars Helpers: {{icon}}
 *
 * This just an example helper to get you started on
 * adding custom helpers to your own projects.
 *
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */


// Export helpers
module.exports.register = function (Handlebars, options, params) {
  'use strict';

  Handlebars.registerHelper('icon', function(name) {
    return new Handlebars.SafeString("<span class='glyphicon glyphicon-" + name + "'></span>");
  });
};