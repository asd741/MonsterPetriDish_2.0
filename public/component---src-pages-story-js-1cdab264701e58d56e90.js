(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(152),s=(t(74),function(e){return r.a.createElement("div",{className:"cover page"},r.a.createElement("div",{className:"front"},r.a.createElement("h2",{className:"title"},"遊戲手冊"),r.a.createElement("img",{className:"coverImg",src:t(165)})),r.a.createElement("div",{className:"back"},r.a.createElement("h2",{className:"title"},"遊戲手冊"),r.a.createElement("img",{className:"coverImg",src:t(165)})))}),l=function(e){return r.a.createElement("div",{className:"page1 page"},r.a.createElement("div",{className:"front"},r.a.createElement("h3",{className:"title"},"開始畫面"),r.a.createElement("img",{className:"startImg",src:t(290)})),r.a.createElement("div",{className:"back"},r.a.createElement("h3",{className:"title"},"遊戲主畫面"),r.a.createElement("img",{className:"startImg",src:t(291)})))},m=function(e){return r.a.createElement("div",{className:"page2 page"},r.a.createElement("div",{className:"front"},r.a.createElement("h3",{className:"title"},"選單"),r.a.createElement("img",{className:"startImg",src:t(292)})),r.a.createElement("div",{className:"back"},r.a.createElement("h3",{className:"title"},"設定"),r.a.createElement("img",{className:"startImg",src:t(293)})))},o=function(e){return r.a.createElement("div",{className:"page3 page"},r.a.createElement("div",{className:"front"},r.a.createElement("h3",{className:"title"},"物品欄"),r.a.createElement("img",{className:"startImg",src:t(294)})),r.a.createElement("div",{className:"back"},r.a.createElement("h3",{className:"title"},"道具"),r.a.createElement("img",{className:"startImg",src:t(295)})))},i=function(e){return r.a.createElement("div",{className:"page4 page"},r.a.createElement("div",{className:"front"},r.a.createElement("h3",{className:"title"},"角色"),r.a.createElement("img",{className:"startImg",src:t(296)})),r.a.createElement("div",{className:"back"},r.a.createElement("h3",{className:"title"},"副本"),r.a.createElement("img",{className:"startImg",src:t(297)})))},u=function(e){return r.a.createElement("div",{className:"last-page page"},r.a.createElement("div",{className:"front"},r.a.createElement("img",{className:"coverImg",src:t(165)})),r.a.createElement("div",{className:"back"},r.a.createElement("img",{className:"coverImg",src:t(165)})))},d=(t(298),function(){var e,a,t,c=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()),d=[];Object(n.useEffect)(function(){e=document.getElementsByClassName("book-page-wrapper")[0],a=document.getElementsByClassName("page"),t=25/(a.length-1),[].forEach.call(a,function(e,n){var r=-(a.length-1-n)*t;d[n]=r,e.style.transform="rotateY("+r+"deg)",!0===c?e.ontouchstart=function(a){return f(a,e)}:e.onmousedown=function(a){return f(a,e)}}),e.ondragstart=function(){return!1},window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame});var f=function(n,r){var s,l,m=r,o=[].indexOf.call(a,m),i=!0===c?n.touches[0].clientX:n.clientX,u=0,f=d[o],p=function(){var e=d[o-1]||-180,a=d[o+1]||0;return f-t<e?(l=function(){f=e+t,m.style.transform="rotateY("+f+"deg",d[o]=f},void(s=!0)):f+t>a?(l=function(){f=a-t,m.style.transform="rotateY("+f+"deg",d[o]=f},void(s=!0)):void(s=!1)},E=function e(){p(),!1===s&&Math.abs(u)>=1&&(Math.abs(Math.abs(f)-90)<20?u*=1.05:u*=.95,f=parseInt(f-.5*u),m.style.transform="rotateY("+f+"deg",d[o]=f,requestAnimationFrame(e)),!0===s&&l()};!0===c?e.ontouchmove=function(e){p(),!1===s&&(u=(i-e.touches[0].clientX)/2.5,f=parseInt(m.style.transform.match(/-?\d+/)[0]-u),m.style.transform="rotateY("+f+"deg",d[o]=f,i=e.touches[0].clientX),!0===s&&l()}:e.onmousemove=function(e){p(),!1===s&&(u=(i-e.clientX)/2.5,f=parseInt(m.style.transform.match(/-?\d+/)[0]-u),m.style.transform="rotateY("+f+"deg",d[o]=f,i=e.clientX),!0===s&&l()},!0===c?e.ontouchend=function(){e.ontouchmove=null,80<Math.abs(f)<100&&Math.abs(u)<=1&&(u+=3),Math.abs(u)>=1&&requestAnimationFrame(E)}:e.onmouseup=function(){e.onmousemove=null,80<Math.abs(f)<100&&Math.abs(u)<=1&&(u+=3),Math.abs(u)>=1&&requestAnimationFrame(E)}};return r.a.createElement("div",{className:"book-page-wrapper"},r.a.createElement("div",{className:"book"},r.a.createElement(s,null),r.a.createElement(l,null),r.a.createElement(m,null),r.a.createElement(o,null),r.a.createElement(i,null),r.a.createElement(u,null)))});a.default=function(){return r.a.createElement(c.a,null,r.a.createElement(d,null))}},148:function(e,a,t){"use strict";t.d(a,"b",function(){return i});var n=t(0),r=t.n(n),c=t(4),s=t.n(c),l=t(33),m=t.n(l);t.d(a,"a",function(){return m.a});t(149);var o=r.a.createContext({}),i=function(e){return r.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};i.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},149:function(e,a,t){var n;e.exports=(n=t(154))&&n.default||n},152:function(e,a,t){"use strict";var n=t(153),r=t(0),c=t.n(r),s=(t(4),t(148)),l=t(160),m=(t(170),t(171));a.a=function(e){var a=e.children;return c.a.createElement(s.b,{query:"755544856",render:function(e){return c.a.createElement("div",{className:"bg"},c.a.createElement(m.Helmet,null,c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("title",null,"魔物培養皿官網")),c.a.createElement(l.a,{type:"scale"},c.a.createElement("div",{className:"page-wrapper",key:"undefined"!=typeof window&&window.location.href},a)),c.a.createElement("nav",{className:"navbar"},c.a.createElement(s.a,{to:"/",className:"index-link"},"大廳"),c.a.createElement(s.a,{to:"/story",className:"story-link"},"故事"),c.a.createElement(s.a,{to:"/role",className:"role-link"},"角色"),c.a.createElement(s.a,{to:"/download",className:"download-link"},"下載"),c.a.createElement(s.a,{to:"/other",className:"other-link"},"其他")))},data:n})}},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},154:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),c=t(4),s=t.n(c),l=t(55),m=t(2),o=function(e){var a=e.location,t=m.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=o},165:function(e,a,t){e.exports=t.p+"static/r1-l-171dd16ea072e37483075832bfebabdb.png"},290:function(e,a,t){e.exports=t.p+"static/p1-1519e03d44ee58cf87010e5247d72aa6.png"},291:function(e,a,t){e.exports=t.p+"static/p2-c85caf64b520d93e04e66b27f52099c9.png"},292:function(e,a,t){e.exports=t.p+"static/p3-0a3320d85ef0baac04094b9460387b04.png"},293:function(e,a,t){e.exports=t.p+"static/p4-cf9938dbfdc93c0e685e2c659f9064e6.png"},294:function(e,a,t){e.exports=t.p+"static/p5-e128a05d830f7f5a6529d50a18d5e7a0.png"},295:function(e,a,t){e.exports=t.p+"static/p6-09a397c8b15fd8b53ad6c278c020aff4.png"},296:function(e,a,t){e.exports=t.p+"static/p7-f25a46bb3c876b718a83ae53b3ccbb69.png"},297:function(e,a,t){e.exports=t.p+"static/p8-7c3e6d5008c00ce87218ff929fff2951.png"}}]);
//# sourceMappingURL=component---src-pages-story-js-1cdab264701e58d56e90.js.map