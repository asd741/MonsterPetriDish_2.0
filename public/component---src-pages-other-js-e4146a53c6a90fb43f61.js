(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{159:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(8),i=n.n(o),s=(n(168),n(235)),d=(n(314),n(248),function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e,t,n,r,a;function o(e){var t=document.createElement("canvas");t.width=16,t.height=16;var n=t.getContext("2d"),r=n.createRadialGradient(t.width/2,t.height/2,0,t.width/2,t.height/2,t.width/2);"blue"===e&&(r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.2,"rgba(0,255,255,1)"),r.addColorStop(.4,"rgba(0,0,64,1)"),r.addColorStop(1,"rgba(0,0,0,1)")),"white"===e&&(r.addColorStop(.8,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)")),n.fillStyle=r,n.fillRect(0,0,t.width,t.height);var a=new s.Texture(t);return a.needsUpdate=!0,a}window.monster=!0,window.onresize=function(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)},function(){t=new s.Scene,(n=new s.PerspectiveCamera(60,window.innerWidth/window.innerHeight,.1,1e3)).position.set(0,0,400),n.lookAt(t.position),(r=new s.OrbitControls(n)).autoRotate=!0,(e=new s.WebGLRenderer).setSize(window.innerWidth,window.innerHeight),function(){for(var e=new s.SphereGeometry(150,190,120),n=new s.Geometry,r=new s.Geometry,i=new s.Geometry,d=new s.Geometry,l=new s.PointsMaterial({color:16777215,size:3,transparent:!0,blending:s.AdditiveBlending,map:o("blue")}),c=new s.PointsMaterial({color:16777215,size:3,transparent:!0,blending:s.AdditiveBlending,map:o("white")}),u=new s.PointsMaterial({color:16777215,size:3,transparent:!0,blending:s.AdditiveBlending,map:o("white")}),w=new s.PointsMaterial({color:16777215,size:3,transparent:!0,blending:s.AdditiveBlending,map:o("blue")}),p=new s.PointsMaterial({color:16777215,size:3,transparent:!0,blending:s.AdditiveBlending,map:o("white")}),v=-4;v<4;v++)for(var m=-4;m<4;m++)for(var f=-4;f<4;f++)if(v*v+m*m+f*f<=15){var h=new s.Vector3(4*v,4*m,4*f);n.vertices.push(h)}for(var g=0;g<5;g++){for(var y=-4,E=0;y<3;){var b=new s.Vector3(3*y,3*E,g);r.vertices.push(b),y++,E++}for(var P=3,S=5;P<8;){var C=new s.Vector3(3*P,3*S,g);r.vertices.push(C),P++,S--}for(var z=-4;z<9;z++){var V=new s.Vector3(3*z,0,g);r.vertices.push(V)}for(var k=-4,q=0;k<3;){var G=new s.Vector3(3*k,3*q,g);r.vertices.push(G),k++,q--}for(var R=3,x=-5;R<8;){var M=new s.Vector3(3*R,3*x,g);r.vertices.push(M),R++,x++}}for(var N=0;N>-7;N--)for(var A=-4,B=-5;B<-1;){var W=new s.Vector3(3*A,3*B-N/2,N);d.vertices.push(W),A++,B++}for(var H=0;H>-5;H--)for(var j=-4;j<10;){var D=new s.Vector3(0+H/2,3*j,H);d.vertices.push(D),j++}for(var L=0;L>-5;L--)for(var Q=4,T=-5;T<-1;){var F=new s.Vector3(3*Q,3*T-L/2,L);d.vertices.push(F),Q--,T++}for(var J=0;J<6;J++)for(var O=0;O<25;O++)for(var U=0;U<25;U++)U<O&&i.vertices.push(new s.Vector3(3*U,3*O,J));var I=new s.Points(e,l),K=new s.Points(n,c),X=new s.Points(n,c),Y=new s.Points(r,u),Z=new s.Points(i,w),$=new s.Points(i,w),_=new s.Points(d,p),ee=new s.Points(d,p);a=new s.Group,I.position.set(0,0,0),K.position.set(-50,55,120),X.position.set(50,55,120),Y.position.set(0,-30,120),_.position.set(-40,-175,0),ee.position.set(40,-175,0),Z.position.set(-150,-60,0),$.position.set(150,50,0),Z.rotation.z+=.8,$.rotation.z+=3.95,a.add(I,K,X,Y,Z,$,_,ee),t.add(a)}();var i=new s.SpotLight(16777215);i.position.set(-10,40,30),t.add(i),document.getElementById("monster").appendChild(e.domElement)}(),function o(){window.monster&&(a.rotation.z+=.005,a.rotation.y+=.005,a.rotation.x+=.005,requestAnimationFrame(o),r.update(),e.render(t,n))}()},n.componentWillUnmount=function(){window.monster=!1,window.onresize=null},n.render=function(){return a.a.createElement("div",{style:{position:"relative"}},a.a.createElement("div",{id:"stats"}),a.a.createElement("div",{id:"monster"}))},t}(r.Component)),l=n(172);t.default=function(){return a.a.createElement(l.a,null,a.a.createElement(d,null))}},168:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var r=n(0),a=n.n(r),o=n(5),i=n.n(o),s=n(40),d=n.n(s);n.d(t,"a",function(){return d.a});n(169);var l=a.a.createContext({});function c(e){var t=e.staticQueryData,n=e.data,r=e.query,o=e.render,i=n?n.data:t[r]&&t[r].data;return a.a.createElement(a.a.Fragment,null,i&&o(i),!i&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,n=e.query,r=e.render,o=e.children;return a.a.createElement(l.Consumer,null,function(e){return a.a.createElement(c,{data:t,query:n,render:r||o,staticQueryData:e})})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},169:function(e,t,n){var r;e.exports=(r=n(174))&&r.default||r},172:function(e,t,n){"use strict";var r=n(173),a=n(0),o=n.n(a),i=(n(5),n(168)),s=n(182),d=(n(192),n(193));t.a=function(e){var t=e.children;return o.a.createElement(i.b,{query:"755544856",render:function(e){return o.a.createElement("div",{className:"bg"},o.a.createElement(d.Helmet,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"魔物培養皿官網")),o.a.createElement(s.a,{type:"scale"},o.a.createElement("div",{className:"page-wrapper",key:"undefined"!=typeof window&&window.location.href},t)),o.a.createElement("nav",{className:"navbar"},o.a.createElement(i.a,{to:"/",className:"index-link"},"大廳"),o.a.createElement(i.a,{to:"/story",className:"story-link"},"故事"),o.a.createElement(i.a,{to:"/role",className:"role-link"},"角色"),o.a.createElement(i.a,{to:"/download",className:"download-link"},"下載"),o.a.createElement(i.a,{to:"/other",className:"other-link"},"其他")))},data:r})}},173:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},174:function(e,t,n){"use strict";n.r(t);n(42);var r=n(0),a=n.n(r),o=n(5),i=n.n(o),s=n(64),d=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=d}}]);
//# sourceMappingURL=component---src-pages-other-js-e4146a53c6a90fb43f61.js.map