/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Run tests
    assemble: {
      {%= name %}: {
        options: {
          flatten: true,
          assets: 'dist/assets',
          layout: 'src/templates/layouts/default.hbs',
          partials: 'src/templates/partials/*.hbs',
          data: 'src/data/*.{json,yml}'
        },
        src:  'src/templates/pages/*.hbs',
        dest: 'dist/'
      }
    },

    // Before generating any new files, 
    // remove any previously-created files.
    clean: {
      tests: ['<%= assemble.{%= name %}.dest %>/*.html'],
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean', 'assemble']);

};
