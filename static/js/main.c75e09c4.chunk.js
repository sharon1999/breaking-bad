(this["webpackJsonpbreaking-bad"]=this["webpackJsonpbreaking-bad"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(5),s=c.n(a),i=c(4),j=c.n(i),d=c(6),o=c(2),b=(c(12),c(0));var l=function(e){var t=e.data;return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"card-inner",children:[Object(b.jsx)("div",{className:"card-front",children:Object(b.jsx)("img",{src:t.img,alt:""})}),Object(b.jsxs)("div",{className:"card-back",children:[Object(b.jsx)("h1",{children:t.name}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Birthday:"})," ",t.birthday]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Status:"})," ",t.status]})]})]})]})})})},u=function(e){var t=e.data;return Object(b.jsx)("div",{children:Object(b.jsx)("section",{className:"cards",children:t.map((function(e){return Object(b.jsx)(l,{data:e},e.char_id)}))})})},h=c.p+"static/media/logo.e6ecab44.png";var O=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("header",{className:"center",children:Object(b.jsx)("img",{src:h,alt:""})})})},x=function(e){var t=e.getQuery,c=Object(n.useState)(""),r=Object(o.a)(c,2),a=r[0],s=r[1];return Object(b.jsx)("section",{className:"search",children:Object(b.jsx)("input",{type:"text",value:a,className:"form-control",placeholder:"Search characters",onChange:function(e){return c=e.target.value,s(c),void t(c);var c},autoFocus:!0})})};var v=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(o.a)(a,2),i=s[0],l=s[1];Object(n.useEffect)((function(){h()}),[i]);var h=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.breakingbadapi.com/api/characters?name=".concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c),console.log(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{}),Object(b.jsx)(x,{getQuery:function(e){return l(e)}}),Object(b.jsx)(u,{data:c})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),f()}},[[14,1,2]]]);
//# sourceMappingURL=main.c75e09c4.chunk.js.map