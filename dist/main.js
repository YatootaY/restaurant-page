(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([n.id,":root{\n  --white: #C3C9E9;\n  --black: #131B23;\n}\n\nhtml,body{\n  padding: 0;\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  background-color: var(--black);\n  color: var(--white);\n}\n\np{\n  margin: 0;\n}\n\nbutton{\n  border: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  cursor: pointer;\n  outline: none;\n}\n\na{\n  text-decoration: none;\n  color: inherit;\n  cursor: pointer;\n}\n\na:hover{\n  text-decoration: underline;\n}\n\n.header{\n  padding: 20px 150px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo{\n  font-size: 20px;\n  font-weight: bold;\n  letter-spacing: 2px;\n}\n\n.nav-links{\n  display: flex;\n  gap:50px;\n}\n\n/* MID */\n\n.mid{\n  padding: 10px 150px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#noodle-pic{\n  height: auto;\n  width: 330px;\n  padding: 10px 0;\n  border-radius: 10%;\n  position: relative;\n  transition: all 0.3s ease-in-out;\n}\n\n#noodle-pic:hover{\n  transform: scale(1.01);\n}\n\n.ads{\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap:20px;\n}\n\n.ads p{\n  font-size: 70px;\n  font-weight: bold;\n  margin: 0;\n}\n\n.ads p:last-child{\n  font-weight: 300;\n  font-style: italic;\n  padding-left: 10px;\n  margin: 0;\n  font-size: 15px;\n}\n\n.ads button{\n  box-sizing: border-box;\n  background-color: transparent;\n  border: 1px solid var(--white);\n  padding: 15px 25px;\n  transition: all 0.1s ease-in-out;\n}\n\n.ads button:hover{\n  transform: scale(1.02);\n}\n\n/* FOOD */\n\n.foods{\n  display: flex;\n  flex-direction: column;\n  padding: 10px 150px;\n  align-items: center;\n  gap: 30px;\n}\n\n.details{\n  display: flex;\n  flex-direction: column;\n  gap:20px;\n  align-items: center;\n  padding: 50px 0;\n}\n\n.details p:first-child{\n  font-size: 70px;\n  font-weight: bold;\n  letter-spacing: 15px;\n}\n\n.details p:last-child{\n  font-weight: 300;\n  font-style: italic;\n  font-size: 15px;\n}\n\n.food-cards{\n  display: flex;\n  flex-wrap: wrap;\n  gap:15px;\n  justify-content: center;\n}\n\n.food-card{\n  background-color: #202933;\n  width: 200px;\n  height: 100px;\n  position: relative;\n  padding: 30px;\n  border-radius: 10px;\n  border: none;\n  display: flex;\n  gap:20px;\n  transition: all .3s ease-out;\n  cursor: pointer;\n}\n\n.food-card:hover{\n  top:-10px;\n  transform: scale(1.01);\n}\n\n.food-card img{\n  width: 100px;\n  height: 100px;\n  border-radius: 10px;\n}\n\n.food-description{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap:10px;\n}\n\n.food-description p:first-child{\n  font-weight: bold;\n}\n\n.food-description p:last-child{\n  font-size: 15px;\n  color: #ccaf12;\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=a(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var c=t(r[i]);e[c].references--}for(var d=o(n,a),s=0;s<r.length;s++){var l=t(r[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{const n=t.p+"2cf0fae22c2a0bdaaaf1.jpg";function e(n){const e=document.createElement("p");return e.textContent=n,e}const o=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div"),o=document.createElement("div");return t.classList.add("mid"),o.classList.add("ads"),o.appendChild(e("We know you are")),o.appendChild(e("too lazy...")),o.appendChild(function(n){const e=document.createElement("button");return e.textContent="Order foods",e}()),o.appendChild(e("Save the trouble!")),t.appendChild(o),t.appendChild(function(n,e){const t=new Image;return t.src=n,t.setAttribute("id","noodle-pic"),t}(n)),t}())},a=t.p+"38a86df9bd51653ebe21.jpg",r=t.p+"7047feb0bd7e10664a33.jpeg",i=(t.p,t.p+"9ce80d467628e1d94165.jpeg");function c(n){const e=document.createElement("p");return e.textContent=n,e}const d=function(){const n=document.getElementById("main");n.textContent="",n.appendChild(function(){const n=document.createElement("div");n.classList.add("foods");const e=document.createElement("div");e.classList.add("details"),e.appendChild(c("Are your hungry?")),e.appendChild(c("Take a look at our menu...")),n.appendChild(e);const t=document.createElement("div");return t.classList.add("food-cards"),n.appendChild(t),[[a,"NongShim Chapagetti","10$"],[r,"Paldo Jjajangmen","13.2$"],[i,"NongShim Zha Wang","13.2$"],[a,"NongShim Chapagetti","14.5$"],[r,"Paldo Jjajangmen","13.2$"],[r,"Paldo Jjajangmen","15.9$"],[i,"NongShim Zha Wang","13.2$"],[a,"NongShim Chapagetti","17$"],[r,"Paldo Jjajangmen","13.2$"]].forEach((n=>{let e=function(n){const e=new Image;return e.src=n,e}(n[0]),o=n[1],a=n[2];t.appendChild(function(n,e,t){const o=document.createElement("div");o.classList.add("food-card"),o.appendChild(n);const a=document.createElement("div");return a.classList.add("food-description"),a.appendChild(c(e)),a.appendChild(c(t)),o.appendChild(a),o}(e,o,a))})),n}())};function s(n){document.querySelectorAll(".button-nav").forEach((n=>{n!==this&&n.classList.remove("active")})),n.classList.add("active")}var l=t(379),p=t.n(l),u=t(795),f=t.n(u),m=t(569),h=t.n(m),g=t(565),v=t.n(g),x=t(216),b=t.n(x),y=t(589),C=t.n(y),w=t(426),E={};E.styleTagTransform=C(),E.setAttributes=v(),E.insert=h().bind(null,"head"),E.domAPI=f(),E.insertStyleElement=b(),p()(w.Z,E),w.Z&&w.Z.locals&&w.Z.locals,function(){const n=document.getElementById("content");n.appendChild(function(){const n=document.createElement("div");n.classList.add("header");const e=document.createElement("div");e.classList.add("logo"),e.textContent="RAMAN FOR YOU";const t=document.createElement("nav");t.classList.add("nav-links");const a=document.createElement("a");a.textContent="Home",a.classList.add("button-nav"),a.addEventListener("click",(n=>{n.target.classList.contains("active")||(s(a),o())}));const r=document.createElement("a");return r.textContent="Food",r.classList.add("button-nav"),r.addEventListener("click",(n=>{n.target.classList.contains("active")||(s(r),d())})),t.appendChild(a),t.appendChild(r),n.appendChild(e),n.appendChild(t),n}()),n.appendChild(function(){const n=document.createElement("main");return n.classList.add("main"),n.setAttribute("id","main"),n}()),o(),s(document.querySelector(".button-nav"))}()})()})();