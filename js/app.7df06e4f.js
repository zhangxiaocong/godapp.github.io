(function(e){function n(n){for(var t,a,o=n[0],i=n[1],l=n[2],d=0,h=[];d<o.length;d++)a=o[d],u[a]&&h.push(u[a][0]),u[a]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);f&&f(n);while(h.length)h.shift()();return r.push.apply(r,l||[]),c()}function c(){for(var e,n=0;n<r.length;n++){for(var c=r[n],t=!0,a=1;a<c.length;a++){var o=c[a];0!==u[o]&&(t=!1)}t&&(r.splice(n--,1),e=i(i.s=c[0]))}return e}var t={},a={app:0},u={app:0},r=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-7ce72dcc":"bb3b420d","chunk-16cd7c64":"212a0002","chunk-1a56d26a":"96528dda","chunk-07f52650":"e2437534","chunk-2e603636":"69079ea0","chunk-0223e7ae":"8d065300","chunk-6b696daa":"27a33945","chunk-309fbbb4":"a3ff4ea9","chunk-066f174c":"263f5e26","chunk-579106b9":"539881b5","chunk-47ba9592":"530cc9b0","chunk-07fcd844":"13c4d738","chunk-52be2c0b":"3ffc093a","chunk-e5728004":"c3d4fe3c","chunk-3b1e55a3":"615ed9fb","chunk-60e9dee4":"4dde6447","chunk-9535f11c":"0c984d71","chunk-bdca1c20":"b1939e13"}[e]+".js"}function i(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.e=function(e){var n=[],c={"chunk-07f52650":1,"chunk-2e603636":1,"chunk-0223e7ae":1,"chunk-6b696daa":1,"chunk-309fbbb4":1,"chunk-066f174c":1,"chunk-47ba9592":1,"chunk-07fcd844":1,"chunk-52be2c0b":1,"chunk-e5728004":1,"chunk-3b1e55a3":1,"chunk-60e9dee4":1,"chunk-9535f11c":1,"chunk-bdca1c20":1};a[e]?n.push(a[e]):0!==a[e]&&c[e]&&n.push(a[e]=new Promise(function(n,c){for(var t="css/"+({}[e]||e)+"."+{"chunk-7ce72dcc":"31d6cfe0","chunk-16cd7c64":"31d6cfe0","chunk-1a56d26a":"31d6cfe0","chunk-07f52650":"0375423e","chunk-2e603636":"f11444e2","chunk-0223e7ae":"7d2713a8","chunk-6b696daa":"eb8f8c9e","chunk-309fbbb4":"f11444e2","chunk-066f174c":"90cd2ba2","chunk-579106b9":"31d6cfe0","chunk-47ba9592":"0e433876","chunk-07fcd844":"cdf724e6","chunk-52be2c0b":"7a12d611","chunk-e5728004":"3c7220c2","chunk-3b1e55a3":"d19bb345","chunk-60e9dee4":"bf7553f2","chunk-9535f11c":"ff4ec5a4","chunk-bdca1c20":"60d86b51"}[e]+".css",a=i.p+t,u=document.getElementsByTagName("link"),r=0;r<u.length;r++){var o=u[r],l=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===t||l===a))return n()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){o=d[r],l=o.getAttribute("data-href");if(l===t||l===a)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var t=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");u.request=t,c(u)},h.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(h)}).then(function(){a[e]=0}));var t=u[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,c){t=u[e]=[n,c]});n.push(t[2]=r);var l,d=document.getElementsByTagName("head")[0],h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=o(e),l=function(n){h.onerror=h.onload=null,clearTimeout(f);var c=u[e];if(0!==c){if(c){var t=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,r=new Error("Loading chunk "+e+" failed.\n("+t+": "+a+")");r.type=t,r.request=a,c[1](r)}u[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:h})},12e4);h.onerror=h.onload=l,d.appendChild(h)}return Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,c){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)i.d(c,t,function(n){return e[n]}.bind(null,t));return c},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=n,l=l.slice();for(var h=0;h<l.length;h++)n(l[h]);var f=d;r.push([0,"chunk-vendors"]),c()})({0:function(e,n,c){e.exports=c("cd49")},"07bb":function(e,n,c){},"3a0b":function(e,n,c){"use strict";c("cadf"),c("551c"),c("097d");var t=c("2b0e"),a=c("2f62"),u=c("8834"),r=c("bfa9");t["default"].use(a["a"]);var o=new r["a"]({storage:window.localStorage});n["a"]=new a["a"].Store({state:{locale:u["d"].CN,bgm:u["a"].BGM_ON,sound:u["e"].Sound_ON,guide:u["c"].Guide_UN,baccarat:u["b"].Baccarat_First},mutations:{setLocale:function(e,n){e.locale=n},setBGM:function(e,n){e.bgm=n},setSound:function(e,n){e.sound=n},setGuide:function(e,n){e.guide=n},setBaccarat:function(e,n){e.baccarat=n}},plugins:[o.plugin]})},"5c0b":function(e,n,c){"use strict";var t=c("5e27"),a=c.n(t);a.a},"5e27":function(e,n,c){},"6ebf":function(e,n,c){"use strict";c("cadf"),c("551c"),c("097d");var t=c("2b0e"),a=c("a925"),u={bj_result_player_busted:"Player Busted",bj_result_banker_busted:"Banker Busted",bj_result_player_win:"Player Wins",bj_result_banker_win:"Banker Wins",bj_result_push:"Push",bj_result_player_blackjack:"Player Blackjack",bj_result_surrender:"Surrender"};function r(){var e=sessionStorage.getItem("language");return null===e?navigator.language:e}t["default"].use(a["a"]);var o=new a["a"]({locale:r(),messages:{"en-US":u}});n["a"]=o},8834:function(e,n,c){"use strict";var t,a,u,r,o;c.d(n,"d",function(){return t}),c.d(n,"a",function(){return a}),c.d(n,"e",function(){return u}),c.d(n,"c",function(){return r}),c.d(n,"b",function(){return o}),function(e){e[e["EN"]=0]="EN",e[e["CN"]=1]="CN"}(t||(t={})),function(e){e[e["BGM_ON"]=0]="BGM_ON",e[e["BGM_OFF"]=1]="BGM_OFF"}(a||(a={})),function(e){e[e["Sound_ON"]=0]="Sound_ON",e[e["Sound_OFF"]=1]="Sound_OFF"}(u||(u={})),function(e){e[e["Guide_ED"]=0]="Guide_ED",e[e["Guide_UN"]=1]="Guide_UN"}(r||(r={})),function(e){e[e["Baccarat_First"]=0]="Baccarat_First",e[e["Baccarat_Many"]=1]="Baccarat_Many"}(o||(o={}))},b0a0:function(e,n,c){"use strict";var t=c("07bb"),a=c.n(t);a.a},cd49:function(e,n,c){"use strict";c.r(n);c("cadf"),c("551c"),c("097d");var t=c("2b0e"),a=function(){var e=this,n=e.$createElement,c=e._self._c||n;return c("div",{attrs:{id:"app"}},[c("router-view")],1)},u=[],r=(c("5c0b"),c("b0a0"),c("2877")),o={},i=Object(r["a"])(o,a,u,!1,null,null,null);i.options.__file="App.vue";var l=i.exports,d=c("8c4f");t["default"].use(d["a"]);var h=new d["a"]({mode:"history",linkActiveClass:"active",linkExactActiveClass:"active",routes:[{path:"/",name:"Default",component:function(e){return Promise.all([c.e("chunk-7ce72dcc"),c.e("chunk-16cd7c64"),c.e("chunk-52be2c0b"),c.e("chunk-e5728004")]).then(function(){var n=[c("37f9")];e.apply(null,n)}.bind(this)).catch(c.oe)},meta:{title:"Dapp 365"}},{path:"/index",name:"index",component:function(e){return Promise.all([c.e("chunk-7ce72dcc"),c.e("chunk-16cd7c64"),c.e("chunk-52be2c0b"),c.e("chunk-e5728004")]).then(function(){var n=[c("37f9")];e.apply(null,n)}.bind(this)).catch(c.oe)},meta:{title:"Dapp 365"}},{path:"/dice",name:"Dice",component:function(e){return Promise.all([c.e("chunk-7ce72dcc"),c.e("chunk-16cd7c64"),c.e("chunk-60e9dee4")]).then(function(){var n=[c("eada")];e.apply(null,n)}.bind(this)).catch(c.oe)},meta:{title:"Crazy Dice"}},{path:"/Scratch",name:"Scratch",component:function(e){return Promise.all([c.e("chunk-7ce72dcc"),c.e("chunk-16cd7c64"),c.e("chunk-579106b9"),c.e("chunk-3b1e55a3")]).then(function(){var n=[c("8164")];e.apply(null,n)}.bind(this)).catch(c.oe)},meta:{title:"Dapp365 Black Jack"}},{path:"/blackjack",name:"Blackjack",component:function(e){return Promise.all([c.e("chunk-7ce72dcc"),c.e("chunk-16cd7c64"),c.e("chunk-309fbbb4"),c.e("chunk-07fcd844")]).then(function(){var n=[c("a16c")];e.apply(null,n)}.bind(this)).catch(c.oe)},meta:{title:"Dapp365 Black Jack"}},{path:"/classicbaccarat",name:"classicbaccarat",component:function(e){return Promise.all([c.e("chunk-7ce72dcc"),c.e("chunk-16cd7c64"),c.e("chunk-1a56d26a"),c.e("chunk-2e603636"),c.e("chunk-6b696daa")]).then(function(){var n=[c("11ca")];e.apply(null,n)}.bind(this)).catch(c.oe)},meta:{title:"Classic Baccarat"}},{path:"/baccarat",name:"Panda",component:function(e){return Promise.all([c.e("chunk-7ce72dcc"),c.e("chunk-16cd7c64"),c.e("chunk-1a56d26a"),c.e("chunk-2e603636"),c.e("chunk-0223e7ae")]).then(function(){var n=[c("e35b")];e.apply(null,n)}.bind(this)).catch(c.oe)},meta:{title:"EZ Baccarat"}},{path:"/redvsblue",name:"RedVsBlue",component:function(e){return Promise.all([c.e("chunk-7ce72dcc"),c.e("chunk-16cd7c64"),c.e("chunk-1a56d26a"),c.e("chunk-309fbbb4"),c.e("chunk-066f174c")]).then(function(){var n=[c("c325")];e.apply(null,n)}.bind(this)).catch(c.oe)},meta:{title:"Red vs Blue"}},{path:"/roulette",name:"Roulette",component:function(e){return Promise.all([c.e("chunk-7ce72dcc"),c.e("chunk-16cd7c64"),c.e("chunk-1a56d26a"),c.e("chunk-07f52650")]).then(function(){var n=[c("9c1b")];e.apply(null,n)}.bind(this)).catch(c.oe)},meta:{title:"Roulette"}},{path:"/manage",name:"Manage",component:function(e){return Promise.all([c.e("chunk-7ce72dcc"),c.e("chunk-16cd7c64"),c.e("chunk-1a56d26a"),c.e("chunk-579106b9"),c.e("chunk-47ba9592")]).then(function(){var n=[c("e585")];e.apply(null,n)}.bind(this)).catch(c.oe)},meta:{title:"Manage"}},{path:"/metamask",name:"Metamask",component:function(e){return Promise.all([c.e("chunk-7ce72dcc"),c.e("chunk-52be2c0b"),c.e("chunk-9535f11c")]).then(function(){var n=[c("123c")];e.apply(null,n)}.bind(this)).catch(c.oe)},meta:{title:"Metamask-Dapp365"}},{path:"/scatter",name:"Scatter",component:function(e){return Promise.all([c.e("chunk-7ce72dcc"),c.e("chunk-52be2c0b"),c.e("chunk-bdca1c20")]).then(function(){var n=[c("b2a0")];e.apply(null,n)}.bind(this)).catch(c.oe)},meta:{title:"Scatter-Dapp365"}}]}),f=c("3a0b"),s=c("6ebf"),p=c("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var b=c("4eb5"),k=c.n(b);t["default"].use(k.a),t["default"].config.productionTip=!1,t["default"].prototype.MY_TELEGRAM="https://t.me/dapp365",t["default"].prototype.MY_TWITTER="https://twitter.com/dapp365",t["default"].prototype.MY_FACEBOOK="https://www.facebook.com/dapp.go",h.beforeEach(function(e,n,c){document.title=e.meta.title?e.meta.title:"dapp365",c()}),new t["default"]({router:h,store:f["a"],i18n:s["a"],render:function(e){return e(l)}}).$mount("#app")}});