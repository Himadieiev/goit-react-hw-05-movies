"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[194],{194:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(861),a=r(439),s=r(757),i=r.n(s),c=r(791),o=r(689),u="Movie_mainInfoMovie__Qqgrc",l="Movie_img__WUHrV",d="Movie_addInfo__jRzN9",h="Movie_btn__KxuZ1",p=r(87),v=r(184),f=function(e){var t=e.dataMovie;if(!t)return null;var r=t.title,n=t.overview,a=t.genres,s=t.poster_path,i=t.vote_average,c=Object.values(a).map((function(e){return e.name}));return(0,v.jsxs)("div",{children:[(0,v.jsx)("button",{className:h,onClick:function(){return window.history.back()},children:"Go back"}),(0,v.jsxs)("div",{className:u,children:[(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(s),alt:r,width:200,className:l}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:r}),(0,v.jsxs)("p",{children:["User Score: ",(0,v.jsx)("span",{children:i})]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:n}),(0,v.jsx)("h4",{children:"Genres"}),(0,v.jsx)("p",{children:c.join(", ")})]})]}),(0,v.jsx)("p",{className:d,children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(p.rU,{to:"/movies/".concat(t.id,"/cast"),children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(p.rU,{to:"/movies/".concat(t.id,"/reviews"),children:"Reviews"})})]})]})},m={castTitle:"Cast_castTitle__eoJbw",list:"Cast_list__GlWio",item:"Cast_item__a0CDL",name:"Cast_name__6UbFm",character:"Cast_character__tKDlA"},x=r(243),j=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat("39851f8ad616b0be865617a5920dae9b"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=j,w=function(e){var t=e.movieId,r=(0,c.useState)([]),s=(0,a.Z)(r,2),o=s[0],u=s[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:r=e.sent,u(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,v.jsxs)("div",{className:m.cast,children:[(0,v.jsx)("h3",{className:m.castTitle,children:"Cast"}),o.length>0?(0,v.jsx)("ul",{className:m.list,children:o.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsxs)("div",{className:m.item,children:[e.profile_path?(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:"".concat(e.name)}):(0,v.jsx)("p",{children:"No photo"}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("p",{className:m.name,children:["Name: ",e.name]}),(0,v.jsxs)("p",{className:m.character,children:["Character: ",e.character]})]})]})},e.id)}))}):(0,v.jsx)("p",{children:"No cast information available"})]})},b={reviewTitle:"Reviews_reviewTitle__-9Xsn"},g=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat("39851f8ad616b0be865617a5920dae9b"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=g,N=function(e){var t=e.movieId,r=(0,c.useState)([]),s=(0,a.Z)(r,2),o=s[0],u=s[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:r=e.sent,u(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,v.jsxs)("div",{className:b.reviews,children:[(0,v.jsx)("h3",{className:b.reviewTitle,children:"Reviews"}),o.length>0?(0,v.jsx)("ul",{children:o.map((function(e){return(0,v.jsxs)("li",{children:[(0,v.jsx)("p",{children:e.author}),(0,v.jsx)("p",{children:e.content})]},e.id)}))}):(0,v.jsx)("p",{children:"We don't have any reviews for this movie"})]})},Z=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("39851f8ad616b0be865617a5920dae9b"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=Z,y=function(){var e=(0,o.UO)().movieId,t=(0,c.useState)(null),r=(0,a.Z)(t,2),s=r[0],u=r[1];return(0,c.useEffect)((function(){var t=function(){var t=(0,n.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e);case 2:r=t.sent,u(r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f,{dataMovie:s}),(0,v.jsxs)(o.Z5,{children:[(0,v.jsx)(o.AW,{path:"cast",element:(0,v.jsx)(w,{movieId:e})}),(0,v.jsx)(o.AW,{path:"reviews",element:(0,v.jsx)(N,{movieId:e})})]})]})}}}]);
//# sourceMappingURL=194.a72e61d7.chunk.js.map