/*
 * Assemble
 * https://github.com/assemble/assemble
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

'use strict';

exports.init = function(grunt) {
  var _ = grunt.util._; // lodash
  var exports = {};


  /*
   * The Mixins
   */
  _.mixin({

    // Slugify a string. Makes lowercase, and converts dots and spaces to dashes.
    slugifier: function(urlString) {
      return urlString.replace(/ /g, '-').replace(/\./, '').toLowerCase();
    }

  });



  return exports;
};