(this["webpackJsonpit-kamasutra"]=this["webpackJsonpit-kamasutra"]||[]).push([[0],{104:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(38),r=n(8),s={dialogs:[{id:1,name:"Dimuch"},{id:2,name:"Andew"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is you?"},{id:3,message:"Yo"}]},o=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}}},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(27),r=n(28),s=n(30),o=n(29),i=n(31),c=n(0),u=n.n(c),l=n(24),m=n(13),f=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var t=function(t){function n(){return Object(a.a)(this,n),Object(s.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(i.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(l.a,{to:"/login"})}}]),n}(u.a.Component);return Object(m.b)(f)(t)}},12:function(e,t,n){e.exports={nav:"Navbar_nav__tdhJs",item:"Navbar_item__2e19A",activeLink:"Navbar_activeLink__1MwSp"}},133:function(e,t,n){e.exports=n.p+"static/media/preloader.27e2ef14.svg"},136:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1dosH"}},137:function(e,t){e.exports="data:image/png;base64,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"},164:function(e,t,n){e.exports=n(291)},169:function(e,t,n){},17:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(130),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"dc6e3a5e-df57-4968-926d-8710ee585462"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e),{}).then((function(e){return e.data}))},unfollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object"),o.getProfile(e)}},o={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})}},i={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},173:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),s=n(62),o=n.n(s),i=(n(169),n(27)),c=n(28),u=n(30),l=n(29),m=n(31),f=n(7),g=n(24),d=n(14),p=n(13),h=(n(173),n(93)),E=n(104),A={},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;arguments.length>1&&arguments[1];return e},b=n(9),O=n.n(b),I=n(38),C=n(8),v=n(17),S=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(C.a)({},e,{},a):e}))},P={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},W=function(e){return{type:"FOLLOW",userId:e}},G=function(e){return{type:"UNFOLLOW",userId:e}},j=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},x=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},M=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},Y=function(e,t,n,a){return O.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e(M(!0,t)),r.next=3,O.a.awrap(n(t));case 3:0===r.sent.resultCode&&e(a(t)),e(M(!1,t));case 6:case"end":return r.stop()}}))},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(C.a)({},e,{users:S(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(C.a)({},e,{users:S(e.users,t.userId,"id",{followed:!1})});case"SET-USERS":return Object(C.a)({},e,{users:Object(I.a)(t.users)});case"SET-CURRENT-PAGE":return Object(C.a)({},e,{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(C.a)({},e,{totalUsersCount:t.count});case"TOGGLE-IS-FETCHING":return Object(C.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(C.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(I.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},U=n(45),D={userId:null,email:null,login:null,isAuth:!1},B=function(e,t,n,a){return{type:"social/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},F=function(){return function(e){var t,n,a,r,s;return O.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,O.a.awrap(v.a.me());case 2:0===(t=o.sent).data.resultCode&&(n=t.data.data,a=n.id,r=n.email,s=n.login,e(B(a,r,s,!0)));case 4:case"end":return o.stop()}}))}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"social/auth/SET_USER_DATA":return Object(C.a)({},e,{},t.payload);default:return e}},N=n(131),Q=n(128),R={initialized:!1},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(C.a)({},e,{initialized:!0});default:return e}},k=Object(f.c)({profilePage:h.b,dialogsPage:E.a,sidebar:w,usersPage:y,auth:T,form:Q.a,app:Z}),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.d,L=Object(f.e)(k,z(Object(f.a)(N.a))),J=L;window.store=L;var V=n(41),K=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(V.a,null)},r.a.createElement(e,t))}},X=n(89),q=n.n(X),H=function(e){return r.a.createElement("header",{className:q.a.header},r.a.createElement("img",{src:"https://www.logaster.ru/static/v3/img/products/logo.png",alt:""}),r.a.createElement("div",{className:q.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(d.b,{to:"/login"},"Login")))},_=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(H,this.props)}}]),t}(r.a.Component),$=Object(p.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){return O.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.awrap(v.a.logout());case 2:0===t.sent.data.resultCode&&e(B(null,null,null,!1));case 4:case"end":return t.stop()}}))}}})(_),ee=n(12),te=n.n(ee),ne=function(){return r.a.createElement("nav",{className:te.a.nav},r.a.createElement("div",{className:te.a.item},r.a.createElement(d.b,{to:"/profile",activeClassName:te.a.activeLink},"Profile")),r.a.createElement("div",{className:"".concat(te.a.item," ").concat(te.a.active)},r.a.createElement(d.b,{to:"/dialogs",activeClassName:te.a.activeLink},"Messages")),r.a.createElement("div",{className:"".concat(te.a.item," ").concat(te.a.active)},r.a.createElement(d.b,{to:"/users",activeClassName:te.a.activeLink},"Users")),r.a.createElement("div",{className:te.a.item},r.a.createElement(d.b,{to:"/news",activeClassName:te.a.activeLink},"News")),r.a.createElement("div",{className:te.a.item},r.a.createElement(d.b,{to:"/music",activeClassName:te.a.activeLink},"Music")),r.a.createElement("div",{className:te.a.item},r.a.createElement(d.b,{to:"/settings",activeClassName:te.a.activeLink},"Settings")))},ae=n(52),re=n(65),se=n(127),oe=n(68),ie=n.n(oe),ce=n(135),ue=n.n(ce),le=function(e){for(var t=e.totalItemsCount,n=e.pageSize,s=e.currentPage,o=e.onPageChanged,i=e.portionSize,c=void 0===i?10:i,u=Math.ceil(t/n),l=[],m=1;m<=u;m++)l.push(m);var f=Math.ceil(u/c),g=Object(a.useState)(1),d=Object(se.a)(g,2),p=d[0],h=d[1],E=(p-1)*c+1,A=p*c;return r.a.createElement("div",{className:ie.a.paginator},p>1&&r.a.createElement("button",{onClick:function(){h(p-1)}},"PREV"),l.filter((function(e){return e>=E&&e<=A})).map((function(e){return r.a.createElement("span",{className:ue()(Object(re.a)({},ie.a.selectedPage,s===e),ie.a.pageNumber),key:e,onClick:function(t){o(e)}},e)})),f>p&&r.a.createElement("button",{onClick:function(){h(p+1)}},"NEXT"))},me=n(136),fe=n.n(me),ge=n(137),de=n.n(ge),pe=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,s=e.follow;return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(d.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:de.a,alt:"ava",className:fe.a.userPhoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"u.location.country"),r.a.createElement("div",null,"u.location.city"))))},he=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,s=e.onPageChanged,o=e.users,i=Object(ae.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return r.a.createElement("div",null,r.a.createElement(le,{currentPage:t,onPageChanged:s,totalItemsCount:n,pageSize:a}),r.a.createElement("div",null,o.map((function(e){return r.a.createElement(pe,{user:e,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow,key:e.id})}))))},Ee=n(115),Ae=n(138),we=Object(Ae.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),be=function(e){return e.usersPage.pageSize},Oe=function(e){return e.usersPage.totalUsersCount},Ie=function(e){return e.usersPage.currentPage},Ce=function(e){return e.usersPage.isFetching},ve=function(e){return e.usersPage.followingInProgress},Se=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.requestUsers(e,t)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(V.a,null):null,r.a.createElement(he,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress}))}}]),t}(r.a.Component),Pe=Object(f.d)(Ee.a,Object(p.b)((function(e){return{users:we(e),pageSize:be(e),totalUsersCount:Oe(e),currentPage:Ie(e),isFetching:Ce(e),followingInProgress:ve(e)}}),{follow:function(e){return function(t){return O.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:Y(t,e,v.c.follow.bind(v.c),W);case 1:case"end":return n.stop()}}))}},unfollow:function(e){return function(t){return O.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:Y(t,e,v.c.unfollow.bind(v.c),G);case 1:case"end":return n.stop()}}))}},setCurrentPage:j,toggleFollowingProgress:M,requestUsers:function(e,t){return function(n){var a;return O.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n(x(!0)),n(j(e)),r.next=4,O.a.awrap(v.c.getUsers(e,t));case 4:a=r.sent,n(x(!1)),n({type:"SET-USERS",users:a.items}),n({type:"SET-TOTAL-USERS-COUNT",count:a.totalCount});case 8:case"end":return r.stop()}}))}}}))(Se),We=n(126),Ge=n(33),je=n(70),xe=n(53),Me=n.n(xe),Ye=Object(We.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},Object(Ge.c)("Email","email",[je.b],Ge.a),Object(Ge.c)("Password","password",[je.b],Ge.a,{type:"password"}),Object(Ge.c)(null,"rememberMe",[],Ge.a,{type:"checkbox"},"remember me"),n&&r.a.createElement("div",{className:Me.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Log In")))})),ye=Object(p.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(a){var r,s;return O.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,O.a.awrap(v.a.login(e,t,n));case 2:0===(r=o.sent).data.resultCode?a(F()):(s=r.data.messages.length>0?r.data.messages[0]:"Some error",a(Object(U.a)("login",{_error:s})));case 4:case"end":return o.stop()}}))}}})((function(e){return e.isAuth?r.a.createElement(g.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(Ye,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),Ue=r.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),De=r.a.lazy((function(){return n.e(4).then(n.bind(null,298))})),Be=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement($,null),r.a.createElement(ne,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(g.b,{path:"/dialogs",render:K(Ue)}),r.a.createElement(g.b,{path:"/profile/:userId?",render:K(De)}),r.a.createElement(g.b,{path:"/users",render:function(){return r.a.createElement(Pe,null)}}),r.a.createElement(g.b,{path:"/login",render:function(){return r.a.createElement(ye,null)}}))):r.a.createElement(V.a,null)}}]),t}(r.a.Component),Fe=Object(f.d)(g.f,Object(p.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(F()).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Be),Te=function(e){return r.a.createElement(d.a,null,r.a.createElement(p.a,{store:J},r.a.createElement(Fe,null)))};o.a.render(r.a.createElement(Te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return f}));var a=n(52),r=n(0),s=n.n(r),o=n(53),i=n.n(o),c=n(87),u=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,o=n&&a;return s.a.createElement("div",{className:i.a.formControl+" "+(o?i.a.error:"")},s.a.createElement("div",null,r),o&&s.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return s.a.createElement(u,e,s.a.createElement("textarea",Object.assign({},t,n)))},m=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return s.a.createElement(u,e,s.a.createElement("input",Object.assign({},t,n)))},f=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return s.a.createElement("div",null,s.a.createElement(c.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r))," ",o)}},41:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(133),o=n.n(s);t.a=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:o.a,alt:"preloader"}))}},53:function(e,t,n){e.exports={formControl:"FormsControl_formControl__xKbZp",error:"FormsControl_error__1ru_h",formSummaryError:"FormsControl_formSummaryError__1gAa5"}},68:function(e,t,n){e.exports={paginator:"Paginator_paginator__2wNWC",pageNumber:"Paginator_pageNumber__3Eg5z",selectedPage:"Paginator_selectedPage__1cHJQ"}},70:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field id required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},89:function(e,t,n){e.exports={header:"Header_header__2t0Fe",loginBlock:"Header_loginBlock__1Ywei"}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return f})),n.d(t,"e",(function(){return g}));var a=n(9),r=n.n(a),s=n(38),o=n(8),i=n(17),c={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:22}],profile:null,status:""},u=function(e){return{type:"ADD-POST",newPostText:e}},l=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(i.c.getProfile(e));case 2:n=a.sent,t({type:"SET-USER-PROFILE",profile:n.data});case 4:case"end":return a.stop()}}))}},f=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(i.b.getStatus(e));case 2:n=a.sent,t(l(n.data));case 4:case"end":return a.stop()}}))}},g=function(e){return function(t){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(i.b.updateStatus(e));case 2:0===n.sent.data.resultCode&&t(l(e));case 4:case"end":return n.stop()}}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:3,message:t.newPostText,likesCount:0};return Object(o.a)({},e,{posts:[].concat(Object(s.a)(e.posts),[n])});case"SET-USER-PROFILE":return Object(o.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(o.a)({},e,{status:t.status});case"DELETE_POST":return Object(o.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}}},[[164,1,2]]]);
//# sourceMappingURL=main.d92bd658.chunk.js.map