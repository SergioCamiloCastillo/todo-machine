(this["webpackJsonptodo-machine"]=this["webpackJsonptodo-machine"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(4),a=n.n(r),s=(n(12),n(13),n(6)),l=n(2);var u=n(0),i=o.a.createContext();function d(e){var t=function(e,t){var n=Object(c.useState)(!0),o=Object(l.a)(n,2),r=o[0],a=o[1],s=Object(c.useState)(!1),u=Object(l.a)(s,2),i=u[0],d=u[1],j=Object(c.useState)(t),O=Object(l.a)(j,2),b=O[0],h=O[1];return Object(c.useEffect)((function(){setTimeout((function(){try{var n,c=localStorage.getItem(e);c?n=JSON.parse(c):(localStorage.setItem(e,JSON.stringify(t)),n=[]),h(n),a(!1)}catch(o){d(o)}}),1e3)})),{item:b,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),h(t)}catch(c){h(c)}},loading:r,error:i}}("TODOS_V1",[]),n=t.item,o=t.saveItem,r=t.loading,a=t.error,d=Object(c.useState)(""),j=Object(l.a)(d,2),O=j[0],b=j[1],h=Object(c.useState)(!1),x=Object(l.a)(h,2),f=x[0],m=x[1],p=n.filter((function(e){return!!e.completed})).length,v=n.length,g=[];g=!O.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=O.toLowerCase();return t.includes(n)}));return Object(u.jsx)(i.Provider,{value:{completedTodos:p,totalTodos:v,searchValue:O,setSearchValue:b,searchedTodos:g,deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c.splice(t,1),o(c)},completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c[t].completed=!0,o(c)},loading:r,error:a,openModal:f,setOpenModal:m,addTodo:function(e){var t=Object(s.a)(n);t.push({completed:!1,text:e}),o(t)}},children:e.children})}function j(){var e=Object(c.useContext)(i),t=e.completedTodos,n=e.totalTodos;return Object(u.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",t," de ",n," TODOs"]})}n(15);function O(e){return Object(u.jsxs)("li",{className:"TodoItem",children:[Object(u.jsx)("span",{onClick:e.onComplete,className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),children:"\u221a"}),Object(u.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(u.jsx)("span",{onClick:e.onDelete,className:"Icon Icon-delete",children:"X"})]})}n(16);function b(e){return Object(u.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(17);function h(){var e=Object(c.useContext)(i),t=e.searchValue,n=e.setSearchValue;return Object(u.jsx)("input",{value:t,onChange:function(e){n(e.target.value),console.log(e.target.value)},className:"TodoSearch",placeholder:"Busca una tarea..."})}n(18);function x(e){return Object(u.jsx)("section",{children:Object(u.jsx)("ul",{children:e.children})})}function f(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(c.useContext)(i),a=r.addTodo,s=r.setOpenModal;return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(n),s(!1)},children:[Object(u.jsx)("label",{children:"..."}),Object(u.jsx)("textarea",{value:n,onChange:function(e){o(e.target.value)},placeholder:"Escribe la tarea"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{type:"button",onClick:function(){s(!1)},children:"Cancelar"}),Object(u.jsx)("button",{type:"submit",children:"A\xf1adir"})]})]})}n(19);function m(e){var t=e.children;return a.a.createPortal(Object(u.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}function p(){var e=Object(c.useContext)(i),t=e.error,n=e.loading,r=e.searchedTodos,a=e.completeTodo,s=e.deleteTodo,l=e.openModal,d=e.setOpenModal;return Object(u.jsxs)(o.a.Fragment,{children:[Object(u.jsx)(j,{}),Object(u.jsx)(h,{}),Object(u.jsxs)(x,{children:[t&&Object(u.jsx)("p",{children:"Desesp\xe9rate, hubo un error..."}),n&&Object(u.jsx)("p",{children:"Estamos cargando, no desesperes..."}),!n&&!r.length&&Object(u.jsx)("p",{children:"\xa1Crea tu primer TODO!"}),r.map((function(e){return Object(u.jsx)(O,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return s(e.text)}},e.text)}))]}),!!l&&Object(u.jsx)(m,{children:Object(u.jsx)(f,{})}),Object(u.jsx)(b,{setOpenModal:d})]})}var v=function(){return Object(u.jsx)(d,{children:Object(u.jsx)(p,{})})};a.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.5e14d078.chunk.js.map