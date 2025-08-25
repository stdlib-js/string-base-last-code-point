// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{REGEXP as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-utf16-surrogate-pair@v0.2.2-esm/index.mjs";var r=/[\uDC00-\uDFFF]/,e=/[\uD800-\uDBFF]/;function s(s,i){var u,f,n,a,o,d;if(u=s.length,f="",o=0,""===s||0===i)return"";if(1===i)return s=s.substring(u-2,u),t.test(s)?s:s[1];for(d=u-1;d>=0;d--){if(f=(n=s[d])+f,o+=1,r.test(n)){if(0===d)break;a=s[d-1],e.test(a)&&(f=a+f,d-=1)}if(o===i)break}return f}export{s as default};
//# sourceMappingURL=index.mjs.map
