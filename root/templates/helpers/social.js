/**
 * Handlebars Helpers: {{ghbtn}}
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

// Node.js
var path   = require('path');
var fs     = require('fs');

// node_modules
var grunt = require('grunt');
var _ = grunt.util._;


// Export helpers
module.exports.register = function (Handlebars, options) {

  'use strict';

  /**
   * {{ghbtn}}
   * => {{ghbtn size="small" user="assemble" repo="assemble"}}
   */
  exports.ghbtn = function (options) {
    options      = options || {};
    options.hash = options.hash || {};

    // Defaults
    var size  = options.hash.size  || 'small';
    var user  = options.hash.user  || 'assemble';
    var repo  = options.hash.repo  || 'assemble';
    var type  = options.hash.type  || 'watch'; // watch || fork
    var title = options.hash.title || 'Star on GitHub';

    var width = 100;
    var height = 20;

    if(size === 'large') {
      width = 130;
      height = 30;
    }

    if(type === 'fork') {
      title = 'Fork on GitHub';
    }

    var btn = '<iframe class="github-btn" src="http://ghbtns.com/github-btn.html?user=' + user + '&repo=' + repo + '&type=' + type + '&count=true" width="' + width + '" height="' + height + '" title="' + title + '"></iframe>';
    return new Handlebars.SafeString(btn);
  };


  /**
   * {{tweet}}
   * => {{tweet url="http://assemble.io" via="assemblejs" related="jonschlinkert:Assemble core team."}}
   */
  exports.tweet = function (options) {
    options      = options || {};
    options.hash = options.hash || {};

    // Defaults
    var url     = options.hash.url      || 'http://assemble.io';
    var via     = options.hash.via      || 'assemblejs';
    var related = options.hash.related  || 'mdo:Creator of Twitter Bootstrap';

    var btn = '<a href="https://twitter.com/share" class="twitter-share-button" data-url="' + url + '" data-count="horizontal" data-via="' + via + '" data-related="' + related + '">Tweet</a>';
    return new Handlebars.SafeString(btn);
  };


  /**
   * {{foolow}}
   * => {{follow user="assemblejs"}}
   */
  exports.follow = function (options) {
    options      = options || {};
    options.hash = options.hash || {};

    // Defaults
    var user  = options.hash.user  || 'assemblejs';
    var color = options.hash.color || '#0069D6';

    var btn = '<a href="https://twitter.com/' + user + '" class="twitter-follow-button" data-link-color="' + color + '" data-show-count="true">Follow @' + user + '</a>';
    return new Handlebars.SafeString(btn);
  };


  for (var helper in exports) {
    if (exports.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, exports[helper]);
    }
  }
};
