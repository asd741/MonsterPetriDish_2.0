(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(154),o=n(7),c=n.n(o),u=(n(307),function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){return r.a.createElement("div",{className:"book-wrapper"},r.a.createElement("h2",{class:"book-cover-title"},"遊戲手冊"))},t}(a.Component));t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(u,null))}},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(144),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(146),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},152:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(52),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},153:function(e,t,n){},154:function(e,t,n){"use strict";var a=n(151),r=n(0),i=n.n(r),o=n(4),c=n.n(o),u=n(145),l=n(165),s=n(148),d={testuser:"asd741"};var f={bannerPcFirstRender:!1};var p=Object(s.b)({userReducer:function(e,t){return void 0===e&&(e=d),e},pageReducer:function(e,t){return void 0===e&&(e=f),e}}),m=n(171),h=n(170),y=n.n(h),v=(n(153),n(164)),g=Object(s.c)(p),w=function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return window.onclick=function(){y.a.get("http://localhost:9000/").then(function(e,t){console.log(e)})},i.a.createElement(l.a,{store:g},i.a.createElement(i.a.Fragment,null,i.a.createElement(v.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"魔物培養官網")),i.a.createElement(m.a,{type:"scale"},i.a.createElement("div",{className:"page-wrapper",key:window.location.href},t)),i.a.createElement("nav",{className:"navbar"},i.a.createElement(u.Link,{to:"/",className:"index-link"},"大廳"),i.a.createElement(u.Link,{to:"/story",className:"story-link"},"故事"),i.a.createElement(u.Link,{to:"/role",className:"role-link"},"角色"),i.a.createElement(u.Link,{to:"/download",className:"download-link"},"下載"))))},data:a})};w.propTypes={children:c.a.node.isRequired};t.a=w},307:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-story-js-9c1d91f852011e282684.js.map