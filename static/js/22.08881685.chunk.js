"use strict";(self.webpackChunklinktree_samuelsteven_ph=self.webpackChunklinktree_samuelsteven_ph||[]).push([[22],{22:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return a}});var r=n(811),i=n(507),u=n(909),a=function(e,t,n,a,c){var o=e.ownerDocument.defaultView,s=(0,i.i)(e),f=function(e){return s?-e.deltaX:e.deltaX};return(0,u.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return function(e){var t=e.startX;return s?t>=o.innerWidth-50:t<=50}(e)&&t()},onStart:n,onMove:function(e){var t=f(e)/o.innerWidth;a(t)},onEnd:function(e){var t=f(e),n=o.innerWidth,i=t/n,u=function(e){return s?-e.velocityX:e.velocityX}(e),a=u>=0&&(u>.2||t>n/2),l=(a?1-i:i)*n,h=0;if(l>5){var v=l/Math.abs(u);h=Math.min(v,540)}c(a,i<=0?.01:(0,r.e)(0,i,.9999),h)}})}}}]);
//# sourceMappingURL=22.08881685.chunk.js.map