!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=(e,t,n,o)=>({getTitle:()=>e,getDescription:()=>t,getDueDate:()=>n,getPriority:()=>o,getStatus:()=>!1,doTask:()=>(void 0).status=!0});var l=e=>{const t=[];return{getTitle:()=>e,addTodo:e=>t.push(e),getTodos:()=>t}};var d=e=>{const t=document.querySelector("#detail");let n=t.lastElementChild;for(;n;)t.removeChild(t.lastElementChild),n=t.lastElementChild;if(e){const n=document.createElement("h3");n.textContent=e.getTitle(),t.appendChild(n)}else{const e=document.createElement("h2");e.textContent="Create a Todo to see details!",t.appendChild(e)}};const r=e=>{let t=document.querySelector("#main"),n=t.lastElementChild;for(;n;)t.removeChild(t.lastElementChild),n=t.lastElementChild;const o=document.createElement("h2");o.textContent=e.getTitle(),t.appendChild(o);const l=document.createElement("ul");t.appendChild(l);let i=e.getTodos();for(let e=0;e<i.length;e++){let t=document.createElement("li");t.textContent=i[e].getTitle(),l.appendChild(t),t.addEventListener("click",()=>{d(i[e])})}let a=document.createElement("input");a.setAttribute("placeholder","+ Add New"),l.appendChild(a),a.addEventListener("keydown",t=>{if(13===t.keyCode){let t=todo(a.value);e.addTodo(t),l.removeChild(a),r(e)}})};var i=r;const a=e=>{const t=document.querySelector("#sidebar ul");let n=t.lastElementChild;for(;n;)t.removeChild(t.lastElementChild),n=t.lastElementChild;for(let n=0;n<e.length;n++){let o=document.createElement("li");o.textContent=e[n].getTitle(),t.appendChild(o),o.addEventListener("click",()=>{i(e[n]),console.log(e[n].getTodos()[0]),d(e[n].getTodos()[0])})}let o=document.createElement("input");o.setAttribute("placeholder","+ Add New"),t.appendChild(o),o.addEventListener("keydown",n=>{if(13===n.keyCode){let n=l(o.value);e.push(n),t.removeChild(o),a(e)}})};var u=a;let s=[];const c=l("Clean the house"),h=l("Clean the garage");s.push(c),s.push(h);const p=o("Take out the trash","take out the trash","May 1","High"),m=o("Do the dishes","Do the dishes","May 1","High");c.addTodo(p),c.addTodo(m),u(s),i(s[0]),d(s[0].getTodos()[0])}]);