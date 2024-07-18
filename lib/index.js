/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name base
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/complex/float32/base}
*/
setReadOnly( ns, 'base', require( '@stdlib/complex-float32-base' ) );

/**
* @name conj
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float32/conj}
*/
setReadOnly( ns, 'conj', require( '@stdlib/complex-float32-conj' ) );

/**
* @name Complex64
* @memberof ns
* @readonly
* @constructor
* @see {@link module:@stdlib/complex/float32/ctor}
*/
setReadOnly( ns, 'Complex64', require( '@stdlib/complex-float32-ctor' ) );

/**
* @name imag
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float32/imag}
*/
setReadOnly( ns, 'imag', require( '@stdlib/complex-float32-imag' ) );

/**
* @name parseComplex64
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float32/parse}
*/
setReadOnly( ns, 'parseComplex64', require( '@stdlib/complex-float32-parse' ) );

/**
* @name real
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float32/real}
*/
setReadOnly( ns, 'real', require( '@stdlib/complex-float32-real' ) );

/**
* @name reim
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float32/reim}
*/
setReadOnly( ns, 'reim', require( '@stdlib/complex-float32-reim' ) );

/**
* @name reviveComplex64
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float32/reviver}
*/
setReadOnly( ns, 'reviveComplex64', require( '@stdlib/complex-float32-reviver' ) );


// EXPORTS //

module.exports = ns;
