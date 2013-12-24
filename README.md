# grunt-init-assemble [![NPM version](https://badge.fury.io/js/grunt-init-assemble.png)](http://badge.fury.io/js/grunt-init-assemble)

> Quickly launch Assemble-based projects using [grunt-init][], including starter templates and data.

## Getting started

### Installation
If you haven't already done so, install [Grunt][grunt] and [grunt-init][]:

``` bash
npm i -g grunt-cli grunt-init
```

Once [grunt-init][] is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use `git clone` to install this template into that directory as follows:

``` bash
git clone https://github.com/assemble/grunt-init-assemble.git ~/.grunt-init/assemble
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

To force `grunt-init` to use custom default values, move the `defaults.json` file to your `~/.grunt-init/` directory, and customize the values in that file.

**Note**: you can make the template available as any name you choose by simply changing the name of the folder that the template is installed into. So instead of `~/.grunt-init/assemble`, you may change the name to `~/.grunt-init/foo` so that the template can be used with the following command: `grunt-init foo`.

### Usage
Now that `grunt init` is intalled. At the command-line, cd into an empty directory and run `grunt-init assemble` and follow the prompts. You might want to test that it works before you begin customizing the project:

* Next, run `npm install && bower install` to install the project's dependencies.
* Then, run `grunt` to build the project and test that it works.


_Note that this template will generate files in the current directory, so be sure to change to a new directory first._


## Related projects
* [handlebars-helpers](https://github.com/assemble/handlebars-helpers)
* [Assemble's documentation](http://assemble.io)
* [assemble-less](https://github.com/assemble/assemble-less)

### Assemble generators
+ [generator-assemble](https://github.com/assemble/generator-assemble): Yeoman generator for Assemble, the static site generator built on Grunt.js. Kickstart new Assemble projects in just a few seconds, including templates, data, layouts, and a theme.
+ [grunt-init-assemble](https://github.com/assemble/grunt-init-assemble): Grunt init template for Assemble, the static site generator built on Grunt.js. Kickstart new Assemble projects in just a few seconds, including templates, data, layouts, and a theme.
+ [grunt-init-assemble-plugin](https://github.com/assemble/grunt-init-assemble-plugin): Generate a plugin for Assemble.
+ [grunt-init-basic](https://github.com/assemble/grunt-init-basic): grunt-init template for a very basic project. includes nodeunit tests, jshint, watch, clean, and assemble for converting readme to a simple gh-pages index page.
+ [grunt-init-ghpages](https://github.com/assemble/grunt-init-ghpages): Quickly build gh-pages documentation from a project README using Grunt.js and Assemble, a Node.js alternative to Jekyll.
+ [grunt-init-helper](https://github.com/assemble/grunt-init-helper): Grunt init template for creating Assemble helpers.

### Assemble plugins
Some plugins from the [Assemble](http://assemble.io) core team that you might be interested in using in your projects:

+ [assemble-contrib-anchors](https://github.com/assemble/assemble-contrib-anchors): Assemble plugin for creating anchor tags from generated html.
+ [assemble-contrib-contextual](https://github.com/assemble/assemble-contrib-contextual): Generates a JSON file containing the context of each page. Basic plugin to help see what's happening in the build.
+ [assemble-contrib-decompress](https://github.com/assemble/assemble-contrib-decompress): Assemble plugin for extracting zip, tar and tar.gz archives.
+ [assemble-contrib-download](https://github.com/assemble/assemble-contrib-download): Assemble plugin for downloading files from GitHub.
+ [assemble-contrib-lunr](https://github.com/assemble/assemble-contrib-lunr): Assemble plugin for creating a search engine within your static site using lunr.js.
+ [assemble-contrib-markdown](https://github.com/assemble/assemble-contrib-markdown): Convert markdown files to HTML using marked.js. This plugin is an alternative to Assemble's markdown Handlebars helpers. Both are useful in different scenarios.
+ [assemble-contrib-permalinks](https://github.com/assemble/assemble-contrib-permalinks): Permalinks plugin for Assemble, the static site generator for Grunt.js and Yeoman. This plugin enables powerful and configurable URI replacement patterns, presets, uses Moment.js for parsing dates, and much more.
+ [assemble-contrib-sitemap](https://github.com/assemble/assemble-contrib-sitemap): Sitemap generator plugin for Assemble
+ [assemble-contrib-toc](https://github.com/assemble/assemble-contrib-toc): Create a table of contents in the generated HTML, using Cheerio.js
+ [assemble-contrib-wordcount](https://github.com/assemble/assemble-contrib-wordcount): Assemble plugin for displaying a word-count on blog posts or pages.
Visit [assemble.io/plugins](http:/assemble.io/plugins/) for more information about [Assemble](http:/assemble.io/) plugins.

### Assemble boilerplates
+ [boilerplate-bootstrap](https://github.com/assemble/boilerplate-bootstrap): Build Bootstrap with Assemble instead of Jekyll.
+ [boilerplate-gist-blog](https://github.com/assemble/boilerplate-gist-blog): Use Assemble to create a blog from GitHub Gists.
+ [boilerplate-h5bp](https://github.com/assemble/boilerplate-h5bp): Assemble + HTML5 Boilerplate.
+ [boilerplate-markdown](https://github.com/assemble/boilerplate-markdown): Use Assemble to generate HTML pages from markdown content. Useful for wikis, gh-pages, documentation and blogs or sites with markdown posts.
+ [boilerplate-site](https://github.com/assemble/boilerplate-site): Demonstrates how to use Assemble to build a site. Includes layouts, pages, partials, and markdown content.
+ [boilerplate-sitemap](https://github.com/assemble/boilerplate-sitemap): Generate a sitemap with Assemble.
+ [boilerplate-swig](https://github.com/assemble/boilerplate-swig): Example of using swig templates with Assemble.


## Authors

**[Jon Schlinkert](http://github.com/jonschlinkert)**

+ [http://twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)
+ [http://github.com/jonschlinkert](http://github.com/jonschlinkert)


**[Brian Woodward](http://github.com/doowb)**

+ [http://twitter.com/doowb](http://twitter.com/doowb)
+ [http://github.com/doowb](http://github.com/doowb)


## Copyright and license
Copyright 2013 Jon Schlinkert

[MIT License](LICENSE-MIT)


[grunt]: http://gruntjs.com
[grunt-init]: http://gruntjs.com/project-scaffolding#installing-templates
