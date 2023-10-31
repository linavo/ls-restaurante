(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),c=n(667),s=n.n(c),d=new URL(n(789),n.b),l=new URL(n(885),n.b),m=new URL(n(487),n.b),p=new URL(n(811),n.b),u=i()(o()),f=s()(d),h=s()(l),g=s()(m),v=s()(p);u.push([e.id,`@font-face{font-family:"Gotham Medium";src:url(${f}) format("opentype")}@font-face{font-family:"Gotham Light";src:url(${h}) format("opentype")}@font-face{font-family:"Gotham Extra-Light";src:url(${g}) format("opentype")}:root{font-size:calc(.625rem + .4vw)}*{margin:0}#content{background-image:url(${v});background-size:cover;background-attachment:fixed;width:100vw;display:grid;grid-template-columns:1fr 3fr 1fr}#content .div2{margin-top:10rem;grid-column:1/4;box-shadow:0 0 10px rgba(0,0,0,.408);background-color:rgba(0,0,0,.845);display:grid;grid-template-rows:.5fr .5fr 4fr;place-items:center;padding-bottom:3rem;margin-bottom:10rem}#content .div2 .div2h1{font-family:"Gotham Medium";text-transform:uppercase;letter-spacing:10px;color:#fff;text-align:center}#content .div2 .pizzaText{color:#fff;font-family:"Gotham Light";letter-spacing:2px;width:50vw;text-align:center;line-height:1.5rem}#content .div2 .pizzaContainer{display:grid;grid-template-columns:repeat(auto-fill, minmax(100px, 322px));gap:.5rem}#content .div2 .pizzaContainer .column1,#content .div2 .pizzaContainer .column2{display:flex;flex-direction:column;align-items:center}#content .div2 .pizzaContainer .column{max-width:320px;padding-bottom:.7rem;justify-self:center}#content .menu{grid-column:1/4;width:100vw;background-color:#fff;display:grid;grid-template-rows:2fr 4fr;grid-template-columns:1fr 3fr 1fr;box-shadow:0 5px 5px rgba(0,0,0,.109)}#content .menu .quote{font-family:"Gotham Light";grid-column:2/3;margin-top:1rem;margin-bottom:2rem;text-align:center;line-height:3rem;letter-spacing:2px}#content .menu .wolfgangPuck{font-family:"Gotham Medium";text-transform:uppercase;letter-spacing:6px;grid-column:2/3;text-align:center;margin-bottom:3rem}#content .menu .formatMenuBar{grid-column:1/4;display:grid;grid-template-columns:2fr .5fr .5fr .8fr 2fr;place-items:center}#content .menu .formatMenuBar .logo{font-family:"Gotham Extra-Light";text-transform:uppercase;letter-spacing:3px}#content .menu .formatMenuBar .menuList{font-family:"Gotham Light";text-transform:uppercase;transition:.5s;letter-spacing:4px}#content .menu .formatMenuBar .menuList:hover{cursor:pointer;color:#673d17;transition:.25s}#content .menu .formatMenuBar .menuList:after{display:block;content:"";border-bottom:#673d17 solid 2px;transform:scaleX(0);transform-origin:100% 50%;transition:transform 250ms ease-in-out}#content .menu .formatMenuBar .menuList:hover:after{transform:scale(1);transform-origin:0% 50%}#content .menu .formatMenuBar .contactBtn{border:2px solid #673d17;background-color:#fff;color:#673d17;padding:.7rem 1em;font-family:"Gotham Medium";font-size:1rem;letter-spacing:4px;text-transform:uppercase;transition:.5s}#content .menu .formatMenuBar .contactBtn:hover{cursor:pointer;background-color:#673d17;color:#fff;transition:.2s}#content .footer{grid-column:1/4;width:100vw;height:30vh;background-color:#000;box-shadow:0 0 10px rgba(0,0,0,.408);color:#fff;font-family:"Gotham Extra-Light";text-transform:uppercase;letter-spacing:3px;display:flex;align-items:center;justify-content:space-around}#content .footer .github{width:2em;background-color:#fff;border-radius:50%}#content .footer .footerSpan{width:13rem;display:flex;align-items:center;justify-content:space-between}@media(min-width: 680px){#content .div2 .pizzaContainer{max-width:700px}}@media(max-width: 648px){#content .div2{grid-template-rows:.25fr .5fr 3fr}}@media(max-width: 1234px){#content .menu{place-items:center}#content .menu .formatMenuBar{display:flex;flex-direction:column;margin-top:3em;gap:15px}}`,""]);const x=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,m="".concat(d," ").concat(l);a[d]=l+1;var p=n(m),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var f=o(u,r);r.byIndex=c,t.splice(c,0,{identifier:m,updater:f,references:1})}i.push(m)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},885:(e,t,n)=>{e.exports=n.p+"5813789eac597edf6ef4.otf"},789:(e,t,n)=>{e.exports=n.p+"cdcce86268fb4a504ff5.otf"},487:(e,t,n)=>{e.exports=n.p+"90c6171184f230bfa07a.otf"},811:(e,t,n)=>{e.exports=n.p+"ac8b162f5cddd04965fe.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),l=n.n(d),m=n(589),p=n.n(m),u=n(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const h=n.p+"6938ee1d347dd5b48e92.jpg",g=n.p+"15fc355a890529ae31f3.jpg",v=n.p+"c424983ea6d69223b86d.jpg",x=n.p+"ebb6248367389534da80.jpg",b=n.p+"8f56b4fd1a3b00ba8e87.jpg",y=n.p+"3524c849ab38de4be923.png";window.addEventListener("load",(function(){let e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("menu"),e.appendChild(t);let n=document.createElement("div");n.classList.add("formatMenuBar"),t.appendChild(n);let r=document.createElement("h5");r.classList.add("logo"),r.textContent="L's Restaurante",n.appendChild(r);let o=document.createElement("h4"),a=document.createElement("h4"),i=document.createElement("h4");o.textContent="Home",a.textContent="Menu",i.textContent="Join Our Team",o.classList.add("menuList"),a.classList.add("menuList"),i.classList.add("menuList"),n.appendChild(o),n.appendChild(a),n.appendChild(i);let c=document.createElement("button");c.textContent="Contact Us",c.classList.add("contactBtn"),n.appendChild(c);let s=document.createElement("h2");s.textContent="Welcome to L's Restaurante, home of some of the finest pizza and pasta dishes. Where there is love and passion for cooking, L's Restaurante presents to you mouth watering options.",s.classList.add("quote"),t.appendChild(s);let d=document.createElement("h3");d.textContent="- Lina V.",d.classList.add("wolfgangPuck"),t.appendChild(d);let l=document.createElement("div");l.classList.add("div2");let m=document.createElement("h1");m.textContent="Best Pizza in the Country",l.appendChild(m),m.classList.add("div2h1"),e.appendChild(l);let p=document.createElement("div");p.textContent="L's restaurant brings to you some of Los Angeles's most delicious pizza. We are a family owned business that prioritizes delectable taste and a fine dining experience.",p.classList.add("pizzaText"),l.appendChild(p);let u=document.createElement("div");u.classList.add("pizzaContainer"),l.appendChild(u);const f=document.createElement("div"),L=document.createElement("div"),C=document.createElement("img");C.src=h,C.classList.add("column"),f.appendChild(C);const w=document.createElement("img");w.src=g,w.classList.add("column"),f.appendChild(w);const E=document.createElement("img");E.src=v,E.classList.add("column"),f.appendChild(E);const z=document.createElement("img");z.src=x,z.classList.add("column"),L.appendChild(z);const M=document.createElement("img");M.src=b,M.classList.add("column"),L.appendChild(M),f.classList.add("column1"),L.classList.add("column2"),u.appendChild(f),u.appendChild(L);const j=document.createElement("div");j.classList.add("footer");const B=document.createElement("div"),T=document.createElement("div"),k=document.createElement("img"),S=document.createElement("div");document.createElement("a").href="",S.classList.add("footerSpan"),k.src=y,k.classList.add("github"),B.textContent="L's Restaurante",T.textContent="Lina Vo © 2023",S.appendChild(T),S.appendChild(k),j.appendChild(B),j.appendChild(S),e.appendChild(j)}))})()})();