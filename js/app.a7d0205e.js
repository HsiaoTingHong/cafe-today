(function(){"use strict";var e={5355:function(e,n,t){var o=t(5130),r=t(2261),a=t(4373),i=t(6942),c=t(5756),u=t(6768);const s={class:"wrapper font-mono"};function l(e,n,t,o,r,a){const i=(0,u.g2)("NavComponent"),c=(0,u.g2)("router-view"),l=(0,u.g2)("FooterComponent");return(0,u.uX)(),(0,u.CE)(u.FK,null,[(0,u.bF)(i),(0,u.Lk)("div",s,[(0,u.bF)(c)]),(0,u.bF)(l)],64)}var f=t(4232);const d={class:"header"},p={class:"nav wrapper"},m={class:"md:hidden"};function h(e,n,t,r,a,i){const c=(0,u.g2)("router-link");return(0,u.uX)(),(0,u.CE)("header",d,[(0,u.Lk)("nav",p,[(0,u.bF)(c,{to:"/"},{default:(0,u.k6)((()=>n[1]||(n[1]=[(0,u.Lk)("p",{class:"logo click-color-dark font-amatic-sc"},"cafe today?",-1)]))),_:1}),(0,u.Lk)("div",m,[(0,u.Lk)("button",{class:"hamburger",onClick:n[0]||(n[0]=(0,o.D$)(((...e)=>i.toggleMenu&&i.toggleMenu(...e)),["prevent"])),"aria-label":"選單"},n[2]||(n[2]=[(0,u.Lk)("span",{class:"hamburger-line"},null,-1),(0,u.Lk)("span",{class:"hamburger-line"},null,-1),(0,u.Lk)("span",{class:"hamburger-line"},null,-1)]))]),(0,u.Lk)("ul",{class:(0,f.C4)(["nav-list",{"nav-active":a.isMenuOpen}])},[(0,u.bF)(c,{to:"/about",onClick:(0,o.D$)(i.closeMenu,["prevent"])},{default:(0,u.k6)((()=>n[3]||(n[3]=[(0,u.Lk)("li",{class:"button click-color-light"},"關於",-1)]))),_:1},8,["onClick"]),(0,u.bF)(c,{to:"/destiny",onClick:(0,o.D$)(i.closeMenu,["prevent"])},{default:(0,u.k6)((()=>n[4]||(n[4]=[(0,u.Lk)("li",{class:"button click-color-light"},"今天喝哪家?",-1)]))),_:1},8,["onClick"]),(0,u.bF)(c,{to:"/list",onClick:(0,o.D$)(i.closeMenu,["prevent"])},{default:(0,u.k6)((()=>n[5]||(n[5]=[(0,u.Lk)("li",{class:"button click-color-light"},"咖啡收藏",-1)]))),_:1},8,["onClick"]),(0,u.bF)(c,{to:"/Customize",onClick:(0,o.D$)(i.closeMenu,["prevent"])},{default:(0,u.k6)((()=>n[6]||(n[6]=[(0,u.Lk)("li",{class:"button click-color-light"},"你的咖啡小日子",-1)]))),_:1},8,["onClick"]),(0,u.bF)(c,{to:"/login",onClick:(0,o.D$)(i.closeMenu,["prevent"])},{default:(0,u.k6)((()=>n[7]||(n[7]=[(0,u.Lk)("li",{class:"button click-color-light"},"登入",-1)]))),_:1},8,["onClick"])],2)])])}var b={name:"NavComponent",data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},closeMenu(){!0===this.isMenuOpen&&(this.isMenuOpen=!this.isMenuOpen)}}},v=t(1241);const g=(0,v.A)(b,[["render",h],["__scopeId","data-v-90cf6100"]]);var k=g;const y={class:"footer"};function C(e,n,t,o,r,a){return(0,u.uX)(),(0,u.CE)("footer",y,[(0,u.Lk)("p",null,"© "+(0,f.v_)(o.nowYear)+" Made By Hsiao Ting Hong.",1)])}var L=t(144),w={name:"FooterComponent",setup(){const e=(0,L.KR)(""),n=function(){const n=new Date;e.value=n.getFullYear()};return(0,u.sV)((()=>{n()})),{nowYear:e}}};const O=(0,v.A)(w,[["render",C],["__scopeId","data-v-e3552eca"]]);var E=O,M={name:"App",components:{NavComponent:k,FooterComponent:E}};const _=(0,v.A)(M,[["render",l]]);var A=_,F=t(1387),N=t.p+"img/coffeeBeans.a49fe50e.png";const j={class:"screen-center"};function x(e,n,t,o,r,a){const i=(0,u.g2)("router-link");return(0,u.uX)(),(0,u.CE)("div",j,[n[1]||(n[1]=(0,u.Lk)("p",{class:"slogan font-amatic-sc"}," Which cafe are you going to today ? ",-1)),n[2]||(n[2]=(0,u.Lk)("p",{class:"text-stone-700 text-sm"},[(0,u.eW)(" 咖啡店太多間導致選擇障礙嗎"),(0,u.Lk)("br"),(0,u.eW)(" 那就讓我們幫你決定吧 ")],-1)),(0,u.bF)(i,{to:"/destiny"},{default:(0,u.k6)((()=>n[0]||(n[0]=[(0,u.Lk)("button",{class:"btn click-color-light font-amatic-sc"},"GO !",-1)]))),_:1}),n[3]||(n[3]=(0,u.Lk)("img",{class:"image",src:N,alt:"coffee beans"},null,-1))])}var S=t(4783),T={name:"HomeView",computed:{...(0,r.aH)(S.A,["name"])}};const D=(0,v.A)(T,[["render",x],["__scopeId","data-v-051a123b"]]);var z=D;const P=[{path:"/",name:"home",component:z},{path:"/about",name:"about",component:()=>t.e(673).then(t.bind(t,5673))},{path:"/destiny",name:"destiny",component:()=>t.e(140).then(t.bind(t,2859))},{path:"/list",name:"list",component:()=>t.e(48).then(t.bind(t,8048)),redirect:"/list/listTaichung",children:[{path:"listTaichung",component:()=>t.e(684).then(t.bind(t,7684))},{path:"saveListView",component:()=>t.e(633).then(t.bind(t,633))}]},{path:"/customize",name:"customize",component:()=>t.e(644).then(t.bind(t,1644)),redirect:"/customize/customizeList",children:[{path:"customizeList",component:()=>t.e(325).then(t.bind(t,2325))},{path:"customizeDestiny",component:()=>t.e(273).then(t.bind(t,7273))},{path:"customizeEdit",component:()=>t.e(73).then(t.bind(t,73))}]},{path:"/login",name:"loginView",component:()=>t.e(723).then(t.bind(t,9723))},{path:"/register",name:"registerView",component:()=>t.e(81).then(t.bind(t,3081))},{path:"/storeView",name:"storeView",component:()=>t.e(245).then(t.bind(t,1245))},{path:"/:pathMatch(.*)*",redirect:"/"}],V=(0,F.aE)({history:(0,F.LA)("/cafe-today/"),routes:P});var $=V;const B=(0,r.Ey)(),H=(0,o.Ef)(A);H.use(B),H.use(i.A,a.A),H.use($),H.component("LoadingOverlay",c.A),H.mount("#app")},4783:function(e,n,t){var o=t(2261);n.A=(0,o.nY)("User Store",{state:()=>({name:"Ting",cafeNumbers:10}),getters:{getUserName:e=>`我的名字是 ${e.name}`},actions:{updateName(){this.name="Amy"}}})}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var c=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{48:"ac574e44",73:"d2f4a442",81:"826dc597",140:"f233d3f0",245:"5685f7f7",273:"558eda72",325:"f3b8e777",633:"dac06fe3",644:"284043d6",673:"a0ff178e",684:"ab935dc8",723:"98533b7e"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{48:"e65df35a",140:"b8bb9723",633:"b7ac950b",673:"b9f7f266",684:"7ff98cf3"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="cafe-today:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var c,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+a){c=f;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+a),c.src=o),e[o]=[r];var d=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/cafe-today/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,o,r,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",t.nc&&(i.nonce=t.nc);var c=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var o=t&&t.type,c=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+c+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=c,i.parentNode&&i.parentNode.removeChild(i),a(u)}};return i.onerror=i.onload=c,i.href=n,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),c=t.p+i;if(n(i,c))return r();e(o,c,null,r,a)}))},r={524:0};t.f.miniCss=function(e,n){var t={48:1,140:1,633:1,673:1,684:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),c=new Error,u=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],c=o[1],u=o[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(u)var l=u(t)}for(n&&n(o);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},o=self["webpackChunkcafe_today"]=self["webpackChunkcafe_today"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(5355)}));o=t.O(o)})();