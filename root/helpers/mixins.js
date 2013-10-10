/*
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors.
 * https://github.com/assemble/assemble
 * Licensed under the MIT license.
 */

'use strict';

exports.init = function(grunt) {
  var exports = {};

  grunt.util._.mixin({

    /**
     * Slugify a string. Makes lowercase, and converts dots and spaces to dashes.
     * This is NOT a 'real' slugifier, it's just an example.
     * @param  {String} urlString [the string you want to slugify]
     * @return {String}           [a slugified string]
     */
    slugify: function(urlString) {
      return urlString.replace(/ /g, '-').replace(/\./, '-').toLowerCase();
    }

  });
  return exports;
};