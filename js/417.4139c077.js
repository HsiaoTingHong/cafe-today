"use strict";(self["webpackChunkcafe_today"]=self["webpackChunkcafe_today"]||[]).push([[417],{5785:function(e,t,a){a.d(t,{A:function(){return l}});var s=a(144);function l(){const e=(0,s.KR)(!1),t=(0,s.KR)(""),a=(0,s.KR)("success"),l=(s,l="success")=>{t.value=s,a.value=l,e.value=!0},o=()=>{e.value=!1};return{showModal:e,modalMessage:t,modalType:a,openModal:l,closeModal:o}}},6994:function(e,t,a){a.d(t,{A:function(){return o}});var s=a(6768),l=a(144);function o(e,t=5){const a=(0,s.EW)((()=>e.value.length)),o=(0,l.KR)(1),n=(0,l.KR)(t),r=(0,s.EW)((()=>{if(0===a.value)return[];const t=(o.value-1)*n.value,s=Math.min(t+n.value,a.value);return e.value.slice(t,s)}));(0,s.wB)(a,(e=>{if(e>0){const t=(o.value-1)*n.value;t>=e&&(o.value=1)}}));const c=e=>{o.value=e,window.scrollTo({top:0,behavior:"smooth"})},u=()=>{o.value=1};return{totalItemsNumber:a,currentPage:o,itemsPerPage:n,currentPageItems:r,getPageChange:c,resetPage:u}}},2136:function(e,t,a){a.d(t,{A:function(){return d}});var s=a(6768),l=a(4232);const o={key:0,class:"modal-overlay"},n={class:"modal-type"},r={class:"modal-message light-bold-text"};var c={__name:"ModalBox",props:{visible:Boolean,message:String,type:{type:String,default:"success"}},emits:["close"],setup(e,{emit:t}){const a=e,c=(0,s.EW)((()=>"success"===a.type?"modal-text-green":"modal-text-red")),u=(0,s.EW)((()=>"success"===a.type?"成功！":"錯誤！")),i=t,d=()=>{i("close")};return(t,a)=>e.visible?((0,s.uX)(),(0,s.CE)("div",o,[(0,s.Lk)("div",{class:(0,l.C4)(["modal-box",c.value])},[(0,s.Lk)("p",n,(0,l.v_)(u.value),1),(0,s.Lk)("p",r,(0,l.v_)(e.message),1),(0,s.Lk)("button",{class:"button click-color-light",onClick:d},"確定")],2)])):(0,s.Q3)("",!0)}},u=a(1241);const i=(0,u.A)(c,[["__scopeId","data-v-584854f8"]]);var d=i},1969:function(e,t,a){a.d(t,{A:function(){return f}});a(4114);var s=a(6768),l=a(4232);const o={class:"pagination-container"},n={class:"pagination-bg"},r=["disabled"],c={class:"flex space-x-1"},u=["onClick"],i=["disabled"],d={class:"text-center light-bold-text-xs"},m={key:0},v={key:1};var p={__name:"PageComponent",props:{currentPage:{type:Number,required:!0,default:1},totalItems:{type:Number,required:!0,default:0},itemsPerPage:{type:Number,default:24}},emits:["update:page"],setup(e,{emit:t}){const a=e,p=(0,s.EW)((()=>Math.max(1,Math.ceil(a.totalItems/a.itemsPerPage)))),g=(0,s.EW)((()=>0===a.totalItems?0:Math.min((a.currentPage-1)*a.itemsPerPage+1,a.totalItems))),k=(0,s.EW)((()=>Math.min(a.currentPage*a.itemsPerPage,a.totalItems))),f=(0,s.EW)((()=>{const e=p.value||1;if(e<=0)return[1];const t=[],s=Math.min(5,e);if(e<=s)for(let a=1;a<=e;a+=1)t.push(a);else{const l=Math.floor(s/2);let o=Math.max(1,a.currentPage-l);const n=Math.min(e,o+s-1);n-o+1<s&&(o=Math.max(1,n-s+1));for(let e=o;e<=n;e+=1)t.push(e)}return t})),b=t,C=e=>{e<1||e>p.value||b("update:page",e)};return(t,a)=>((0,s.uX)(),(0,s.CE)("div",o,[(0,s.Lk)("div",n,[(0,s.Lk)("button",{onClick:a[0]||(a[0]=t=>C(e.currentPage-1)),disabled:e.currentPage<=1,class:(0,l.C4)(["pagination-button",{"not-allowed":e.currentPage<=1}])}," 上一頁 ",10,r),(0,s.Lk)("div",c,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(f.value,(t=>((0,s.uX)(),(0,s.CE)("button",{key:t,onClick:e=>C(t),class:(0,l.C4)(["pagination-number",{"currentPage-bg":t===e.currentPage}])},(0,l.v_)(t),11,u)))),128))]),(0,s.Lk)("button",{onClick:a[1]||(a[1]=t=>C(e.currentPage+1)),disabled:e.currentPage>=p.value,class:(0,l.C4)(["pagination-button",{"not-allowed":e.currentPage>=p.value}])}," 下一頁 ",10,i)]),(0,s.Lk)("div",d,[e.totalItems>0?((0,s.uX)(),(0,s.CE)("span",m," 顯示 "+(0,l.v_)(e.totalItems)+" 筆資料中的第 "+(0,l.v_)(g.value)+" ~ "+(0,l.v_)(k.value)+" 筆 ",1)):((0,s.uX)(),(0,s.CE)("span",v,"沒有資料"))])]))}},g=a(1241);const k=(0,g.A)(p,[["__scopeId","data-v-1a36ca16"]]);var f=k},417:function(e,t,a){a.r(t),a.d(t,{default:function(){return M}});a(8992),a(4520);var s=a(6768),l=a(144),o=a(4232);const n={class:""},r={class:"card"},c={class:"card-container"},u=["id"],i={class:"dark-text"},d={class:"light-bold-text-xs"},m={class:"dark-text-xs"},v={class:"dark-text-xs"},p=["onClick"];var g={__name:"FavoriteItem",props:{items:{type:Array,required:!0},removeItem:{type:Function,required:!0}},setup(e){return(t,a)=>((0,s.uX)(),(0,s.CE)("div",n,[(0,s.Lk)("div",r,[(0,s.Lk)("div",c,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.items,(t=>((0,s.uX)(),(0,s.CE)("div",{key:t.id,class:"flex items-center"},[(0,s.Lk)("div",{class:"card-text",id:`item-${t.id}`},[(0,s.Lk)("h3",i,(0,o.v_)(t.name),1),(0,s.Lk)("p",d,(0,o.v_)(t.city),1),(0,s.Lk)("p",m,(0,o.v_)(t.address),1),(0,s.Lk)("p",v,(0,o.v_)(t.open_time),1)],8,u),(0,s.Lk)("button",{onClick:a=>e.removeItem(t.id),class:"button click-color-mid"}," 刪除 ",8,p)])))),128))])])]))}},k=a(1241);const f=(0,k.A)(g,[["__scopeId","data-v-43f770f1"]]);var b=f,C=a(1969),P=a(6994),h=a(2136),_=a(5785);const y={key:0,class:"no-data-bg"},x={key:1},I={class:"card-bg"};var L={__name:"CustomizeListView",setup(e){const t=(0,l.KR)([]);(0,s.sV)((()=>{t.value=JSON.parse(localStorage.getItem("savedCafes")||"[]").sort(((e,t)=>e.id.localeCompare(t.id)))}));const{showModal:a,modalMessage:o,modalType:n,openModal:r,closeModal:c}=(0,_.A)(),{totalItemsNumber:u,currentPage:i,itemsPerPage:d,currentPageItems:m,getPageChange:v}=(0,P.A)(t,5),p=e=>{let a=JSON.parse(localStorage.getItem("savedCafes")||"[]");a=a.filter((t=>t.id!==e)),localStorage.setItem("savedCafes",JSON.stringify(a)),t.value=a.sort(((e,t)=>e.id.localeCompare(t.id))),r("已從你的口袋名單刪除！","success")};return(e,r)=>{const g=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)(s.FK,null,[r[2]||(r[2]=(0,s.Lk)("h2",{class:"title"},"你的口袋名單",-1)),t.value.length?((0,s.uX)(),(0,s.CE)("div",x,[(0,s.Lk)("div",I,[(0,s.bF)(b,{items:(0,l.R1)(m),"remove-item":p},null,8,["items"]),(0,s.bF)(C.A,{"current-page":(0,l.R1)(i),"total-items":(0,l.R1)(u),"items-per-page":(0,l.R1)(d),"onUpdate:page":(0,l.R1)(v)},null,8,["current-page","total-items","items-per-page","onUpdate:page"])])])):((0,s.uX)(),(0,s.CE)("div",y,[r[1]||(r[1]=(0,s.Lk)("p",{class:"no-data-text"},"你的口袋名單是空的",-1)),(0,s.bF)(g,{to:"/list/listTaichung",href:"#",class:"button click-color-mid"},{default:(0,s.k6)((()=>r[0]||(r[0]=[(0,s.eW)(" 瀏覽台中咖啡店列表 ")]))),_:1})])),(0,s.bF)(h.A,{visible:(0,l.R1)(a),message:(0,l.R1)(o),type:(0,l.R1)(n),onClose:(0,l.R1)(c)},null,8,["visible","message","type","onClose"])],64)}}};const E=(0,k.A)(L,[["__scopeId","data-v-7a1696de"]]);var M=E}}]);