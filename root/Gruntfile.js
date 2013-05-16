/*
 * Assemble, {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    assemble: {
      options: {
        assets: 'dist/assets',
        data: 'src/data/*.{json,yml}'
      },
      pages: {
        options: {
          flatten: true,
          layout: 'src/templates/layouts/default.hbs',
          partials: 'src/templates/partials/*.hbs',
        },
        files: {
          'dist/': ['src/templates/pages/*.hbs']
        }
      },
      components: {
        options: {
          assets: 'dist/components/assets'
        },
        files: {
          'dist/components/': ['src/templates/partials/*.hbs']
        }
      }
    },

    // Before generating any new files, 
    // remove any previously-created files.
    clean: {
      example: ['dist/**/*.html'],
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task to be run.
  grunt.registerTask('default', ['clean', 'assemble:pages']);

};
