"use strict";var _=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=_(function(G,f){
var E=require('@stdlib/regexp-utf16-surrogate-pair/dist').REGEXP,F=/[\uDC00-\uDFFF]/,c=/[\uD800-\uDBFF]/;function T(r,e){var a,u,t,R,v,i;if(a=r.length,u="",v=0,r===""||e===0)return"";if(e===1)return r=r.substring(a-2,a),E.test(r)?r:r[1];for(i=a-1;i>=0;i--){if(t=r[i],u=t+u,v+=1,F.test(t)){if(i===0)break;R=r[i-1],c.test(R)&&(u=R+u,i-=1)}if(v===e)break}return u}f.exports=T
});var U=n();module.exports=U;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
