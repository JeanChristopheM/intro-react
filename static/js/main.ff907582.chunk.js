(this["webpackJsonpintro-react"]=this["webpackJsonpintro-react"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),r=n.n(s),i=(n(12),n(4)),o=n(6),l=n(0),d=function(e){var t=e.handleAdd,n=Object(a.useRef)();return Object(l.jsxs)("form",{className:"main__input",onSubmit:function(e){e.preventDefault();var a=n.current;a.value.length>0?t(a.value):alert("Please enter a task"),a.value=""},children:[Object(l.jsx)("input",{type:"text",name:"todoInput",id:"todoInput",placeholder:"Enter task here",ref:n}),Object(l.jsx)("button",{className:"addBtn",type:"submit",children:"Submit"})]})},u=function(e){var t=e.task,n=e.status,a=e.handleCheckmark,c=e.handleDelete,s=e.id;return Object(l.jsxs)("li",{className:"todo",id:s,children:[Object(l.jsxs)("label",{className:"checkboxContainer",children:[" ",t,Object(l.jsx)("input",{type:"checkbox",name:"todoCheck",className:"todoCheck",checked:n,onChange:function(){return a(s)}}),Object(l.jsx)("span",{className:"checkmark"})]}),Object(l.jsx)("button",{className:"deleteBtn",onClick:function(){return c(s)}})]})},j=function(e){var t=e.data,n=e.handleCheckmark,a=e.handleDelete;return Object(l.jsxs)("div",{className:"main__todolist",children:[Object(l.jsx)("h3",{children:"List of todos"}),Object(l.jsx)("ul",{children:t.length?t.map((function(e){return Object(l.jsx)(u,{task:e.task,status:e.status,handleCheckmark:n,handleDelete:a,id:e.id},e.id)})):"No todos yet..."})]})};var h=function(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("todoList"))),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),r=Object(o.a)(s,2),u=r[0],h=r[1];return n||c([]),Object(a.useEffect)((function(){window.localStorage.setItem("todoList",JSON.stringify(n)),n.filter((function(e){return!0===e.status})).length>0?h(!0):h(!1)}),[n]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h1",{children:"TODOS"})}),Object(l.jsxs)("main",{className:"main",children:[Object(l.jsx)(d,{handleAdd:function(e){var t={task:e,status:!1,id:(new Date).getTime()},a=Object(i.a)(n);a.push(t),c(a)}}),Object(l.jsx)(j,{data:n,handleCheckmark:function(e){var t=Object(i.a)(n),a=t.find((function(t){return t.id===e}));a.status=!a.status,c(t)},handleDelete:function(e){var t=Object(i.a)(n),a=t.findIndex((function(t){return t.id===e}));t.splice(a,1),c(t)}})]}),Object(l.jsx)("footer",{className:"footer",children:u&&Object(l.jsx)("button",{type:"button",className:"deleteDone",onClick:function(){var e=n.filter((function(e){return!1===e.status}));c(e)},children:"Delete done todos"})})]})};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ff907582.chunk.js.map