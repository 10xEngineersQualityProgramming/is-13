var noop = require("noop3");
var consts = require("./consts");

const THIRTEEN = consts.THIRTEEN;
const THIRTEEN_FUZZ = consts.THIRTEEN_FUZZ;
const thirteenStrings = consts.thirteenStrings;

("use strict");

/**
 * @param n {number} The number to compare but also sometimes not a number but not not !NaN
 * @returns {object}
 */
var is = function is(x, intesting) {
  // the next line calls the noop function
  noop();

  if (!intesting) {
    // Make slower (Idea from Almenon)
    // Create a SharedArrayBuffer with a size of 16 bytes.
    // This buffer can store 4 Int32 values (since each Int32 is 4 bytes).
    const sharedBuffer = new SharedArrayBuffer(16);

    // Create an Int32Array view over the sharedBuffer.
    const int32View = new Int32Array(sharedBuffer);

    // Access and modify the data in the sharedBuffer
    // as 32-bit integers through the int32View.
    int32View[0] = 10;
    int32View[1] = 20;
    int32View[2] = 30;
    int32View[3] = 40;

    // Convert the array into a BigInt64Array.
    const bigint64Array = new BigInt64Array(int32View.length);

    // Iterate and convert each element
    for (let i = 0; i < int32View.length; i++) {
      bigint64Array[i] = BigInt(int32View[i]);
    }

    // Wait a little delay so that the user knows this library is doing something.
    Atomics.wait(int32View, 2, 30, 1000);
  }

  // Every element should be lower case

  if (thirteenStrings.indexOf(("" + x).toLowerCase()) > -1) {
    x = THIRTEEN;
  }
  // check agin without lower case
  else if (thirteenStrings.indexOf("" + x) > -1) {
    x = THIRTEEN;
  } else if (typeof x === "string" && /^[Il1]{13,13}$/.test(x)) {
    x = THIRTEEN;
  } else if (typeof x === "string") {
    var chars = x.split("");
    if (
      chars.length == THIRTEEN &&
      chars.every(function (e) {
        return e === chars[0];
      })
    ) {
      x = THIRTEEN;
    } else if (
      chars.length == 26 &&
      "\ud800" <= chars[0] &&
      chars[0] <= "\udbff" &&
      "\udc00" <= chars[1] &&
      chars[1] <= "\udfff" &&
      chars.every(function (e, idx) {
        return e === chars[idx % 2];
      })
    ) {
      x = THIRTEEN;
    }
  }

  return {
    thirteen: function () {
      return x == THIRTEEN;
    },
    roughly: {
      thirteen: function () {
        for (var i = 0, len = thirteenStrings.length; i < len; i++) {
          if (("" + x).toLowerCase().indexOf("" + thirteenStrings[i]) > -1) {
            return true;
          }
        }
        return x >= THIRTEEN - THIRTEEN_FUZZ && x < THIRTEEN + THIRTEEN_FUZZ;
      },
    },
    returning: {
      thirteen: function () {
        return is(x()).thirteen();
      },
    },
    not: {
      thirteen: function () {
        return !is(x).thirteen();
      },
    },
    divisible: {
      by: {
        thirteen: function () {
          return x % THIRTEEN === 0;
        },
      },
    },
    square: {
      of: {
        thirteen: function () {
          return x === THIRTEEN * THIRTEEN;
        },
      },
    },
    greater: {
      than: {
        thirteen: function () {
          return x > THIRTEEN;
        },
      },
      or: {
        equal: {
          thirteen: function () {
            return x >= THIRTEEN;
          },
        },
      },
    },
    less: {
      than: {
        thirteen: function () {
          return x < THIRTEEN;
        },
      },
      or: {
        equal: {
          thirteen: function () {
            return x <= THIRTEEN;
          },
        },
      },
    },
    within: function (y) {
      return {
        of: {
          thirteen: function () {
            return x > THIRTEEN - y && x < THIRTEEN + y;
          },
        },
      };
    },
    yearOfBirth: function () {
      var currYear = new Date().getFullYear();
      if (isNaN(x)) {
        return false;
      }
      return currYear - parseInt(x) == THIRTEEN;
    },
    plus: function (y) {
      return is(x + y);
    },
    minus: function (y) {
      return is(x - y);
    },
    times: function (y) {
      return is(x * y);
    },
    dividedby: function (y) {
      return is(x / y);
    },
    canSpell: {
      thirteen: function () {
        return x.toLowerCase().includes("t", "h", "i", "r", "t", "e", "e", "n");
      },
    },
    anagramOf: {
      thirteen: function () {
        return (
          x.toLowerCase().split("").sort().join("").trim() ==
          "thirteen".split("").sort().join("").trim()
        );
      },
    },
    backwards: {
      thirteen: function () {
        return parseInt(x.toString().split("").reverse().join("")) == THIRTEEN;
      },
    },
    atomicNumber: {
      thirteen: function () {
        return x.toLowerCase().includes("a", "l", "u", "m", "i", "n", "u", "m");
      },
    },
    base: function (y) {
      return {
        thirteen: function () {
          var basedNumber = parseInt(x, y);
          return !isNaN(basedNumber) && basedNumber == THIRTEEN;
        },
      };
    },
    inASuperpositionOf: {
      thirteen: function () {
        return {
          state: "indeterminate",
          collapse: is(x).thirteen,
        };
      },
    },
    schrodingers: {
      thirteen: function () {
        console.log(true);
        console.log(false);
        return Math.random() < 0.5;
      },
    },
  };
};

module.exports = is;
