// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,m=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function b(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,v,"$1e"),n=p.call(n,y,"e"),n=p.call(n,m,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,f,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function w(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var E=String.fromCharCode,_=Array.isArray;function S(r){return r!=r}function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,t,n,a,o,u,s,l,p,f,g,d,h;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",s=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,S(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+w(h):w(h)+f)),u+=n.arg||"",s+=1}return u}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=j.exec(r);n;)(e=r.slice(i,j.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=j.lastIndex,n=j.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){var e,t;if("string"!=typeof r)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return F.apply(null,e)}var I=Object.prototype,A=I.toString,C=I.__defineGetter__,N=I.__defineSetter__,O=I.__lookupGetter__,$=I.__lookupSetter__;var P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===A.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(O.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(r,e,t.get),o&&N&&N.call(r,e,t.set),r};function R(r,e,t){P(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}var L="function"==typeof Math.fround?Math.fround:null;var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return W&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var G=Object.prototype.hasOwnProperty;var U="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof U?U.toStringTag:"";var q=Z()?function(r){var e,t,n,i,a;if(null==r)return M.call(r);t=r[Y],a=Y,e=null!=(i=r)&&G.call(i,a);try{r[Y]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return M.call(r)},B="function"==typeof Float32Array;var X=Number.POSITIVE_INFINITY,z="function"==typeof Float32Array?Float32Array:null;var J="function"==typeof Float32Array?Float32Array:void 0;var D=function(){var r,e,t;if("function"!=typeof z)return!1;try{e=new z([1,3.14,-3.14,5e40]),t=e,r=(B&&t instanceof Float32Array||"[object Float32Array]"===q(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===X}catch(e){r=!1}return r}()?J:function(){throw new Error("not implemented")},H=new D(1);var K="function"==typeof L?L:function(r){return H[0]=r,H[0]};function Q(r,e,t){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function rr(r){return"number"==typeof r}var er=Number,tr=er.prototype.toString;var nr=Z();function ir(r){return"object"==typeof r&&(r instanceof er||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function ar(r){return rr(r)||ir(r)}function or(r,e){if(!(this instanceof or))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!rr(r))throw new TypeError(V("invalid argument. Real component must be a number. Value: `%s`.",r));if(!rr(e))throw new TypeError(V("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:K(r)}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:K(e)}),this}function cr(r){return r.re}function ur(r){return r.im}function sr(r){var e=new D(2);return e[0]=r.re,e[1]=r.im,e}function lr(r,e){return r===e?0!==r||1/r==1/e:r!=r&&e!=e}function pr(r,e){return r===e||r!=r&&e!=e}Q(ar,"isPrimitive",rr),Q(ar,"isObject",ir),Q(or,"BYTES_PER_ELEMENT",4),Q(or.prototype,"BYTES_PER_ELEMENT",4),Q(or.prototype,"byteLength",8),Q(or.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Q(or.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var fr={};R(fr,"isEqual",(function(r,e){var t=sr(r),n=sr(e);return t[0]===n[0]&&t[1]===n[1]})),R(fr,"isNotEqual",(function(r,e){var t=sr(r),n=sr(e);return t[0]!==n[0]||t[1]!==n[1]})),R(fr,"isSameValue",(function(r,e){var t=sr(r),n=sr(e);return lr(t[0],n[0])&&lr(t[1],n[1])})),R(fr,"isSameValueZero",(function(r,e){var t=sr(r),n=sr(e);return pr(t[0],n[0])&&pr(t[1],n[1])}));var gr={};function dr(r){return new r.constructor(r.re,-r.im)}function hr(r){return"string"==typeof r}R(gr,"add",(function(r,e){return new or(K(cr(r)+cr(e)),K(ur(r)+ur(e)))})),R(gr,"assert",fr),R(gr,"mul",(function(r,e){var t=cr(r),n=cr(e),i=ur(r),a=ur(e),o=K(t*n)-K(i*a),c=K(t*a)+K(i*n);return new or(K(o),K(c))}));var mr=String.prototype.valueOf;var yr=Z();function vr(r){return"object"==typeof r&&(r instanceof String||(yr?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object String]"===q(r)))}function br(r){return hr(r)||vr(r)}function wr(r,e,t){return r.replace(e,t)}function Er(r){var e,t,n=0;if(!hr(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));if(!(e=wr(r,/\s/g,"").match(/^([-+]?(\d*\.?\d*(?:[eE][-+]?\d+)?|Infinity|NaN)i?)?([-+])?((\d*\.?\d*(?:[eE][-+]?\d+)?|Infinity|NaN)i)?$/)))throw new Error(V("invalid argument. Unable to parse input string as a complex number. Value: `%s`.",r));return t=e[1]&&!e[1].endsWith("i")?parseFloat(e[1]):0,e[4]?n=("-"===e[3]?-1:1)*parseFloat(wr(e[4],/i$/,"")):e[1]&&e[1].endsWith("i")&&(n=parseFloat(wr(e[1],/i$/,""))),new or(t,n)}function _r(r,e){return e&&e.type&&"Complex64"===e.type&&rr(e.re)&&rr(e.im)?new or(e.re,e.im):e}Q(br,"isPrimitive",hr),Q(br,"isObject",vr);var Sr={};R(Sr,"base",gr),R(Sr,"conj",dr),R(Sr,"Complex64",or),R(Sr,"imag",ur),R(Sr,"parseComplex64",Er),R(Sr,"real",cr),R(Sr,"reim",sr),R(Sr,"reviveComplex64",_r);export{or as Complex64,gr as base,dr as conj,Sr as default,ur as imag,Er as parseComplex64,cr as real,sr as reim,_r as reviveComplex64};
//# sourceMappingURL=mod.js.map
