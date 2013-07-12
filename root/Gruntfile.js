/*
 * {%= name %}
 * https://github.com/{%= author_name %}/{%= name %}
 * Copyright (c) {%= grunt.template.today('yyyy') %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';

module.exports = function(grunt) {

  grunt.util._.mixin(require('./helpers/mixins.js').init(grunt));

  // Project configuration.
  grunt.initConfig({

    jshint: {
      all: ['Gruntfile.js', 'helpers/*.js', 'test/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: 'dest/assets',
          helpers: ['helpers/helper-*.js'],
          layout: 'src/templates/layouts/default.hbs',
          data: [
            'src/data/*.{json,yml}'
          ],
          partials: [
            'src/templates/partials/*.hbs'
          ]
        },
        files: {
          'dest/': ['test/example.hbs', 'src/templates/pages/*.hbs']
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
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default tasks to be run.
  grunt.registerTask('default', ['clean', 'jshint', 'assemble']);
};

