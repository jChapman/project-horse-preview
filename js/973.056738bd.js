"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[973],{9973:function(t,e,s){s.r(e),s.d(e,{default:function(){return r}});var a=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"page-title"},[t._v(t._s(t.$t("gods.my_gods")))]),e("div",{staticClass:"gods-container"},t._l(t.gods,(function(s){return e("div",{key:s.god_name,staticClass:"text-center m-3",staticStyle:{position:"relative","max-width":"100px"}},[e("GodImage",{class:{overlay:!s.owned},attrs:{god:s.god_name,height:100}}),e("div",{class:{"my-1":!0,"text-muted":!s.owned,"text-danger":s.banned,"text-gold":s.gold}},[t._v(" "+t._s(t.$t(`gods.${s.god_name}`))+" ")]),s.plus_exclusive?e("div",{staticClass:"text-muted"},[t._v(" "+t._s(t.$t("common.plus"))+" ")]):t._e(),s.free?e("div",{staticClass:"text-muted"},[t._v(t._s(t.$t("common.free")))]):t._e()],1)})),0)])},n=[],d=s(2371),o={components:{GodImage:d.Z},data:()=>({loading:!0,gods:[]}),computed:{steamID(){return this.$store.state.auth.userSteamID}},created(){fetch(`/api/players/${this.steamID}/gods`).then((t=>t.json())).then((t=>{this.gods=t,this.loading=!1}))},methods:{toggleBanned(t){t.loading=!0;const{god_name:e,banned:s}=t;fetch(`/api/players/${this.steamID}/gods/${e}/ban?banned=${!s}`,{method:"POST"}).then((t=>t.json())).then((e=>{t.banned=e.banned,t.loading=!1})).catch((()=>{t.error=!0,t.loading=!1}))}}},i=o,l=s(1001),c=(0,l.Z)(i,a,n,!1,null,"cfa75f80",null),r=c.exports}}]);
//# sourceMappingURL=973.056738bd.js.map