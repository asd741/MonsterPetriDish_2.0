(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{142:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(150),o=n(166),s=n(4),c=n.n(s),u=n(167),l=n.n(u),d=n(145);function p(t){var e=t.description,n=t.lang,a=t.meta,i=t.keywords,s=t.title;return r.a.createElement(d.StaticQuery,{query:m,render:function(t){var o=e||t.site.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})},data:o})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired};var f=p,m="1025518380";e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(f,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},145:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return m}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(144),c=n.n(s);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var u=n(146),l=n.n(u);n.d(e,"PageRenderer",function(){return l.a});var d=n(32);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(t,e,n){var a;t.exports=(a=n(149))&&a.default||a},148:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},149:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(52),c=n(2),u=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},150:function(t,e,n){"use strict";var a=n(148),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(145),u=n(151),l=n(147),d={testuser:"asd741"};var p={bannerPcFirstRender:!1};var f=Object(l.b)({userReducer:function(t,e){return void 0===t&&(t=d),t},pageReducer:function(t,e){return void 0===t&&(t=p),t}}),m=Object(l.c)(f),y=function(t){var e=t.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(u.a,{store:m},i.a.createElement(i.a.Fragment,null,e,i.a.createElement(c.Link,{to:"/",className:"index-link"},"大廳"),i.a.createElement(c.Link,{to:"/story",className:"story-link"},"故事"),i.a.createElement(c.Link,{to:"/role",className:"role-link"},"角色"),i.a.createElement(c.Link,{to:"/download",className:"download-link"},"下載")))},data:a})};y.propTypes={children:s.a.node.isRequired};e.a=y},166:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-b6623b4f0c44c6acb5e3.js.map