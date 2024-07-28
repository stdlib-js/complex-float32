<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

> Single-precision complex floating-point number functions.



<section class="usage">

## Usage

```javascript
import complex from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@v0.3.0-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { Complex64, base, conj, imag, parseComplex64, real, reim, reviveComplex64 } from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@v0.3.0-deno/mod.js';
```

#### complex

Namespace containing single-precision complex floating-point number functions.

```javascript
var ns = complex;
// returns {...}
```

The namespace contains the following sub-namespaces:

<!-- <toc pattern="+(base)"> -->

<div class="namespace-toc">

-   <span class="signature">[`base`][@stdlib/complex/float32/base]</span><span class="delimiter">: </span><span class="description">base (i.e., lower-level) single-precision complex floating-point number functions.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`conj( z )`][@stdlib/complex/float32/conj]</span><span class="delimiter">: </span><span class="description">return the complex conjugate of a single-precision complex floating-point number.</span>
-   <span class="signature">[`Complex64( real, imag )`][@stdlib/complex/float32/ctor]</span><span class="delimiter">: </span><span class="description">64-bit complex number.</span>
-   <span class="signature">[`imag( z )`][@stdlib/complex/float32/imag]</span><span class="delimiter">: </span><span class="description">return the imaginary component of a single-precision complex floating-point number.</span>
-   <span class="signature">[`parseComplex64( str )`][@stdlib/complex/float32/parse]</span><span class="delimiter">: </span><span class="description">parse a string representation of a 64-bit complex number.</span>
-   <span class="signature">[`real( z )`][@stdlib/complex/float32/real]</span><span class="delimiter">: </span><span class="description">return the real component of a single-precision complex floating-point number.</span>
-   <span class="signature">[`reim( z )`][@stdlib/complex/float32/reim]</span><span class="delimiter">: </span><span class="description">return the real and imaginary components of a single-precision complex floating-point number.</span>
-   <span class="signature">[`reviveComplex64( key, value )`][@stdlib/complex/float32/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized 64-bit complex number.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@deno/mod.js';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@v0.3.0-deno/mod.js';

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/complex-float32.svg
[npm-url]: https://npmjs.org/package/@stdlib/complex-float32

[test-image]: https://github.com/stdlib-js/complex-float32/actions/workflows/test.yml/badge.svg?branch=v0.3.0
[test-url]: https://github.com/stdlib-js/complex-float32/actions/workflows/test.yml?query=branch:v0.3.0

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
[deno-readme]: https://github.com/stdlib-js/complex-float32/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/complex-float32/tree/umd
[umd-readme]: https://github.com/stdlib-js/complex-float32/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/complex-float32/tree/esm
[esm-readme]: https://github.com/stdlib-js/complex-float32/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/complex-float32/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/complex-float32/main/LICENSE

<!-- <toc-links> -->

[@stdlib/complex/float32/conj]: https://github.com/stdlib-js/complex-float32-conj/tree/deno

[@stdlib/complex/float32/ctor]: https://github.com/stdlib-js/complex-float32-ctor/tree/deno

[@stdlib/complex/float32/imag]: https://github.com/stdlib-js/complex-float32-imag/tree/deno

[@stdlib/complex/float32/parse]: https://github.com/stdlib-js/complex-float32-parse/tree/deno

[@stdlib/complex/float32/real]: https://github.com/stdlib-js/complex-float32-real/tree/deno

[@stdlib/complex/float32/reim]: https://github.com/stdlib-js/complex-float32-reim/tree/deno

[@stdlib/complex/float32/reviver]: https://github.com/stdlib-js/complex-float32-reviver/tree/deno

[@stdlib/complex/float32/base]: https://github.com/stdlib-js/complex-float32-base/tree/deno

<!-- </toc-links> -->

</section>

<!-- /.links -->
