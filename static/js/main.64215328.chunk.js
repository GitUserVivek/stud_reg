(this.webpackJsonpstud_reg=this.webpackJsonpstud_reg||[]).push([[0],{19:function(e,t,n){},37:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(31),j=n.n(s),i=(n(37),n(9)),d=n(8),r=n(2),l=(n(19),n(0));function b(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"heading",children:" REGISTRATION FORM  "}),Object(l.jsxs)("form",{action:"https://mrunkn.000webhostapp.com/PHP/Stud_Reg/StoreData.php",method:"POST",children:[Object(l.jsx)("label",{children:"name        "}),"  ",Object(l.jsx)("input",{name:"name",type:"text"}),Object(l.jsx)("label",{children:"dob         "}),"  ",Object(l.jsx)("input",{name:"dob",type:"date"}),Object(l.jsx)("label",{children:"gender      "}),"  ",Object(l.jsx)("input",{name:"gender",type:"text"}),Object(l.jsx)("label",{children:"email       "}),"  ",Object(l.jsx)("input",{name:"email",type:"text"}),Object(l.jsx)("label",{children:"address     "}),"  ",Object(l.jsx)("input",{name:"address",type:"text"}),Object(l.jsx)("label",{children:"department  "}),"  ",Object(l.jsx)("input",{name:"department",type:"text"}),Object(l.jsx)("label",{children:"course      "}),"  ",Object(l.jsx)("input",{name:"course",type:"text"}),Object(l.jsx)("label",{children:"mobile      "}),"  ",Object(l.jsx)("input",{name:"mobile",type:"number"}),Object(l.jsx)("input",{name:"action",value:"AddData",type:"hidden"}),Object(l.jsx)("button",{type:"submit",children:"Submit "}),Object(l.jsx)(d.b,{exact:!0,to:"/AdminAuth",className:"AdminButtom",children:"Admin Login "})]})]})}var u=n(11),h=n.n(u),O=n(15),o=n(16),p=n.n(o);n(63);function x(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),j=Object(i.a)(s,2),r=j[0],b=j[1];return Object(c.useEffect)((function(){function e(){return(e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://mrunkn.000webhostapp.com/PHP/Stud_Reg/Data.php");case 2:t=(t=e.sent).data,a(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(l.jsxs)("div",{className:"AdminPanel",children:[Object(l.jsxs)("div",{className:"Top",children:["  ",Object(l.jsxs)("div",{className:"heading",children:["admin panel   ",Object(l.jsx)(d.b,{exact:!0,to:"/AdminAuth",className:"AdminButtom",children:"LogOut "}),"  "]}),Object(l.jsxs)("div",{className:"search",children:[" ",Object(l.jsx)("input",{type:"text",placeholder:"search",onChange:function(e){b(e.target.value)}})," "]})," "]}),Object(l.jsx)("div",{className:"content",children:Object(l.jsx)("table",{children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{className:"columns",children:[Object(l.jsx)("td",{children:"SR"}),Object(l.jsx)("td",{children:"NAME"}),Object(l.jsx)("td",{children:"DEPARTMENT"}),Object(l.jsx)("td",{children:"COURSE"}),Object(l.jsx)("td",{children:"DELETE"})]}),n.map((function(e){return r?e.NAME.includes(r)?Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.SR}),Object(l.jsx)("td",{children:e.NAME}),Object(l.jsx)("td",{children:e.DEPARTMENT}),Object(l.jsx)("td",{children:e.COURSE})," ",Object(l.jsx)("td",{className:"operation",children:Object(l.jsxs)("form",{action:"https://mrunkn.000webhostapp.com/PHP/Stud_Reg/StoreData.php",method:"POST",children:[Object(l.jsx)("input",{name:"action",defaultValue:"DeleteData",type:"hidden"}),Object(l.jsx)("input",{name:"index",defaultValue:e.SR,type:"hidden"}),Object(l.jsx)("input",{type:"SUBMIT"})]})})]},e.SR):null:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.SR}),Object(l.jsx)("td",{children:e.NAME}),Object(l.jsx)("td",{children:e.DEPARTMENT}),Object(l.jsx)("td",{children:e.COURSE}),Object(l.jsx)("td",{className:"operation",children:Object(l.jsxs)("form",{action:"https://mrunkn.000webhostapp.com/PHP/Stud_Reg/StoreData.php",method:"POST",children:[Object(l.jsx)("input",{name:"action",defaultValue:"DeleteData",type:"hidden"}),Object(l.jsx)("input",{name:"index",defaultValue:e.SR,type:"hidden"}),Object(l.jsx)("input",{type:"SUBMIT",defaultValue:"DELETE"})]})})]},e.SR)})),Object(l.jsx)("tr",{children:Object(l.jsx)("td",{className:"operation",children:Object(l.jsxs)("form",{action:"https://mrunkn.000webhostapp.com/PHP/Stud_Reg/StoreData.php",method:"POST",children:[Object(l.jsx)("input",{name:"action",defaultValue:"TrunketTable",type:"hidden"}),Object(l.jsx)("input",{type:"SUBMIT",defaultValue:"TRUNCATE"})]})})})]})})})]})}function m(e){var t=e.setAccess,n=Object(c.useState)(""),a=Object(i.a)(n,2),s=a[0],j=a[1],r=Object(c.useState)(""),b=Object(i.a)(r,2),u=b[0],o=b[1],x=Object(c.useState)({}),m=Object(i.a)(x,2),f=m[0],S=m[1],A=Object(c.useState)(!1),g=Object(i.a)(A,2),y=g[0],N=g[1];return Object(c.useEffect)((function(){function e(){return(e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://mrunkn.000webhostapp.com/PHP/Stud_Reg/Admin.php");case 2:t=e.sent,S(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(l.jsxs)("div",{className:"AdminAuth",children:[Object(l.jsx)("div",{className:"heading",children:" REGISTRATION FORM  "}),Object(l.jsxs)("form",{children:[Object(l.jsx)("label",{children:"  Usrename  "}),"  ",Object(l.jsx)("input",{name:"username",onChange:function(e){j(e.target.value)},type:"text"}),Object(l.jsx)("label",{children:"  Password  "}),"  ",Object(l.jsx)("input",{name:"password",onChange:function(e){o(e.target.value)},type:"text"}),Object(l.jsx)("input",{name:"action",value:"fetchData",type:"hidden"}),Object(l.jsx)(d.b,{exact:!0,to:y?"/Adminpanel":"/AdminAuth",className:"AdminButtom",children:Object(l.jsx)("button",{type:"button",onFocus:function(){return N(function(e,t,n,c){return e===n[0].USERNAME&&t===n[0].PASSWORD?(c(!0),!0):(c(!1),!1)}(s,u,f,t))},children:"Submit"})}),Object(l.jsx)(d.b,{exact:!0,to:"/User",className:"AdminButtom",children:"User Form "})]})]})}function f(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(l.jsx)("div",{className:"Body",children:Object(l.jsxs)(d.a,{children:[Object(l.jsxs)(r.a,{exact:!0,path:"/User",children:[" ",Object(l.jsx)(b,{})," "]}),Object(l.jsxs)(r.a,{exact:!0,path:"/AdminAuth",children:[" ",Object(l.jsx)(m,{setAccess:a})," "]}),Object(l.jsxs)(r.a,{exact:!0,path:"/Adminpanel",children:[" ",n?Object(l.jsx)(x,{}):Object(l.jsx)(d.b,{exact:!0,to:"/AdminAuth",className:"AdminButtom",children:"Try Again "})]})]})})}var S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,j=t.getTTFB;n(e),c(e),a(e),s(e),j(e)}))};j.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),S()}},[[64,1,2]]]);
//# sourceMappingURL=main.64215328.chunk.js.map