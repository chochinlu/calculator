(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){},11:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),l=t(3),r=t.n(l),o=t(1),i=(t(10),function(e){return c.a.createElement("div",{className:"h-25 flex justify-center"},e.children)}),u=function(e){var n=e.children,t=e.width,a=void 0===t?"25":t,l=e.bg,r=void 0===l?"bg-washed-green":l,o=e.onClick,i="w-".concat(a," ").concat(r," pa3 tc helvetica black-70 b--solid b--white-90 pointer ");return c.a.createElement("div",{className:i,onClick:o},c.a.createElement("h1",{className:"f1"},n))},m=function(e){return c.a.createElement(u,{bg:"bg-yellow",onClick:e.onClick},e.children)},s=function(e){var n=e.children,t=e.onClick;return c.a.createElement("div",{className:"w-100 pr3 bg-lightest-blue tr helvetica black-70 b--solid b--white-90",onClick:t},c.a.createElement("h1",{className:"f1-l f1-m"},n))},f="ADD",E="MINUS",d="MULTIPLY",k="DIVIDE",h=function(){var e=Object(a.useState)(0),n=Object(o.a)(e,2),t=n[0],l=n[1],r=Object(a.useState)(!1),h=Object(o.a)(r,2),b=h[0],w=h[1],C=Object(a.useState)(null),v=Object(o.a)(C,2),p=v[0],g=v[1],j=Object(a.useState)(null),O=Object(o.a)(j,2),y=O[0],N=O[1],S=function(e){(0!==t||y)&&g(e)},I=function(e){var n=p||y?{target:y,handle:N}:{target:t,handle:l},a=n.target,c=n.handle;c(0!==a&&a?b?a.toString().split("").includes(".")?parseFloat("".concat(a).concat(e)):parseFloat("".concat(a,".").concat(e)):10*a+e:e)};return c.a.createElement("div",{className:"flex flex-column vh-100"},c.a.createElement(i,null,c.a.createElement(s,null,y||t)),c.a.createElement(i,null,c.a.createElement(m,{onClick:function(e){l(0),N(null),g(null),w(!1)}},"AC"),c.a.createElement(m,{onClick:function(){l(-t)}},"+/-"),c.a.createElement(m,{onClick:function(){l(.01*t)}},"%"),c.a.createElement(m,{onClick:function(){return S(k)}},"\xf7")),c.a.createElement(i,null,[7,8,9].map(function(e){return c.a.createElement(u,{key:e,onClick:function(){return I(e)}},e)}),c.a.createElement(m,{onClick:function(){return S(d)}},"X")),c.a.createElement(i,null,[4,5,6].map(function(e){return c.a.createElement(u,{key:e,onClick:function(){return I(e)}},e)}),c.a.createElement(m,{onClick:function(){return S(E)}},"-")),c.a.createElement(i,null,[1,2,3].map(function(e){return c.a.createElement(u,{key:e,onClick:function(){return I(e)}},e)}),c.a.createElement(m,{onClick:function(){return S(f)}},"+")),c.a.createElement(i,null,c.a.createElement(u,{width:50,onClick:function(){return I(0)}},"0"),c.a.createElement(u,{onClick:function(){b||w(!b)}},"."),c.a.createElement(m,{onClick:function(){p&&y&&(p===f&&l(parseFloat(t)+parseFloat(y)),p===E&&l(t-y),p===d&&l(t*y),p===k&&l(t/y),N(null),g(null))}},"=")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,n,t){e.exports=t(11)}},[[4,1,2]]]);
//# sourceMappingURL=main.5cb8a272.chunk.js.map