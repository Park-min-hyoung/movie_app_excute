(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{57:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),r=s(24),i=s.n(r),c=s(10),o=s(2),l=s(13),u=s.n(l),m=s(25),j=s(26),d=s(27),b=s(31),v=s(30),h=s(28),p=s.n(h),O=s(5),x=s.n(O),f=(s(57),s(1));function g(e){var t=e.year,s=e.title,a=e.summary,n=e.poster,r=e.genres;return Object(f.jsxs)("div",{className:"movie",children:[Object(f.jsx)("img",{src:n,alt:s,title:s}),Object(f.jsxs)("div",{className:"movie_data",children:[Object(f.jsx)("h3",{className:"movie__title",children:s}),Object(f.jsx)("h3",{className:"movie__year",children:t}),Object(f.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(f.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(f.jsxs)("p",{className:"movie_summary",children:[a.slice(0,180),"..."]})]})]})}g.prototype={id:x.a.number.isRequired,year:x.a.number.isRequired,title:x.a.string.isRequired,summary:x.a.string.isRequired,poster:x.a.string.isRequired,genres:x.a.arrayOf(x.a.string).isRequired};var _=g,y=(s(59),function(e){Object(b.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(j.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovie=Object(m.a)(u.a.mark((function t(){var s,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(f.jsx)("section",{className:"container",children:t?Object(f.jsx)("div",{className:"loader",children:Object(f.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(f.jsx)("div",{className:"movies",children:s.map((function(e){return Object(f.jsx)(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));s(60);var N=function(){return Object(f.jsxs)("div",{className:"about__container",children:[Object(f.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(f.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})};var w=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(c.b,{to:"/",children:"Home"}),Object(f.jsx)(c.b,{to:"/about",children:"About"})]})};s(67);var k=function(){return Object(f.jsxs)(c.a,{children:[Object(f.jsx)(w,{}),Object(f.jsx)(o.a,{path:"/",exact:!0,component:y}),Object(f.jsx)(o.a,{path:"/about",component:N})]})};i.a.render(Object(f.jsx)(k,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.25e9d654.chunk.js.map