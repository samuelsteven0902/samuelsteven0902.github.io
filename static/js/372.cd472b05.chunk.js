"use strict";(self.webpackChunklinktree_samuelsteven_ph=self.webpackChunklinktree_samuelsteven_ph||[]).push([[372],{372:function(t,e,o){o.r(e),o.d(e,{iosTransitionAnimation:function(){return p},shadow:function(){return s}});var a=o(942),n=o(762),r=o(883),l=o(313),c=function(t){return document.querySelector("".concat(t,".ion-cloned-element"))},s=function(t){return t.shadowRoot||t},i=function(t){var e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=e){var a=e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=a?a.querySelector(o):null}return t.querySelector(o)},f=function(t,e){var o="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),a=[];if(null!=o){var r=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=r&&(a=r.querySelectorAll("ion-buttons"))}else a=t.querySelectorAll("ion-buttons");var l,c=(0,n.Z)(a);try{for(c.s();!(l=c.n()).done;){var s=l.value,i=s.closest("ion-header"),f=i&&!i.classList.contains("header-collapse-condense-inactive"),d=s.querySelector("ion-back-button"),m=s.classList.contains("buttons-collapse"),p="start"===s.slot||""===s.slot;if(null!==d&&p&&(m&&f&&e||!m))return d}}catch(u){c.e(u)}finally{c.f()}return null},d=function(t,e,o,a,n,l){var i=e?"calc(100% - ".concat(l.right+4,"px)"):"".concat(l.left-4,"px"),f=e?"7px":"-7px",d=e?"-4px":"4px",m=e?"-4px":"4px",p=e?"right":"left",u=e?"left":"right",y=[{offset:0,opacity:0,transform:"translate3d(".concat(f,", ").concat(n.top-40,"px, 0) scale(2.1)")},{offset:1,opacity:1,transform:"translate3d(".concat(d,", ").concat(l.top-46,"px, 0) scale(1)")}],b=[{offset:0,opacity:1,transform:"translate3d(".concat(d,", ").concat(l.top-46,"px, 0) scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(f,", ").concat(n.top-40,"px, 0) scale(2.1)")}],v=o?b:y,S=[{offset:0,opacity:0,transform:"translate3d(".concat(m,", ").concat(l.top-41,"px, 0) scale(0.6)")},{offset:1,opacity:1,transform:"translate3d(".concat(m,", ").concat(l.top-46,"px, 0) scale(1)")}],g=[{offset:0,opacity:1,transform:"translate3d(".concat(m,", ").concat(l.top-46,"px, 0) scale(1)")},{offset:.2,opacity:0,transform:"translate3d(".concat(m,", ").concat(l.top-41,"px, 0) scale(0.6)")},{offset:1,opacity:0,transform:"translate3d(".concat(m,", ").concat(l.top-41,"px, 0) scale(0.6)")}],h=o?g:S,T=(0,r.c)(),x=(0,r.c)(),q=c("ion-back-button"),X=s(q).querySelector(".button-text"),A=s(q).querySelector("ion-icon");q.text=a.text,q.mode=a.mode,q.icon=a.icon,q.color=a.color,q.disabled=a.disabled,q.style.setProperty("display","block"),q.style.setProperty("position","fixed"),x.addElement(A),T.addElement(X),T.beforeStyles({"transform-origin":"".concat(p," center")}).beforeAddWrite((function(){a.style.setProperty("display","none"),q.style.setProperty(p,i)})).afterAddWrite((function(){a.style.setProperty("display",""),q.style.setProperty("display","none"),q.style.removeProperty(p)})).keyframes(v),x.beforeStyles({"transform-origin":"".concat(u," center")}).keyframes(h),t.addAnimation([T,x])},m=function(t,e,o,n,l,s){var i=e?"calc(100% - ".concat(l.right,"px)"):"".concat(l.left,"px"),f=e?"-18px":"18px",d=e?"right":"left",m=[{offset:0,opacity:0,transform:"translate3d(".concat(f,", ").concat(s.top-4,"px, 0) scale(0.49)")},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(0, ".concat(l.top-2,"px, 0) scale(1)")}],p=[{offset:0,opacity:.99,transform:"translate3d(0, ".concat(l.top-2,"px, 0) scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(f,", ").concat(s.top-4,"px, 0) scale(0.5)")}],u=o?m:p,y=c("ion-title"),b=(0,r.c)();y.innerText=n.innerText,y.size=n.size,y.color=n.color,b.addElement(y),b.beforeStyles((0,a.Z)({"transform-origin":"".concat(d," center"),height:"46px",display:"",position:"relative"},d,i)).beforeAddWrite((function(){n.style.setProperty("display","none")})).afterAddWrite((function(){n.style.setProperty("display",""),y.style.setProperty("display","none")})).keyframes(u),t.addAnimation(b)},p=function(t,e){try{var o="opacity",a="transform",n="0%",c="rtl"===t.ownerDocument.dir,p=c?"-99.5%":"99.5%",u=c?"33%":"-33%",y=e.enteringEl,b=e.leavingEl,v="back"===e.direction,S=y.querySelector(":scope > ion-content"),g=y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),h=y.querySelectorAll(":scope > ion-header > ion-toolbar"),T=(0,r.c)(),x=(0,r.c)();if(T.addElement(y).duration(e.duration||540).easing(e.easing||"cubic-bezier(0.32,0.72,0,1)").fill("both").beforeRemoveClass("ion-page-invisible"),b&&t){var q=(0,r.c)();q.addElement(t),T.addAnimation(q)}if(S||0!==h.length||0!==g.length?(x.addElement(S),x.addElement(g)):x.addElement(y.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),T.addAnimation(x),v?x.beforeClearStyles([o]).fromTo("transform","translateX(".concat(u,")"),"translateX(".concat(n,")")).fromTo(o,.8,1):x.beforeClearStyles([o]).fromTo("transform","translateX(".concat(p,")"),"translateX(".concat(n,")")),S){var X=s(S).querySelector(".transition-effect");if(X){var A=X.querySelector(".transition-cover"),E=X.querySelector(".transition-shadow"),k=(0,r.c)(),C=(0,r.c)(),w=(0,r.c)();k.addElement(X).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),C.addElement(A).beforeClearStyles([o]).fromTo(o,0,.1),w.addElement(E).beforeClearStyles([o]).fromTo(o,.03,.7),k.addAnimation([C,w]),x.addAnimation([k])}}var P=y.querySelector("ion-header.header-collapse-condense"),L=function(t,e,o,a,n){var r=f(a,o),l=i(n),c=i(a),s=f(n,o),p=null!==r&&null!==l&&!o,u=null!==c&&null!==s&&o;if(p){var y=l.getBoundingClientRect(),b=r.getBoundingClientRect();m(t,e,o,l,y,b),d(t,e,o,r,y,b)}else if(u){var v=c.getBoundingClientRect(),S=s.getBoundingClientRect();m(t,e,o,c,v,S),d(t,e,o,s,v,S)}return{forward:p,backward:u}}(T,c,v,y,b),B=L.forward,R=L.backward;if(h.forEach((function(t){var e=(0,r.c)();e.addElement(t),T.addAnimation(e);var a=(0,r.c)();a.addElement(t.querySelector("ion-title"));var l,i=(0,r.c)(),f=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),d=t.closest("ion-header"),m=null===d||void 0===d?void 0:d.classList.contains("header-collapse-condense-inactive");l=v?f.filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!m||!e})):f.filter((function(t){return!t.classList.contains("buttons-collapse")})),i.addElement(l);var y=(0,r.c)();y.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var b=(0,r.c)();b.addElement(s(t).querySelector(".toolbar-background"));var S=(0,r.c)(),g=t.querySelector("ion-back-button");if(g&&S.addElement(g),e.addAnimation([a,i,y,b,S]),i.fromTo(o,.01,1),y.fromTo(o,.01,1),v)m||a.fromTo("transform","translateX(".concat(u,")"),"translateX(".concat(n,")")).fromTo(o,.01,1),y.fromTo("transform","translateX(".concat(u,")"),"translateX(".concat(n,")")),S.fromTo(o,.01,1);else if(P||a.fromTo("transform","translateX(".concat(p,")"),"translateX(".concat(n,")")).fromTo(o,.01,1),y.fromTo("transform","translateX(".concat(p,")"),"translateX(".concat(n,")")),b.beforeClearStyles([o,"transform"]),(null===d||void 0===d?void 0:d.translucent)?b.fromTo("transform",c?"translateX(-100%)":"translateX(100%)","translateX(0px)"):b.fromTo(o,.01,"var(--opacity)"),B||S.fromTo(o,.01,1),g&&!B){var h=(0,r.c)();h.addElement(s(g).querySelector(".button-text")).fromTo("transform",c?"translateX(-100px)":"translateX(100px)","translateX(0px)"),e.addAnimation(h)}})),b){var W=(0,r.c)(),N=b.querySelector(":scope > ion-content"),_=b.querySelectorAll(":scope > ion-header > ion-toolbar"),z=b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(N||0!==_.length||0!==z.length?(W.addElement(N),W.addElement(z)):W.addElement(b.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),T.addAnimation(W),v){W.beforeClearStyles([o]).fromTo("transform","translateX(".concat(n,")"),c?"translateX(-100%)":"translateX(100%)");var D=(0,l.g)(b);T.afterAddWrite((function(){"normal"===T.getDirection()&&D.style.setProperty("display","none")}))}else W.fromTo("transform","translateX(".concat(n,")"),"translateX(".concat(u,")")).fromTo(o,1,.8);if(N){var I=s(N).querySelector(".transition-effect");if(I){var O=I.querySelector(".transition-cover"),Z=I.querySelector(".transition-shadow"),j=(0,r.c)(),F=(0,r.c)(),G=(0,r.c)();j.addElement(I).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),F.addElement(O).beforeClearStyles([o]).fromTo(o,.1,0),G.addElement(Z).beforeClearStyles([o]).fromTo(o,.7,.03),j.addAnimation([F,G]),W.addAnimation([j])}}_.forEach((function(t){var e=(0,r.c)();e.addElement(t);var l=(0,r.c)();l.addElement(t.querySelector("ion-title"));var i=(0,r.c)(),f=t.querySelectorAll("ion-buttons,[menuToggle]"),d=t.closest("ion-header"),m=null===d||void 0===d?void 0:d.classList.contains("header-collapse-condense-inactive"),p=Array.from(f).filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!m||!e}));i.addElement(p);var y=(0,r.c)(),b=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");b.length>0&&y.addElement(b);var S=(0,r.c)();S.addElement(s(t).querySelector(".toolbar-background"));var g=(0,r.c)(),h=t.querySelector("ion-back-button");if(h&&g.addElement(h),e.addAnimation([l,i,y,g,S]),T.addAnimation(e),g.fromTo(o,.99,0),i.fromTo(o,.99,0),y.fromTo(o,.99,0),v){if(m||l.fromTo("transform","translateX(".concat(n,")"),c?"translateX(-100%)":"translateX(100%)").fromTo(o,.99,0),y.fromTo("transform","translateX(".concat(n,")"),c?"translateX(-100%)":"translateX(100%)"),S.beforeClearStyles([o,"transform"]),(null===d||void 0===d?void 0:d.translucent)?S.fromTo("transform","translateX(0px)",c?"translateX(-100%)":"translateX(100%)"):S.fromTo(o,"var(--opacity)",0),h&&!R){var x=(0,r.c)();x.addElement(s(h).querySelector(".button-text")).fromTo("transform","translateX(".concat(n,")"),"translateX(".concat((c?-124:124)+"px",")")),e.addAnimation(x)}}else m||l.fromTo("transform","translateX(".concat(n,")"),"translateX(".concat(u,")")).fromTo(o,.99,0).afterClearStyles([a,o]),y.fromTo("transform","translateX(".concat(n,")"),"translateX(".concat(u,")")).afterClearStyles([a,o]),g.afterClearStyles([o]),l.afterClearStyles([o]),i.afterClearStyles([o])}))}return T}catch(H){throw H}}}}]);
//# sourceMappingURL=372.cd472b05.chunk.js.map