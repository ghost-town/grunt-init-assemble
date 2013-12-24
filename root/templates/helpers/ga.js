/**
 * Google Analytics Handlebars Helper: {{ga}}
 * Inserts the google analytics script using the info
 * supplied in _config.yml.
 *
 * In config.yml, use this format:
 *
 *  ga:
 *    id: UA-XXXXXXXXXX-XX
 *    domain: assemble.github.io
 *
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

var _ = require('lodash');

// Export helpers
module.exports.register = function (Handlebars, options, params) {
  'use strict';

  var opts = options || {};

  // Try to load 'ga' and/or 'site' objects from the options
  opts.ga = opts.ga || {};
  opts.site = opts.site || {};


  // The helper
  Handlebars.registerHelper('ga', function (options) {
    options = options || {};
    options.hash = options.hash || {};

    var info = ['id', 'domain'];
    /**
     * Look for Google Analytics id and domain in:
     *   1. First, the options hash, e.g. {{ga id="UA-XXXXXXXXXX"}}
     *   2. If not found, look for "{site: ga: {}}" object in the Grunt config (usually _config.yml)
     *   3. Last, look for a straight "ga: {}" object in the Grunt config (e.g. on the assemble options)
     */
    var ga = {};
    info.forEach(function (prop) {
      ga[prop] = options.hash[prop] || opts.site.ga[prop] || opts.ga[prop] || '';
    });

    var script = [
      '<script>',
      '  (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){',
      '  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),',
      '  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)',
      '  })(window,document,"script","//www.google-analytics.com/analytics.js","ga");',
      '',
      '  ga("create", "' + ga.id + '", "' + ga.domain + '");',
      '  ga("require", "linkid", "linkid.js");',
      '  ga("send", "pageview");',
      '',
      '</script>'
    ].join('\n');

    return new Handlebars.SafeString(script);
  });
};