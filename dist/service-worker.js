if(!self.define){let e,s={};const o=(o,t)=>(o=new URL(o+".js",t).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(t,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const l=e=>o(e,r),u={module:{uri:r},exports:n,require:l};s[r]=Promise.all(t.map((e=>u[e]||l(e)))).then((e=>(i(...e),n)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"learn-vue-app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/todo-list-vue/css/app.f42214f3.css",revision:null},{url:"/todo-list-vue/index.html",revision:"4cbd2581bdaf2f6abebd8943aa778892"},{url:"/todo-list-vue/js/app.228b3807.js",revision:null},{url:"/todo-list-vue/js/chunk-vendors.c51c94d8.js",revision:null},{url:"/todo-list-vue/manifest.json",revision:"cbe85f0ca2484458e19eaf0b672a1c8d"},{url:"/todo-list-vue/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
