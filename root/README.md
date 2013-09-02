# {%= name %} [![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %}) {% if (travis) { %} [![Build Status]({%= travis %}.png)]({%= travis %}){% } %}

> {%= description %}

### [Visit the docs →](http://{%= username %}.github.io/{%= name %})

Created and maintained by [Jon Schlinkert](http://twitter.com/jonschlinkert) and [Brian Woodward](http://twitter.com/doowb).


## Quick start

The following quick start options are available:

* Install with [Bower](http://bower.io): `bower install {%= name %}`.
* Clone the repo: `git clone {%= repository %}`.
* [Download the latest release]({%= homepage %}/archive/master.zip).


## Getting Started
Install the module with: `npm install {%= name %}`

```javascript
var {%= js_safe_name %} = require('{%= name %}');
{%= js_safe_name %}.foo(); // "bar"
```

## Documentation

_(Coming soon)_


## Options

_(Coming soon)_


## Examples

_(Coming soon)_


## Contributing

Please read through the [contributing guidelines](CONTRIBUTING.md). In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](http://gruntjs.com/).

Editor preferences are available in the [editor config](.editorconfig) for easy use in common text editors. Read more and download plugins at [http://editorconfig.org](http://editorconfig.org).


## Release History

 * 2013-08-28   v0.1.0   First commit


## License
Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
Licensed under the [MIT license](LICENSE-MIT).


***

Project created by [{%= author_name %}]({%= author_url %}).

_This file was generated on {%= grunt.template.today() %}._
