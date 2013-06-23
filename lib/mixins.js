/*
 * assemble-manifest
 * https://github.com/assemble/assemble-manifest
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

'use strict';


exports.init = function(grunt) {
  var _ = grunt.util._; // lodash
  var exports = {};

  _.mixin({

    // Fix path in sublime-project file.
    sublimePath: function(urlString) {
      return urlString.replace(/\\/g, '/').replace(/\:/, '');
    }

  });
  return exports;
};