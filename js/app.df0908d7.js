(function(e){function t(t){for(var n,a,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},i={app:0},o=[];function c(e){return u.p+"js/"+({"articleCreate~articleEdit~articleView~home~profileIndex":"articleCreate~articleEdit~articleView~home~profileIndex","articleCreate~articleEdit":"articleCreate~articleEdit",articleCreate:"articleCreate",articleEdit:"articleEdit",articleView:"articleView","home~profileIndex":"home~profileIndex",home:"home",profileIndex:"profileIndex",authLogin:"authLogin",authRegister:"authRegister",profileSettings:"profileSettings"}[e]||e)+"."+{"articleCreate~articleEdit~articleView~home~profileIndex":"497cf571","articleCreate~articleEdit":"f7820247",articleCreate:"f553ac23",articleEdit:"7847fb6f",articleView:"25c08891","home~profileIndex":"e2910083",home:"58882d6d",profileIndex:"ee9cecfe",authLogin:"d6f1fec0",authRegister:"e8bfab03",profileSettings:"d5bedd61"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={articleEdit:1,articleView:1,"home~profileIndex":1,authLogin:1,authRegister:1,profileSettings:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({"articleCreate~articleEdit~articleView~home~profileIndex":"articleCreate~articleEdit~articleView~home~profileIndex","articleCreate~articleEdit":"articleCreate~articleEdit",articleCreate:"articleCreate",articleEdit:"articleEdit",articleView:"articleView","home~profileIndex":"home~profileIndex",home:"home",profileIndex:"profileIndex",authLogin:"authLogin",authRegister:"authRegister",profileSettings:"profileSettings"}[e]||e)+"."+{"articleCreate~articleEdit~articleView~home~profileIndex":"31d6cfe0","articleCreate~articleEdit":"31d6cfe0",articleCreate:"31d6cfe0",articleEdit:"6b156ce2",articleView:"6b156ce2","home~profileIndex":"6b156ce2",home:"31d6cfe0",profileIndex:"31d6cfe0",authLogin:"6b156ce2",authRegister:"6b156ce2",profileSettings:"6b156ce2"}[e]+".css",i=u.p+n,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var s=o[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===i))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===n||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],d.parentNode.removeChild(d),r(o)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}i[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-ts-realworld-app/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0613":function(e,t,r){"use strict";var n=r("2b0e"),a=r("2f62");n["default"].use(a["a"]),t["a"]=new a["a"].Store({})},"0a69":function(e,t,r){"use strict";var n={home:"home",authLogin:"authLogin",authRegister:"authRegister",articleCreate:"articleCreate",articleEdit:"articleEdit",articleView:"articleView",profileIndex:"profileIndex",profileSettings:"profileSettings"};t["a"]=n},3785:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o}));r("a15b");var n=r("2b0e"),a=function(e){n["default"].notify({type:"error",title:"Error occurred",text:e.join("<br />")})},i=function(e){n["default"].notify({type:"success",text:e})},o=function(e){n["default"].notify({type:"warn",text:e})}},"5ed2":function(e,t,r){"use strict";r("d3b7"),r("2ca0");var n,a=r("bc3a"),i=r.n(a),o=r("afbc"),c=r("0a69");(function(e){e[e["OK"]=200]="OK",e[e["UNAUTHORIZED"]=401]="UNAUTHORIZED",e[e["FORBIDDEN"]=403]="FORBIDDEN",e[e["NOT_FOUND"]=404]="NOT_FOUND",e[e["UNPROCESSABLE_ENTITY"]=422]="UNPROCESSABLE_ENTITY"})(n||(n={}));var u=n,s=r("7f1d"),l=r("3785"),f=(r("99af"),r("4160"),r("4fad"),r("159b"),r("fb6a"),function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),d=function(e){var t=Object.entries(e||{unknown:["Unknown error occurred"]}),r=[];return t.forEach((function(e){var t=e[0],n=e[1];n.forEach((function(e){r.push("".concat(f(t)," ").concat(e))}))})),r},p=function(e){var t=s["a"].authToken;return t&&(e.headers.Authorization="Token ".concat(t)),e},h=function(e){return e},m=function(e){var t,r,n,a=null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status,i=d(null===e||void 0===e||null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.errors),f=null===i||void 0===i?void 0:i[0].startsWith("Unknown");switch(a){case u.UNAUTHORIZED:s["a"].logout(),o["b"].push({name:c["a"].authLogin}),Object(l["c"])("You are not logged in, please login first.");break;case u.NOT_FOUND:Object(l["a"])((null===i||void 0===i?void 0:i.length)>0&&!f?i:["Requested resource was not found."]);break;case u.FORBIDDEN:Object(l["a"])((null===i||void 0===i?void 0:i.length)>0&&!f?i:["Access to this resource is forbidden"]);break;case u.UNPROCESSABLE_ENTITY:break;default:Object(l["a"])((null===i||void 0===i?void 0:i.length)>0?i:["Unknown error occurred, please try again later."]);break}return Promise.reject(i)},g=i.a.create({baseURL:"https://conduit.productionready.io/api",timeout:5e3});g.defaults.headers.get.Accepts="application/json",g.defaults.headers.common["Access-Control-Allow-Origin"]="*",g.interceptors.request.use(p),g.interceptors.response.use(h,m);t["a"]=g},"67a9":function(e,t,r){"use strict";var n=r("9d70"),a=r.n(n);a.a},"6e90":function(e,t,r){"use strict";var n={user:"user",article:"article",profile:"profile",tags:"tags"};t["a"]=n},"7f1d":function(e,t,r){"use strict";r("96cf");var n=r("1da1"),a=r("d4ec"),i=r("bee2"),o=r("99de"),c=r("7e84"),u=r("262e"),s=r("9ab4"),l=r("6fc5"),f=r("5ed2"),d="/user",p="/users",h=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f["a"].post("".concat(p,"/login"),{user:t});case 2:return n=e.sent,e.abrupt("return",null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.user);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f["a"].post(p,{user:t});case 2:return n=e.sent,e.abrupt("return",null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.user);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f["a"].get(d);case 2:return r=e.sent,e.abrupt("return",null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.user);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f["a"].put(d,{user:t});case 2:return n=e.sent,e.abrupt("return",null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.user);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=r("e297"),w=r.n(b),O="__vtra_";w.a.prefix=O;var y=function(e,t){w.a.set(e,t)},E=function(e){return w.a.get(e)},C=function(e){w.a.rm(e)},j={setItem:y,getItem:E,removeItem:C},x=r("0613"),k=r("6e90"),I=function(e){return{bio:e.bio,email:e.email,image:e.image,username:e.username}},_="realWorldAuthToken",R=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments)),e._currentUser=null,e._authToken=j.getItem(_),e}return Object(u["a"])(t,e),Object(i["a"])(t,[{key:"SET_CURRENT_USER",value:function(e){this._currentUser=e}},{key:"SET_AUTH_TOKEN",value:function(e){e?(this._authToken=e,j.setItem(_,e)):(this._authToken=void 0,j.removeItem(_))}},{key:"setFromIUser",value:function(e){this.SET_CURRENT_USER(I(e)),this.SET_AUTH_TOKEN(e.token)}},{key:"fetchCurrentUser",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,this.setFromIUser(t);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"login",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:r=e.sent,this.setFromIUser(r);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"register",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:r=e.sent,this.setFromIUser(r);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:r=e.sent,this.setFromIUser(r);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"logout",value:function(){this.SET_AUTH_TOKEN(void 0),this.SET_CURRENT_USER(void 0)}},{key:"completeAuth",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.authToken||this.isLoggedIn){e.next=3;break}return e.next=3,this.fetchCurrentUser();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"currentUser",get:function(){return this._currentUser}},{key:"authToken",get:function(){return this._authToken||""}},{key:"isLoggedIn",get:function(){return!!this._currentUser}}]),t}(l["d"]);Object(s["a"])([l["c"]],R.prototype,"SET_CURRENT_USER",null),Object(s["a"])([l["c"]],R.prototype,"SET_AUTH_TOKEN",null),Object(s["a"])([Object(l["a"])({rawError:!0})],R.prototype,"setFromIUser",null),Object(s["a"])([Object(l["a"])({rawError:!0})],R.prototype,"fetchCurrentUser",null),Object(s["a"])([Object(l["a"])({rawError:!0})],R.prototype,"login",null),Object(s["a"])([Object(l["a"])({rawError:!0})],R.prototype,"register",null),Object(s["a"])([Object(l["a"])({rawError:!0})],R.prototype,"update",null),Object(s["a"])([Object(l["a"])({rawError:!0})],R.prototype,"logout",null),Object(s["a"])([Object(l["a"])({rawError:!0})],R.prototype,"completeAuth",null),R=Object(s["a"])([Object(l["b"])({dynamic:!0,namespaced:!0,store:x["a"],name:k["a"].user})],R);t["a"]=Object(l["e"])(R)},"9d70":function(e,t,r){},afbc:function(e,t,r){"use strict";r.d(t,"a",(function(){return c["a"]}));r("45fc"),r("96cf");var n=r("1da1"),a=r("2b0e"),i=r("8c4f"),o=r("7f1d"),c=(r("d3b7"),r("0a69")),u=[{path:"/",name:c["a"].home,component:function(){return Promise.all([r.e("articleCreate~articleEdit~articleView~home~profileIndex"),r.e("home~profileIndex"),r.e("home")]).then(r.bind(null,"bb51"))}},{path:"/login",name:c["a"].authLogin,component:function(){return r.e("authLogin").then(r.bind(null,"d772"))},meta:{anonymousOnly:!0}},{path:"/register",name:c["a"].authRegister,component:function(){return r.e("authRegister").then(r.bind(null,"803d"))},meta:{anonymousOnly:!0}},{path:"/editor",name:c["a"].articleCreate,component:function(){return Promise.all([r.e("articleCreate~articleEdit~articleView~home~profileIndex"),r.e("articleCreate~articleEdit"),r.e("articleCreate")]).then(r.bind(null,"b964"))},meta:{requiresAuth:!0}},{path:"/editor/:slug",name:c["a"].articleEdit,component:function(){return Promise.all([r.e("articleCreate~articleEdit~articleView~home~profileIndex"),r.e("articleCreate~articleEdit"),r.e("articleEdit")]).then(r.bind(null,"04d0"))},meta:{requiresAuth:!0}},{path:"/article/:slug",name:c["a"].articleView,component:function(){return Promise.all([r.e("articleCreate~articleEdit~articleView~home~profileIndex"),r.e("articleView")]).then(r.bind(null,"2b26"))}},{path:"/@:username/:tabId?",name:c["a"].profileIndex,component:function(){return Promise.all([r.e("articleCreate~articleEdit~articleView~home~profileIndex"),r.e("home~profileIndex"),r.e("profileIndex")]).then(r.bind(null,"52f6"))}},{path:"/settings",name:c["a"].profileSettings,component:function(){return r.e("profileSettings").then(r.bind(null,"f6ad"))},meta:{requiresAuth:!0}},{path:"*",redirect:{name:c["a"].home}}];a["default"].use(i["a"]);var s=new i["a"]({mode:"history",base:"/vue-ts-realworld-app/",routes:u}),l=function(e,t,r){if(e.matched.some((function(e){return e.meta.requiresAuth}))){var n=!!o["a"].currentUser;return n?r():r({name:c["a"].authLogin,query:{redirect:e.fullPath}}),!0}return!1},f=function(e,t,r){if(e.matched.some((function(e){return e.meta.anonymousOnly}))){var n=!o["a"].currentUser;return n?r():r({name:c["a"].home}),!0}return!1};s.beforeEach(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].completeAuth();case 2:if(!l(t,r,n)){e.next=4;break}return e.abrupt("return");case 4:if(!f(t,r,n)){e.next=6;break}return e.abrupt("return");case 6:n();case 7:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}());t["b"]=s},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("9483");Object(n["a"])("".concat("/vue-ts-realworld-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var a=r("2b0e"),i=r("ee98"),o=r.n(i),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("github-corner"),r("app-header"),r("keep-alive",[r("router-view")],1),r("app-footer"),r("notifications",{attrs:{position:"bottom right"}})],1)},u=[],s=r("d4ec"),l=r("99de"),f=r("7e84"),d=r("262e"),p=r("9ab4"),h=r("60a3"),m=function(e,t){var r=t._c;return r("a",{staticClass:"github-corner",attrs:{href:"https://github.com/t--takai/vue-ts-realworld-app","aria-label":"View source on GitHub",target:"_blank"}},[r("svg",{staticStyle:{fill:"#70B7FD",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[r("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),r("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),r("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},g=[],v=function(e){function t(){return Object(s["a"])(this,t),Object(l["a"])(this,Object(f["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),t}(h["d"]);v=Object(p["a"])([h["a"]],v);var b=v,w=b,O=(r("67a9"),r("2877")),y=Object(O["a"])(w,m,g,!0,null,"43458974",null),E=y.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("div",{staticClass:"container"},[r("a",{staticClass:"logo-font",attrs:{href:"/"}},[e._v("conduit")]),r("span",{staticClass:"attribution"},[e._v(" An interactive learning project from "),r("a",{attrs:{href:"https://thinkster.io"}},[e._v("Thinkster")]),e._v(" . Code & design licensed under MIT. ")])])])}],x=function(e){function t(){return Object(s["a"])(this,t),Object(l["a"])(this,Object(f["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),t}(h["d"]);x=Object(p["a"])([h["a"]],x);var k=x,I=k,_=Object(O["a"])(I,C,j,!1,null,null,null),R=_.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar navbar-light"},[r("div",{staticClass:"container"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:{name:e.$routesNames.home}}},[e._v(" conduit ")]),r("ul",{staticClass:"nav navbar-nav pull-xs-right"},[e._l(e.menuItems,(function(t){return r("li",{key:t.title,staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:{name:t.routeName},"exact-active-class":"active"}},[t.icon?r("i",{class:t.icon}):e._e(),e._v(" "+e._s(t.title)+" ")])],1)})),e.isLoggedIn?[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{"exact-active-class":"active",to:{name:e.$routesNames.profileIndex,params:{username:e.userName}}}},[e.userImage?r("img",{staticClass:"user-pic",attrs:{src:e.userImage}}):e._e(),e._v(" "+e._s(e.userName)+" ")])],1)]:e._e()],2)],1)])},S=[],T=(r("4de4"),r("bee2")),U=r("7f1d"),L=function(e){function t(){return Object(s["a"])(this,t),Object(l["a"])(this,Object(f["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(T["a"])(t,[{key:"menuItems",get:function(){var e=[{title:"Home",routeName:this.$routesNames.home,isShow:!0},{title:"New Article",icon:"ion-compose",routeName:this.$routesNames.articleCreate,isShow:this.isLoggedIn},{title:"Settings",routeName:this.$routesNames.profileSettings,icon:"ion-gear-a",isShow:this.isLoggedIn},{title:"Sign up",routeName:this.$routesNames.authRegister,isShow:!this.isLoggedIn},{title:"Sign in",routeName:this.$routesNames.authLogin,isShow:!this.isLoggedIn}];return e.filter((function(e){return e.isShow}))}},{key:"isLoggedIn",get:function(){return U["a"].isLoggedIn}},{key:"userName",get:function(){var e;return(null===(e=U["a"].currentUser)||void 0===e?void 0:e.username)||""}},{key:"userImage",get:function(){var e;return null===(e=U["a"].currentUser)||void 0===e?void 0:e.image}}]),t}(h["d"]);L=Object(p["a"])([h["a"]],L);var A=L,V=A,P=Object(O["a"])(V,N,S,!1,null,null,null),F=P.exports,D=function(e){function t(){return Object(s["a"])(this,t),Object(l["a"])(this,Object(f["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),t}(h["d"]);D=Object(p["a"])([Object(h["a"])({components:{AppFooter:R,AppHeader:F,GithubCorner:E}})],D);var $=D,B=$,H=Object(O["a"])(B,c,u,!1,null,null,null),q=H.exports,M=r("afbc"),K=r("0613");a["default"].config.productionTip=!1,a["default"].prototype.$routesNames=M["a"],a["default"].use(o.a),new a["default"]({router:M["b"],store:K["a"],render:function(e){return e(q)}}).$mount("#app")}});
//# sourceMappingURL=app.df0908d7.js.map