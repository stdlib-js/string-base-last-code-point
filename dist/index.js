"use strict";var _=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var n=_(function(G,f){
var E=require('@stdlib/regexp-utf16-surrogate-pair/dist').REGEXP,F=/[\uDC00-\uDFFF]/,c=/[\uD800-\uDBFF]/;function T(r,e){var u,a,t,R,v,i;if(u=r.length,a="",v=0,r===""||e===0)return"";if(e===1)return r=r.substring(u-2,u),E.test(r)?r:r[1];for(i=u-1;i>=0;i--){if(t=r[i],a=t+a,v+=1,F.test(t)){if(i===0)break;R=r[i-1],c.test(R)&&(a=R+a,i-=1)}if(v===e)break}return a}f.exports=T
});var U=n();module.exports=U;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
