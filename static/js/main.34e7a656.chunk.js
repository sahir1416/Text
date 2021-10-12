(this["webpackJsonpall-app"]=this["webpackJsonpall-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),l=(a(9),a(2)),o=(a(10),a(0));function i(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{Color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",id:"Text",value:n,style:{backgroundColor:"dark"===e.mode?"black":"white",color:"dark"===e.mode?"white":"black"},onChange:function(e){s(e.target.value)},rows:"8"})}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mb-3 mx-3",onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("Coverted To UpperCase","success")},children:"Convert To Uppercase"}),Object(o.jsx)("button",{type:"submit",className:"btn btn-secondary mb-3",onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("Coverted To LowerCase","success")},children:"Convert To Lowecase"}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mb-3 mx-3",onClick:function(){s(""),e.showAlert("Text Clear","success")},children:"Convert To Clear"}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mb-3 mx-3",onClick:function(){var t=n.charAt(1).toUpperCase(0);s(t+n.slice(1)),e.showAlert("Coverted To Capitalize","success")},children:"Convert To Title"}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mb-3 mx-3",onClick:function(){console.log("I Am Copy");var t=document.getElementById("Text");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied To Clipboard!","success")},children:"Convert To Copy"}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mb-3 mx-3",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert(" Extra Space","success")},children:"Remove Extra Space"})]}),Object(o.jsxs)("div",{className:"container",style:{Color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h2",{children:"Your Text Counting"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length," Minutes To Read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n})]})]})}function b(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#",children:e.aboutText})}),Object(o.jsx)("li",{className:"nav-item"})]}),Object(o.jsxs)("form",{className:"d-flex",children:[Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Search"})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:e.dMode})]})]})]})})}b.defaultProps={title:"Set Title Here",aboutText:"About Text Here"};var d=function(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsxs)("strong",{children:[" ",function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)]})," : ",e.alert.msg]})};var m=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),r=Object(l.a)(s,2),m=r[0],j=r[1],u=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{title:"Text",aboutText:"About Us",mode:a,dMode:"Unable Dark Mode",toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="darkgray",document.body.style.color="white",u("Dark Mode Has Been Enable","success"),document.title="Text - Dark Mode"):(n("light"),document.body.style.backgroundColor="white",document.body.style.color="black",u("Light Mode Has Been Enable","success"),document.title="Text - Light Mode")}}),Object(o.jsx)(d,{alert:m}),Object(o.jsx)("div",{className:"container my-4",children:Object(o.jsx)(i,{showAlert:u,heading:"Enter Text In Here",mode:a})}),Object(o.jsx)("div",{className:"container my-7"})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.34e7a656.chunk.js.map