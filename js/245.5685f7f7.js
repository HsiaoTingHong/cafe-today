"use strict";(self["webpackChunkcafe_today"]=self["webpackChunkcafe_today"]||[]).push([[245],{1245:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var a=t(6768),u=t(4232);const l={class:"min-h-[82vh]"};function r(e,n,t,r,o,s){return(0,a.uX)(),(0,a.CE)("p",l,[n[3]||(n[3]=(0,a.eW)("Pinia練習-composition API 寫法 ")),n[4]||(n[4]=(0,a.Lk)("br",null,null,-1)),(0,a.eW)(" "+(0,u.v_)(r.user.name)+", "+(0,u.v_)(r.user.getUserName)+", "+(0,u.v_)(r.user.cafeNumbers)+" ",1),n[5]||(n[5]=(0,a.Lk)("br",null,null,-1)),(0,a.eW)(" "+(0,u.v_)(r.name)+", "+(0,u.v_)(r.getUserName)+", "+(0,u.v_)(r.cafeNumbers)+" ",1),n[6]||(n[6]=(0,a.Lk)("br",null,null,-1)),(0,a.Lk)("button",{type:"button",onClick:n[0]||(n[0]=(...e)=>r.updateName&&r.updateName(...e))},"按我"),n[7]||(n[7]=(0,a.Lk)("br",null,null,-1)),(0,a.Lk)("button",{type:"button",onClick:n[1]||(n[1]=(...e)=>r.updateData&&r.updateData(...e))},"更新資料"),n[8]||(n[8]=(0,a.Lk)("br",null,null,-1)),(0,a.Lk)("button",{type:"button",onClick:n[2]||(n[2]=(...e)=>r.resetData&&r.resetData(...e))},"重置資料"),n[9]||(n[9]=(0,a.Lk)("br",null,null,-1))])}var o=t(4783),s=t(2261),c={name:"StoreViewComposition",setup(){const e=(0,o.A)(),{name:n,getUserName:t,cafeNumbers:a}=(0,s.bP)(e);console.log("取得name的值",n.value),n.value="Ann",console.log("取得改變後的name的值",n.value);const{updateName:u}=e;function l(){e.$patch({name:"Dan",cafeNumbers:20})}function r(){e.$reset()}return{user:e,name:n,cafeNumbers:a,getUserName:t,updateName:u,updateData:l,resetData:r}}},m=t(1241);const b=(0,m.A)(c,[["render",r]]);var p=b}}]);