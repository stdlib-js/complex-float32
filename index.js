// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,o=r.toString,n=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,a){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===o.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(u.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=a.value,t.__proto__=c):t[e]=a.value),p="get"in a,y="set"in a,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&n&&n.call(t,e,a.get),y&&i&&i.call(t,e,a.set),t};function c(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,m="function"==typeof Symbol?Symbol.toStringTag:"",_=y()?function(t){var e,r,o,n,i;if(null==t)return b.call(t);r=t[m],i=m,e=null!=(n=t)&&s.call(n,i);try{t[m]=void 0}catch(e){return b.call(t)}return o=b.call(t),e?t[m]=r:delete t[m],o}:function(t){return b.call(t)},h=Number,d=h.prototype.toString,v=y();function g(t){return"object"==typeof t&&(t instanceof h||(v?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function w(t){return f(t)||g(t)}c(w,"isPrimitive",f),c(w,"isObject",g);var E="function"==typeof Math.fround?Math.fround:null,j="function"==typeof Float32Array,S=Number.POSITIVE_INFINITY,T="function"==typeof Float32Array?Float32Array:null,O="function"==typeof Float32Array?Float32Array:void 0,A=new(function(){var t,e,r;if("function"!=typeof T)return!1;try{e=new T([1,3.14,-3.14,5e40]),r=e,t=(j&&r instanceof Float32Array||"[object Float32Array]"===_(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===S}catch(e){t=!1}return t}()?O:function(){throw new Error("not implemented")})(1),F="function"==typeof E?E:function(t){return A[0]=t,A[0]};function P(){var t,e=arguments,r=e[0],o="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)o+="&arg[]="+encodeURIComponent(e[t]);return o}function N(t,e){if(!(this instanceof N))throw new TypeError(P("08O0G"));if(!f(t))throw new TypeError(P("08O3r",t));if(!f(e))throw new TypeError(P("08O3s",e));return a(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:F(t)}),a(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:F(e)}),this}return c(N,"BYTES_PER_ELEMENT",4),c(N.prototype,"BYTES_PER_ELEMENT",4),c(N.prototype,"byteLength",8),c(N.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),c(N.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t})),N},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Complex64=e();
//# sourceMappingURL=index.js.map
