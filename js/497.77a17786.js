"use strict";(self["webpackChunkcafe_today"]=self["webpackChunkcafe_today"]||[]).push([[497],{7258:function(e,l,a){a.d(l,{A:function(){return o}});var t=a(144);function o(e){const l=(0,t.KR)(!1),a=(0,t.KR)(!1),o=(0,t.KR)(""),s=function(e){return new Promise((l=>{setTimeout((()=>{console.log(`已等待 ${e} 毫秒`),l()}),e)}))},n=async function(){l.value=!0,a.value=!1,o.value="";try{await s(3e3);const l=Math.floor(Math.random()*e.value.length);o.value=e.value[l],a.value=!0}catch(t){console.error("抽籤過程發生錯誤:",t)}finally{l.value=!1}};return{selectedShop:o,isDestiny:l,isDestinyDone:a,getDestinyShop:n}}},5785:function(e,l,a){a.d(l,{A:function(){return o}});var t=a(144);function o(){const e=(0,t.KR)(!1),l=(0,t.KR)(""),a=(0,t.KR)("success"),o=(t,o="success")=>{l.value=t,a.value=o,e.value=!0},s=()=>{e.value=!1};return{showModal:e,modalMessage:l,modalType:a,openModal:o,closeModal:s}}},594:function(e,l){const a="https://cafenomad.tw/api/v1.2/cafes/",t="https://api.allorigins.win/raw?url=",o=e=>{const l=`${a}${e}`;return`${t}${encodeURIComponent(l)}`};l.A=o},2136:function(e,l,a){a.d(l,{A:function(){return d}});var t=a(6768),o=a(4232);const s={key:0,class:"modal-overlay"},n={class:"modal-type"},c={class:"modal-message light-bold-text"};var r={__name:"ModalBox",props:{visible:Boolean,message:String,type:{type:String,default:"success"}},emits:["close"],setup(e,{emit:l}){const a=e,r=(0,t.EW)((()=>"success"===a.type?"modal-text-green":"modal-text-red")),i=(0,t.EW)((()=>"success"===a.type?"成功！":"錯誤！")),u=l,d=()=>{u("close")};return(l,a)=>e.visible?((0,t.uX)(),(0,t.CE)("div",s,[(0,t.Lk)("div",{class:(0,o.C4)(["modal-box",r.value])},[(0,t.Lk)("p",n,(0,o.v_)(i.value),1),(0,t.Lk)("p",c,(0,o.v_)(e.message),1),(0,t.Lk)("button",{class:"button click-color-light",onClick:d},"確定")],2)])):(0,t.Q3)("",!0)}},i=a(1241);const u=(0,i.A)(r,[["__scopeId","data-v-584854f8"]]);var d=u},5974:function(e,l,a){a.r(l),a.d(l,{default:function(){return K}});var t=a(6768),o=a(4232),s=a(5130),n=a.p+"img/teaAndBook.0b869572.png";const c={class:"screen-center"},r={class:"container"},i=["value"],u={key:0,class:"table-border"},d=["id"],v={class:"table-td border-b"},p={class:"table-td border-b"},b={class:"table-td border-b"},g=["href"],m={class:"table-td border-b"},h={class:"checkout"},k=["disabled"];function y(e,l,a,y,f,L){const S=(0,t.g2)("LoadingOverlay"),w=(0,t.g2)("ModalBox");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.bF)(S,{active:y.isLoading,color:"#79716b"},null,8,["active"]),(0,t.Lk)("div",c,[l[10]||(l[10]=(0,t.Lk)("p",{class:"slogan"},"尋找你的咖啡靈魂",-1)),(0,t.Lk)("div",r,[l[3]||(l[3]=(0,t.Lk)("label",{for:"dropdown",class:"label"},"選擇城市：",-1)),(0,t.bo)((0,t.Lk)("select",{id:"dropdown","onUpdate:modelValue":l[0]||(l[0]=e=>y.selectedOption=e),class:"select"},[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(y.options,(e=>((0,t.uX)(),(0,t.CE)("option",{key:e.value,value:e.value},(0,o.v_)(e.label),9,i)))),128))],512),[[s.u1,y.selectedOption]])]),(0,t.bF)(s.eB,null,{default:(0,t.k6)((()=>[y.isDestinyDone?((0,t.uX)(),(0,t.CE)("div",u,[(0,t.Lk)("table",{class:"table-all",id:`item-${y.selectedShop.id}`},[(0,t.Lk)("tr",null,[l[4]||(l[4]=(0,t.Lk)("th",{class:"table-td border-b border-r w-25 text-nowrap"},"店家名稱",-1)),(0,t.Lk)("td",v,(0,o.v_)(y.selectedShop.name||"無"),1)]),(0,t.Lk)("tr",null,[l[5]||(l[5]=(0,t.Lk)("th",{class:"table-td border-b border-r w-25 text-nowrap"},"城市",-1)),(0,t.Lk)("td",p,(0,o.v_)(y.selectedShop.city||"無"),1)]),(0,t.Lk)("tr",null,[l[8]||(l[8]=(0,t.Lk)("th",{class:"table-td border-b border-r"},"地址",-1)),(0,t.Lk)("td",b,[(0,t.Lk)("a",{href:`https://www.google.com/maps/search/${encodeURIComponent(y.selectedShop.name)}`,target:"_blank",rel:"noreferrer noopener",class:"underline"},[(0,t.eW)((0,o.v_)(y.selectedShop.address||"無"),1),l[6]||(l[6]=(0,t.Lk)("br",null,null,-1)),l[7]||(l[7]=(0,t.eW)(" (前往 Google 地圖) "))],8,g)])]),(0,t.Lk)("tr",null,[l[9]||(l[9]=(0,t.Lk)("th",{class:"table-td border-b border-r"},"營業時間",-1)),(0,t.Lk)("td",m,(0,o.v_)(y.selectedShop.open_time||"無"),1)])],8,d),(0,t.Lk)("div",h,[(0,t.Lk)("button",{onClick:l[1]||(l[1]=(...e)=>y.checkout&&y.checkout(...e)),class:"button click-color-mid"}," 點擊收藏到你的口袋名單 ")])])):(0,t.Q3)("",!0)])),_:1}),l[11]||(l[11]=(0,t.Lk)("p",{class:"text-xs text-stone-400"}," 營業時間可能不同，出發前請至官方網站確認 ",-1)),(0,t.Lk)("button",{class:"btn click-color-light",onClick:l[2]||(l[2]=(0,s.D$)(((...e)=>y.getDestinyShop&&y.getDestinyShop(...e)),["prevent"])),disabled:y.isDestiny||!y.selectedOption},(0,o.v_)(y.isDestiny?"抽籤中...":"點擊進行抽籤"),9,k),l[12]||(l[12]=(0,t.Lk)("img",{class:"image",src:n,alt:"teaAndBook"},null,-1))]),(0,t.bF)(w,{visible:y.showModal,message:y.modalMessage,type:y.modalType,onClose:y.closeModal},null,8,["visible","message","type","onClose"])],64)}a(4114),a(8992),a(7550);var f=a(4373),L=a(144),S=a(594),w=a(7258),D=a(2136),_=a(5785),M={name:"DestinyView",components:{ModalBox:D.A},setup(){const e=(0,L.KR)(""),l=(0,L.Kh)([{value:"",label:"請先選擇城市"},{value:"Keelung",label:"基隆"},{value:"taipei",label:"台北"},{value:"taoyuan",label:"桃園"},{value:"hsinchu",label:"新竹"},{value:"miaoli",label:"苗栗"},{value:"taichung",label:"台中"},{value:"changhua",label:"彰化"},{value:"nantou",label:"南投"},{value:"yunlin",label:"雲林"},{value:"chiayi",label:"嘉義"},{value:"tainan",label:"台南"},{value:"kaohsiung",label:"高雄"},{value:"pingtung",label:"屏東"},{value:"yilan",label:"宜蘭"},{value:"hualien",label:"花蓮"},{value:"taitung",label:"台東"},{value:"penghu",label:"澎湖"}]),a=(0,L.KR)([]),o=(0,L.KR)(!1),{showModal:s,modalMessage:n,modalType:c,openModal:r,closeModal:i}=(0,_.A)(),u=async function(){if(!e.value)return void r("請選擇一個城市！","error");const l=`cafe_data_${e.value}`,t=localStorage.getItem(l),s=Date.now(),n=18e5;if(t)try{const o=JSON.parse(t);if(o.timestamp&&s-o.timestamp<n)return a.value=o.data,void console.log("從 localStorage 獲取資料",e.value,a.value.length);o.timestamp&&s-o.timestamp>=n&&(localStorage.removeItem(l),console.log("localStorage 已過期(超過30分鐘)，已清除"))}catch(i){localStorage.removeItem(l),console.error("localStorage 資料錯誤",i)}const c=(0,S.A)(e.value);console.log("apiUrl路徑",c),o.value=!0;try{const t=await f.A.get(c);a.value=t.data,localStorage.setItem(l,JSON.stringify({data:a.value,timestamp:s})),console.log("選擇城市的咖啡店資料已更新",e.value,a.value.length)}catch(i){console.error("API 請求失敗！",i),r("取得資料失敗，請重新整理後再試一次，謝謝！","error")}finally{o.value=!1}},{selectedShop:d,isDestiny:v,isDestinyDone:p,getDestinyShop:b}=(0,w.A)(a);(0,t.wB)(e,(e=>{e&&u()}));const g=()=>{const e=JSON.parse(localStorage.getItem("savedCafes")||"[]"),l=e.some((e=>e.id===d.value.id));if(l)return void r("此咖啡店已在你的口袋名單中！","error");const a={id:d.value.id,name:d.value.name,city:d.value.city,address:d.value.address,open_time:d.value.open_time};e.push(a),localStorage.setItem("savedCafes",JSON.stringify(e)),r("已成功收藏到你的口袋名單！","success")};return{selectedOption:e,options:l,selectedShop:d,shopData:a,isLoading:o,isDestiny:v,isDestinyDone:p,getData:u,getDestinyShop:b,showModal:s,closeModal:i,modalMessage:n,modalType:c,checkout:g}}},C=a(1241);const A=(0,C.A)(M,[["render",y],["__scopeId","data-v-2a990adb"]]);var K=A}}]);