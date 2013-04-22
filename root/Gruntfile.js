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
    pkg: grunt.file.readJSON('package.json'),

    assemble: {
      {%= name %}: {
        options: {
          flatten: true,
          assets: '<%= assemble.{%= name %}.dest %>/assets',
          layout: 'src/templates/layouts/default.hbs',
          partials: 'src/templates/partials/*.hbs',
          data: 'src/data/*.{json,yml}'
        },
        src:  'src/templates/pages/*.hbs',
        dest: 'dist/'
      }
    },

    prettify: {
      options: {prettifyrc: '.prettifyrc'},
      {%= name %}: {
        expand: true, 
        cwd: '<%= assemble.{%= name %}.dest %>/', 
        ext: '.html', 
        src: ['*.html'], 
        dest: '<%= assemble.{%= name %}.dest %>/'
      }
    },

    // Before generating any new files, 
    // remove any previously-created files.
    clean: {
      {%= name %}: ['<%= assemble.{%= name %}.dest %>/*.html'],
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-prettify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task to be run.
  grunt.registerTask('default', ['clean', 'assemble', 'prettify']);

};
