(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(154),o=a(302),c=a(4),s=a.n(c),u=a(164),l=a.n(u),d=a(145);function p(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,c=e.title;return r.a.createElement(d.StaticQuery,{query:f,render:function(e){var o=t||e.site.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})},data:o})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired};var m=p,f="1025518380";t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(m,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(144),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(146),l=a.n(u);a.d(t,"PageRenderer",function(){return l.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},152:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(52),s=a(2),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},153:function(e,t,a){},154:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(145),u=a(165),l=a(148),d={testuser:"asd741"};var p={bannerPcFirstRender:!1};var m=Object(l.b)({userReducer:function(e,t){return void 0===e&&(e=d),e},pageReducer:function(e,t){return void 0===e&&(e=p),e}}),f=a(171),y=(a(170),a(153),a(164)),h=Object(l.c)(m),g=function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(u.a,{store:h},i.a.createElement(i.a.Fragment,null,i.a.createElement(y.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"魔物培養皿官網")),i.a.createElement(f.a,{type:"scale"},i.a.createElement("div",{className:"page-wrapper",key:"undefined"!=typeof window&&window.location.href},t)),i.a.createElement("nav",{className:"navbar"},i.a.createElement(s.Link,{to:"/",className:"index-link"},"大廳"),i.a.createElement(s.Link,{to:"/story",className:"story-link"},"故事"),i.a.createElement(s.Link,{to:"/role",className:"role-link"},"角色"),i.a.createElement(s.Link,{to:"/download",className:"download-link"},"下載"))))},data:n})};g.propTypes={children:c.a.node.isRequired};t.a=g},302:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-de4e800b0c67e0273c59.js.map