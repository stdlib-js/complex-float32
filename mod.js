// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function l(e){return"string"==typeof e}var s=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,v,"$1e"),i=f.call(i,w,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,h,"e-0$1"),e.alternate&&(i=f.call(i,d,"$1."),i=f.call(i,y,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):p.call(i)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var S=String.fromCharCode,k=isNaN,x=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,t,i,a,o,s,p,u,f;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",p=1,u=0;u<e.length;u++)if(l(i=e[u]))s+=i;else{if(r=void 0!==i.precision,!(i=T(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,k(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=_(i.arg,i.width,i.padRight)),s+=i.arg||"",p+=1}return s}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,i,n;for(t=[],n=0,i=j.exec(e);i;)(r=e.slice(n,j.lastIndex-i[0].length)).length&&t.push(r),t.push(A(i)),n=j.lastIndex,i=j.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function V(e){return"string"==typeof e}function O(e){var r,t,i;if(!V(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=I(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return F.apply(null,t)}var N=Object.prototype,P=N.toString,$=N.__defineGetter__,C=N.__defineSetter__,R=N.__lookupGetter__,L=N.__lookupSetter__;var M=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(R.call(e,r)||L.call(e,r)?(i=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(e,r,t.get),o&&C&&C.call(e,r,t.set),e};function Z(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e){return"number"==typeof e}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return W&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;var X="function"==typeof Symbol?Symbol:void 0,z="function"==typeof X?X.toStringTag:"";var J=Y()?function(e){var r,t,i,n,a;if(null==e)return B.call(e);t=e[z],a=z,r=null!=(n=e)&&U.call(n,a);try{e[z]=void 0}catch(r){return B.call(e)}return i=B.call(e),r?e[z]=t:delete e[z],i}:function(e){return B.call(e)},q=Number,D=q.prototype.toString;var H=Y();function K(e){return"object"==typeof e&&(e instanceof q||(H?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object Number]"===J(e)))}function Q(e){return G(e)||K(e)}Z(Q,"isPrimitive",G),Z(Q,"isObject",K);var ee="function"==typeof Math.fround?Math.fround:null,re="function"==typeof Float32Array;var te=Number.POSITIVE_INFINITY,ie="function"==typeof Float32Array?Float32Array:null;var ne="function"==typeof Float32Array?Float32Array:void 0;var ae=new(function(){var e,r,t;if("function"!=typeof ie)return!1;try{r=new ie([1,3.14,-3.14,5e40]),t=r,e=(re&&t instanceof Float32Array||"[object Float32Array]"===J(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===te}catch(r){e=!1}return e}()?ne:function(){throw new Error("not implemented")})(1);var oe="function"==typeof ee?ee:function(e){return ae[0]=e,ae[0]};function ce(e,r){if(!(this instanceof ce))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!G(e))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",e));if(!G(r))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return M(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:oe(e)}),M(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:oe(r)}),this}Z(ce,"BYTES_PER_ELEMENT",4),Z(ce.prototype,"BYTES_PER_ELEMENT",4),Z(ce.prototype,"byteLength",8),Z(ce.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Z(ce.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));export{ce as default};
//# sourceMappingURL=mod.js.map
