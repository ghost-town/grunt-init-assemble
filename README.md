# grunt-init-assemble

> Quickly launch Assemble-based projects using [grunt-init][], including starter templates and data.


## Quickstart
If you have `grunt-init` and are familiar with using it:

``` bash
git clone git@github.com:assemble/assemble-init.git ~/.grunt-init/grunt-init-assemble
```

Then, in empty directory:

* Run `grunt-init assemble`
* Then `npm i`
* Then `grunt assemble` to test that it works



## Detailed instructions
### Installation
If you haven't already done so, install [Grunt][grunt] and [grunt-init][]: 

``` bash
npm i -g grunt-cli grunt-init
```

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use `git clone` to install this template into that directory as follows:

``` bash
git clone git@github.com:assemble/assemble-init.git ~/.grunt-init/assemble-init
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

To force `grunt-init` to use custom default values, move the `defaults.json` file to your `~/.grunt-init/` directory, and customize the values in that file.



### Usage
Now that `grunt init` is intalled. At the command-line, cd into an empty directory and run `grunt-init assemble` and follow the prompts. You might want to test that it works before you begin customizing the project:

 * Next, run `npm install` to install the project's dependencies.
 * Then, run `grunt` to build the project.

_Note that this template will generate files in the current directory, so be sure to change to a new directory first._

[grunt]: http://gruntjs.com
[grunt-init]: http://gruntjs.com/project-scaffolding#custom-templates


## Related info

* [Assemble's documentation](http://assemble.io)
* [assemble-less](https://github.com/assemble/assemble-less)
* [assemble-examples](https://github.com/assemble/assemble-examples)