
# one-by-one

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/one-by-one.svg)](https://www.npmjs.com/package/one-by-one) [![Downloads](https://img.shields.io/npm/dt/one-by-one.svg)](https://www.npmjs.com/package/one-by-one)

> Run async tasks one by one.

If you want to run async functions in parallel, check out [`same-time`](https://github.com/IonicaBizau/same-time).

## :cloud: Installation

```sh
$ npm i --save one-by-one
```


## :clipboard: Example



```js
const oneByOne = require("one-by-one");

// Call these functions one by one
oneByOne([
    cb => {
        setTimeout(function () {
            cb(null, "Hello World");
        }, 1000);
    }
  , (cb, data) => {
        console.log(data);
        // => "Hello World"
        setTimeout(function () {
            cb(new Error("Some error"));
        }, 100);
    }
  , cb => {
        // This will NOT be triggered because the
        // previous sent an error
        cb(null, null);
    }
], (err, data) => {
    console.log(err, data);
    // => [Error: Some error] [ 'Hello World' ]
});

// Call these functions one by one
oneByOne([
    Math.random() > 0.5 ? next => {
        console.log("Generated a random number greater than 0.5.");
        next();
    } : null
  , cb => setTimeout(
        () => cb(null, "Hello World")
      , 1000
    )
  , (cb, prev) => setTimeout(
        () => cb(null, prev.replace("World", "Mars"))
      , 1000
    )
], (err, data, message) => {
    console.log(err, data, message);
    // null [ 'Hello World', 'Hello Mars' ] 'Hello Mars'
});
```

## :memo: Documentation


### `oneByOne(arr, cb)`
Calls functions one by one and memorizes the results.

#### Params
- **Array** `arr`: An array of functions getting the callback parameter in the first argument and response arguments from the previous function call.
- **Function** `cb`: The callback function called with an error (or `null`) and the results array.

#### Return
- **oneByOne** The `oneByOne` function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`asyncer.js`](https://github.com/IonicaBizau/asyncer.js#readme)—Run groups of (a)sync functions.
 - [`babel-it`](https://github.com/IonicaBizau/babel-it#readme)—Babelify your code before `npm publish`.
 - [`blah`](https://github.com/IonicaBizau/blah)—A command line tool to optimize the repetitive actions.
 - [`bloggify-mongoose`](https://github.com/Bloggify/bloggify-mongoose#readme) (by Bloggify)—Support for Mongoose models in Bloggify.
 - [`cdnjs-importer`](https://github.com/cdnjs/cdnjs-importer)—Easy way to import a library into CDNJS.
 - [`cobol`](https://github.com/IonicaBizau/node-cobol)—COBOL bridge for NodeJS which allows you to run COBOL code from NodeJS.
 - [`engine-tools`](https://github.com/jillix/engine-tools) (by jillix)—Engine Tools library and CLI app.
 - [`fortran`](https://github.com/IonicaBizau/node-fortran)—Fortran bridge for Node.js which allows you to run Fortran code from Node.js.
 - [`gif-cli`](https://github.com/IonicaBizau/gif-cli)—Gif animations in your terminal!
 - [`git-package-json`](https://github.com/IonicaBizau/git-package-json#readme)—Get the package.json contents from git repositories.
 - [`git-stats-importer`](https://github.com/IonicaBizau/git-stats-importer)—Imports your commits from a repository into git-stats history.
 - [`gpm`](https://github.com/IonicaBizau/gpm)—npm + git = gpm - Install NPM packages and dependencies from git repositories.
 - [`gry`](https://github.com/IonicaBizau/node-gry)—A minimalist NodeJS wrapper for the `git` commands. `gry` stands for the Git RepositorY.
 - [`image-to-ascii`](https://github.com/IonicaBizau/image-to-ascii)—A Node.JS module that converts images to ASCII art.
 - [`made-in-brazil`](https://github.com/IonicaBizau/made-in-brazil#readme)—A list of neat projects made in Brazil.
 - [`made-in-india`](https://github.com/IonicaBizau/made-in-india#readme)—A list of neat projects made in India.
 - [`made-in-romania`](https://github.com/IonicaBizau/made-in-romania#readme)—A list of cool projects made in Romania.
 - [`nodeice`](https://github.com/IonicaBizau/nodeice)—Another PDF invoice generator
 - [`np-init`](https://github.com/IonicaBizau/np-init#readme)—Easily start a npm package from scratch.
 - [`ship-release`](https://github.com/IonicaBizau/ship-release#readme)—Publish new versions on GitHub and npm with ease.
 - [`ssh-remote`](https://github.com/IonicaBizau/ssh-remote)—Automagically switch on the SSH remote url in a Git repository.
 - [`tester-init`](https://github.com/IonicaBizau/tester-init#readme)—Init tests for tester.
 - [`tilda-init`](https://github.com/IonicaBizau/tilda-init#readme)—Init cli applications.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
