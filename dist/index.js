"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=u(function(x,a){
var n=require('@stdlib/ndarray-base-numel-dimension/dist'),v=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),m=require('@stdlib/ndarray-base-data-buffer/dist'),o=require('@stdlib/stats-strided-sminabs/dist').ndarray;function d(e){var r=e[0];return o(n(r,0),m(r),v(r,0),q(r))}a.exports=d
});var f=require("path").join,c=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),j=t(),i,s=c(f(__dirname,"./native.js"));g(s)?i=j:i=s;module.exports=i;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
