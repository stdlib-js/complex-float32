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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Complex64

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> 64-bit complex number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/complex-float32/tags). For example,

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@v0.1.1-deno/mod.js';
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
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@deno/mod.js';

var z = new Complex64( 3.0, -2.0 );

console.log( 'type: %s', typeof z );
// => 'type: object'

console.log( 'str: %s', z );
// => 'str: 3 - 2i'

console.log( 'real: %d', z.re );
// => 'real: 3'

console.log( 'imag: %d', z.im );
// => 'imag: -2'

console.log( 'JSON: %s', JSON.stringify( z ) );
// => 'JSON: {"type":"Complex64","re":3,"im":-2}'
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/complex-cmplx`][@stdlib/complex/cmplx]</span><span class="delimiter">: </span><span class="description">create a complex number.</span>
-   <span class="package-name">[`@stdlib/complex-float64`][@stdlib/complex/float64]</span><span class="delimiter">: </span><span class="description">128-bit complex number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/complex-float32.svg
[npm-url]: https://npmjs.org/package/@stdlib/complex-float32

[test-image]: https://github.com/stdlib-js/complex-float32/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/complex-float32/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/complex-float32/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/complex-float32?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/complex-float32.svg
[dependencies-url]: https://david-dm.org/stdlib-js/complex-float32/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/complex-float32/tree/deno
[umd-url]: https://github.com/stdlib-js/complex-float32/tree/umd
[esm-url]: https://github.com/stdlib-js/complex-float32/tree/esm
[branches-url]: https://github.com/stdlib-js/complex-float32/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/complex-float32/main/LICENSE

[json]: http://www.json.org/

[mdn-json-stringify]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

[mdn-json-parse]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

[@stdlib/complex/reviver-float32]: https://github.com/stdlib-js/complex-reviver-float32/tree/deno

<!-- <related-links> -->

[@stdlib/complex/cmplx]: https://github.com/stdlib-js/complex-cmplx/tree/deno

[@stdlib/complex/float64]: https://github.com/stdlib-js/complex-float64/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
