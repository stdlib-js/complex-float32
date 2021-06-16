<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Complex64

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> 64-bit complex number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/complex-float32
```

</section>

<section class="usage">

## Usage

```javascript
var Complex64 = require( '@stdlib/complex-float32' );
```

#### Complex64( real, imag )

64-bit complex number constructor, where `real` and `imag` are the **real** and **imaginary** components, respectively.

```javascript
var z = new Complex64( 5.0, 3.0 );
// returns <Complex64>
```

* * *

## Properties

#### Complex64.BYTES_PER_ELEMENT

Size (in bytes) of each component.

```javascript
var nbytes = Complex64.BYTES_PER_ELEMENT;
// returns 4
```

#### Complex64.prototype.BYTES_PER_ELEMENT

Size (in bytes) of each component.

```javascript
var z = new Complex64( 5.0, 3.0 );

var nbytes = z.BYTES_PER_ELEMENT;
// returns 4
```

#### Complex64.prototype.byteLength

Length (in bytes) of a complex number.

```javascript
var z = new Complex64( 5.0, 3.0 );

var nbytes = z.byteLength;
// returns 8
```

### Instance

A `Complex64` instance has the following properties...

#### re

A **read-only** property returning the **real** component.

```javascript
var z = new Complex64( 5.0, 3.0 );

var re = z.re;
// returns 5.0
```

#### im

A **read-only** property returning the **imaginary** component.

```javascript
var z = new Complex64( 5.0, -3.0 );

var im = z.im;
// returns -3.0
```

* * *

## Methods

### Accessor Methods

These methods do **not** mutate a `Complex64` instance and, instead, return a complex number representation.

#### Complex64.prototype.toString()

Returns a `string` representation of a `Complex64` instance.

```javascript
var z = new Complex64( 5.0, 3.0 );
var str = z.toString();
// returns '5 + 3i'

z = new Complex64( -5.0, -3.0 );
str = z.toString();
// returns '-5 - 3i'
```

#### Complex64.prototype.toJSON()

Returns a [JSON][json] representation of a `Complex64` instance. [`JSON.stringify()`][mdn-json-stringify] implicitly calls this method when stringifying a `Complex64` instance.

```javascript
var z = new Complex64( 5.0, -3.0 );

var o = z.toJSON();
/*
  {
    "type": "Complex64",
    "re": 5.0,
    "im": -3.0
  }
*/
```

To [revive][mdn-json-parse] a `Complex64` number from a [JSON][json] `string`, see [@stdlib/complex/reviver-float32][@stdlib/complex/reviver-float32].

</section>

<!-- /.usage -->

* * *

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Both the **real** and **imaginary** components are stored as single-precision floating-point numbers.

</section>

<!-- /.notes -->

* * *

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex-float32' );

var z = new Complex64( 3.0, -2.0 );

console.log( 'type: %s', typeof z );
// => type: object

console.log( 'str: %s', z );
// => str: 3 - 2i

console.log( 'real: %d', z.re );
// => real: 3.0

console.log( 'imag: %d', z.im );
// => imag: -2.0

console.log( 'JSON: %s', JSON.stringify( z ) );
// => JSON: {"type":"Complex64","re":3,"im":-2}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/complex-float32.svg
[npm-url]: https://npmjs.org/package/@stdlib/complex-float32

[test-image]: https://github.com/stdlib-js/complex-float32/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/complex-float32/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/complex-float32/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/complex-float32?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/complex-float32
[dependencies-url]: https://david-dm.org/stdlib-js/complex-float32/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/complex-float32/main/LICENSE

[json]: http://www.json.org/

[mdn-json-stringify]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

[mdn-json-parse]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

[@stdlib/complex/reviver-float32]: https://github.com/stdlib-js/complex-reviver-float32

</section>

<!-- /.links -->