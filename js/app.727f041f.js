(function(){"use strict";var e={2175:function(e,n,t){var o=t(5130),r=t(2261),a=t(4373),i=t(6942),c=t(5756),s=t(6768);const u={class:"min-h-screen flex flex-col relative overflow-hidden"},l={class:"flex-1 relative"},d={class:"wrapper font-mono relative"};function f(e,n,t,r,a,i){const c=(0,s.g2)("NavComponent"),f=(0,s.g2)("router-view"),p=(0,s.g2)("FooterComponent");return(0,s.uX)(),(0,s.CE)("div",u,[(0,s.bF)(c),(0,s.Lk)("div",l,[(0,s.Lk)("div",d,[(0,s.bF)(o.eB,{name:"slide"},{default:(0,s.k6)((()=>[(0,s.bF)(f)])),_:1})])]),(0,s.bF)(p)])}var p=t(4232);const m={class:"header"},h={class:"nav wrapper"},v={class:"md:hidden"};function b(e,n,t,r,a,i){const c=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("header",m,[(0,s.Lk)("nav",h,[(0,s.bF)(c,{to:"/"},{default:(0,s.k6)((()=>n[1]||(n[1]=[(0,s.Lk)("p",{class:"logo click-color-dark font-amatic-sc"},"cafe today?",-1)]))),_:1}),(0,s.Lk)("div",v,[(0,s.Lk)("button",{class:"hamburger",onClick:n[0]||(n[0]=(0,o.D$)(((...e)=>i.toggleMenu&&i.toggleMenu(...e)),["prevent"])),"aria-label":"選單"},n[2]||(n[2]=[(0,s.Lk)("span",{class:"hamburger-line"},null,-1),(0,s.Lk)("span",{class:"hamburger-line"},null,-1),(0,s.Lk)("span",{class:"hamburger-line"},null,-1)]))]),(0,s.Lk)("ul",{class:(0,p.C4)(["nav-list",{"nav-active":a.isMenuOpen}])},[(0,s.bF)(c,{to:"/about",onClick:(0,o.D$)(i.closeMenu,["prevent"])},{default:(0,s.k6)((()=>n[3]||(n[3]=[(0,s.Lk)("li",{class:"button click-color-light"},"關於",-1)]))),_:1},8,["onClick"]),(0,s.bF)(c,{to:"/destiny",onClick:(0,o.D$)(i.closeMenu,["prevent"])},{default:(0,s.k6)((()=>n[4]||(n[4]=[(0,s.Lk)("li",{class:"button click-color-light"},"今天喝哪家?",-1)]))),_:1},8,["onClick"]),(0,s.bF)(c,{to:"/list",onClick:(0,o.D$)(i.closeMenu,["prevent"])},{default:(0,s.k6)((()=>n[5]||(n[5]=[(0,s.Lk)("li",{class:"button click-color-light"},"咖啡收藏",-1)]))),_:1},8,["onClick"]),(0,s.bF)(c,{to:"/Customize",onClick:(0,o.D$)(i.closeMenu,["prevent"])},{default:(0,s.k6)((()=>n[6]||(n[6]=[(0,s.Lk)("li",{class:"button click-color-light"},"你的咖啡小日子",-1)]))),_:1},8,["onClick"])],2)])])}var g={name:"NavComponent",data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},closeMenu(){!0===this.isMenuOpen&&(this.isMenuOpen=!this.isMenuOpen)}}},k=t(1241);const y=(0,k.A)(g,[["render",b],["__scopeId","data-v-5c47443e"]]);var C=y;const L={class:"footer"};function w(e,n,t,o,r,a){return(0,s.uX)(),(0,s.CE)("footer",L,[(0,s.Lk)("p",null,"© "+(0,p.v_)(o.nowYear)+" Made By Hsiao Ting Hong.",1)])}var O=t(144),E={name:"FooterComponent",setup(){const e=(0,O.KR)(""),n=function(){const n=new Date;e.value=n.getFullYear()};return(0,s.sV)((()=>{n()})),{nowYear:e}}};const _=(0,k.A)(E,[["render",w],["__scopeId","data-v-e3552eca"]]);var M=_,A={name:"App",components:{NavComponent:C,FooterComponent:M}};const F=(0,k.A)(A,[["render",f]]);var x=F,N=t(1387),j=t.p+"img/coffeeBeans.a49fe50e.png";const P={class:"screen-center"};function S(e,n,t,o,r,a){const i=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",P,[n[1]||(n[1]=(0,s.Lk)("p",{class:"slogan font-amatic-sc"}," Which cafe are you going to today ? ",-1)),n[2]||(n[2]=(0,s.Lk)("p",{class:"text-stone-700 text-sm"},[(0,s.eW)(" 咖啡店太多間導致選擇障礙嗎"),(0,s.Lk)("br"),(0,s.eW)(" 那就讓我們幫你決定吧 ")],-1)),(0,s.bF)(i,{to:"/destiny"},{default:(0,s.k6)((()=>n[0]||(n[0]=[(0,s.Lk)("button",{class:"btn click-color-light font-amatic-sc"},"GO !",-1)]))),_:1}),n[3]||(n[3]=(0,s.Lk)("img",{class:"image",src:j,alt:"coffee beans"},null,-1))])}var T=t(4783),D={name:"HomeView",computed:{...(0,r.aH)(T.A,["name"])}};const z=(0,k.A)(D,[["render",S],["__scopeId","data-v-051a123b"]]);var B=z;const $=[{path:"/",name:"home",component:B},{path:"/about",name:"about",component:()=>t.e(673).then(t.bind(t,5673))},{path:"/destiny",name:"destiny",component:()=>Promise.all([t.e(832),t.e(918)]).then(t.bind(t,9765))},{path:"/list",name:"list",component:()=>t.e(48).then(t.bind(t,8048)),redirect:"/list/listTaichung",children:[{path:"listTaichung",component:()=>Promise.all([t.e(832),t.e(60),t.e(571)]).then(t.bind(t,5571))},{path:"saveListView",component:()=>Promise.all([t.e(832),t.e(626)]).then(t.bind(t,4245))}]},{path:"/customize",name:"customize",component:()=>t.e(306).then(t.bind(t,6306)),redirect:"/customize/customizeList",children:[{path:"customizeList",component:()=>Promise.all([t.e(832),t.e(60),t.e(256)]).then(t.bind(t,2256))},{path:"customizeDestiny",component:()=>t.e(319).then(t.bind(t,8319))},{path:"customizeEdit",component:()=>Promise.all([t.e(832),t.e(569)]).then(t.bind(t,1569))}]},{path:"/storeView",name:"storeView",component:()=>t.e(245).then(t.bind(t,1245))},{path:"/:pathMatch(.*)*",redirect:"/"}],H=(0,N.aE)({history:(0,N.LA)("/cafe-today/"),routes:$});var V=H;const I=(0,r.Ey)(),U=(0,o.Ef)(x);U.use(I),U.use(i.A,a.A),U.use(V),U.component("LoadingOverlay",c.A),U.mount("#app")},4783:function(e,n,t){var o=t(2261);n.A=(0,o.nY)("User Store",{state:()=>({name:"Ting",cafeNumbers:10}),getters:{getUserName:e=>`我的名字是 ${e.name}`},actions:{updateName(){this.name="Amy"}}})}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var c=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var u=r();void 0!==u&&(n=u)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{48:"7037d6c7",245:"76305faf",256:"6dbd5d1e",306:"d3e00fb1",319:"c90fc8fb",569:"d9eff280",571:"ba1657ef",626:"35a3b015",673:"b5b66a4c",918:"32aa7815"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{48:"259354cb",60:"32173ad4",256:"6d94e386",306:"5e24a1c8",319:"743346f7",569:"756a83b3",571:"fadf1eaa",626:"504cec9d",673:"12f09efa",832:"1edf5c19",918:"aabcd9ea"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="cafe-today:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var c,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+a){c=d;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+a),c.src=o),e[o]=[r];var f=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/cafe-today/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,o,r,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",t.nc&&(i.nonce=t.nc);var c=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var o=t&&t.type,c=t&&t.target&&t.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+c+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=c,i.parentNode&&i.parentNode.removeChild(i),a(s)}};return i.onerror=i.onload=c,i.href=n,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),c=t.p+i;if(n(i,c))return r();e(o,c,null,r,a)}))},r={524:0};t.f.miniCss=function(e,n){var t={48:1,60:1,256:1,306:1,319:1,569:1,571:1,626:1,673:1,832:1,918:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else if(/^(60|832)$/.test(n))e[n]=0;else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),c=new Error,s=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],c=o[1],s=o[2],u=0;if(i.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(s)var l=s(t)}for(n&&n(o);u<i.length;u++)a=i[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},o=self["webpackChunkcafe_today"]=self["webpackChunkcafe_today"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(2175)}));o=t.O(o)})();