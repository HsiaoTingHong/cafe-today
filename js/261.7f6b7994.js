"use strict";(self["webpackChunkcafe_today"]=self["webpackChunkcafe_today"]||[]).push([[261],{6994:function(e,t,a){a.d(t,{A:function(){return i}});var s=a(6768),n=a(144);function i(e,t=5){const a=(0,s.EW)((()=>e.value.length)),i=(0,n.KR)(1),r=(0,n.KR)(t),c=(0,s.EW)((()=>{if(0===a.value)return[];const t=(i.value-1)*r.value,s=Math.min(t+r.value,a.value);return e.value.slice(t,s)}));(0,s.wB)(a,(e=>{if(e>0){const t=(i.value-1)*r.value;t>=e&&(i.value=1)}}));const l=e=>{i.value=e,window.scrollTo({top:0,behavior:"smooth"})};return{totalItemsNumber:a,currentPage:i,itemsPerPage:r,currentPageItems:c,getPageChange:l}}},594:function(e,t){const a="https://cafenomad.tw/api/v1.2/cafes/",s="https://api.allorigins.win/raw?url=",n=e=>{const t=`${a}${e}`;return`${s}${encodeURIComponent(t)}`};t.A=n},9737:function(e,t,a){a(4114),a(8992),a(4520),a(2577),a(8872),a(7550);var s=a(2261);const n=(0,s.nY)("save",{state:()=>({items:[],selectedItems:[]}),getters:{totalAmount:e=>e.items.reduce(((e,t)=>e+t.address),0),itemCount:e=>e.items.length},actions:{addToSave(e){const t=JSON.parse(localStorage.getItem("savedCafes")||"[]"),a=t.some((t=>t.id===e.id));if(a)return void alert("此咖啡店已在你的私藏巡禮中！");const s=this.items.find((t=>t.id===e.id));s||this.items.push({id:e.id,name:e.name,city:e.city,address:e.address,open_time:e.open_time})},removeFromSave(e){this.items=this.items.filter((t=>t.id!==e)),this.selectedItems=this.selectedItems.filter((t=>t!==e))},toggleSelectItem(e){const t=this.selectedItems.indexOf(e);-1===t?this.selectedItems.push(e):this.selectedItems.splice(t,1)},removeSelectedItems(){this.items=this.items.filter((e=>!this.selectedItems.includes(e.id))),this.selectedItems=[]},clearSave(){this.items=[],this.selectedItems=[]},checkout(){let e=JSON.parse(localStorage.getItem("savedCafes")||"[]");e=[...e,...this.items],localStorage.setItem("savedCafes",JSON.stringify(e)),alert(`收藏成功！總共收藏 ${this.itemCount} 間咖啡店`),this.clearSave()}}});t.A=n},1969:function(e,t,a){a.d(t,{A:function(){return h}});a(4114);var s=a(6768),n=a(4232);const i={class:"pagination-container"},r={class:"pagination-bg"},c=["disabled"],l={class:"flex space-x-1"},o=["onClick"],u=["disabled"],d={class:"text-center light-bold-text-xs"},m={key:0},v={key:1};var g={__name:"PageComponent",props:{currentPage:{type:Number,required:!0,default:1},totalItems:{type:Number,required:!0,default:0},itemsPerPage:{type:Number,default:24}},emits:["update:page"],setup(e,{emit:t}){const a=e,g=(0,s.EW)((()=>Math.max(1,Math.ceil(a.totalItems/a.itemsPerPage)))),p=(0,s.EW)((()=>0===a.totalItems?0:Math.min((a.currentPage-1)*a.itemsPerPage+1,a.totalItems))),f=(0,s.EW)((()=>Math.min(a.currentPage*a.itemsPerPage,a.totalItems))),h=(0,s.EW)((()=>{const e=g.value||1;if(e<=0)return[1];const t=[],s=Math.min(5,e);if(e<=s)for(let a=1;a<=e;a+=1)t.push(a);else{const n=Math.floor(s/2);let i=Math.max(1,a.currentPage-n);const r=Math.min(e,i+s-1);r-i+1<s&&(i=Math.max(1,r-s+1));for(let e=i;e<=r;e+=1)t.push(e)}return t})),C=t,k=e=>{e<1||e>g.value||C("update:page",e)};return(t,a)=>((0,s.uX)(),(0,s.CE)("div",i,[(0,s.Lk)("div",r,[(0,s.Lk)("button",{onClick:a[0]||(a[0]=t=>k(e.currentPage-1)),disabled:e.currentPage<=1,class:(0,n.C4)(["pagination-button",{"not-allowed":e.currentPage<=1}])}," 上一頁 ",10,c),(0,s.Lk)("div",l,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(h.value,(t=>((0,s.uX)(),(0,s.CE)("button",{key:t,onClick:e=>k(t),class:(0,n.C4)(["pagination-number",{"currentPage-bg":t===e.currentPage}])},(0,n.v_)(t),11,o)))),128))]),(0,s.Lk)("button",{onClick:a[1]||(a[1]=t=>k(e.currentPage+1)),disabled:e.currentPage>=g.value,class:(0,n.C4)(["pagination-button",{"not-allowed":e.currentPage>=g.value}])}," 下一頁 ",10,u)]),(0,s.Lk)("div",d,[e.totalItems>0?((0,s.uX)(),(0,s.CE)("span",m," 顯示 "+(0,n.v_)(e.totalItems)+" 筆資料中的第 "+(0,n.v_)(p.value)+" ~ "+(0,n.v_)(f.value)+" 筆 ",1)):((0,s.uX)(),(0,s.CE)("span",v,"沒有資料"))])]))}},p=a(1241);const f=(0,p.A)(g,[["__scopeId","data-v-1a36ca16"]]);var h=f},8261:function(e,t,a){a.r(t),a.d(t,{default:function(){return O}});var s=a(6768),n=a(5130),i=a(4232),r=a(144),c=a(2261),l=a(4373),o=a(594);const u=(0,c.nY)("cafes",{state:()=>({cafes:[],loading:!1,error:null,apiLoaded:!1}),actions:{async getCafes(){if(this.apiLoaded)return;const e=(0,o.A)("taichung");console.log("apiUrl路徑",e),this.loading=!0;try{const t=await l.A.get(e);this.cafes=t.data,this.error=null,this.apiLoaded=!0}catch(t){this.error="取得資料失敗，請聯絡管理人員",console.error("Error fetching cafes:",t)}finally{this.loading=!1}}}});var d=u,m=a(6994),v=a(9737);const g={class:"card"},p={class:"card-container"},f={class:"dark-text"},h={class:"light-bold-text-xs"},C={class:"dark-text-xs"},k=["disabled"];var b={__name:"CafeItem",props:{cafe:{type:Object,required:!0}},setup(e){const t=e,a=(0,v.A)(),n=(0,s.EW)((()=>""!==t.cafe.open_time)),r=(0,s.EW)((()=>{switch(t.cafe.open_time){case"":return"text-gray-500 font-medium text-xs";default:return"text-stone-400 font-medium text-xs"}})),c=()=>{n.value&&a.addToSave(t.cafe)};return(t,a)=>((0,s.uX)(),(0,s.CE)("div",g,[(0,s.Lk)("div",p,[(0,s.Lk)("h3",f,(0,i.v_)(e.cafe.name),1),(0,s.Lk)("span",h,(0,i.v_)(e.cafe.city),1),(0,s.Lk)("span",C,(0,i.v_)(e.cafe.address),1),(0,s.Lk)("span",{class:(0,i.C4)(r.value)},(0,i.v_)(e.cafe.open_time||"無"),3),(0,s.Lk)("button",{disabled:""===e.cafe.open_time,onClick:c,class:(0,i.C4)(n.value?"button click-color-mid":"button not-allowed")},(0,i.v_)(n.value?"加入收藏":"沒有營業時間"),11,k)])]))}},_=a(1241);const I=(0,_.A)(b,[["__scopeId","data-v-5aa2e099"]]);var P=I,y=a(1969);const E={key:0},x={key:1,class:"error"},L={key:2},w={key:0,class:"no-data"},X={key:1},A={class:"cafe-item-card"};var S={__name:"CafeList",setup(e){const t=d(),a=(0,s.EW)((()=>t.loading)),c=(0,s.EW)((()=>t.error)),l=(0,s.EW)((()=>t.cafes||[])),{totalItemsNumber:o,currentPage:u,itemsPerPage:v,currentPageItems:g,getPageChange:p}=(0,m.A)(l,24);return(0,s.KC)((async()=>{try{await t.getCafes(),console.log("Cafes資料數量:",o.value)}catch(e){console.error("取得咖啡店資料時發生錯誤:",e)}})),(e,t)=>{const l=(0,s.g2)("LoadingOverlay");return(0,s.uX)(),(0,s.CE)("div",null,[t[0]||(t[0]=(0,s.Lk)("h2",{class:"title"},"台中咖啡店列表",-1)),(0,s.bF)(n.eB,null,{default:(0,s.k6)((()=>[a.value?((0,s.uX)(),(0,s.CE)("div",E,[(0,s.bF)(l,{active:a.value,color:"#79716b"},null,8,["active"])])):c.value?((0,s.uX)(),(0,s.CE)("div",x,(0,i.v_)(c.value),1)):((0,s.uX)(),(0,s.CE)("div",L,[0===(0,r.R1)(o)?((0,s.uX)(),(0,s.CE)("div",w,"沒有找到咖啡店資料")):((0,s.uX)(),(0,s.CE)("div",X,[(0,s.Lk)("div",A,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,r.R1)(g),(e=>((0,s.uX)(),(0,s.Wv)(P,{key:e.id,cafe:e},null,8,["cafe"])))),128))]),(0,s.bF)(y.A,{"current-page":(0,r.R1)(u),"total-items":(0,r.R1)(o),"items-per-page":(0,r.R1)(v),"onUpdate:page":(0,r.R1)(p)},null,8,["current-page","total-items","items-per-page","onUpdate:page"])]))]))])),_:1})])}}};const W=(0,_.A)(S,[["__scopeId","data-v-5b1623ac"]]);var M=W;const R={class:"min-h-[82vh]"};var N={__name:"ListTaichungView",setup(e){return(e,t)=>((0,s.uX)(),(0,s.CE)("div",R,[(0,s.bF)(M)]))}};const F=N;var O=F}}]);