/*
 * grunt-init-assemble
 * https://github.com/assemble/assemble
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT license.
 */

'use strict';


// Basic template description.
exports.description = 'Create a project with Assemble and Grunt, including starter templates and data.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'For more information about creating Assemble projects, ' +
  'please see the docs at http://github.com/assemble/assemble/wiki/getting-started';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt assemble_. For ' +
  'more information about installing and configuring Assemble, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://github.com/assemble/assemble/wiki/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = ['*'];

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'assemble'}, [
    // Prompt for these values.
    init.prompt('name', 'assemble'),
    {
      name: 'description',
      message: 'Description',
      default: 'Assemble a website from templates and data.',
      warning: 'May consist of any characters.'
    },
    init.prompt('version'),
    init.prompt('author_name', 'assemble'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('bugs'),
    init.prompt('licenses'),
    init.prompt('grunt_version'),
    {
      name: 'assemble_version',
      message: 'What versions of Assemble does it require?',
      default: '>= 0.3.73',
      warning: 'Must be a valid semantic version range descriptor.'
    },
    {
      name: 'travis',
      message: 'Will this project be tested with Travis CI?',
      default: 'Y/n',
      warning: 'If selected, you must enable Travis support for this project in https://travis-ci.org/profile'
    },
  ], function(err, props) {

    // Set a few grunt-plugin-specific properties.
    props.repository = 'git://github.com/' + props.author_name + '/' + props.name + '.git';
    props.hompage    = 'https://github.com/' + props.author_name + '/' + props.name + '/';
    props.main       = 'Gruntfile.js';
    props.npm_test   = 'grunt assemble';
    props.keywords = ['gruntplugin', 'site generator', 'blog generator', 'handlebars', 'templates'];
    props.devDependencies = {
      'grunt-contrib-clean': '~0.4.0',
      'assemble': props.assemble_version
    };
    props.peerDependencies = {
      'grunt': props.grunt_version,
    };
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
    init.writePackageJSON('component.json', props);

    // All done!
    done();
  });

};
