(this["webpackJsonpform-validation"]=this["webpackJsonpform-validation"]||[]).push([[0],{15:function(e,s,t){},17:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t(6),i=t(2),n=t(4),r=t(3);t(15);var l=function(e){var s={};return e.username||(s.username="UserName is Required"),e.email?/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e.email)||(s.email="this not valid email"):s.email="Email is Required",e.password?e.password.length<4?s.password="Password must be more than 4 characters":e.password.length>10&&(s.password="Password cannot exceed more than 10 characters"):s.password="Password is required",s},j=t(0);function d(){var e=Object(a.useState)({username:"",email:"",password:""}),s=Object(r.a)(e,2),t=s[0],c=s[1],d=Object(a.useState)({}),o=Object(r.a)(d,2),m=o[0],u=o[1],b=Object(a.useState)(!1),O=Object(r.a)(b,2),h=O[0],p=O[1],x=function(e){var s=e.target,a=s.name,r=s.value;console.log(a,r),c(Object(n.a)(Object(n.a)({},t),{},Object(i.a)({},a,r)))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container",children:[0===Object.keys(m).length&&h?Object(j.jsx)("div",{className:"ui message success",children:"Signed in successfully"}):Object(j.jsx)("pre",{children:JSON.stringify(t,void 0,2)}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u(l(t)),p(!0)},children:[Object(j.jsx)("h1",{children:" Login Form "}),Object(j.jsxs)("div",{className:"ui_form",children:[Object(j.jsxs)("div",{className:"ui_field",children:[Object(j.jsx)("lable",{children:"Username"}),Object(j.jsx)("input",{type:"text",name:"username",value:t.username,onChange:x})]}),Object(j.jsx)("p",{children:m.username}),Object(j.jsxs)("div",{className:"ui_field",children:[Object(j.jsx)("lable",{children:"email"}),Object(j.jsx)("input",{type:"text",name:"email",value:t.email,onChange:x})]}),Object(j.jsx)("p",{children:m.email}),Object(j.jsxs)("div",{className:"ui_field",children:[Object(j.jsx)("lable",{children:"password"}),Object(j.jsx)("input",{type:"text",name:"password",value:t.password,onChange:x}),Object(j.jsx)("p",{children:m.password}),Object(j.jsx)("button",{children:" Submit "})]})]})]})]})})}var o=document.getElementById("root");Object(c.createRoot)(o).render(Object(j.jsx)(a.StrictMode,{children:Object(j.jsx)(d,{})}))}},[[17,1,2]]]);
//# sourceMappingURL=main.8519ba1b.chunk.js.map