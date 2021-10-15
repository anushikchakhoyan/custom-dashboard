(this["webpackJsonpcustom-dashboard"]=this["webpackJsonpcustom-dashboard"]||[]).push([[2],{104:function(e,t,r){},105:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r(60),c=r.n(n),o=r(13),a=function(e){e&&e instanceof Function&&r.e(8).then(r.bind(null,324)).then((function(t){var r=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),s(e),n(e),c(e),o(e)}))},l=r(112),i=r(4),u=r(77),d=r(1),b=function(){var e=Object(u.a)().t;return Object(d.jsxs)("div",{className:"flex items-center flex-col pt-20 min-h-screen",children:[Object(d.jsx)("p",{className:"text-7xl",children:"404"}),Object(d.jsx)("p",{className:"text-center text-2xl",children:e("notFound.title")}),Object(d.jsx)("p",{className:"text-center text-2xl",children:e("notFound.desc")}),Object(d.jsx)(o.b,{to:"/users",className:"mt-8 d-block",children:Object(d.jsx)("button",{className:"text-lg underline",children:e("goBack")})})]})},j=r(22),m=r(49),x=r(82),g={borderTopColor:"transparent"},O=function(){return Object(d.jsx)("div",{className:"pt-16",children:Object(d.jsx)("div",{className:"w-8 h-8 border-4 border-green-600 border-double rounded-full mx-auto animate-spin",style:g})})},h=r(113),p=r(21),f=function(){var e=Object(p.b)(),t=Object(u.a)().t,r=Object(i.g)();return Object(d.jsxs)("header",{className:"bg-white shadow-lg px-8 py-4 flex items-center justify-between",children:[Object(d.jsx)("h1",{className:"font-black text-xl text-green-600",children:t("logo")}),Object(d.jsxs)(h.b,{children:[Object(d.jsx)("p",{className:"font-bold",children:e.username}),Object(d.jsx)("p",{onClick:function(){Object(p.e)(),Object(p.d)(),r.replace("/login")},className:"cursor-pointer ml-3 hover:text-green-600",children:t("logout")})]})]})},v=r(114),y=r(115),N=function(){var e=Object(u.a)().t;return Object(d.jsxs)("div",{className:"m-3 lg:m-0 lg:w-48 bg-white content-wrapper flex lg:block",children:[Object(d.jsxs)(o.c,{to:"/users",exact:!0,activeClassName:"border-green-600 lg:bg-gray-200 hover:border-green-600",className:"group flex items-center mr-4 lg:mr-0 py-3 px-6 border-b-4 lg:border-b-0 lg:border-r-4 border-white hover:bg-gray-200 hover:text-green-600 hover:border-gray-200",children:[Object(d.jsx)(v.a,{className:"text-xl"}),Object(d.jsx)("p",{className:"text-md ml-4 lg:ml-8",children:e("users")})]}),Object(d.jsxs)(o.c,{to:"/posts",exact:!0,activeClassName:"border-green-600 bg-gray-200 hover:border-green-600",className:"group flex items-center py-3 px-6 border-b-4 lg:border-b-0 lg:border-r-4 border-white hover:bg-gray-200 hover:text-green-600 hover:border-gray-200",children:[Object(d.jsx)(y.a,{className:"text-xl"}),Object(d.jsx)("p",{className:"text-md ml-4 lg:ml-8",children:e("posts")})]})]})},w=function(e){var t=e.children;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{}),Object(d.jsxs)("section",{className:"flex flex-col items-start lg:flex-row",children:[Object(d.jsx)(N,{}),Object(d.jsx)("div",{className:"p-3 w-full",children:t})]})]})},P=["component","title"],S=function(e){var t=e.component,r=e.title,n=Object(m.a)(e,P);return Object(d.jsx)(i.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){return Object(p.c)()?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x.a,{children:Object(d.jsx)("title",{children:r})}),Object(d.jsx)(s.Suspense,{fallback:Object(d.jsx)(O,{}),children:Object(d.jsx)(w,{children:Object(d.jsx)(t,Object(j.a)({},e))})})]}):Object(d.jsx)(i.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},k=["component"],_=function(e){var t=e.component,r=Object(m.a)(e,k);return Object(d.jsx)(i.b,Object(j.a)(Object(j.a)({},r),{},{render:function(e){return Object(p.c)()?Object(d.jsx)(i.a,{to:"/"}):Object(d.jsx)(s.Suspense,{fallback:Object(d.jsx)(O,{}),children:Object(d.jsx)(t,Object(j.a)({},e))})}}))},F=Object(s.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(6)]).then(r.bind(null,332))})),I=Object(s.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(5)]).then(r.bind(null,333))})),C=Object(s.lazy)((function(){return Promise.all([r.e(0),r.e(7)]).then(r.bind(null,331))})),U=Object(l.a)()((function(e){var t=e.t;return Object(d.jsxs)(i.d,{children:[Object(d.jsx)(_,{exact:!0,path:"/login",component:C,title:t("login")}),Object(d.jsx)(S,{exact:!0,path:"/users",component:F,title:t("users")}),Object(d.jsx)(S,{exact:!0,path:"/posts",component:I,title:t("posts")}),Object(d.jsx)(i.b,{exact:!0,path:"/404",title:t("notFound"),component:b}),Object(d.jsx)(i.a,{to:"/404"})]})})),L=function(){return Object(d.jsx)("main",{className:"bg-gray-100 min-h-screen",children:Object(d.jsx)(U,{})})};r(104),r(88);c.a.render(Object(d.jsx)(o.a,{children:Object(d.jsx)(L,{})}),document.getElementById("root")),a()},21:function(e,t,r){"use strict";r.d(t,"g",(function(){return o})),r.d(t,"b",(function(){return a})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return i})),r.d(t,"a",(function(){return u})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return b}));var s=r(106),n="token",c="user";function o(e){localStorage.setItem(c,JSON.stringify(e))}function a(){return JSON.parse(localStorage.getItem(c))}function l(){localStorage.removeItem(c)}function i(e){localStorage.setItem(n,e)}function u(){return localStorage.getItem(n)}function d(){return!Object(s.a)(u())}function b(){localStorage.removeItem(n)}},88:function(e,t,r){"use strict";var s=r(56),n=r(32);s.a.use(n.e).init({resources:{en:{translation:{id:"ID",no:"No",yes:"Yes",name:"Name",logo:"LOGO",users:"Users",email:"Email",posts:"Posts",title:"Title",login:"Log in",layout:"Layout",logout:"Log Out",appName:"Welcome Back!",singIn:"Log in to your account",body:"Description",goBack:"Go Back home",actions:"Actions",addPost:"Create post",editPost:"Edit post",removePost:"Remove post",addUser:"Create user",editUser:"Edit user",removeUser:"Remove user",notFound:{title:"OOPS! Page Not Found",desc:"We are sorry, but the page you requested was not found"},auth:{save:"Save",wait:"Wait...",submit:"Submit",username:"Username",password:"Password"},messages:{delete_user_confirm:"Are you sure to delete this user?",user_deleted:"User deleted successfully",user_updated:"User updated successfully",user_created:"User created successfully",delete_post_confirm:"Are you sure to delete this post?",post_deleted:"Post deleted successfully",post_updated:"Post updated successfully",post_created:"Post created successfully"},error:{err_internal:"Internal server error",something_wrong:"Something went wrong"},validation:{required:"This field is Required!"}}}},lng:"en",interpolation:{escapeValue:!1}}),t.a=s.a}},[[105,3,4]]]);
//# sourceMappingURL=main.dc0dac72.chunk.js.map