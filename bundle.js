// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).Complex64=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=s,v=t()?l:p,g=v;var d=function(r,e,t){g(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},h=d;var m=function(r){return"number"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return b&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,E=w;var j=function(r){return E.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},T="function"==typeof Symbol?Symbol.toStringTag:"",x=_,O=T,S=w;var V=j,A=function(r){var e,t,n;if(null==r)return S.call(r);t=r[O],e=x(r,O);try{r[O]=void 0}catch(e){return S.call(r)}return n=S.call(r),e?r[O]=t:delete r[O],n},k=y()?A:V,F=Number,I=F.prototype.toString;var R=k,M=F,$=function(r){try{return I.call(r),!0}catch(r){return!1}},C=y();var N=function(r){return"object"==typeof r&&(r instanceof M||(C?$(r):"[object Number]"===R(r)))},B=m,L=N;var G=h,Z=function(r){return B(r)||L(r)},W=N;G(Z,"isPrimitive",m),G(Z,"isObject",W);var X=Z,Y="function"==typeof Math.fround?Math.fround:null,z=k,U="function"==typeof Float32Array;var D=function(r){return U&&r instanceof Float32Array||"[object Float32Array]"===z(r)},J=Number.POSITIVE_INFINITY,q="function"==typeof Float32Array?Float32Array:null,H=D,K=J,Q=q;var rr="function"==typeof Float32Array?Float32Array:void 0,er=function(){throw new Error("not implemented")},tr=new(function(){var r,e;if("function"!=typeof Q)return!1;try{e=new Q([1,3.14,-3.14,5e40]),r=H(e)&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===K}catch(e){r=!1}return r}()?rr:er)(1);var nr=Y;"function"!=typeof nr&&(nr=function(r){return tr[0]=r,tr[0]});var ir=nr;var or=function(r){return"string"==typeof r},ar=String.prototype.valueOf;var ur=k,cr=function(r){try{return ar.call(r),!0}catch(r){return!1}},fr=y();var sr=function(r){return"object"==typeof r&&(r instanceof String||(fr?cr(r):"[object String]"===ur(r)))},lr=or,pr=sr;var vr=h,gr=function(r){return lr(r)||pr(r)},dr=sr;vr(gr,"isPrimitive",or),vr(gr,"isObject",dr);var hr=gr,mr=Math.floor;var br=function(r){return mr(r)===r},yr=br;var wr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&yr(r.length)&&r.length>=0&&r.length<=9007199254740991},Er=F.NEGATIVE_INFINITY,jr=J,Pr=Er,_r=br;var Tr=function(r){return r<jr&&r>Pr&&_r(r)},xr=X.isPrimitive,Or=Tr;var Sr=function(r){return xr(r)&&Or(r)},Vr=X.isObject,Ar=Tr;var kr=function(r){return Vr(r)&&Ar(r.valueOf())},Fr=Sr,Ir=kr;var Rr=h,Mr=function(r){return Fr(r)||Ir(r)},$r=kr;Rr(Mr,"isPrimitive",Sr),Rr(Mr,"isObject",$r);var Cr=Mr;var Nr=function(r){return r!=r},Br=X.isPrimitive,Lr=Nr;var Gr=function(r){return Br(r)&&Lr(r)},Zr=X.isObject,Wr=Nr;var Xr=function(r){return Zr(r)&&Wr(r.valueOf())},Yr=Gr,zr=Xr;var Ur=h,Dr=function(r){return Yr(r)||zr(r)},Jr=Xr;Ur(Dr,"isPrimitive",Gr),Ur(Dr,"isObject",Jr);var qr=wr,Hr=Cr.isPrimitive,Kr=hr.isPrimitive,Qr=Dr.isPrimitive;var re=function(r,e,t){var n,i,o;if(!qr(r)&&!Kr(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Hr(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Kr(r)){if(!Kr(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Qr(e)){for(o=i;o<n;o++)if(Qr(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},ee=re,te=hr.isPrimitive;var ne=function(r){if(!te(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},ie=hr.isPrimitive;var oe=function(r){if(!ie(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},ae=ne,ue=oe,ce=hr.isPrimitive;var fe=function(r){return ce(r)&&r===ue(r)&&r!==ae(r)},se=J,le=Er;var pe=function(r){return r==r&&r>le&&r<se},ve=Cr.isPrimitive;var ge=function(r){return ve(r)&&r>=0},de=Cr.isObject;var he=function(r){return de(r)&&r.valueOf()>=0},me=ge,be=he;var ye=h,we=function(r){return me(r)||be(r)},Ee=he;ye(we,"isPrimitive",ge),ye(we,"isObject",Ee);var je=we.isPrimitive,Pe=hr.isPrimitive;var _e=function(r,e){var t,n;if(!Pe(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!je(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},Te=Cr.isPrimitive,xe=hr.isPrimitive;var Oe=function(r,e,t){var n,i;if(!xe(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!xe(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Te(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},Se=_e,Ve=Oe;var Ae=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Ve(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Se("0",i):Se("0",i)+r,n&&(r="-"+r)),r},ke=fe,Fe=oe,Ie=ne,Re=pe,Me=X.isPrimitive,$e=Ae;var Ce=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Re(n)){if(!Me(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=$e(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=$e(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=ke(r.specifier)?Fe(t):Ie(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Ne=hr.isPrimitive,Be=/[-\/\\^$*+?.()|[\]{}]/g;var Le=function(r){var e,t;if(!Ne(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Be,"\\$&"):(e=(e=r.substring(1,t)).replace(Be,"\\$&"),r=r[0]+e+r.substring(t))},Ge=/./;var Ze=function(r){return"boolean"==typeof r},We=Boolean.prototype.toString;var Xe=k,Ye=function(r){try{return We.call(r),!0}catch(r){return!1}},ze=y();var Ue=function(r){return"object"==typeof r&&(r instanceof Boolean||(ze?Ye(r):"[object Boolean]"===Xe(r)))},De=Ze,Je=Ue;var qe=h,He=function(r){return De(r)||Je(r)},Ke=Ue;qe(He,"isPrimitive",Ze),qe(He,"isObject",Ke);var Qe=He;var rt=function(){return new Function("return this;")()},et="object"==typeof self?self:null,tt="object"==typeof window?window:null,nt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},it="object"==typeof nt?nt:null;module.exports=it;var ot=Qe.isPrimitive,at=rt,ut=et,ct=tt,ft=r(Object.freeze({__proto__:null}));var st=function(r){if(arguments.length){if(!ot(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return at()}if(ut)return ut;if(ct)return ct;if(ft)return ft;throw new Error("unexpected error. Unable to resolve global object.")},lt=st(),pt=lt.document&&lt.document.childNodes,vt=Int8Array,gt=Ge,dt=pt,ht=vt;var mt=function(){return"function"==typeof gt||"object"==typeof ht||"function"==typeof dt};var bt=function(){return/^\s*function\s*([^(]*)/i},yt=bt;h(yt,"REGEXP",bt());var wt=yt,Et=k;var jt=Array.isArray?Array.isArray:function(r){return"[object Array]"===Et(r)};var Pt=function(r){return null!==r&&"object"==typeof r};h(Pt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!jt(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Pt));var _t=Pt;var Tt=k,xt=wt.REGEXP,Ot=function(r){return _t(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var St=function(r){var e,t,n;if(("Object"===(t=Tt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=xt.exec(n.toString()))return e[1]}return Ot(r)?"Buffer":t},Vt=St;var At=St;var kt=function(r){var e;return null===r?"null":"object"===(e=typeof r)?Vt(r).toLowerCase():e},Ft=function(r){return At(r).toLowerCase()},It=mt()?Ft:kt;var Rt=function(r){return"function"===It(r)},Mt=RegExp.prototype.exec;var $t=k,Ct=function(r){try{return Mt.call(r),!0}catch(r){return!1}},Nt=y();var Bt=Le,Lt=Rt,Gt=hr.isPrimitive,Zt=function(r){return"object"==typeof r&&(r instanceof RegExp||(Nt?Ct(r):"[object RegExp]"===$t(r)))};var Wt=fe,Xt=oe,Yt=ne,zt=function(r,e,t){if(!Gt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Gt(e))e=Bt(e),e=new RegExp(e,"g");else if(!Zt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Gt(t)&&!Lt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Ut=pe,Dt=X.isPrimitive,Jt=function(r){return Math.abs(r)},qt=/e\+(\d)$/,Ht=/e-(\d)$/,Kt=/^(\d+)$/,Qt=/^(\d+)e/,rn=/\.0$/,en=/\.0*e/,tn=/(\..*[^0])0*e/;var nn=function(r){var e,t,n=parseFloat(r.arg);if(!Ut(n)){if(!Dt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Jt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=zt(t,tn,"$1e"),t=zt(t,en,"e"),t=zt(t,rn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=zt(t,qt,"e+0$1"),t=zt(t,Ht,"e-0$1"),r.alternate&&(t=zt(t,Kt,"$1."),t=zt(t,Qt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Wt(r.specifier)?Xt(t):Yt(t)},on=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var an=_e;var un=hr.isPrimitive,cn=ee,fn=Nr,sn=Ce,ln=nn,pn=function(r){var e,t,n,i,o;for(e=0,n=[],o=on.exec(r);o;)(t=r.slice(e,on.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=on.lastIndex,o=on.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},vn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+an(" ",n):an(" ",n)+r},gn=Ae,dn=String.fromCharCode;var hn=function(r){var e,t,n,i,o,a,u,c,f;if(!un(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=pn(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],un(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!cn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,fn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,fn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=sn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!fn(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=fn(o)?String(n.arg):dn(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=ln(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=gn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=vn(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a};var mn=X.isPrimitive,bn=v,yn=h,wn=ir,En=hn,jn=function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"},Pn=function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r};function _n(r,e){if(!(this instanceof _n))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!mn(r))throw new TypeError(En("invalid argument. Real component must be a number. Value: `%s`.",r));if(!mn(e))throw new TypeError(En("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return bn(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:wn(r)}),bn(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:wn(e)}),this}return yn(_n,"BYTES_PER_ELEMENT",4),yn(_n.prototype,"BYTES_PER_ELEMENT",4),yn(_n.prototype,"byteLength",8),yn(_n.prototype,"toString",jn),yn(_n.prototype,"toJSON",Pn),_n}));
//# sourceMappingURL=bundle.js.map
