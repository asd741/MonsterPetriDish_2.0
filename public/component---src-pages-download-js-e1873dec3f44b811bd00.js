(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(0),u=n.n(i),o=n(154),c=(n(303),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return u.a.createElement("div",{id:"dl-page"},"download")},t}(i.Component));n.d(t,"default",function(){return l});var l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return u.a.createElement(o.a,null,u.a.createElement(c,null))},t}(i.Component)},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(144),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var l=n(146),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},146:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},152:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(52),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=l},153:function(e,t,n){},154:function(e,t,n){"use strict";var a=n(151),r=n(0),i=n.n(r),u=n(4),o=n.n(u),c=n(145),l=n(165),s=n(148),d={testuser:"asd741"};var p={bannerPcFirstRender:!1};var f=Object(s.b)({userReducer:function(e,t){return void 0===e&&(e=d),e},pageReducer:function(e,t){return void 0===e&&(e=p),e}}),m=n(171),y=(n(170),n(153),n(164)),h=Object(s.c)(f),v=function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(l.a,{store:h},i.a.createElement(i.a.Fragment,null,i.a.createElement(y.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"魔物培養皿官網")),i.a.createElement(m.a,{type:"scale"},i.a.createElement("div",{className:"page-wrapper",key:"undefined"!=typeof window&&window.location.href},t)),i.a.createElement("nav",{className:"navbar"},i.a.createElement(c.Link,{to:"/",className:"index-link"},"大廳"),i.a.createElement(c.Link,{to:"/story",className:"story-link"},"故事"),i.a.createElement(c.Link,{to:"/role",className:"role-link"},"角色"),i.a.createElement(c.Link,{to:"/download",className:"download-link"},"下載"))))},data:a})};v.propTypes={children:o.a.node.isRequired};t.a=v},303:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-download-js-e1873dec3f44b811bd00.js.map