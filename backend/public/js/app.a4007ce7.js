(function(t){function a(a){for(var s,o,n=a[0],l=a[1],c=a[2],u=0,f=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(a);while(f.length)f.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,n=1;n<e.length;n++){var l=e[n];0!==r[l]&&(s=!1)}s&&(i.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},r={app:0},i=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var d=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("section",{attrs:{id:"top"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-7"}),e("div",{staticClass:"col-md-3 clearfix"},[e("ul",{staticClass:"login-cart"},[e("li",[e("i",{staticClass:"fa fa-user"}),e("router-link",{attrs:{to:"/memberinfo"}},[t._v(" 마이페이지")])],1),t._m(0),e("li",[e("a",{attrs:{"data-toggle":"modal",href:"#"},on:{click:function(a){return t.$store.dispatch("logout")}}},[e("i",{staticClass:"fa fa-user"}),t._v(" 로그아웃 ")])]),e("li",[e("a",{attrs:{"data-toggle":"modal",href:"#"}},[e("i",{staticClass:"fa fa-user"}),e("router-link",{attrs:{to:"/memberreg"}},[t._v("회원 가입")])],1)])])]),t._m(1)])]),e("div",{staticClass:"modal fade",attrs:{id:"myModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(2),e("div",{staticClass:"modal-body clearfix"},[e("div",{staticClass:"form-group"},[e("label",{staticStyle:{color:"black"},attrs:{for:"usrid"}},[t._v("아이디:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"form-control",attrs:{type:"text",placeholder:"ID",required:"",id:"usr"},domProps:{value:t.id},on:{input:function(a){a.target.composing||(t.id=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{staticStyle:{color:"black"},attrs:{for:"usrpw"}},[t._v("비밀번호:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pw,expression:"pw"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",required:"",id:"pwd"},domProps:{value:t.pw},on:{input:function(a){a.target.composing||(t.pw=a.target.value)}}})])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(a){return t.login({id:t.id,pw:t.pw})}}},[t._v("로그인")]),e("router-link",{attrs:{to:"/findpassword"}},[e("button",{staticClass:"button",attrs:{type:"button"}},[t._v("비밀번호 찾기")])]),e("button",{staticClass:"button",attrs:{type:"button","data-dismiss":"modal"}},[t._v("취소")])],1)])])])]),e("header",[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"images/logo.png",alt:"logo"}})])],1)])])]),e("nav",{staticClass:"navbar navbar-default"},[e("div",{staticClass:"container"},[t._m(3),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[e("ul",{staticClass:"nav navbar-nav nav-main"},[e("li",[e("router-link",{attrs:{to:"/noticelist"}},[t._v("공지 사항")])],1),e("li",{ref:"myModal"},[e("router-link",{attrs:{to:"/foodlist"}},[t._v("상품 정보")])],1),e("li",[e("router-link",{attrs:{to:"/onedayintake"}},[t._v("하루 권장량 섭취 정보")])],1),e("li",[e("router-link",{attrs:{to:"/boardlist"}},[t._v("QnA")])],1),e("li",[e("router-link",{attrs:{to:"/intake"}},[t._v("내 섭취 정보")])],1),t._m(4)])])])]),e("router-view",{key:t.$route.fullPath})],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{"data-toggle":"modal","data-target":"#myModal",href:"#"}},[e("i",{staticClass:"fa fa-user"}),t._v(" 로그인 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"search-box"},[e("div",{staticClass:"input-group"},[e("input",{staticClass:"form-control",attrs:{placeholder:"Search Here",type:"text"}}),e("span",{staticClass:"input-group-btn"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button"}})])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[t._v("×")]),e("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[t._v("환영합니다.")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navbar-header"},[e("button",{staticClass:"navbar-toggle",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"}},[e("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),e("span",{staticClass:"icon-bar"}),t._v(" "),e("span",{staticClass:"icon-bar"}),t._v(" "),e("span",{staticClass:"icon-bar"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"dropdown"},[e("a",{attrs:{href:"#"}},[t._v(" PAGES "),e("span",{staticClass:"caret"})]),e("ul",{staticClass:"dropdown-menu"},[e("li",[e("a",{attrs:{href:"#"}},[t._v("Action")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Another action")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Something else here")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Separated link")])])])])}],o=(e("a4d3"),e("4de4"),e("e439"),e("dbb4"),e("b64b"),e("159b"),e("ade3")),n=e("2f62");function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function c(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){Object(o["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var d={name:"app",data:function(){return{id:"",pw:""}},computed:c({},Object(n["b"])(["isLogin","isLoginFalse"])),methods:c({},Object(n["a"])(["login"]))},u=d,f=e("2877"),p=Object(f["a"])(u,r,i,!1,null,null,null),v=p.exports,m=e("8c4f"),b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),e("section",{attrs:{id:"catagorie"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"block"},[t._m(1),e("div",{staticClass:"row"},t._l(t.info,(function(a){return e("div",{key:a.code,staticClass:"col-sm-6 col-md-4",attrs:{align:"center"}},[e("div",{staticClass:"thumbnail"},[e("a",{staticClass:"catagotie-head",on:{click:function(e){return t.show_foodinfo(a.code)}}},[e("img",{staticStyle:{"max-width":"60%",height:"auto"},attrs:{src:"../../"+a.img,alt:"..."}}),e("h5",[t._v(t._s(a.name))])]),e("div",{staticClass:"caption"},[e("p",[e("a",{staticClass:"btn btn-default btn-transparent",attrs:{role:"button"},on:{click:function(e){return t.show_foodinfo(a.code)}}},[e("span",[t._v("상품 정보로 이동")])])])])])])})),0)])])])])]),t._m(2),t._m(3)])},h=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{attrs:{id:"slider-area"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"nivoSlider",attrs:{id:"slider"}},[s("img",{attrs:{src:e("59d2"),alt:""}}),t._v(" "),s("img",{attrs:{src:e("f887"),alt:""}}),t._v(" "),s("img",{attrs:{src:e("9d15"),alt:""}})])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"block-heading"},[e("h2",[t._v("OUR FOOD CATEGORIES")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer"},[e("div",{staticClass:"container",staticStyle:{padding:"30px"}},[e("h2",{staticStyle:{"font-size":"23px"}},[t._v("Find Us")]),e("hr"),e("p",{staticStyle:{color:"#aaa"}},[e("span",{staticClass:"glyphicon glyphicon-map-marker",staticStyle:{color:"#5bc0de"},attrs:{"aria-hidden":"true"}}),t._v(" (SSAFY) 서울시 강남구 테헤란로 멀티스퀘어 ")]),e("p",{staticStyle:{color:"#aaa"}},[e("span",{staticClass:"glyphicon glyphicon-earphone",staticStyle:{color:"#5bc0de"},attrs:{"aria-hidden":"true"}}),t._v(" 1544-9001 ")]),e("p",[e("a",{staticStyle:{color:"#5bc0de"},attrs:{href:"#"}},[e("span",{staticClass:"glyphicon glyphicon-envelope",attrs:{"aria-hidden":"true"}}),t._v(" admin@ssafy.com")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sub-footer",staticStyle:{"background-color":"#eee",color:"#aaa"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"subfooter-inner"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("p",{staticClass:"text-center",staticStyle:{padding:"30px"}},[t._v("Copyright by SSAFY. All rights reserved.")])])])])])])}],g=(e("d3b7"),e("bc3a")),_=e.n(g),C=_.a.create({baseURL:"http://localhost:8090",headers:{"Content-type":"application/json"}}),y=new s["default"]({name:"image-slider",data:{images:["../public/images/slider.jpg","../public/images/slider1.jpg"],currentNumber:0,timer:null},ready:function(){this.startRotation()},methods:{startRotation:function(){this.timer=setInterval(this.next,3e3)},stopRotation:function(){clearTimeout(this.timer),this.timer=null},next:function(){this.currentNumber+=1}}}),w={name:"main",data:function(){return{uid:"ssafy",upHere:!1,info:[],loading:!0,errored:!1}},components:{Slider:y},methods:{retrieveFoods:function(){var t=this;C.get("/foodinfo").then((function(a){t.info=a.data.resvalue,alert(a.data)})).catch((function(){return t.errored=!0})).finally((function(){return t.loading=!1}))},refreshList:function(){this.retrieveFoods()},show_foodinfo:function(t){this.$router.push("/foodinfo/"+t)},registerBoard:function(){this.$router.push("/boardregistry/"+this.uid)}},mounted:function(){this.retrieveFoods()}},O=w,j=Object(f["a"])(O,b,h,!1,null,null,null),S=j.exports;s["default"].use(m["a"]);var k=new m["a"]({mode:"history",routes:[{path:"/",name:"main",component:S}]}),x=e("5c96"),P=e.n(x),$=(e("c69f"),e("fcff")),E=e.n($);s["default"].use(P.a,{locale:E.a}),s["default"].config.productionTip=!1,new s["default"]({router:k,beforeCreate:function(){this.$store.dispatch("getMemberInfo")},render:function(t){return t(v)}}).$mount("#app")},"59d2":function(t,a,e){t.exports=e.p+"img/slider.385db161.jpg"},"9d15":function(t,a,e){t.exports=e.p+"img/slider2.baf95be4.jpg"},c69f:function(t,a,e){},f887:function(t,a,e){t.exports=e.p+"img/slider1.d19ee3cb.jpg"}});
//# sourceMappingURL=app.a4007ce7.js.map