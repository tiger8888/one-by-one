"use strict";

const oneByOne = require("../lib");

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
