!function(t){function e(e){for(var n,c,i=e[0],s=e[1],_=e[2],l=0,f=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(u&&u(e);f.length;)f.shift()();return o.push.apply(o,_||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={5:0},o=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(t){return c.p+"templates/"+({0:"__react_static_root__/src/containers/Star",1:"__react_static_root__/src/pages/404",2:"__react_static_root__/src/pages/about",3:"__react_static_root__/src/pages/index",4:"__react_static_root__/src/pages/talent"}[t]||t)+"."+{0:"37d61caa",1:"46c8602d",2:"18c36486",3:"9e5b8458",4:"d0717012"}[t]+".js"}(t);var s=new Error;o=function(e){i.onerror=i.onload=null,clearTimeout(_);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,r[1](s)}a[t]=void 0}};var _=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var _=0;_<i.length;_++)e(i[_]);var u=s;o.push([56,6,7]),r()}({10:function(t,e,r){"use strict";var n=r(19);r.d(e,"a",(function(){return n.Link})),r.d(e,"b",(function(){return n.Router}))},114:function(t,e,r){"use strict";r.r(e),function(t){r.d(e,"notFoundTemplate",(function(){return g}));var n=r(4),a=r.n(n),o=r(5),c=r.n(o),i=r(0),s=r.n(i),_=r(6),u=r.n(_);Object(_.setHasBabelPlugin)();var l={loading:function(){return null},error:function(t){return console.error(t.error),s.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},f=u()(c()({id:"__react_static_root__/src/pages/404.js",load:function(){return Promise.all([r.e(1).then(r.bind(null,51))]).then((function(t){return t[0]}))},path:function(){return a.a.join(t,"__react_static_root__/src/pages/404.js")},resolve:function(){return 51},chunkName:function(){return"__react_static_root__/src/pages/404"}}),l);f.template="__react_static_root__/src/pages/404.js";var p=u()(c()({id:"__react_static_root__/src/pages/about.js",load:function(){return Promise.all([r.e(2).then(r.bind(null,52))]).then((function(t){return t[0]}))},path:function(){return a.a.join(t,"__react_static_root__/src/pages/about.js")},resolve:function(){return 52},chunkName:function(){return"__react_static_root__/src/pages/about"}}),l);p.template="__react_static_root__/src/pages/about.js";var d=u()(c()({id:"__react_static_root__/src/pages/index.js",load:function(){return Promise.all([r.e(3).then(r.bind(null,53))]).then((function(t){return t[0]}))},path:function(){return a.a.join(t,"__react_static_root__/src/pages/index.js")},resolve:function(){return 53},chunkName:function(){return"__react_static_root__/src/pages/index"}}),l);d.template="__react_static_root__/src/pages/index.js";var m=u()(c()({id:"__react_static_root__/src/pages/talent.js",load:function(){return Promise.all([r.e(4).then(r.bind(null,54))]).then((function(t){return t[0]}))},path:function(){return a.a.join(t,"__react_static_root__/src/pages/talent.js")},resolve:function(){return 54},chunkName:function(){return"__react_static_root__/src/pages/talent"}}),l);m.template="__react_static_root__/src/pages/talent.js";var h=u()(c()({id:"__react_static_root__/src/containers/Star",load:function(){return Promise.all([r.e(0).then(r.bind(null,55))]).then((function(t){return t[0]}))},path:function(){return a.a.join(t,"__react_static_root__/src/containers/Star")},resolve:function(){return 55},chunkName:function(){return"__react_static_root__/src/containers/Star"}}),l);h.template="__react_static_root__/src/containers/Star",e.default={"__react_static_root__/src/pages/404.js":f,"__react_static_root__/src/pages/about.js":p,"__react_static_root__/src/pages/index.js":d,"__react_static_root__/src/pages/talent.js":m,"__react_static_root__/src/containers/Star":h};var g="__react_static_root__/src/pages/404.js"}.call(this,"/")},116:function(t,e,r){var n={".":13,"./":13,"./index":13,"./index.js":13};function a(t){var e=o(t);return r(e)}function o(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id=116},124:function(t,e,r){"use strict";r.r(e),function(t){var n=r(0),a=r.n(n),o=r(24),c=r.n(o),i=r(50),s=r(20);if(e.default=s.a,"undefined"!=typeof document){var _=document.getElementById("root"),u=_.hasChildNodes()?c.a.hydrate:c.a.render,l=function(t){u(a.a.createElement(i.AppContainer,null,a.a.createElement(t,null)),_)};l(s.a),t&&t.hot&&t.hot.accept("./App",(function(){l(s.a)}))}}.call(this,r(125)(t))},20:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(14),c=r(10),i=function(){return a.a.createElement("div",null,"This is a dynamic page! It will not be statically exported, but is available at runtime")};r(129);Object(o.addPrefetchExcludes)(["dynamic"]);e.a=function(){return a.a.createElement(o.Root,null,a.a.createElement("nav",null,a.a.createElement(c.a,{to:"/"},"Home"),a.a.createElement(c.a,{to:"/about"},"About"),a.a.createElement(c.a,{to:"/talent"},"Talent"),a.a.createElement(c.a,{to:"/dynamic"},"Dynamic")),a.a.createElement("div",{className:"content"},a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("em",null,"Loading...")},a.a.createElement(c.b,null,a.a.createElement(i,{path:"dynamic"}),a.a.createElement(o.Routes,{path:"*"})))))}},56:function(t,e,r){r(57),r(113),t.exports=r(121)},58:function(t,e,r){"use strict";r.r(e);var n=r(48),a=[{location:"__react_static_root__/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-reach-router",plugins:[],hooks:r.n(n)()({})},{location:"__react_static_root__/node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"__react_static_root__/",plugins:[],hooks:{}}];e.default=a}});