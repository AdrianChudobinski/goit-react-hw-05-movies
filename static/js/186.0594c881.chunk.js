"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[186],{186:function(n,e,t){t.r(e);var r=t(861),c=t(439),a=t(757),u=t.n(a),i=t(791),o=t(952),s=t(184);e.default=function(n){var e=n.match.params.movieId,t=(0,i.useState)([]),a=(0,c.Z)(t,2),v=a[0],f=a[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.tx)(e);case 3:t=n.sent,f(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Error fetching movie reviews:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Reviews"}),v.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{children:t}),(0,s.jsx)("p",{children:r})]},e)}))]})}},952:function(n,e,t){t.d(e,{Df:function(){return h},TP:function(){return d},tx:function(){return m},z1:function(){return p},zv:function(){return l}});var r=t(683),c=t(861),a=t(757),u=t.n(a),i=t(243),o="5f1e3b1759fab00680a52c6138151c80",s="https://api.themoviedb.org/3",v=function(){var n=(0,c.Z)(u().mark((function n(e){var t,c,a,s,v=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=v.length>1&&void 0!==v[1]?v[1]:{},n.prev=1,n.next=4,i.Z.get(e,{params:(0,r.Z)((0,r.Z)({},t),{},{api_key:o})});case 4:return c=n.sent,n.abrupt("return",c.data);case 8:throw n.prev=8,n.t0=n.catch(1),new Error((null===(a=n.t0.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.status_message)||"Something went wrong");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=new URLSearchParams((0,r.Z)((0,r.Z)({},e),{},{api_key:o}));return"".concat(s).concat(n,"?").concat(t)},h=function(){return v(f("/trending/movie/day"))},p=function(n){return v(f("/search/movie",{query:n}))},d=function(n){return v(f("/movie/".concat(n)))},l=function(n){return v(f("/movie/".concat(n,"/credits")))},m=function(n){return v(f("/movie/".concat(n,"/reviews")))}}}]);
//# sourceMappingURL=186.0594c881.chunk.js.map