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

    // Metadata for templates
    pkg: grunt.file.readJSON('package.json'),
    bootstrap: grunt.file.readYAML('test/less/bootstrap.yml'),

    less: {
      options: {
        process: true,
        library: 'test/less/bootstrap',
        paths:   '<%= bootstrap.less %>',    
        globals: '<%= bootstrap.globals %>'
      },

      // Bootstrap libs, defined via ./test/bootstrap.yml
      bootstrap: {
        src:  '<%= bootstrap.bundle.all %>',
        dest: 'test/css/bootstrap.css'
      }
    },

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

    manifest: {
      options: {
        format: 'yml'
      },
      main: {
        files: {
          'src/bootstrap.yml': [
            'src/bootstrap/**/*.less', 
            'src/bootstrap/docs/assets/**/*.js'
          ]
        }
      }
    },

    // Before generating any new files, 
    // remove any previously-created files.
    clean: {
      example: ['dist/**/*.html'],
    }
  });


  // Set the base path for Bootstrap LESS library.
  grunt.config.set('bootstrap.base', '<%= less.options.library %>');

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('assemble-manifest');
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('assemble');

  // Default tasks to be run.
  grunt.registerTask('default', [
    'clean',
    'assemble',
    'less'
  ]);

};

