# Reactive Property for Meteor.js

This package provides the minimal version of a reactive property class with classic getters and setters.
It does not use the EMCAScript 5 Object features since they don't work in all browsers yet.

## Install with Meteorite
Install the module with: `mrt add codeadventure-reactive-property`

## Documentation
http://CodeAdventure.github.io/meteor-reactive-property

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## Run the tests

### Client side
Simply open the html `tests/index.html` in your browser to run all tests.

### For continuous integration
You have to install all node dependencies with `npm install`
Then run `grunt test` for a single test run or `grunt` to run the tests
continuously for all file changes.

## Release History
0.1.0 - initial release

## License
Copyright (c) 2013 Code Adventure
Licensed under the MIT license.
