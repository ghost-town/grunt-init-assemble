/**
 * Handlebars Helpers: {{br}}
 *
 * This just an example helper to get you started on
 * adding custom helpers to your own projects.
 *
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */


// Export helpers
module.exports.register = function (Handlebars) {

  'use strict';

  Handlebars.registerHelper('br', function(count) {
    count = count - 1;
    var content = [];
    for (var i = 0; i <= count; i++) {
      content.push('<br>');
    }
    return new Handlebars.SafeString(content.join(''));
  });
};
