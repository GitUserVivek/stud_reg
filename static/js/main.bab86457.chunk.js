(this.webpackJsonpstud_reg=this.webpackJsonpstud_reg||[]).push([[0],{19:function(e,t,n){},37:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(31),j=n.n(a),i=(n(37),n(9)),r=n(8),d=n(2),b=(n(19),n(0));function l(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"heading",children:" REGISTRATION FORM  "}),Object(b.jsxs)("form",{action:"https://mrunkn.000webhostapp.com/PHP/Stud_Reg/StoreData.php",method:"POST",children:[Object(b.jsx)("label",{children:"name        "}),"  ",Object(b.jsx)("input",{name:"name",type:"text"}),Object(b.jsx)("label",{children:"dob         "}),"  ",Object(b.jsx)("input",{name:"dob",type:"date"}),Object(b.jsx)("label",{children:"gender      "}),"  ",Object(b.jsx)("input",{name:"gender",type:"text"}),Object(b.jsx)("label",{children:"email       "}),"  ",Object(b.jsx)("input",{name:"email",type:"text"}),Object(b.jsx)("label",{children:"address     "}),"  ",Object(b.jsx)("input",{name:"address",type:"text"}),Object(b.jsx)("label",{children:"department  "}),"  ",Object(b.jsx)("input",{name:"department",type:"text"}),Object(b.jsx)("label",{children:"course      "}),"  ",Object(b.jsx)("input",{name:"course",type:"text"}),Object(b.jsx)("label",{children:"mobile      "}),"  ",Object(b.jsx)("input",{name:"mobile",type:"number"}),Object(b.jsx)("input",{name:"action",value:"AddData",type:"hidden"}),Object(b.jsx)("button",{type:"submit",children:"Submit "}),Object(b.jsx)(r.b,{exact:!0,to:"/AdminAuth",className:"AdminButtom",children:"Admin Login "})]})]})}var u=n(11),O=n.n(u),h=n(15),x=n(16),o=n.n(x);n(63);function m(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),j=Object(i.a)(a,2),d=j[0],l=j[1];return Object(c.useEffect)((function(){function e(){return(e=Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://mrunkn.000webhostapp.com/PHP/Stud_Reg/Data.php");case 2:t=(t=e.sent).data,s(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsxs)("div",{className:"AdminPanel",children:[Object(b.jsxs)("div",{className:"Top",children:["  ",Object(b.jsxs)("div",{className:"heading",children:["admin panel   ",Object(b.jsx)(r.b,{exact:!0,to:"/AdminAuth",className:"AdminButtom",children:"LogOut "}),"  "]}),Object(b.jsxs)("div",{className:"search",children:[" ",Object(b.jsx)("input",{type:"text",placeholder:"search",onChange:function(e){l(e.target.value)}})," "]})," "]}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("table",{children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{className:"columns",children:[Object(b.jsx)("td",{children:"SR"}),Object(b.jsx)("td",{children:"NAME"}),Object(b.jsx)("td",{children:"DEPARTMENT"}),Object(b.jsx)("td",{children:"COURSE"})]}),n.map((function(e){return d?e.NAME.includes(d)?Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.SR}),Object(b.jsx)("td",{children:e.NAME}),Object(b.jsx)("td",{children:e.DEPARTMENT}),Object(b.jsx)("td",{children:e.COURSE})]},e.SR):null:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.SR}),Object(b.jsx)("td",{children:e.NAME}),Object(b.jsx)("td",{children:e.DEPARTMENT}),Object(b.jsx)("td",{children:e.COURSE})]},e.SR)}))]})})})]})}function p(e){var t=e.setAccess,n=Object(c.useState)(""),s=Object(i.a)(n,2),a=s[0],j=s[1],d=Object(c.useState)(""),l=Object(i.a)(d,2),u=l[0],x=l[1],m=Object(c.useState)({}),p=Object(i.a)(m,2),A=p[0],f=p[1],S=Object(c.useState)(!1),g=Object(i.a)(S,2),v=g[0],N=g[1];return Object(c.useEffect)((function(){function e(){return(e=Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://mrunkn.000webhostapp.com/PHP/Stud_Reg/Admin.php");case 2:t=e.sent,f(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsxs)("div",{className:"AdminAuth",children:[Object(b.jsx)("div",{className:"heading",children:" REGISTRATION FORM  "}),Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{children:"  Usrename  "}),"  ",Object(b.jsx)("input",{name:"username",onChange:function(e){j(e.target.value)},type:"text"}),Object(b.jsx)("label",{children:"  Password  "}),"  ",Object(b.jsx)("input",{name:"password",onChange:function(e){x(e.target.value)},type:"text"}),Object(b.jsx)("input",{name:"action",value:"fetchData",type:"hidden"}),Object(b.jsx)(r.b,{exact:!0,to:v?"/Adminpanel":"/AdminAuth",className:"AdminButtom",children:Object(b.jsx)("button",{type:"button",onFocus:function(){return N(function(e,t,n,c){return e===n[0].USERNAME&&t===n[0].PASSWORD?(c(!0),!0):(c(!1),!1)}(a,u,A,t))},children:"Submit"})}),Object(b.jsx)(r.b,{exact:!0,to:"/User",className:"AdminButtom",children:"User Form "})]})]})}function A(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(b.jsx)("div",{className:"Body",children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(d.a,{to:"/User",children:"  "}),Object(b.jsxs)(d.b,{exact:!0,path:"/User",children:[" ",Object(b.jsx)(l,{})," "]}),Object(b.jsxs)(d.b,{exact:!0,path:"/AdminAuth",children:[" ",Object(b.jsx)(p,{setAccess:s})," "]}),Object(b.jsxs)(d.b,{exact:!0,path:"/Adminpanel",children:[" ",n?Object(b.jsx)(m,{}):Object(b.jsx)(r.b,{exact:!0,to:"/AdminAuth",className:"AdminButtom",children:"Try Again "})]})]})})}var f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,j=t.getTTFB;n(e),c(e),s(e),a(e),j(e)}))};j.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(A,{})}),document.getElementById("root")),f()}},[[64,1,2]]]);
//# sourceMappingURL=main.bab86457.chunk.js.map