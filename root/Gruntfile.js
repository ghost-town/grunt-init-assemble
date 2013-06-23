/*
 * {%= name %}
 * https://github.com/assemble/{%= name %}
 * Copyright (c) {%= grunt.template.today('yyyy') %} 
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: 'dest/assets',
          layout: 'src/templates/layouts/default.hbs',
          data: 'src/data/*.{json,yml}',
          partials: 'src/templates/partials/*.hbs'
        },
        files: {
          'dest/': ['src/templates/pages/*.hbs']
        }
      }
    },

    // Before generating any new files, 
    // remove any previously-created files.
    clean: {
      example: ['dest/**/*.html']
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default tasks to be run.
  grunt.registerTask('default', ['clean', 'assemble']);
};

