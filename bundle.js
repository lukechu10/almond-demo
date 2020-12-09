(()=>{"use strict";var e,t,n,r,o,i,c,a,u,d,s,f,_,b,l,p,v,g,h,m,w,x,y,S,E,C,T,j,M,A,k,O,N,P,B,I,W,Z,L,H,F,U,q,$,z,D,R,V,G,J,X,K,Q,Y,ee,te,ne,re={868:(e,t,n)=>{var r=n(379),o=n.n(r),i=n(935);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals,n.e(235).then(n.bind(n,235)).then((e=>{e.run_app()}))},935:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,'html,body{background:#fff;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;margin:0;padding:0}main{position:fixed;display:flex;flex-direction:row;align-items:stretch;align-content:stretch;top:90px;bottom:0;left:0;right:0;height:100%}textarea{resize:none;width:100%}',""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],u=t.base?a[0]+t.base:a[0],d=n[u]||0,s="".concat(u," ").concat(d);n[u]=d+1;var f=c(s),_={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(_)):i.push({identifier:s,updater:p(_,t),references:1}),r.push(s)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=o(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var d,s=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function _(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var b=null,l=0;function p(e,t){var n,r,o;if(t.singleton){var i=l++;n=b||(b=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=_.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var u=a(e,t),d=0;d<n.length;d++){var s=c(n[d]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=u}}}}},oe={};function ie(e){if(oe[e])return oe[e].exports;var t=oe[e]={id:e,loaded:!1,exports:{}};return re[e](t,t.exports,ie),t.loaded=!0,t.exports}ie.m=re,ie.c=oe,ie.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return ie.d(t,{a:t}),t},ie.d=(e,t)=>{for(var n in t)ie.o(t,n)&&!ie.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},ie.f={},ie.e=e=>Promise.all(Object.keys(ie.f).reduce(((t,n)=>(ie.f[n](e,t),t)),[])),ie.u=e=>e+".bundle.js",ie.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),ie.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),ie.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},ie.l=(t,n,r)=>{if(e[t])e[t].push(n);else{var o,i;if(void 0!==r)for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var u=c[a];if(u.getAttribute("src")==t){o=u;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,ie.nc&&o.setAttribute("nonce",ie.nc),o.src=t),e[t]=[n];var d=(n,r)=>{o.onerror=o.onload=null,clearTimeout(s);var i=e[t];if(delete e[t],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((e=>e(r))),n)return n(r)},s=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),i&&document.head.appendChild(o)}},ie.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;ie.g.importScripts&&(e=ie.g.location+"");var t=ie.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),ie.p=e})(),(()=>{var e={179:0};ie.f.j=(t,n)=>{var r=ie.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>{r=e[t]=[n,o]}));n.push(r[2]=o);var i=ie.p+ie.u(t),c=new Error;ie.l(i,(n=>{if(ie.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,r[1](c)}}),"chunk-"+t)}};var t=self.webpackChunk=self.webpackChunk||[],n=t.push.bind(t);t.push=t=>{for(var r,o,[i,c,a]=t,u=0,d=[];u<i.length;u++)o=i[u],ie.o(e,o)&&e[o]&&d.push(e[o][0]),e[o]=0;for(r in c)ie.o(c,r)&&(ie.m[r]=c[r]);for(a&&a(ie),n(t);d.length;)d.shift()()}})(),ee={},te={716:function(){return{"./index_bg.js":{__wbindgen_cb_drop:function(e){return void 0===t&&(t=ie.c[838].exports),t.G6(e)},__wbindgen_object_drop_ref:function(e){return void 0===n&&(n=ie.c[838].exports),n.ug(e)},__wbindgen_string_new:function(e,t){return void 0===r&&(r=ie.c[838].exports),r.h4(e,t)},__wbindgen_object_clone_ref:function(e){return void 0===o&&(o=ie.c[838].exports),o.m_(e)},__wbindgen_is_undefined:function(e){return void 0===i&&(i=ie.c[838].exports),i.XP(e)},__wbg_new_59cb74e423758ede:function(){return void 0===c&&(c=ie.c[838].exports),c.h9()},__wbg_stack_558ba5917b466edd:function(e,t){return void 0===a&&(a=ie.c[838].exports),a.Dz(e,t)},__wbg_error_4bb6c2a97407129a:function(e,t){return void 0===u&&(u=ie.c[838].exports),u.kF(e,t)},__wbg_instanceof_Window_49f532f06a9786ee:function(e){return void 0===d&&(d=ie.c[838].exports),d.wp(e)},__wbg_document_c0366b39e4f4c89a:function(e){return void 0===s&&(s=ie.c[838].exports),s.NI(e)},__wbg_createElement_99351c8bf0efac6e:function(e,t,n){return void 0===f&&(f=ie.c[838].exports),f.Vl(e,t,n)},__wbg_createElementNS_a7ef126eff5022c2:function(e,t,n,r,o){return void 0===_&&(_=ie.c[838].exports),_.OZ(e,t,n,r,o)},__wbg_createTextNode_cfdcc8da0d55d336:function(e,t,n){return void 0===b&&(b=ie.c[838].exports),b.eb(e,t,n)},__wbg_querySelector_f7730f338b4d3d21:function(e,t,n){return void 0===l&&(l=ie.c[838].exports),l.Ol(e,t,n)},__wbg_instanceof_HtmlTextAreaElement_aa81cb6ef637ad1f:function(e){return void 0===p&&(p=ie.c[838].exports),p.fn(e)},__wbg_value_0938d95709a8299e:function(e,t){return void 0===v&&(v=ie.c[838].exports),v.ZT(e,t)},__wbg_setvalue_d48345fc605b6438:function(e,t,n){return void 0===g&&(g=ie.c[838].exports),g.Jx(e,t,n)},__wbg_instanceof_HtmlButtonElement_917edcddce3c8237:function(e){return void 0===h&&(h=ie.c[838].exports),h.S3(e)},__wbg_settype_a473e7c2eb6fc59f:function(e,t,n){return void 0===m&&(m=ie.c[838].exports),m.hF(e,t,n)},__wbg_instanceof_HtmlInputElement_ad83b145c236a35b:function(e){return void 0===w&&(w=ie.c[838].exports),w.WC(e)},__wbg_setchecked_8bb84df8eed13498:function(e,t){return void 0===x&&(x=ie.c[838].exports),x.qx(e,t)},__wbg_settype_91be2a6c44657ee3:function(e,t,n){return void 0===y&&(y=ie.c[838].exports),y.MN(e,t,n)},__wbg_value_97fba2fa96f7251f:function(e,t){return void 0===S&&(S=ie.c[838].exports),S.xC(e,t)},__wbg_setvalue_6934781158d5bf65:function(e,t,n){return void 0===E&&(E=ie.c[838].exports),E.MA(e,t,n)},__wbg_addEventListener_a422088e686210b5:function(e,t,n,r,o){return void 0===C&&(C=ie.c[838].exports),C.Z8(e,t,n,r,o)},__wbg_removeEventListener_4448b273b47328f8:function(e,t,n,r,o){return void 0===T&&(T=ie.c[838].exports),T.lu(e,t,n,r,o)},__wbg_namespaceURI_f4a25184afe07685:function(e,t){return void 0===j&&(j=ie.c[838].exports),j.I9(e,t)},__wbg_removeAttribute_8440a1b6ce044d52:function(e,t,n){return void 0===M&&(M=ie.c[838].exports),M.gH(e,t,n)},__wbg_setAttribute_e71b9086539f06a1:function(e,t,n,r,o){return void 0===A&&(A=ie.c[838].exports),A.TD(e,t,n,r,o)},__wbg_debug_9f067aefe2ceaadd:function(e,t,n,r){return void 0===k&&(k=ie.c[838].exports),k.Q2(e,t,n,r)},__wbg_error_e325755affc8634b:function(e){return void 0===O&&(O=ie.c[838].exports),O.dM(e)},__wbg_error_7bb15b842d5b0ddb:function(e,t,n,r){return void 0===N&&(N=ie.c[838].exports),N.g7(e,t,n,r)},__wbg_info_1b9fdabaafc8f4cb:function(e,t,n,r){return void 0===P&&(P=ie.c[838].exports),P.Xw(e,t,n,r)},__wbg_log_37120b26fb738792:function(e,t,n,r){return void 0===B&&(B=ie.c[838].exports),B.uv(e,t,n,r)},__wbg_warn_6add4f04160cdbba:function(e,t,n,r){return void 0===I&&(I=ie.c[838].exports),I.mZ(e,t,n,r)},__wbg_lastChild_6337475d58ebdab4:function(e){return void 0===W&&(W=ie.c[838].exports),W.z7(e)},__wbg_setnodeValue_4a75b94edda71829:function(e,t,n){return void 0===Z&&(Z=ie.c[838].exports),Z.wB(e,t,n)},__wbg_textContent_4b271fdd94a16dbe:function(e,t){return void 0===L&&(L=ie.c[838].exports),L.sp(e,t)},__wbg_appendChild_7c45aeccd496f2a5:function(e,t){return void 0===H&&(H=ie.c[838].exports),H.O8(e,t)},__wbg_insertBefore_6e8e209ea019870f:function(e,t,n){return void 0===F&&(F=ie.c[838].exports),F.Ee(e,t,n)},__wbg_removeChild_1e1942a296b255c1:function(e,t){return void 0===U&&(U=ie.c[838].exports),U.Mu(e,t)},__wbg_call_951bd0c6d815d6f1:function(e,t){return void 0===q&&(q=ie.c[838].exports),q.nM(e,t)},__wbg_newnoargs_7c6bd521992b4022:function(e,t){return void 0===$&&($=ie.c[838].exports),$.$2(e,t)},__wbg_is_049b1aece40b5301:function(e,t){return void 0===z&&(z=ie.c[838].exports),z.i8(e,t)},__wbg_new_ba07d0daa0e4677e:function(){return void 0===D&&(D=ie.c[838].exports),D.tr()},__wbg_self_6baf3a3aa7b63415:function(){return void 0===R&&(R=ie.c[838].exports),R.I1()},__wbg_window_63fc4027b66c265b:function(){return void 0===V&&(V=ie.c[838].exports),V.Ic()},__wbg_globalThis_513fb247e8e4e6d2:function(){return void 0===G&&(G=ie.c[838].exports),G.dr()},__wbg_global_b87245cd886d7113:function(){return void 0===J&&(J=ie.c[838].exports),J.Zt()},__wbg_set_9bdd413385146137:function(e,t,n){return void 0===X&&(X=ie.c[838].exports),X.fM(e,t,n)},__wbindgen_debug_string:function(e,t){return void 0===K&&(K=ie.c[838].exports),K.fY(e,t)},__wbindgen_throw:function(e,t){return void 0===Q&&(Q=ie.c[838].exports),Q.Or(e,t)},__wbindgen_closure_wrapper525:function(e,t,n){return void 0===Y&&(Y=ie.c[838].exports),Y.KB(e,t,n)}}}}},ne={235:[716]},ie.w={},ie.f.wasm=function(e,t){(ne[e]||[]).forEach((function(e,n){var r=ee[e];if(r)t.push(r);else{var o,i=te[e](),c=fetch(ie.p+"bundle.wasm");o=i instanceof Promise&&"function"==typeof WebAssembly.compileStreaming?Promise.all([WebAssembly.compileStreaming(c),i]).then((function(e){return WebAssembly.instantiate(e[0],e[1])})):"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(c,i):c.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,i)})),t.push(ee[e]=o.then((function(t){return ie.w[e]=(t.instance||t).exports})))}}))},ie(868)})();