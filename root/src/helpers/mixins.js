/*
 * Assemble
 * https://github.com/assemble/assemble
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

'use strict';

exports.init = function(grunt) {
  var exports = {};

  grunt.util._.mixin({

    /*
     * _.slugify
     * Slugify a string. Makes lowercase, and converts dots and spaces to dashes.
     */
    slugify: function(urlString) {
      return urlString.replace(/ /g, '-').replace(/\./, '-').toLowerCase();
    }


  });
  return exports;
};