(function(){"use strict";var o={181:function(o,e,t){var n=t(3751),d=t(641);function r(o,e){const t=(0,d.g2)("router-link"),n=(0,d.g2)("router-view");return(0,d.uX)(),(0,d.CE)("div",null,[(0,d.Lk)("nav",null,[(0,d.bF)(t,{to:"/"},{default:(0,d.k6)((()=>[(0,d.eW)("Todo List")])),_:1})]),(0,d.bF)(n)])}var s=t(6262);const i={},l=(0,s.A)(i,[["render",r]]);var a=l,c=t(3723);(0,c.k)("/todo-list-vue/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(o){console.error("Error during service worker registration:",o)}});var u=t(5220);const p=o=>((0,d.Qi)("data-v-5ab982d0"),o=o(),(0,d.jt)(),o),m={class:"section"},v={class:"container"},f={id:"todo-list"},g=p((()=>(0,d.Lk)("h1",{class:"title"},"To-Do List on Vue",-1))),T={class:"todo-list-items"};function b(o,e,t,n,r,s){const i=(0,d.g2)("AddTodo"),l=(0,d.g2)("TodoItem");return(0,d.uX)(),(0,d.CE)("section",m,[(0,d.Lk)("div",v,[(0,d.Lk)("div",f,[g,(0,d.bF)(i,{onAddTodo:o.addTodo},null,8,["onAddTodo"]),(0,d.Lk)("ul",T,[((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(o.todos,(e=>((0,d.uX)(),(0,d.Wv)(l,{key:e.id,todo:e,onRemoveTodo:t=>o.removeTodo(e.id),onToggleCompleted:t=>o.toggleCompleted(e.id)},null,8,["todo","onRemoveTodo","onToggleCompleted"])))),128))])])])])}var O=t(6278);const h={class:"add-todo"};function k(o,e,t,r,s,i){return(0,d.uX)(),(0,d.CE)("div",h,[(0,d.bo)((0,d.Lk)("input",{type:"text",placeholder:"Add Todo","onUpdate:modelValue":e[0]||(e[0]=e=>o.newTodo=e),onKeyup:e[1]||(e[1]=(0,n.jR)(((...e)=>o.submitTodo&&o.submitTodo(...e)),["enter"]))},null,544),[[n.Jo,o.newTodo]]),(0,d.Lk)("button",{onClick:e[2]||(e[2]=(...e)=>o.submitTodo&&o.submitTodo(...e))},"Add Todo")])}var y=t(953),w=(0,d.pM)({name:"AddTodo",emits:["add-todo"],setup(o,{emit:e}){const t=(0,y.KR)(""),n=()=>{""!==t.value.trim()&&(e("add-todo",t.value),t.value="")};return{newTodo:t,submitTodo:n}}});const A=(0,s.A)(w,[["render",k],["__scopeId","data-v-767ebd81"]]);var C=A,L=t(33);const _={class:"todo-item"};function E(o,e,t,n,r,s){return(0,d.uX)(),(0,d.CE)("li",_,[(0,d.Lk)("span",{class:(0,L.C4)({completed:o.todo.completed}),onClick:e[0]||(e[0]=(...e)=>o.toggleCompleted&&o.toggleCompleted(...e))},(0,L.v_)(o.todo.text),3),(0,d.Lk)("button",{onClick:e[1]||(e[1]=e=>o.$emit("remove-todo"))},"Remove")])}var j=(0,d.pM)({name:"TodoItem",props:{todo:{type:Object,required:!0}},emits:["remove-todo","toggle-completed"],setup(o,{emit:e}){const t=()=>{e("toggle-completed")};return{toggleCompleted:t}}});const x=(0,s.A)(j,[["render",E],["__scopeId","data-v-f1fc0630"]]);var D=x,I=(0,d.pM)({name:"TodoList",components:{AddTodo:C,TodoItem:D},setup(){const o=(0,O.Pj)(),e=(0,d.EW)((()=>o.getters["todo/allTodos"])),t=e=>{o.dispatch("todo/addTodoAsync",e)},n=e=>{o.commit("todo/REMOVE_TODO",e)},r=e=>{o.commit("todo/TOGGLE_TODO",e)};return{todos:e,addTodo:t,removeTodo:n,toggleCompleted:r}}});const S=(0,s.A)(I,[["render",b],["__scopeId","data-v-5ab982d0"]]);var R=S;const F=[{path:"/",name:"todolist",component:R}],N=(0,u.aE)({history:(0,u.LA)("/todo-list-vue/"),routes:F});var V=N;t(4114);const X=[{id:1,text:"Learn Vue.js",completed:!1},{id:2,text:"Learn Vue Router",completed:!1},{id:3,text:"Learn Vuex",completed:!1}],J=localStorage.getItem("todos"),M={todos:J?JSON.parse(J):X},G={todos:M.todos},K={allTodos:o=>o.todos,completedTodos:o=>o.todos.filter((o=>o.completed)),activeTodos:o=>o.todos.filter((o=>!o.completed))},P={ADD_TODO(o,e){o.todos.push(e),localStorage.setItem("todos",JSON.stringify(o.todos))},REMOVE_TODO(o,e){o.todos=o.todos.filter((o=>o.id!==e)),localStorage.setItem("todos",JSON.stringify(o.todos))},TOGGLE_TODO(o,e){o.todos=o.todos.map((o=>o.id===e?{...o,completed:!o.completed}:o)),localStorage.setItem("todos",JSON.stringify(o.todos))}},W={addTodoAsync({commit:o},e){const t={id:Date.now(),text:e,completed:!1};setTimeout((()=>{o("ADD_TODO",t)}),1e3)}},q={namespaced:!0,state:G,getters:K,mutations:P,actions:W},$=(0,O.y$)({modules:{todo:q}});var B=$;(0,n.Ef)(a).use(B).use(V).mount("#app")}},e={};function t(n){var d=e[n];if(void 0!==d)return d.exports;var r=e[n]={exports:{}};return o[n].call(r.exports,r,r.exports,t),r.exports}t.m=o,function(){var o=[];t.O=function(e,n,d,r){if(!n){var s=1/0;for(c=0;c<o.length;c++){n=o[c][0],d=o[c][1],r=o[c][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(t.O).every((function(o){return t.O[o](n[l])}))?n.splice(l--,1):(i=!1,r<s&&(s=r));if(i){o.splice(c--,1);var a=d();void 0!==a&&(e=a)}}return e}r=r||0;for(var c=o.length;c>0&&o[c-1][2]>r;c--)o[c]=o[c-1];o[c]=[n,d,r]}}(),function(){t.d=function(o,e){for(var n in e)t.o(e,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)}}(),function(){var o={524:0};t.O.j=function(e){return 0===o[e]};var e=function(e,n){var d,r,s=n[0],i=n[1],l=n[2],a=0;if(s.some((function(e){return 0!==o[e]}))){for(d in i)t.o(i,d)&&(t.m[d]=i[d]);if(l)var c=l(t)}for(e&&e(n);a<s.length;a++)r=s[a],t.o(o,r)&&o[r]&&o[r][0](),o[r]=0;return t.O(c)},n=self["webpackChunklearn_vue_app"]=self["webpackChunklearn_vue_app"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(181)}));n=t.O(n)})();
//# sourceMappingURL=app.cca61d30.js.map