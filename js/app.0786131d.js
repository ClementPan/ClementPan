(function(t){function e(e){for(var i,c,r=e[0],o=e[1],l=e[2],u=0,p=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},n={app:0},s=[];function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0226":function(t,e,a){t.exports=a.p+"img/checked.583b7611.svg"},"0bb3":function(t,e,a){t.exports=a.p+"img/c.23d1d5a4.svg"},"15b6":function(t,e,a){},"17ec":function(t,e,a){},"1bec":function(t,e,a){},"20ac":function(t,e,a){t.exports=a.p+"img/alphacamp.5e2c8017.png"},2327:function(t,e,a){t.exports=a.p+"img/simpletwitter.2d8c0c6f.webp"},"23bf":function(t,e,a){"use strict";a("88f6")},"2b0e1":function(t,e,a){t.exports=a.p+"img/tabsArchive.0f11f013.webp"},"2f16":function(t,e,a){t.exports=a.p+"img/medium.965e9335.svg"},"32a6":function(t,e,a){"use strict";a("65c9")},"3cf9":function(t,e,a){"use strict";a("dc5c")},4016:function(t,e,a){"use strict";a("15b6")},"44c6":function(t,e,a){t.exports=a.p+"img/facebook.0587f70c.svg"},"4a5c":function(t,e,a){},"4c85":function(t,e,a){"use strict";a("d6bb")},5055:function(t,e,a){},"5135a":function(t,e,a){t.exports=a.p+"img/simpletwitter.14c01f25.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("Profile"),a("TechStack"),a("Portfolio"),a("Education"),a("Contact"),a("UpButton")],1)},s=[],c=(a("e382"),a("bb31"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"up-button",class:{show:!t.atTop},attrs:{disabled:t.atTop},on:{click:t.scrollTop}},[a("p",[t._v("Go Top!")])])}),r=[],o={name:"UpButton",data:function(){return{atTop:!0}},created:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=window,e=t.scrollY;this.atTop=0===e},scrollTop:function(){window.scroll({top:-scrollY,behavior:"smooth"})}}},l=o,d=(a("23bf"),a("2877")),u=Object(d["a"])(l,c,r,!1,null,"27ad69b0",null),p=u.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"navbar"}},[i("div",{staticClass:"brand"},[i("div",{staticClass:"title"},[i("h1",{class:[{"show-title":t.showTitle},{"show-border":t.showBorder}]},[i("img",{attrs:{src:a("0bb3"),alt:""}}),t._v("lément's ")])])]),i("nav",[i("ul",{staticClass:"navlist"},t._l(t.navlist,(function(e){return i("li",{key:e.id,staticClass:"navItem"},[i("a",{attrs:{href:e.to}},[i("p",[t._v(" "+t._s(e.name)+" ")])])])})),0)])])},h=[],m={name:"Navbar",data:function(){return{navlist:[{id:1,name:"Profile",to:"#profile"},{id:2,name:"Tech_Stack",to:"#profile"},{id:3,name:"Portfolio",to:"#portfolio"},{id:4,name:"Education",to:"#education"},{id:5,name:"Contact",to:"#contact"}],showTitle:!1,showBorder:!1}},mounted:function(){var t=this;setTimeout((function(){t.showTitle=!0,setTimeout((function(){t.showBorder=!0}),1200)}),800)}},b=m,v=(a("3cf9"),Object(d["a"])(b,f,h,!1,null,"5b98fbfb",null)),g=v.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"profile"}},[a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-content"},[a("div",{staticClass:"motto"},[a("p",[t._v(t._s(t.motto))]),t._m(1)]),a("div",{staticClass:"icon-bar"},[a("ul",{staticClass:"icon-list"},t._l(t.iconList,(function(t){return a("li",{key:t.id,staticClass:"icon-item"},[a("a",{attrs:{href:t.link,target:"_blank"}},[a("img",{attrs:{src:t.image,alt:""}})])])})),0)]),a("div",{staticClass:"description"},[a("ul",{staticClass:"profile-list"},t._l(t.profileList,(function(e){return a("li",{key:e.id},[a("p",[t._v(t._s(e.head)+"：")]),a("p",[t._v(t._s(e.body))])])})),0)])])])])},_=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"avatar"},[i("img",{attrs:{src:a("b31e"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 具備語言教學專長與多語能力"),a("br"),t._v(" 主要使用 Html、CSS、Javascript、Vue.js 開發 ")])}],k=a("2f16"),w=a.n(k),D=a("917e"),x=a.n(D),y=a("6a55"),P=a.n(y),S=a("44c6"),j=a.n(S),E={name:"Profile",data:function(){return{motto:"A Vue.js front-end developer",iconList:[{id:1,image:w.a,link:"https://zzz2999582.medium.com/"},{id:2,image:x.a,link:"https://github.com/ClementPan"},{id:3,image:P.a,link:"https://www.linkedin.com/in/clement-pan-98a9331aa/"},{id:4,image:j.a,link:"https://www.facebook.com/profile.php?id=100001602038553"}],profileList:[{id:1,head:"所在城市",body:"台北市"},{id:2,head:"尋找職位",body:"網頁前端工程師"},{id:3,head:"電子信箱",body:"zzz2999582@gmail.com"}]}}},I=E,O=(a("4c85"),Object(d["a"])(I,C,_,!1,null,"2ec81ace",null)),T=O.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"techstack"}},[t._m(0),a("div",{ref:"cards",staticClass:"cards"},t._l(t.cards,(function(e,i){return a("Teckcard",{key:i,attrs:{cardId:"card"+i,cardData:e,cardClicked:t.clickedCardId},on:{afterCardClicked:t.afterCardClicked}})})),1)])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h1",[t._v("Tech Stack")])])}],A=a("8de2"),H=a.n(A),V=a("bd76"),L=a.n(V),B=a("7431"),W=a.n(B),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"touch",rawName:"v-touch",value:t.clickHandler,expression:"clickHandler"}],ref:t.cardId,staticClass:"card",attrs:{id:t.cardId}},[a("div",{staticClass:"image"},[a("h1",[t._v(t._s(t.cardData.title))]),a("img",{attrs:{src:t.cardData.img,alt:""}})]),a("div",{staticClass:"content"},[a("p",[t._v("具備開發經驗：")]),t._l(t.cardData.content,(function(e,i){return a("ul",{key:i,staticClass:"content-list"},[a("li",{staticClass:"list-item"},[a("img",{staticClass:"pointer",attrs:{src:t.pointer,alt:""}}),t._v(" "+t._s(e)+" ")])])}))],2)])},q=[],F=a("6f85"),J=a.n(F),N={name:"TechCard",props:{cardId:{type:String,required:!0},cardData:{type:Object,required:!0},cardClicked:{type:String,required:!0}},data:function(){return{pointer:J.a}},methods:{clickHandler:function(){var t=this.$refs[this.cardId];this.$emit("afterCardClicked",t)}}},R=N,G=(a("69cc"),Object(d["a"])(R,z,q,!1,null,"75fbe709",null)),U=G.exports,Y={name:"TechStack",components:{Teckcard:U},data:function(){return{clickedCardId:"",cards:[{title:"Front-end",img:H.a,content:["HTML5","CSS3","Javascript (ES6)","Vue.js","Bootstrap","SCSS","RWD"]},{title:"Backend",img:L.a,content:["Express.js","Express-handlebars","MongoDB","Mongoose","MySQL","RESTful API"]},{title:"others",img:W.a,content:["Visual studio","Vue cli","Git","GitHub","Postman","Heroku","Line chatbot"]}]}},methods:{afterCardClicked:function(t){this.clickedCardId=t.id,this.centerCard(t)},getViewportWidth:function(){var t=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);return t<425},centerCard:function(t){var e=this.getViewportWidth();if(e){var a=this.$refs.cards,i=t.getBoundingClientRect().top,n=window,s=n.pageYOffset,c=s+i-120,r=t.offsetLeft-24;window.scroll({top:c,behavior:"smooth"}),a.scroll({left:r,behavior:"smooth"})}}}},Q=Y,X=(a("8eba"),Object(d["a"])(Q,$,M,!1,null,"1a1d87c1",null)),K=X.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{ref:"portfolio",attrs:{id:"portfolio"}},[t._m(0),a("div",{ref:"cards",staticClass:"cards"},t._l(t.cards,(function(e,i){return a("PortfolioCard",{key:i,attrs:{cardId:"card"+i,cardData:e,cardClicked:t.clickedCardId},on:{afterCardClicked:t.afterCardClicked}})})),1)])},tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h1",[t._v("Portfolio")])])}],et=a("5135a"),at=a.n(et),it=a("2327"),nt=a.n(it),st=a("639d"),ct=a.n(st),rt=a("2b0e1"),ot=a.n(rt),lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"touch",rawName:"v-touch",value:t.clickHandler,expression:"clickHandler"},{name:"touch",rawName:"v-touch:swipe",value:t.swipeHandler,expression:"swipeHandler",arg:"swipe"}],ref:t.cardId,staticClass:"card",attrs:{id:t.cardId}},[a("div",{staticClass:"image"},[a("img",{staticClass:"card-image",attrs:{src:t._f("emptyImageFilter")(t.cardData.img),alt:""}}),a("img",{staticClass:"card-gif",attrs:{src:t._f("emptyImageFilter")(t.cardData.gif),alt:""}}),a("div",{staticClass:"link"},[a("a",{attrs:{href:t.cardData.github,target:"_blank"}},[a("img",{attrs:{src:t.link,alt:""}}),a("p",[t._v("Github")])])]),a("a",{attrs:{href:t.cardData.github,target:"_blank"}},[a("p",{staticClass:"name"},[t._v(t._s(t.cardData.title))])])]),a("div",{staticClass:"content"},[a("p",{staticClass:"type"},[a("i",{staticClass:"fas fa-dot-circle"}),t._v(" 類型："+t._s(t.cardData.type)+" ")]),a("p",{staticClass:"techs"},t._l(t.cardData.techs,(function(e,i){return a("span",{key:i,staticClass:"tech-tag"},[t._v(t._s(e))])})),0),a("p",{staticClass:"spec"},[a("i",{staticClass:"fas fa-dot-circle"}),t._v(" 功能： "),t._v(" "+t._s(t._f("listFormatFilter")(t.cardData.spec))+" ")]),a("p",{staticClass:"text"},[a("i",{staticClass:"fas fa-dot-circle"}),t._v(" 簡述： "),a("br"),t._v(" "+t._s(t.cardData.text)+" ")])])])},dt=[],ut=(a("a15b"),a("b434")),pt=a.n(ut),ft={filters:{emptyImageFilter:function(t){return t||"https://via.placeholder.com/1000x1000/eee/666/?text=comming+soon"}}},ht={name:"PortfolioCard",mixins:[ft],props:{cardId:{type:String,required:!0},cardData:{type:Object,required:!0},cardClicked:{type:String,required:!0}},data:function(){return{link:pt.a}},methods:{clickHandler:function(){var t=this.$refs[this.cardId];this.$emit("afterCardClicked",t)},swipeHandler:function(t){console.log(t)}},filters:{listFormatFilter:function(t){return t.join("、")}}},mt=ht,bt=(a("eb2e"),Object(d["a"])(mt,lt,dt,!1,null,"9a39b1c0",null)),vt=bt.exports,gt={name:"Portfolio",components:{PortfolioCard:vt},data:function(){return{clickedCardId:"",cards:[{title:"Simple Twitter",img:at.a,gif:nt.a,type:"團體協作專案",github:"https://github.com/ClementPan/simpleTwitterX",techs:["Vue.js","Vuex","socket.io"],spec:["推文","按讚","追蹤","線上聊天"],text:"Alpha camp 期末協作專題。由兩位前端搭配兩位後端，採前後分離的方式製作簡易版推特 SPA。筆者負責 70% 之頁面切版、API 串接。過程使用 Trello 看板規劃與追蹤開發進度、線上開會軟體實現遠端協作。"},{title:"Tabs Archive",img:ct.a,gif:ot.a,type:"個人專案",github:"https://github.com/ClementPan/tabs-archive",techs:["Vanilla.js","SCSS","Drag & Drop","Chrome extension"],spec:["匯入分頁","分類分頁"],text:"純前端的無框架作品，使用純 JS 和 Chrome extension APIs 打造。樣式使用 SCSS 增加開發速度與可讀性。分頁 UI 元件使用 Drag & drop API 實作拖拉功能。"},{title:"準備中",img:"",gif:"",type:"",github:"https://github.com/ClementPan",techs:[""],spec:[""],text:""}]}},methods:{afterCardClicked:function(t){this.clickedCardId=t.id,this.centerCard(t)},getViewportWidth:function(){var t=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);return t<425},centerCard:function(t){var e=this.getViewportWidth();if(e){var a=this.$refs.cards,i=t.getBoundingClientRect().top,n=window,s=n.pageYOffset,c=s+i-120,r=t.offsetLeft-24;window.scroll({top:c,behavior:"smooth"}),a.scroll({left:r,behavior:"smooth"})}}}},Ct=gt,_t=(a("5b51"),Object(d["a"])(Ct,Z,tt,!1,null,"5d377ece",null)),kt=_t.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"education"}},[t._m(0),a("div",{staticClass:"phases"},t._l(t.phases,(function(t){return a("Phase",{key:t.id,attrs:{phaseData:t}})})),1)])},Dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h1",[t._v("Education")])])}],xt=a("20ac"),yt=a.n(xt),Pt=a("9bed"),St=a.n(Pt),jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-head"},[a("a",{staticClass:"icon-link",attrs:{href:t.phaseData.link,target:"_blank"}},[a("div",{staticClass:"icon"},[a("img",{attrs:{src:t.phaseData.icon,alt:""}})])]),a("h1",[t._v(t._s(t.phaseData.title))]),t.phaseData.content.length?a("div",{staticClass:"dropdown"},[a("input",{attrs:{type:"checkbox",id:"dropdown"+t.phaseData.id},domProps:{value:t.isDropped}}),a("label",{class:{rotate:t.isDropped},attrs:{for:"dropdown"+t.phaseData.id},on:{click:t.drop}},[a("img",{attrs:{src:t.dropdownIcon,alt:""}})])]):t._e()]),a("div",{staticClass:"card-body",class:{isDropped:t.isDropped}},[t.phaseData.content.length?a("ul",{staticClass:"sub-phase-list"},t._l(t.phaseData.content,(function(t,e){return a("EducationSubPhase",{key:e,attrs:{subPhaseData:t}})})),1):t._e()])])},Et=[],It=a("a880"),Ot=a.n(It),Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"sub-phase-item"},[t.subPhaseData.topic.length?1===t.subPhaseData.topic.length?[a("h2",{staticClass:"sub-phase-title"},[t._v(" "+t._s(t.subPhaseData.title)+"："+t._s(t.subPhaseData.topic[0])+" ")])]:[a("h2",{staticClass:"sub-phase-title"},[t._v(t._s(t.subPhaseData.title))]),a("div",{staticClass:"dropdown"},[a("input",{attrs:{type:"checkbox",id:"dropdown-"+t.subPhaseData.id},domProps:{value:t.isDropped}}),a("label",{class:{rotate:t.isDropped},attrs:{for:"dropdown-"+t.subPhaseData.id},on:{click:t.drop}},[a("img",{attrs:{src:t.subDropdownIcon,alt:""}})])]),t.isDropped?a("ul",{staticClass:"sub-phase-content"},t._l(t.subPhaseData.topic,(function(e,i){return a("li",{key:i,staticClass:"sub-phase-content-item"},[a("p",{staticClass:"item-index"},[t._v(t._s(i+1)+"：")]),a("p",[t._v(" "+t._s(e)+" ")])])})),0):t._e()]:[a("h2",{staticClass:"sub-phase-title"},[t._v(" "+t._s(t.subPhaseData.title)+" ")])]],2)},$t=[],Mt=a("0226"),At=a.n(Mt),Ht=a("8d77"),Vt=a.n(Ht),Lt={name:"EducationSubPhase",props:{subPhaseData:{type:Object,required:!0}},data:function(){return{subDropdownIcon:Vt.a,checkedIcon:At.a,isDropped:!1}},methods:{drop:function(){if(this.isDropped)return this.isDropped=!1;this.isDropped=!0}}},Bt=Lt,Wt=(a("32a6"),Object(d["a"])(Bt,Tt,$t,!1,null,"408a3e08",null)),zt=Wt.exports,qt={components:{EducationSubPhase:zt},name:"EduPhase",props:{phaseData:{type:Object,required:!0}},data:function(){return{dropdownIcon:Ot.a,isDropped:!0}},methods:{drop:function(){if(this.isDropped)return this.isDropped=!1;this.isDropped=!0}}},Ft=qt,Jt=(a("ee93"),Object(d["a"])(Ft,jt,Et,!1,null,"6feeb944",null)),Nt=Jt.exports,Rt={name:"Education",components:{Phase:Nt},data:function(){return{phases:[{id:1,title:"ALPHA camp 全端開發課程",icon:yt.a,link:"https://tw.alphacamp.co/",content:[{id:1,title:"學期 3：軟體工程師養成 - 前端專修",topic:["CSS 進階概念與練習","CSS 預處理器","Webpack","Vue.js 與 Web Component","Vue 與 Vuex 專案實作"]},{id:2,title:"學期 2-3：後端開發實務",topic:["網路概論","Node.js 和 Express.js 後端開發","版本控制：Git 與 GitHub","建立資料庫：NoSQL 與 MongoDB","資料處理功能：CRUD"]},{id:3,title:"學期 2-2：軟體開發實務入門",topic:["軟體開發的實務與工具","運用 AJAX 串接第三方 API","運用 MVC 架構","程式碼模組化","進階流程控制"]},{id:4,title:"學期 2-1：軟體開發實務入門",topic:["網頁切版技巧","JavaScript 觀念與實作","DOM 事件操作","資料結構觀念","RWD 響應式網頁設計與 Bootstrap"]},{id:5,title:"學期 1：軟體開發實務入門",topic:["使用者介面與 wireframe","HTML/CSS/JavaScript","運用 MVC 架構","程式碼模組化","運算思維與基礎演算法"]}]},{id:2,title:"政大華語文教學研究所",icon:St.a,link:"https://tcsl.nccu.edu.tw/",content:[{id:1,title:"語料處理",topic:["R Basic"]},{id:2,title:"程式設計概論",topic:["Python Basic"]}]},{id:3,title:"政大歐洲語言與文化學系",icon:St.a,link:"https://european.nccu.edu.tw/",content:[{id:1,title:"法國勃艮地大學交換學生",topic:[]},{id:2,title:"歐語營活動長",topic:[]},{id:3,title:"系男籃隊長",topic:[]}]}]}}},Gt=Rt,Ut=(a("b4fc"),Object(d["a"])(Gt,wt,Dt,!1,null,"7431c31b",null)),Yt=Ut.exports,Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"contact"}},[t._m(0),a("div",{staticClass:"contact-panel"},[a("ul",{staticClass:"contact-list"},t._l(t.iconList,(function(e){return a("li",{key:e.id,staticClass:"contact-item"},[a("a",{attrs:{href:e.link,target:"_blank"}},[a("p",[a("img",{attrs:{src:e.image,alt:""}})]),a("p",[t._v(" "+t._s(e.title)+" ")])])])})),0)]),a("p",{staticClass:"copyright"},[t._v(" Copyright ©2021 Clement Pan. All rights reserved. ")])])},Xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"brand"},[a("h1",[a("span",[t._v("Clé")]),t._v("ment's")])])}],Kt={name:"Contact",data:function(){return{iconList:[{id:1,title:"My Small talks",image:w.a,link:"https://zzz2999582.medium.com/"},{id:2,title:"My Coding History",image:x.a,link:"https://github.com/ClementPan"},{id:3,title:"My Profile",image:P.a,link:"https://www.linkedin.com/in/clement-pan-98a9331aa/"},{id:4,title:"My Leaked Personal Information",image:j.a,link:"https://www.facebook.com/profile.php?id=100001602038553"}]}}},Zt=Kt,te=(a("4016"),Object(d["a"])(Zt,Qt,Xt,!1,null,"6a64ac06",null)),ee=te.exports,ae={name:"App",components:{Navbar:g,Education:Yt,Profile:T,TechStack:K,Portfolio:kt,Contact:ee,UpButton:p}},ie=ae,ne=Object(d["a"])(ie,n,s,!1,null,"3db73c9f",null),se=ne.exports,ce=a("0086"),re=a.n(ce);i["a"].use(re.a),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(se)}}).$mount("#app")},"5b51":function(t,e,a){"use strict";a("5055")},"639d":function(t,e,a){t.exports=a.p+"img/tabsArchive.c41c1a0a.png"},"65c9":function(t,e,a){},"69cc":function(t,e,a){"use strict";a("9305")},"6a55":function(t,e,a){t.exports=a.p+"img/linkedin.007eb41a.svg"},"6f85":function(t,e,a){t.exports=a.p+"img/pointer.6260a5f0.svg"},7431:function(t,e,a){t.exports=a.p+"img/others.8a3b17bb.png"},"88f6":function(t,e,a){},"8d77":function(t,e,a){t.exports=a.p+"img/subDropdown.e6aac8bc.svg"},"8de2":function(t,e,a){t.exports=a.p+"img/frontend.6a3af4b3.png"},"8eba":function(t,e,a){"use strict";a("1bec")},"917e":function(t,e,a){t.exports=a.p+"img/github.1f33e75d.svg"},"91cb":function(t,e,a){},9305:function(t,e,a){},"9bed":function(t,e,a){t.exports=a.p+"img/nccu.cb8d0e83.png"},a880:function(t,e,a){t.exports=a.p+"img/dropdown.76cb5095.svg"},b31e:function(t,e,a){t.exports=a.p+"img/profile.1866880c.png"},b434:function(t,e,a){t.exports=a.p+"img/link.254d1da5.svg"},b4fc:function(t,e,a){"use strict";a("91cb")},bb31:function(t,e,a){},bd76:function(t,e,a){t.exports=a.p+"img/backend.53dc4b73.png"},d6bb:function(t,e,a){},dc5c:function(t,e,a){},e382:function(t,e,a){},eb2e:function(t,e,a){"use strict";a("17ec")},ee93:function(t,e,a){"use strict";a("4a5c")}});
//# sourceMappingURL=app.0786131d.js.map