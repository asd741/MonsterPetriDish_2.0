(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{157:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(42),r=a.n(s),c=a(8),o=a.n(c),l=a(189),m=function(e){function t(t){return e.call(this,t)||this}return o()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{id:"mobi-page-h1"},"魔物培養皿官方網站"),i.a.createElement("div",{id:"logo"},i.a.createElement("img",{src:a(220),alt:""})),i.a.createElement("div",{id:"video-btn",onClick:function(){e.props.handlePopup(!0)}},i.a.createElement(l.b,null)),i.a.createElement("div",{id:"music-btn",onClick:function(){e.props.handleMusic(!e.props.music)},style:{opacity:this.props.music?1:.5}},i.a.createElement(l.a,null)),!0===this.props.showPopup?i.a.createElement("div",{className:"popup"},i.a.createElement("div",{className:"mask"},i.a.createElement("div",{className:"authbox"},i.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/-cF4cxzY-VE",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"})))):null)},t}(n.Component),h=(a(96),a(286),function(e){function t(t){return e.call(this,t)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e,t,a,n,i={init:function(){var e=window.location.href,t=e.indexOf("?a=");i.Drawing.init(".canvas"),document.body.classList.add("body--ready"),-1!==t?i.UI.simulate(decodeURI(e).substring(t+3)):i.UI.simulate("|歡迎光臨|魔物培養皿"),i.Drawing.loop(function(){i.Shape.render()})}};window.S=i,i.Drawing=(n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},{init:function(a){e=document.querySelector(a),t=e.getContext("2d"),this.adjustCanvas(),window.addEventListener("resize",function(e){i.Drawing.adjustCanvas()})},loop:function(e){a=a||e,this.clearFrame(),window.S&&(a(),n.call(window,this.loop.bind(this)))},adjustCanvas:function(){e.width=window.innerWidth,e.height=window.innerHeight},clearFrame:function(){t.clearRect(0,0,e.width,e.height)},getArea:function(){return{w:e.width,h:e.height}},drawCircle:function(e,a){t.fillStyle=a.render(),t.beginPath(),t.arc(e.x,e.y,e.z,0,2*Math.PI,!0),t.closePath(),t.fill()}}),i.UI=function(){var e,t,a,n=document.querySelector(".ui-input"),s=document.querySelector(".ui"),r=document.querySelector(".help"),c=document.querySelector(".commands"),o=document.querySelector(".overlay"),l=document.querySelector(".canvas"),m=!1,h=25,d=!0,u=[],p="#";function w(e){var t=e.getHours(),a=e.getMinutes();return t+":"+(a=a<10?"0"+a:a)}function f(a,n,i,s){clearInterval(e),a(t=s?i:1),(!i||!s&&t<i||s&&t>0)&&(e=setInterval(function(){a(t=s?t-1:t+1),(!s&&i&&t===i||s&&0===t)&&clearInterval(e)},n))}function v(t){clearInterval(e),u=[],a=null,t&&i.Shape.switchShape(i.ShapeBuilder.letter(""))}function g(e){var t,s;o.classList.remove("overlay--visible"),u="object"==typeof e?e:u.concat(e.split("|")),n.value="",E(),f(function(n){switch(s=u.shift(),t=function(e){return(e=e&&e.split(" ")[0])&&e[0]===p&&e.substring(1)}(s),e=function(e){return e&&e.split(" ")[1]}(s),t){case"countdown":f(function(e){0===e?0===u.length?i.Shape.switchShape(i.ShapeBuilder.letter("")):g(u):i.Shape.switchShape(i.ShapeBuilder.letter(e),!0)},1e3,e=(e=parseInt(e)||10)>0?e:10,!0);break;case"rectangle":e=(e=e&&e.split("x"))&&2===e.length?e:[h,h/2],i.Shape.switchShape(i.ShapeBuilder.rectangle(Math.min(h,parseInt(e[0])),Math.min(h,parseInt(e[1]))));break;case"circle":e=parseInt(e)||h,e=Math.min(e,h),i.Shape.switchShape(i.ShapeBuilder.circle(e));break;case"time":var r=w(new Date);u.length>0?i.Shape.switchShape(i.ShapeBuilder.letter(r)):f(function(){(r=w(new Date))!==a&&(a=r,i.Shape.switchShape(i.ShapeBuilder.letter(a)))},1e3);break;default:i.Shape.switchShape(i.ShapeBuilder.letter(s[0]===p?"What?":s))}},500,u.length)}function E(e){n.value.length>18?s.classList.add("ui--wide"):s.classList.remove("ui--wide"),d&&n.value.length>0?s.classList.add("ui--enter"):s.classList.remove("ui--enter")}return document.body.addEventListener("keydown",function(e){n.focus(),13===e.keyCode&&(d=!1,v(),g(n.value))}),n.addEventListener("input",E),n.addEventListener("change",E),n.addEventListener("focus",E),r.addEventListener("click",function(e){o.classList.toggle("overlay--visible"),o.classList.contains("overlay--visible")&&v(!0)}),c.addEventListener("click",function(e){var t,a,i;a=(t=e.target.classList.contains("commands-item")?e.target:e.target.parentNode.classList.contains("commands-item")?e.target.parentNode:e.target.parentNode.parentNode)&&t.querySelector(".commands-item-info"),i=t&&a.getAttribute("data-demo"),t&&a.getAttribute("data-url"),a&&(o.classList.remove("overlay--visible"),i&&(n.value=i,m?(v(),g(n.value)):n.focus()))}),l.addEventListener("click",function(e){o.classList.remove("overlay--visible")}),n.focus(),m&&document.body.classList.add("touch"),{simulate:function(e){g(e)}}}(),i.UI.Tabs=function(){document.querySelector(".tabs");var e=document.querySelector(".tabs-labels"),t=document.querySelectorAll(".tabs-label"),a=document.querySelectorAll(".tabs-panel");function n(e){t[e].classList.add("tabs-label--active"),a[e].classList.add("tabs-panel--active")}n(0),e.addEventListener("click",function(e){var i,s=e.target;if(s.classList.contains("tabs-label")){for(var r=0;r<t.length;r++)t[r].classList.remove("tabs-label--active"),a[r].classList.remove("tabs-panel--active"),s===t[r]&&(i=r);n(i)}})}(),i.Point=function(e){this.x=e.x,this.y=e.y,this.z=e.z,this.a=e.a,this.h=e.h},i.Color=function(e,t,a,n){this.r=e,this.g=t,this.b=a,this.a=n},i.Color.prototype={render:function(){return"rgba("+this.r+","+ +this.g+","+this.b+","+this.a+")"}},i.Dot=function(e,t){this.p=new i.Point({x:e,y:t,z:3,a:1,h:0}),this.e=.07,this.s=!0,this.c=new i.Color(255,255,255,this.p.a),this.t=this.clone(),this.q=[]},i.Dot.prototype={clone:function(){return new i.Point({x:this.x,y:this.y,z:this.z,a:this.a,h:this.h})},_draw:function(){this.c.a=this.p.a,i.Drawing.drawCircle(this.p,this.c)},_moveTowards:function(e){var t=this.distanceTo(e,!0),a=t[0],n=t[1],i=t[2],s=this.e*i;if(-1===this.p.h)return this.p.x=e.x,this.p.y=e.y,!0;if(i>1)this.p.x-=a/i*s,this.p.y-=n/i*s;else{if(!(this.p.h>0))return!0;this.p.h--}return!1},_update:function(){if(this._moveTowards(this.t)){var e=this.q.shift();e?(this.t.x=e.x||this.p.x,this.t.y=e.y||this.p.y,this.t.z=e.z||this.p.z,this.t.a=e.a||this.p.a,this.p.h=e.h||0):this.s?(this.p.x-=Math.sin(3.142*Math.random()),this.p.y-=Math.sin(3.142*Math.random())):this.move(new i.Point({x:this.p.x+50*Math.random()-25,y:this.p.y+50*Math.random()-25}))}var t;t=this.p.a-this.t.a,this.p.a=Math.max(.1,this.p.a-.05*t),t=this.p.z-this.t.z,this.p.z=Math.max(1,this.p.z-.05*t)},distanceTo:function(e,t){var a=this.p.x-e.x,n=this.p.y-e.y,i=Math.sqrt(a*a+n*n);return t?[a,n,i]:i},move:function(e,t){(!t||t&&this.distanceTo(e)>1)&&this.q.push(e)},render:function(){this._update(),this._draw()}},i.ShapeBuilder=function(){var e=13,t=document.createElement("canvas"),a=t.getContext("2d"),n="Avenir, Helvetica Neue, Helvetica, Arial, sans-serif";function s(){t.width=Math.floor(window.innerWidth/e)*e,t.height=Math.floor(window.innerHeight/e)*e,a.fillStyle="red",a.textBaseline="middle",a.textAlign="center"}function r(){for(var n=a.getImageData(0,0,t.width,t.height).data,s=[],r=0,c=0,o=t.width,l=t.height,m=0,h=0,d=0;d<n.length;d+=4*e)n[d+3]>0&&(s.push(new i.Point({x:r,y:c})),m=r>m?r:m,h=c>h?c:h,o=r<o?r:o,l=c<l?c:l),(r+=e)>=t.width&&(r=0,c+=e,d+=4*e*t.width);return{dots:s,w:m+o,h:h+l}}function c(e){a.font="bold "+e+"px "+n}return s(),window.addEventListener("resize",s),{imageFile:function(e,n){var s=new Image,c=i.Drawing.getArea();s.onload=function(){a.clearRect(0,0,t.width,t.height),a.drawImage(this,0,0,.6*c.h,.6*c.h),n(r())},s.onerror=function(){n(i.ShapeBuilder.letter("What?"))},s.src=e},circle:function(n){var i=Math.max(0,n)/2;return a.clearRect(0,0,t.width,t.height),a.beginPath(),a.arc(i*e,i*e,i*e,0,2*Math.PI,!1),a.fill(),a.closePath(),r()},letter:function(e){var n;return c(500),c(Math.min(500,t.width/a.measureText(e).width*.8*500,t.height/500*(n=e,!isNaN(parseFloat(n))&&isFinite(n)?1:.45)*500)),a.clearRect(0,0,t.width,t.height),a.fillText(e,t.width/2,t.height/2),r()},rectangle:function(t,a){for(var n=[],s=e*t,r=e*a,c=0;c<r;c+=e)for(var o=0;o<s;o+=e)n.push(new i.Point({x:o,y:c}));return{dots:n,w:s,h:r}}}}(),i.Shape=function(){var e=[],t=0,a=0,n=0,s=0;return{shuffleIdle:function(){for(var t=i.Drawing.getArea(),a=0;a<e.length;a++)e[a].s||e[a].move({x:Math.random()*t.w,y:Math.random()*t.h})},switchShape:function(r,c){var o,l=i.Drawing.getArea();if(t=r.w,a=r.h,function(){var e=i.Drawing.getArea();n=e.w/2-t/2,s=e.h/2-a/2}(),r.dots.length>e.length){o=r.dots.length-e.length;for(var m=1;m<=o;m++)e.push(new i.Dot(l.w/2,l.h/2))}for(var h=0,d=0;r.dots.length>0;)d=Math.floor(Math.random()*r.dots.length),e[h].e=c?.25:e[h].s?.14:.11,e[h].s?e[h].move(new i.Point({z:20*Math.random()+10,a:Math.random(),h:18})):e[h].move(new i.Point({z:5*Math.random()+5,h:c?18:30})),e[h].s=!0,e[h].move(new i.Point({x:r.dots[d].x+n,y:r.dots[d].y+s,a:1,z:5,h:0})),r.dots=r.dots.slice(0,d).concat(r.dots.slice(d+1)),h++;for(var u=h;u<e.length;u++)e[u].s&&(e[u].move(new i.Point({z:20*Math.random()+10,a:Math.random(),h:20})),e[u].s=!1,e[u].e=.04,e[u].move(new i.Point({x:Math.random()*l.w,y:Math.random()*l.h,a:.3,z:4*Math.random(),h:0})))},render:function(){for(var t=0;t<e.length;t++)e[t].render()}}}(),i.init()},n.componentWillUnmount=function(){window.S=null},n.render=function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("canvas",{className:"canvas"}),i.a.createElement("div",{id:"logo"},i.a.createElement("img",{src:a(220),alt:""})),i.a.createElement("div",{id:"video-btn",onClick:function(){e.props.handlePopup(!0)}},i.a.createElement(l.b,null)),i.a.createElement("div",{id:"music-btn",onClick:function(){e.props.handleMusic(!e.props.music)},style:{opacity:this.props.music?1:.5}},i.a.createElement(l.a,null)),!0===this.props.showPopup?i.a.createElement("div",{className:"popup"},i.a.createElement("div",{className:"mask"},i.a.createElement("div",{className:"authbox"},i.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/-cF4cxzY-VE",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"})))):null,i.a.createElement("div",{className:"help"},"?"),i.a.createElement("div",{className:"ui"},i.a.createElement("input",{className:"ui-input",type:"text",placeholder:"input something..."}),i.a.createElement("span",{className:"ui-return"},"↵")),i.a.createElement("div",{className:"overlay"},i.a.createElement("div",{className:"tabs"},i.a.createElement("div",{className:"tabs-labels"},i.a.createElement("span",{className:"tabs-label"},"Commands"),i.a.createElement("span",{className:"tabs-label"},"Info"),i.a.createElement("span",{className:"tabs-label"},"Share")),i.a.createElement("div",{className:"tabs-panels"},i.a.createElement("ul",{className:"tabs-panel commands"},i.a.createElement("li",{className:"commands-item"},i.a.createElement("span",{className:"commands-item-title"},"Text"),i.a.createElement("span",{className:"commands-item-info","data-demo":"Hello :)"},"Type anything"),i.a.createElement("span",{className:"commands-item-action"},"Demo")),i.a.createElement("li",{className:"commands-item"},i.a.createElement("span",{className:"commands-item-title"},"Countdown"),i.a.createElement("span",{className:"commands-item-info","data-demo":"#countdown 10"},"#countdown",i.a.createElement("span",{className:"commands-item-mode"},"number")),i.a.createElement("span",{className:"commands-item-action"},"Demo")),i.a.createElement("li",{className:"commands-item"},i.a.createElement("span",{className:"commands-item-title"},"Time"),i.a.createElement("span",{className:"commands-item-info","data-demo":"#time"},"#time"),i.a.createElement("span",{className:"commands-item-action"},"Demo")),i.a.createElement("li",{className:"commands-item"},i.a.createElement("span",{className:"commands-item-title"},"Rectangle"),i.a.createElement("span",{className:"commands-item-info","data-demo":"#rectangle 30x15"},"#rectangle",i.a.createElement("span",{className:"commands-item-mode"},"width x height")),i.a.createElement("span",{className:"commands-item-action"},"Demo")),i.a.createElement("li",{className:"commands-item"},i.a.createElement("span",{className:"commands-item-title"},"Circle"),i.a.createElement("span",{className:"commands-item-info","data-demo":"#circle 25"},"#circle",i.a.createElement("span",{className:"commands-item-mode"},"diameter")),i.a.createElement("span",{className:"commands-item-action"},"Demo")),i.a.createElement("li",{className:"commands-item commands-item--gap"},i.a.createElement("span",{className:"commands-item-title"},"Animate"),i.a.createElement("span",{className:"commands-item-info","data-demo":"The time is|#time|#countdown 3|#icon thumbs-up"},i.a.createElement("span",{className:"commands-item-mode"},"command1")," |",i.a.createElement("span",{className:"commands-item-mode"},"command2")),i.a.createElement("span",{className:"commands-item-action"},"Demo"))),i.a.createElement("div",{className:"tabs-panel ui-details"},i.a.createElement("div",{className:"ui-details-content"},i.a.createElement("h1",null,"Shape Shifter"),i.a.createElement("p",null,"An experiment by"," ",i.a.createElement("a",{href:"//www.kennethcachia.com"},"Kenneth Cachia"),".",i.a.createElement("br",null),i.a.createElement("a",{href:"//fortawesome.github.io/Font-Awesome/#icons-new"},"Font Awesome")," ","is being used to render all #icons."),i.a.createElement("br",null),i.a.createElement("p",null,"Visit"," ",i.a.createElement("a",{href:"http://www.kennethcachia.com/shape-shifter/?a=#icon thumbs-up"},"Shape Shifter")," ","to use icons."))),i.a.createElement("div",{className:"tabs-panel ui-share"},i.a.createElement("div",{className:"ui-share-content"},i.a.createElement("h1",null,"Sharing"),i.a.createElement("p",null,"Simply add ",i.a.createElement("em",null,"?a=")," to the current URL to share any static or animated text. Examples:"),i.a.createElement("p",null,i.a.createElement("a",{href:"http://www.kennethcachia.com/shape-shifter?a=Hello"},"www.kennethcachia.com/shape-shifter?a=Hello"),i.a.createElement("br",null),i.a.createElement("a",{href:"http://www.kennethcachia.com/shape-shifter?a=Hello|#countdown 3"},"www.kennethcachia.com/shape-shifter?a=Hello|#countdown 3"))))))))},t}(n.Component)),d=(a(288),a(177)),u=a(289),p=a.n(u),w=function(e){function t(t){var a;if(a=e.call(this,t)||this,"undefined"!=typeof window){var n=window.innerWidth>1140?"pc":"mobi",i=!!window.bgmObj;a.state={page:n,createMusic:i},window.onresize=function(){window.innerWidth>1140&&"pc"!==a.state.page&&a.setState({page:"pc"}),window.innerWidth<1140&&"mobi"!==a.state.page&&a.setState({page:"mobi"})}}return a.handlePopup=a.handlePopup.bind(r()(a)),a.handleMusic=a.handleMusic.bind(r()(a)),a}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){!1===this.state.createMusic&&(window.bgmObj=new Audio(p.a)),this.setState({showPopup:!1,music:!1})},a.handlePopup=function(e){this.setState({showPopup:e})},a.handleMusic=function(e){if(window.bgmObj){if(!0===e)return window.bgmObj.play(),void this.setState({music:!0});if(!1===e)return window.bgmObj.pause(),void this.setState({music:!1})}else console.log("音樂物件不存在")},a.render=function(){var e=this;return i.a.createElement("div",{id:"banner-page",onClick:function(t){"img"!==(t=t||window.event).target&&!0===e.state.showPopup&&e.handlePopup(!1)}},i.a.createElement(d.a,{animConfig:{opacity:[1,0]}},this.state&&"pc"===this.state.page?i.a.createElement("div",{className:"page-wrapper",key:"bannerPc"},i.a.createElement(h,{showPopup:this.state.showPopup,handlePopup:this.handlePopup,handleMusic:this.handleMusic,music:this.state.music})):i.a.createElement("div",{className:"page-wrapper",key:"bannerMobi"},i.a.createElement(m,{showPopup:this.state.showPopup,handlePopup:this.handlePopup,handleMusic:this.handleMusic,music:this.state.music}))))},t}(n.Component),f=a(166);t.default=function(){return i.a.createElement(f.a,null,i.a.createElement(w,null))}},161:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},165:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),i=a.n(n),s=a(5),r=a.n(s),c=a(64),o=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=o},166:function(e,t,a){"use strict";var n=a(164),i=a(0),s=a.n(i),r=a(5),c=a.n(r),o=a(40),l=a.n(o),m=(a(161),s.a.createContext({}));function h(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,r=a?a.data:t[n]&&t[n].data;return s.a.createElement(s.a.Fragment,null,r&&i(r),!r&&s.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return s.a.createElement(m.Consumer,null,function(e){return s.a.createElement(h,{data:t,query:a,render:n||i,staticQueryData:e})})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};var u=a(177),p=(a(182),a(183));t.a=function(e){var t=e.children;return s.a.createElement(d,{query:"755544856",render:function(e){return s.a.createElement("div",{className:"bg"},s.a.createElement(p.Helmet,null,s.a.createElement("meta",{charSet:"utf-8"}),s.a.createElement("title",null,"魔物培養皿官網")),s.a.createElement(u.a,{type:"scale"},s.a.createElement("div",{className:"page-wrapper",key:"undefined"!=typeof window&&window.location.href},t)),s.a.createElement("nav",{className:"navbar"},s.a.createElement(l.a,{to:"/",className:"index-link"},"大廳"),s.a.createElement(l.a,{to:"/story",className:"story-link"},"故事"),s.a.createElement(l.a,{to:"/role",className:"role-link"},"角色"),s.a.createElement(l.a,{to:"/download",className:"download-link"},"下載"),s.a.createElement(l.a,{to:"/other",className:"other-link"},"粒子")))},data:n})}},220:function(e,t,a){e.exports=a.p+"static/logo-6cdf01cdee25198e0dbfea11b2243907.png"},289:function(e,t,a){e.exports=a.p+"static/music-600769f93ec8647b3bf31f2a19a6d105.mp3"}}]);
//# sourceMappingURL=component---src-pages-index-js-17363cb186ddad261dae.js.map