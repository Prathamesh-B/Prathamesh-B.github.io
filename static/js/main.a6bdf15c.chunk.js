(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){},40:function(e,n,t){},41:function(e,n,t){},42:function(e,n,t){},43:function(e,n,t){},44:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var c=t(10),i=t(3),a=t(1),s=t(0),o=Object(a.createContext)(),l=function(e){var n=e.children,t=Object(a.useState)("dark"),c=Object(i.a)(t,2),l=c[0],r=c[1];Object(a.useEffect)((function(){"dark"===localStorage.getItem("themeName")&&r("dark")}),[]);return Object(s.jsx)(o.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),r(e)}}],children:n})},r="https://prathamesh-b.github.io/",j="Pb",h="Prathamesh Bhalekar",d="I enjoy writing code, learning new technology, making new projects.",b="https://example.com",m=[{name:"chess-stats-readme",description:"GitHub Action allows you to add chess.com ratings to your README file.",tag:["Python","Github-Action","Docker"],sourceCode:"https://github.com/Prathamesh-B/chess-stats-readme",livePreview:"https://github.com/Prathamesh-B/",image:"img/chess.webp"},{name:"inford",description:"inford is a python library for sending discord webhooks.",tag:["Python","Discord","Webhook"],sourceCode:"https://github.com/Prathamesh-B/inford",livePreview:"https://pypi.org/project/inford/",image:"img/inford.webp"}],u=[{name:"Python",icon:"devicon-python-plain"},{name:"React",icon:"devicon-react-plain"},{name:"JavaScript",icon:"devicon-javascript-plain"},{name:"HTML",icon:"devicon-html5-plain"},{name:"CSS",icon:"devicon-css3-plain"},{name:"TypeScript",icon:"devicon-typescript-plain"},{name:"Flask",icon:"devicon-flask-plain"},{name:"C++",icon:"devicon-cplusplus-plain"}],f=[{name:"Git",icon:"devicon-git-plain"},{name:"VS Code",icon:"devicon-vscode-plain"},{name:"MySQL",icon:"devicon-mysql-plain"},{name:"Photoshop",icon:"devicon-photoshop-plain"},{name:"Linux",icon:"devicon-linux-plain"},{name:"Node",icon:"devicon-nodejs-plain"},{name:"Docker",icon:"devicon-docker-plain"},{name:"MongoDB",icon:"devicon-mongodb-plain"}],p="prathameshb1704@gmail.com",O=t(15),v=t.n(O),x=t(13),g=t.n(x),k=t(17),N=t.n(k),w=t(16),_=t.n(w),y=(t(26),function(){var e=Object(a.useContext)(o),n=Object(i.a)(e,1)[0],t=n.themeName,c=n.toggleTheme,l=Object(a.useState)(!1),r=Object(i.a)(l,2),j=r[0],h=r[1],d=function(){return h(!j)};return Object(a.useEffect)((function(){document.querySelector("body").style.overflowY=j?"hidden":"auto"}),[j]),Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[m.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,u.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,f.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#tools",onClick:d,className:"link link--nav",children:"Tools"})}):null,p?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme noSelect","aria-label":"toggle theme",children:"dark"===t?Object(s.jsx)(g.a,{}):Object(s.jsx)(v.a,{})}),Object(s.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger noSelect","aria-label":"toggle navigation",children:j?Object(s.jsx)(_.a,{}):Object(s.jsx)(N.a,{})})]})}),S=(t(32),function(){var e=r,n=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link noSelect",style:{fontFamily:"Mohave"},children:n}):n}),Object(s.jsx)(y,{})]})}),P=(t(33),function(){var e=h,n=d,t=b;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsx)("br",{}),Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),Object(s.jsxs)("p",{className:"about__desc",children:[n&&n," ",t&&Object(s.jsx)("a",{href:t,className:"noSelect",children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline resume-btn",children:"Resume"})})]})]})}),C=t(4),E=t.n(C),T=t(5),W=t.n(T),B=t(18),L=t.n(B),z=t(19),A=t.n(z),I=(t(37),function(e){var n=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("img",{alt:"Project Img",src:n.image}),Object(s.jsx)("h3",{children:n.name}),Object(s.jsx)("p",{className:"project__description",children:n.description}),n.tag&&Object(s.jsx)("ul",{className:"project__tag",children:n.tag.map((function(e){return Object(s.jsx)("li",{className:"project__tag-item",children:e},W()())}))}),n.sourceCode&&Object(s.jsx)("a",{title:"Source Code",target:"_blank",rel:"noreferrer",href:n.sourceCode,"aria-label":"source code",className:"link link--icon noSelect",children:Object(s.jsx)(L.a,{})}),n.livePreview&&Object(s.jsx)("a",{title:"Preview",target:"_blank",rel:"noreferrer",href:n.livePreview,"aria-label":"live preview",className:"link link--icon noSelect",children:Object(s.jsx)(A.a,{})})]})}),M=(t(38),function(){return m.length?Object(s.jsx)(E.a,{bottom:!0,duration:2e3,children:Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:m.map((function(e){return Object(s.jsx)(I,{project:e},W()())}))})]})}):null}),D=(t(39),function(){return u.length?Object(s.jsx)(E.a,{children:Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:u.map((function(e){return Object(s.jsxs)("li",{className:"skills__list-item btn btn--plain",children:[Object(s.jsx)("i",{className:"mr2 ".concat(e.icon)}),e.name]},W()())}))})]})}):null}),G=(t(40),function(){return f.length?Object(s.jsx)(E.a,{children:Object(s.jsxs)("section",{className:"section skills",id:"tools",children:[Object(s.jsx)("h2",{className:"section__title",children:"Tools"}),Object(s.jsx)("ul",{className:"skills__list",children:f.map((function(e){return Object(s.jsxs)("li",{className:"skills__list-item btn btn--plain",children:[Object(s.jsx)("i",{className:"mr2 ".concat(e.icon)}),e.name]},W()())}))})]})}):null}),H=(t(41),function(){var e=Object(a.useState)(!1),n=Object(i.a)(e,2),t=n[0],c=n[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),t?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",className:"hvr-bob ",children:Object(s.jsx)("i",{className:"fas fa-arrow-up fa-2x"})})}):null}),R=(t(42),function(){return p?Object(s.jsx)(E.a,{children:Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsxs)("div",{className:"cont-btn",children:[Object(s.jsxs)("a",{className:"btn-contact outline hvr-buzz-out fa-mail mr5 noSelect",href:"mailto:".concat(p),children:[Object(s.jsx)("i",{className:"mr2 fas fa-envelope"}),"Mail"]}),Object(s.jsxs)("a",{className:"btn-contact hvr-buzz-out outline mr5 noSelect",href:"https://github.com/Prathamesh-B",target:"_blank",rel:"noreferrer",children:[Object(s.jsx)("i",{className:"mr2 fab fa-github"}),"GitHub"]}),Object(s.jsxs)("a",{className:"btn-contact hvr-buzz-out outline mr5 noSelect",href:"https://www.linkedin.com/",target:"_blank",rel:"noreferrer",children:[Object(s.jsx)("i",{className:"mr2 fab fa-linkedin"}),"Linkedin"]})]})]})}):null}),J=(t(43),function(){var e=Object(a.useContext)(o),n=Object(i.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(n," app"),children:[Object(s.jsx)(S,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(P,{}),Object(s.jsx)(M,{}),Object(s.jsxs)("div",{className:"SandT",children:[Object(s.jsx)(D,{}),Object(s.jsx)(G,{})]}),Object(s.jsx)(R,{})]}),Object(s.jsx)(H,{})]})}),U=(t(44),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function q(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}Object(c.render)(Object(s.jsx)(l,{children:Object(s.jsx)(J,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");U?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):q(n,e)}))}}()}},[[46,1,2]]]);
//# sourceMappingURL=main.a6bdf15c.chunk.js.map