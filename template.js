/*
 * grunt-init-assemble
 * https://github.com/assemble/assemble
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT license.
 */

'use strict';

var path  = require('path');

// Basic template description.
exports.description = 'Create a project with Assemble and Grunt, including starter templates, helpers and data.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'For more information about creating Assemble projects, ' +
  'please see the docs at http://assemble.io/docs/';

// Template-specific notes to be displayed after question prompts.
exports.after = 'Now install project dependencies with:\n' +
  '"npm install && bower install"\n' +
  'After that, you may execute project tasks with "grunt". For ' +
  'more information about installing and configuring Assemble, please ' +
  'visit:' +
  '\n\n' +
  'http://assemble.io/docs/';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = ['*'];

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'node'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('username', 'assemble'),
    {
      name: 'username',
      message: 'May I ask for your GitHub username?',
      default: 'assemble'
    },
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('author_name'),
    init.prompt('author_url'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses'),
    init.prompt('main'),
    {
      name: 'travis',
      message: 'Will this project be tested with Travis CI?',
      default: 'Y/n',
      warning: 'If selected, you must enable Travis support for this project in https://travis-ci.org/profile'
    },
  ], function(err, props) {

    // Set a few grunt-plugin-specific properties.
    props.homepage   = 'https://github.com/' + props.username + '/' + props.name;
    props.author_url = 'https://github.com/' + props.username;
    props.repository = 'https://github.com/' + props.username + '/' + props.name + '.git';
    props.bugs       = 'https://github.com/' + props.username + '/' + props.name + '/issues';
    props.dependencies = {
      "chalk": "~0.4.0"
    };
    props.devDependencies = {
      "assemble": "~0.4.30",
      "assemble-contrib-anchors": "~0.1.1",
      "assemble-contrib-toc": "~0.1.0",
      "assemble-contrib-wordcount": "~0.3.0",
      "assemble-less": "~0.6.0",
      "grunt": "~0.4.2",
      "grunt-contrib-clean": "~0.5.0",
      "grunt-contrib-copy": "~0.4.1",
      "grunt-contrib-jshint": "~0.6.0",
      "grunt-contrib-watch": "~0.5.1",
      "grunt-readme": "~0.4.5",
      "grunt-sync-pkg": "~0.1.2",
      "handlebars-helper-ghbtns": "~0.1.0",
      "handlebars-helper-isactive": "~0.1.0",
      "handlebars-helper-prettify": "~0.2.1",
      "handlebars-helper-slugify": "~0.2.0",
      "handlebars-helper-twitter": "~0.1.2",
      "lodash": "~2.4.1",
      "pretty": "~0.1.1",
      "showup": "~0.1.2"
    };
    props.keywords = [
      "assemble boilerplate",
      "assemble generator",
      "assemble",
      "assemble-contrib-wordcount",
      "assembleboilerplate",
      "blog generator",
      "boilerplate",
      "component generator",
      "generator",
      "grunt init template",
      "grunt static site generator",
      "handlebars",
      "handlebars-helper-ghbtns",
      "handlebars-helper-isactive",
      "handlebars-helper-prettify",
      "handlebars-helper-slugify",
      "handlebars-helper-twitter",
      "site generator",
      "static site generator",
      "templates",
      "yeoman generator",
      "yeoman static site generator"
    ];
    props.travis = /y/i.test(props.travis);
    props.travis_node_version = '0.8';

    // Files to copy (and process).
    var files = init.filesToCopy(props);
    if (!props.travis) { delete files['.travis.yml']; }

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};