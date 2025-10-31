<img src="is-thirteen-logo.png">

_Special thanks to [@casdr](https://github.com/casdr) for the logo_]

# What is 13?
It's that feeling in the morning where you thought you ran out of eggs but you open the fridge and there's 12 more, plus one extra.
"13" is the _big-endian_ positional-decimal-numeral representation of the unary-numeral "1111111111111", which when compressed via _symbolic computation_ becomes "1111! / 11 + 1" or "1111 ^ 11 - 111" or "111 ^ 11 + 1111". This means the numerical value represented by the base 10 string "13" is an integer of the algebraic form `b ^ c - a = (b - n) ^ c + (a + n)` where `n := 1`, which makes it special.

But what is a **number**? _[insert Moon Men theme]_ well, a number is an abstract object which corresponds to a certain quantity, it can be a whole (integer) quantity, or a fractional (rational) quantity. Numbers can also be irrational, but they are also somewhat fractional in nature. But then, isn't "13" a number? actually no, "13" (as we saw earlier) is just a numeral. **But what is a numeral?** A numeral is just the graphical, written, or spoken _representation_ of a numerical value. This is very helpful because **numbers can't be seen**, unless of course you write them in unary notation... But is unary **really** the closest we can get to "seeing numbers"? We don't know... yet

And as always, thanks for ~watching~ reading


And as always, thanks for watching reading
# is-13

An npm package to check if a number is equal to 13. Based on [`is-thirteen`](https://github.com/jezen/is-thirteen)

## Installation

```sh
npm --save i is-13
```

or

```sh
yarn add is-13
```

```javascript
const is = require('is-13');
// Now with elegant syntax.

is(13).thirteen(); // true
is(12.8).roughly.thirteen(); // true
is(6).within(10).of.thirteen(); // true
is(2011).yearOfBirth(); // true

// check your math skillz
is(4).plus(5).thirteen();      // false
is(12).plus(1).thirteen();    // true
is(4).minus(12).thirteen();    // false
is(14).minus(1).thirteen();    // true
is(1).times(8).thirteen();    // false
is(26).divideby(2).thirteen();  // true
```

## Test

```shell
npm test
```

## License

A helpful tool by [tj-commits](https://github.com/tj-commits), originally by [Jezen Thomas](https://jezenthomas.com), with helpful
help from [Gytis Daujotas](https://twitter.com/gytdau) and many fine folk.


You are allowed to sell this on a CD Rom.