/*
 * {%= name %}
 * https://github.com/{%= author_name %}/{%= name %}
 * Copyright (c) {%= grunt.template.today('yyyy') %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    vendor: grunt.file.readJSON('.bowerrc').directory,

    // Lint JavaScript
    jshint: {
      all: ['Gruntfile.js', 'helpers/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Build HTML from templates and data
    assemble: {
      options: {
        pkg: '<%= pkg %>',
        flatten: true,
        assets: '_gh_pages/assets',
        partials: ['templates/includes/*.hbs'],
        helpers: ['templates/helpers/*.js'],
        layout: 'templates/layouts/default.hbs',
        data: ['data/*.{json,yml}']
      },
      example: {
        files: {'_gh_pages/': ['templates/*.hbs']}
      }
    },

    // Compile LESS to CSS
    less: {
      options: {
        paths: '<%= vendor %>/bootstrap/less',
        imports: {
          reference: ['mixins.less', 'variables.less']
        }
      },
      // Compile Bootstrap's LESS
      bootstrap: {
        src: [
          '<%= vendor %>/bootstrap/less/bootstrap.less',
          '<%= vendor %>/bootstrap/docs/assets/css/docs.css'
        ],
        dest: '<%= assemble.options.assets %>/bootstrap.css'
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: {
      example: ['_gh_pages/*.html']
    },

    watch: {
      all: {
        files: ['<%= jshint.all %>'],
        tasks: ['jshint', 'nodeunit']
      },
      design: {
        files: ['Gruntfile.js', '<%= less.options.paths %>/*.less', 'templates/**/*.hbs'],
        tasks: ['design']
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-readme');
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('assemble');

  // Build HTML, compile LESS and watch for changes. You must first run "bower install"
  // or install Bootstrap to the "vendor" directory before running this command.
  grunt.registerTask('design', ['clean', 'assemble', 'less:bootstrap', 'watch:design']);

  // Default tasks to be run.
  grunt.registerTask('default', ['clean', 'jshint', 'assemble', 'readme']);
};
