(this["webpackJsonpintro-react"]=this["webpackJsonpintro-react"]||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),c=a(7),i=a.n(c),o=(a(14),a(8)),r=a(5),d=a(9),h=a(6),l=a(0),j=function(t){var e=t.handleAdd,a=t.onInputChange;return Object(l.jsxs)("div",{className:"main__input",children:[Object(l.jsx)("input",{type:"text",name:"todoInput",id:"todoInput",placeholder:"Enter task here",onChange:a}),Object(l.jsx)("button",{className:"addBtn",onClick:e,children:"Add todo"})]})},u=function(t){var e=t.task,a=t.status,n=t.handleCheckmark,s=t.id;return Object(l.jsx)("li",{className:"todo",id:s,children:Object(l.jsxs)("label",{className:"checkboxContainer",children:[" ",e,Object(l.jsx)("input",{type:"checkbox",name:"todoCheck",className:"todoCheck",checked:a,onChange:n}),Object(l.jsx)("span",{className:"checkmark"})]})})},b=function(t){var e=t.data,a=t.handleCheckmark;return Object(l.jsxs)("div",{className:"main__todolist",children:[Object(l.jsx)("h3",{children:"List of todos"}),Object(l.jsxs)("ul",{children:[e.length&&e.map((function(t,e){return Object(l.jsx)(u,{task:t.task,status:t.status,handleCheckmark:a,id:t.id},t.id)})),!e.length&&"No todos yet..."]})]})};var O=function(){var t=Object(n.useState)(0),e=Object(h.a)(t,2),a=e[0],s=e[1],c=Object(n.useState)(JSON.parse(localStorage.getItem("todoList"))),i=Object(h.a)(c,2),u=i[0],O=i[1],m=function(t){O(t),localStorage.setItem("todoList",JSON.stringify(t))};u||m([]);var p=function t(e,a){Object(d.a)(this,t),this.task=e,this.status=a,this.id=(new Date).getTime()};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h1",{children:"todos"})}),Object(l.jsxs)("main",{className:"main",children:[Object(l.jsx)(j,{onInputChange:function(t){s(t.target.value)},handleAdd:function(){var t=new p(a,!1),e=Object(r.a)(u);e.push(t),m(e)}}),Object(l.jsx)(b,{data:u,handleCheckmark:function(t){var e,a=Object(r.a)(u),n=Object(o.a)(a);try{for(n.s();!(e=n.n()).done;){var s=e.value;s.id===parseInt(t.target.parentNode.parentNode.id)&&(s.status=!s.status)}}catch(c){n.e(c)}finally{n.f()}m(a)}})]})]})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.93d8ef09.chunk.js.map