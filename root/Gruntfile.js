/*
 * {%= name %}
 * https://github.com/{%= author_name %}/{%= name %}
 * Copyright (c) {%= grunt.template.today('yyyy') %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';

module.exports = function(grunt) {
  grunt.util._.mixin(require('./src/helpers/mixins.js').init(grunt));

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    vendor: grunt.file.readJSON('.bowerrc').directory,

    // Lint JavaScript
    jshint: {
      all: ['Gruntfile.js', 'src/helpers/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Build HTML from templates and data
    assemble: {
      options: {
        // Change stylesheet to "assemble" or "bootstrap"
        stylesheet: 'assemble',
        flatten: true,
        assets: 'docs/assets',
        partials: ['src/includes/*.hbs'],
        helpers: ['src/helpers/helper-*.js'],
        layout: 'src/layouts/default.hbs',
        data: ['src/data/*.{json,yml}', 'package.json']
      },
      pages: {
        src: 'src/*.hbs',
        dest: 'docs/'
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
      },
      // Example for compiling a single component
      alerts: {
        src: '<%= vendor %>/bootstrap/less/alerts.less',
        dest: '<%= assemble.options.assets %>/alerts.css'
      },
      // Example for compiling all components
      components: {
        options: {concat: false},
        src: [
          '<%= vendor %>/bootstrap/less/*.less',
          '!<%= vendor %>/bootstrap/less/{variables,mixins,bootstrap}.less'
        ],
        dest: '<%= assemble.options.assets %>/components/'
      }
    },

    // Prettify test HTML pages from Assemble task.
    prettify: {
      options: {
        prettifyrc: '.prettifyrc'
      },
      all: {
        expand: true,
        cwd: '<%= assemble.pages.src %>/',
        src: ['*.html'],
        dest: '<%= assemble.pages.src %>/',
        ext: '.html'
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: {
      example: ['docs/*.html']
    },

    watch: {
      all: {
        files: ['<%= jshint.all %>'],
        tasks: ['jshint', 'nodeunit']
      },
      design: {
        files: ['Gruntfile.js', '<%= less.options.paths %>/*.less', 'src/**/*.hbs'],
        tasks: ['design']
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-prettify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks to be run.
  grunt.registerTask('default', [
    'clean',
    'jshint',
    'assemble',
    'prettify'
  ]);

  // Build HTML, compile LESS and watch for changes.
  // You must first run "bower install" or install
  // Bootstrap to the "vendor" directory before running
  // this command.
  grunt.registerTask('design', [
    'clean',
    'assemble',
    'less:bootstrap',
    'watch:design'
  ]);
};
