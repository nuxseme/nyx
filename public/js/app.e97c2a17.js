(function(t){function n(n){for(var e,o,c=n[0],l=n[1],r=n[2],d=0,f=[];d<c.length;d++)o=c[d],a[o]&&f.push(a[o][0]),a[o]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);u&&u(n);while(f.length)f.shift()();return s.push.apply(s,r||[]),i()}function i(){for(var t,n=0;n<s.length;n++){for(var i=s[n],e=!0,c=1;c<i.length;c++){var l=i[c];0!==a[l]&&(e=!1)}e&&(s.splice(n--,1),t=o(o.s=i[0]))}return t}var e={},a={app:0},s=[];function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,n,i){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)o.d(i,e,function(n){return t[n]}.bind(null,e));return i},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var r=0;r<c.length;r++)n(c[r]);var u=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,n,i){t.exports=i("56d7")},"0511":function(t,n,i){t.exports=i.p+"img/product-7.1e54f01f.png"},1817:function(t,n,i){t.exports=i.p+"img/product-5.ef0d7628.png"},"1c22":function(t,n,i){"use strict";var e=i("acca"),a=i.n(e);a.a},2226:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page"},[e("headerNav",{attrs:{title:"模型结果"}}),e("ul",[e("van-list",{attrs:{finished:t.vantList.finished},on:{load:t.onLoad},model:{value:t.vantList.loading,callback:function(n){t.$set(t.vantList,"loading",n)},expression:"vantList.loading"}},t._l(t.vantList.list,function(n,a){return e("li",{key:a,class:"couponitem "+(n.show?"show":"")},[e("div",{staticClass:"item-name"},[e("span",[t._v(t._s(n.title))])]),e("div",{staticClass:"item-coupon"},[e("div",{staticClass:"item-img"},[e("img",{attrs:{src:i("1817")}})]),e("div",{staticClass:"item-cpninfo"},[e("div",{staticClass:"line-box"},[e("div",{staticClass:"line line-1-c",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}}),e("div",{staticClass:"line line-1-t",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}})])])])])}))],1),e("van-button",{attrs:{type:"primary",size:"large"},on:{click:function(n){t.goPage("/result")}}},[t._v("查看结果")]),e("van-notice-bar",{attrs:{color:t.noticeBar.color,background:t.noticeBar.background}},[t._v(t._s(t.noticeBar.text))])],1)},a=[],s=(i("cadf"),i("551c"),i("097d"),i("45a2")),o={name:"component5",data:function(){return{vantList:{productid:1001,loading:!1,finished:!1,list:[]},noticeBar:{color:"#1989fa",background:"#ecf9ff",text:"请点击模型CT位置模拟您的测试结果"}}},computed:{},methods:{onLoad:function(){var t=this;Object(s["a"])({id:this.vantList.productid}).then(function(n){t.vantList.list=[],t.vantList.list.push(n),t.vantList.loading=!1,t.vantList.finished=!0})},onClick:function(t,n,i){var e=this.list[t]["Coupon"][n]["line"][i]["flag"];this.list[t]["Coupon"][n]["line"][i]["flag"]=!e},goPage:function(t){this.$router.push({path:t})}}},c=o,l=(i("f868"),i("2877")),r=Object(l["a"])(c,e,a,!1,null,"f77061ee",null);r.options.__file="product-5.vue";n["default"]=r.exports},"2f74":function(t,n,i){},"3ed0":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("productcontent")],1)},a=[],s=(i("cadf"),i("551c"),i("097d"),i("45a2"),i("bdfb")),o=i("9844"),c={components:{productcontent:o["a"]},mixins:[s["a"]],name:"component1",data:function(){return{}},computed:{},methods:{}},l=c,r=i("2877"),u=Object(r["a"])(l,e,a,!1,null,null,null);u.options.__file="product-aa.vue";n["default"]=u.exports},"42dc":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page"},[e("headerNav",{attrs:{title:"模型结果"}}),e("ul",[e("van-list",{attrs:{finished:t.vantList.finished},on:{load:t.onLoad},model:{value:t.vantList.loading,callback:function(n){t.$set(t.vantList,"loading",n)},expression:"vantList.loading"}},t._l(t.vantList.list,function(n,a){return e("li",{key:a,class:"couponitem "+(n.show?"show":"")},[e("div",{staticClass:"item-name"},[e("span",[t._v(t._s(n.title))])]),e("div",{staticClass:"item-coupon"},[e("div",{staticClass:"item-img"},[e("img",{attrs:{src:i("0511")}})]),e("div",{staticClass:"item-cpninfo"},[e("div",{staticClass:"line-box"},[e("div",{staticClass:"line line-1-c",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}}),e("div",{staticClass:"line line-1-t",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}})])])])])}))],1),e("van-button",{attrs:{type:"primary",size:"large"},on:{click:function(n){t.goPage("/result")}}},[t._v("查看结果")]),e("van-notice-bar",{attrs:{color:t.noticeBar.color,background:t.noticeBar.background}},[t._v(t._s(t.noticeBar.text))])],1)},a=[],s=(i("cadf"),i("551c"),i("097d"),i("45a2")),o={name:"component7",data:function(){return{vantList:{productid:1001,loading:!1,finished:!1,list:[]},noticeBar:{color:"#1989fa",background:"#ecf9ff",text:"请点击模型CT位置模拟您的测试结果"}}},computed:{},methods:{onLoad:function(){var t=this;Object(s["a"])({id:this.vantList.productid}).then(function(n){t.vantList.list=[],t.vantList.list.push(n),t.vantList.loading=!1,t.vantList.finished=!0})},onClick:function(t,n,i){var e=this.list[t]["Coupon"][n]["line"][i]["flag"];this.list[t]["Coupon"][n]["line"][i]["flag"]=!e},goPage:function(t){this.$router.push({path:t})}}},c=o,l=(i("4768"),i("2877")),r=Object(l["a"])(c,e,a,!1,null,"7871f314",null);r.options.__file="product-7.vue";n["default"]=r.exports},"45a2":function(t,n,i){"use strict";var e=i("bc3a"),a=i.n(e),s=a.a.create({baseURL:"/web",timeout:5e3});s.interceptors.request.use(function(t){return t},function(t){console.log(t),Promise.reject(t)}),s.interceptors.response.use(function(t){var n=t.data;return 200!==t.status?Promise.reject("error"):n},function(t){return Promise.reject(t)});var o=s;function c(t){return o.get("product/info/"+t.id)}function l(t,n){return o.post("report/"+t,n)}i.d(n,"a",function(){return c}),i.d(n,"b",function(){return l}),console.log(o.post)},4768:function(t,n,i){"use strict";var e=i("77f2"),a=i.n(e);a.a},"496b":function(t,n,i){"use strict";var e=i("a1c6"),a=i.n(e);a.a},"4ba7":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("productcontent")],1)},a=[],s=(i("45a2"),i("bdfb")),o=i("9844"),c={components:{productcontent:o["a"]},mixins:[s["a"]],name:"component1",data:function(){return{}},computed:{},methods:{}},l=c,r=(i("9fbe"),i("2877")),u=Object(r["a"])(l,e,a,!1,null,"47c211b2",null);u.options.__file="product-1.vue";n["default"]=u.exports},"4d11":function(t,n,i){},"500c":function(t,n,i){},"56d7":function(t,n,i){"use strict";i.r(n);i("cadf"),i("551c"),i("097d");var e=i("2b0e"),a=(i("a481"),i("ac6a"),i("8c4f"));e["a"].use(a["a"]);var s=[],o=i("88e4");o.keys().forEach(function(t){var n=t.substring(t.lastIndexOf("/"),t.length-4).replace("-",""),i=t.substring(t.lastIndexOf("/")+1,t.length-4).replace("-","");s.push({name:i,path:n,component:o(t).default,meta:{}})}),s.forEach(function(t){t.path=t.path||"/"+(t.name||"")});var c=new a["a"]({routes:s});c.beforeEach(function(t,n,i){var e=t.meta&&t.meta.title;e&&(document.title=e),i()}),function(t,n){var i=t.documentElement;function e(){var t=Math.min(i.getBoundingClientRect().width,768);i.style.fontSize=t/7.5+"px"}e(),n.addEventListener("resize",e)}(document,window);var l=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"app"}},[i("div",[i("router-view")],1)])},r=[],u=(i("2f74"),{name:"app",data:function(){return{}},computed:{sides:function(){console.log(s);var t=[];return t=s.filter(function(t){return"*"!=t.path}),JSON.parse(JSON.stringify(t))}},methods:{}}),d=u,f=(i("7c55"),i("2877")),v=Object(f["a"])(d,l,r,!1,null,null,null);v.options.__file="App.vue";var p=v.exports,m=i("283e"),b=i.n(m),h=(i("480b"),i("a37c")),g=(i("d97a"),i("6f2f")),C=(i("e930"),i("8f80")),_=(i("5f5f"),i("f253")),k=(i("4ddd"),i("9f14")),x=(i("a44c"),i("e27c")),L=(i("f06a"),i("20fb")),y=(i("8a58"),i("e41f")),O=(i("1c7c"),i("42c4")),w=(i("18e9"),i("471a")),j=(i("be7f"),i("565f")),B=(i("1f87"),i("510b")),$=(i("77f8"),i("dc0f")),P=(i("2994"),i("2bdd")),E=(i("3647"),i("ea47")),N=(i("a52c"),i("2ed4")),z=(i("537a"),i("ac28")),S=(i("5246"),i("6b41")),T=(i("be39"),i("efa0")),M=(i("a909"),i("3acc")),J=(i("3c32"),i("417e")),U=(i("4d48"),i("d1e1")),D=(i("e7e5"),i("d399")),I=(i("bda7"),i("5e46")),R=(i("da3c"),i("0b33")),q=(i("e17f"),i("2241")),A=(i("4467"),i("c36e")),F=(i("66b9"),i("b650")),V=(i("9cb7"),i("66fd")),G=(i("e415"),i("2b5e")),H=(i("3208"),i("c0b2")),K=(i("f908"),i("b528")),Q=(i("19de"),i("234f")),W=(i("93ac"),i("bb33")),X=(i("4b0a"),i("2bb1")),Y=(i("7844"),i("5596")),Z=(i("0653"),i("34e9")),tt=(i("c194"),i("7744")),nt=(i("c3a6"),i("ad06")),it=(i("81e6"),i("9ffb")),et=(i("5f1a"),i("a3e2")),at=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("van-nav-bar",{attrs:{title:t.title,"left-text":"","left-arrow":!1},on:{"click-left":t.onBack}})},st=[],ot=i("a322"),ct={name:"headerNav",components:Object(ot["a"])({},S["a"].name,S["a"]),props:{title:String},methods:{onBack:function(){history.back()}}},lt=ct,rt=(i("1c22"),Object(f["a"])(lt,at,st,!1,null,null,null));rt.options.__file="nav.vue";var ut=rt.exports,dt=[et["a"],it["a"],nt["a"],tt["a"],Z["a"],Y["a"],X["a"],W["a"],Q["a"],K["a"],H["a"],G["a"],V["a"],F["a"],A["a"],q["a"],ut,R["a"],I["a"],D["a"],U["a"],J["a"],M["a"],T["a"],S["a"],z["a"],N["a"],E["a"],P["a"],$["a"],B["a"],j["a"],w["a"],O["a"],y["a"],L["a"],x["a"],k["a"],_["a"],C["a"],g["a"],h["a"]],ft=function(t){dt.forEach(function(n){t.component(n.name,n)})};e["a"].use(ft),e["a"].use(b.a),new e["a"]({router:c,el:"#app",render:function(t){return t(p)}})},"58ad":function(t,n,i){t.exports=i.p+"img/product-3.9be6aa88.png"},"61cd":function(t,n,i){t.exports=i.p+"img/product-4.9d6acb41.png"},"694d":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page"},[e("headerNav",{attrs:{title:"模型结果"}}),e("ul",[e("van-list",{attrs:{finished:t.vantList.finished},on:{load:t.onLoad},model:{value:t.vantList.loading,callback:function(n){t.$set(t.vantList,"loading",n)},expression:"vantList.loading"}},t._l(t.vantList.list,function(n,a){return e("li",{key:a,class:"couponitem "+(n.show?"show":"")},[e("div",{staticClass:"item-name"},[e("span",[t._v(t._s(n.title))])]),e("div",{staticClass:"item-coupon"},[e("div",{staticClass:"item-img"},[e("img",{attrs:{src:i("58ad")}})]),e("div",{staticClass:"item-cpninfo"},[e("div",{staticClass:"line-box"},[e("div",{staticClass:"line line-1-c",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}}),e("div",{staticClass:"line line-1-t",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}}),e("div",{staticClass:"line line-2-c",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}}),e("div",{staticClass:"line line-2-t",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}})])])])])}))],1),e("van-button",{attrs:{type:"primary",size:"large"},on:{click:function(n){t.goPage("/result")}}},[t._v("查看结果")]),e("van-notice-bar",{attrs:{color:t.noticeBar.color,background:t.noticeBar.background}},[t._v(t._s(t.noticeBar.text))])],1)},a=[],s=i("45a2"),o={name:"component3",data:function(){return{vantList:{productid:1001,loading:!1,finished:!1,list:[]},noticeBar:{color:"#1989fa",background:"#ecf9ff",text:"请点击模型CT位置模拟您的测试结果"}}},computed:{},methods:{onLoad:function(){var t=this;Object(s["a"])({id:this.vantList.productid}).then(function(n){t.vantList.list=[],t.vantList.list.push(n),t.vantList.loading=!1,t.vantList.finished=!0})},onClick:function(t,n,i){var e=this.list[t]["Coupon"][n]["line"][i]["flag"];this.list[t]["Coupon"][n]["line"][i]["flag"]=!e},goPage:function(t){this.$router.push({path:t})}}},c=o,l=(i("9064"),i("2877")),r=Object(l["a"])(c,e,a,!1,null,"60b42c94",null);r.options.__file="product-3.vue";n["default"]=r.exports},7494:function(t,n,i){"use strict";var e=i("d8ab"),a=i.n(e);a.a},"77f2":function(t,n,i){},"7b1f":function(t,n,i){"use strict";var e=i("4d11"),a=i.n(e);a.a},"7c55":function(t,n,i){"use strict";var e=i("d3dd"),a=i.n(e);a.a},"887b":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page"},[e("headerNav",{attrs:{title:"模型结果"}}),e("ul",[e("van-list",{attrs:{finished:t.vantList.finished},on:{load:t.onLoad},model:{value:t.vantList.loading,callback:function(n){t.$set(t.vantList,"loading",n)},expression:"vantList.loading"}},t._l(t.vantList.list,function(n,a){return e("li",{key:a,class:"couponitem "+(n.show?"show":"")},[e("div",{staticClass:"item-name"},[e("span",[t._v(t._s(n.title))])]),e("div",{staticClass:"item-coupon"},[e("div",{staticClass:"item-img"},[e("img",{attrs:{src:i("a7af")}})]),e("div",{staticClass:"item-cpninfo"},[e("div",{staticClass:"line-box"},[e("div",{staticClass:"line line-1-c",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}}),e("div",{staticClass:"line line-1-t",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}})])])])])}))],1),e("van-button",{attrs:{type:"primary",size:"large"},on:{click:function(n){t.goPage("/result")}}},[t._v("查看结果")]),e("van-notice-bar",{attrs:{color:t.noticeBar.color,background:t.noticeBar.background}},[t._v(t._s(t.noticeBar.text))])],1)},a=[],s=(i("cadf"),i("551c"),i("097d"),i("45a2")),o={name:"component6",data:function(){return{vantList:{productid:1001,loading:!1,finished:!1,list:[]},noticeBar:{color:"#1989fa",background:"#ecf9ff",text:"请点击模型CT位置模拟您的测试结果"}}},computed:{},methods:{onLoad:function(){var t=this;Object(s["a"])({id:this.vantList.productid}).then(function(n){t.vantList.list=[],t.vantList.list.push(n),t.vantList.loading=!1,t.vantList.finished=!0})},onClick:function(t,n,i){var e=this.list[t]["Coupon"][n]["line"][i]["flag"];this.list[t]["Coupon"][n]["line"][i]["flag"]=!e},goPage:function(t){this.$router.push({path:t})}}},c=o,l=(i("7b1f"),i("2877")),r=Object(l["a"])(c,e,a,!1,null,"7207ce7d",null);r.options.__file="product-6.vue";n["default"]=r.exports},"88d4":function(t,n,i){t.exports=i.p+"img/product-2.010f1b71.png"},"88e4":function(t,n,i){var e={"./product-1.vue":"4ba7","./product-2.vue":"cd09","./product-3.vue":"694d","./product-4.vue":"fe8a","./product-5.vue":"2226","./product-6.vue":"887b","./product-7.vue":"42dc","./product-aa.vue":"3ed0","./result.vue":"d1f1"};function a(t){var n=s(t);return i(n)}function s(t){var n=e[t];if(!(n+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return n}a.keys=function(){return Object.keys(e)},a.resolve=s,t.exports=a,a.id="88e4"},9064:function(t,n,i){"use strict";var e=i("a05e"),a=i.n(e);a.a},9433:function(t,n,i){"use strict";var e=i("500c"),a=i.n(e);a.a},9844:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page",class:t.getPageClass()},[e("headerNav",{attrs:{title:"模型结果"}}),e("ul",[e("van-list",{attrs:{finished:t.vantList.finished},on:{load:t.onLoad},model:{value:t.vantList.loading,callback:function(n){t.$set(t.vantList,"loading",n)},expression:"vantList.loading"}},t._l(t.vantList.list,function(n,a){return e("li",{key:a,class:"couponitem "+(n.show?"show":"")},[e("div",{staticClass:"item-name"},[e("span",[t._v(t._s(n.title))])]),e("div",{staticClass:"item-coupon"},[e("div",{staticClass:"item-img"},[e("img",{attrs:{src:i("fcd7")}})]),e("div",{staticClass:"item-cpninfo"},[e("div",{staticClass:"line-box"},t._l(n.area,function(i,s){return e("div",{key:s,staticClass:"line ",class:t.setclass(n,a,i,s),on:{click:function(e){t.onClick(n,a,i,s)}}})}))])])])}))],1),e("van-button",{attrs:{type:"primary",size:"large"},on:{click:function(n){t.goPage("/result","result",t.vantList.list[0])}}},[t._v("查看结果")]),e("van-notice-bar",{attrs:{color:t.noticeBar.color,background:t.noticeBar.background}},[t._v(t._s(t.noticeBar.text))])],1)},a=[],s=i("bdfb"),o={name:"productcontent",mixins:[s["a"]],components:{},props:{},methods:{}},c=o,l=(i("a618"),i("2877")),r=Object(l["a"])(c,e,a,!1,null,"b6c19b80",null);r.options.__file="content.vue";n["a"]=r.exports},"9d1f":function(t,n,i){},"9fbe":function(t,n,i){"use strict";var e=i("d559"),a=i.n(e);a.a},a05e:function(t,n,i){},a1c6:function(t,n,i){},a618:function(t,n,i){"use strict";var e=i("9d1f"),a=i.n(e);a.a},a7af:function(t,n,i){t.exports=i.p+"img/product-6.325d248f.png"},acca:function(t,n,i){},bdfb:function(t,n,i){"use strict";i.d(n,"a",function(){return a});var e=i("45a2"),a={data:function(){return{vantList:{productid:1001,loading:!1,finished:!1,list:[]},noticeBar:{color:"#1989fa",background:"#ecf9ff",text:"请点击模型CT位置模拟您的测试结果"}}},computed:{},methods:{onLoad:function(){var t=this;Object(e["a"])({id:this.vantList.productid}).then(function(n){t.vantList.list=[],n.area=[],n.type.map(function(t){n.area.push({label:"c"+t,flag:!1},{label:"t"+t,flag:!1})}),t.vantList.list.push(n),t.vantList.loading=!1,t.vantList.finished=!0})},onClick:function(t,n,i,e){this.vantList["list"][n]["area"][e]["flag"]=!this.vantList["list"][n]["area"][e]["flag"]},goPage:function(t,n,i){this.$router.push({name:n,params:i})},setclass:function(t,n,i,e){return["line-"+i.label,this.vantList["list"][n]["area"][e]["flag"]?"checked":""]},getPageClass:function(){var t=this.vantList.productid;return["product-"+t]}}}},cd09:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page"},[e("headerNav",{attrs:{title:"模型结果"}}),e("ul",[e("van-list",{attrs:{finished:t.vantList.finished},on:{load:t.onLoad},model:{value:t.vantList.loading,callback:function(n){t.$set(t.vantList,"loading",n)},expression:"vantList.loading"}},t._l(t.vantList.list,function(n,a){return e("li",{key:a,class:"couponitem "+(n.show?"show":"")},[e("div",{staticClass:"item-name"},[e("span",[t._v(t._s(n.title))])]),e("div",{staticClass:"item-coupon"},[e("div",{staticClass:"item-img"},[e("img",{attrs:{src:i("88d4")}})]),e("div",{staticClass:"item-cpninfo"},[e("div",{staticClass:"line-box"},[e("div",{staticClass:"line line-1-c",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}}),e("div",{staticClass:"line line-1-t",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}}),e("div",{staticClass:"line line-2-c",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}}),e("div",{staticClass:"line line-2-t",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}}),e("div",{staticClass:"line line-3-c",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}}),e("div",{staticClass:"line line-3-t",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}})])])])])}))],1),e("van-button",{attrs:{type:"primary",size:"large"},on:{click:function(n){t.goPage("/result")}}},[t._v("查看结果")]),e("van-notice-bar",{attrs:{color:t.noticeBar.color,background:t.noticeBar.background}},[t._v(t._s(t.noticeBar.text))])],1)},a=[],s=(i("45a2"),i("bdfb")),o={name:"component2",mixins:[s["a"]],data:function(){return{vantList:{productid:1002}}},computed:{},methods:{}},c=o,l=(i("9433"),i("2877")),r=Object(l["a"])(c,e,a,!1,null,"4291fa98",null);r.options.__file="product-2.vue";n["default"]=r.exports},d1f1:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("headerNav",{attrs:{title:"测试结果"}}),i("div",{staticClass:"title"},[t._v("检查结果")]),i("van-cell-group",[t._l(t.info,function(t,n){return[i("van-cell",{key:n,attrs:{title:t.Label,value:t.Val}})]})],2),i("div",{staticClass:"title"},[t._v("就医建")]),i("div",{staticClass:"title-val van-hairline"},[t._v(t._s(t.text))]),i("div",{staticClass:"title"},[t._v("科普")]),i("div",{staticClass:"title-val van-hairline"},[t._v(t._s(t.des))])],1)},a=[],s=(i("c5f6"),i("45a2")),o={name:"result",data:function(){return{route:{}}},computed:{},created:function(){},mounted:function(){console.log(this.$route),this.route.params=this.$route.params,this.onLoad()},methods:{onLoad:function(){var t=this,n=this.route.params.serial,i={},e=0;this.route.params.area.map(function(n,a){a%2==1&&(e++,i[e]=Number(t.route.params.area[a]["flag"])+Number(t.route.params.area[a-1]["flag"]))}),console.log(i),Object(s["b"])(n,i).then(function(t){})}}},c=o,l=(i("496b"),i("2877")),r=Object(l["a"])(c,e,a,!1,null,null,null);r.options.__file="result.vue";n["default"]=r.exports},d3dd:function(t,n,i){},d559:function(t,n,i){},d8ab:function(t,n,i){},f5c7:function(t,n,i){},f868:function(t,n,i){"use strict";var e=i("f5c7"),a=i.n(e);a.a},fcd7:function(t,n,i){t.exports=i.p+"img/product-1.ca782841.png"},fe8a:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page"},[e("headerNav",{attrs:{title:"模型结果"}}),e("ul",[e("van-list",{attrs:{finished:t.vantList.finished},on:{load:t.onLoad},model:{value:t.vantList.loading,callback:function(n){t.$set(t.vantList,"loading",n)},expression:"vantList.loading"}},t._l(t.vantList.list,function(n,a){return e("li",{key:a,class:"couponitem "+(n.show?"show":"")},[e("div",{staticClass:"item-name"},[e("span",[t._v(t._s(n.title))])]),e("div",{staticClass:"item-coupon"},[e("div",{staticClass:"item-img"},[e("img",{attrs:{src:i("61cd")}})]),e("div",{staticClass:"item-cpninfo"},[e("div",{staticClass:"line-box"},[e("div",{staticClass:"line line-1-c",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}}),e("div",{staticClass:"line line-1-t",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}}),e("div",{staticClass:"line line-2-c",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}}),e("div",{staticClass:"line line-2-t",on:{click:function(n){t.onClick(a,t.subindex,t.lineindex)}}})])])])])}))],1),e("van-button",{attrs:{type:"primary",size:"large"},on:{click:function(n){t.goPage("/result")}}},[t._v("查看结果")]),e("van-notice-bar",{attrs:{color:t.noticeBar.color,background:t.noticeBar.background}},[t._v(t._s(t.noticeBar.text))])],1)},a=[],s=i("45a2"),o={name:"component4",data:function(){return{vantList:{productid:1001,loading:!1,finished:!1,list:[]},noticeBar:{color:"#1989fa",background:"#ecf9ff",text:"请点击模型CT位置模拟您的测试结果"}}},computed:{},methods:{onLoad:function(){var t=this;Object(s["a"])({id:this.vantList.productid}).then(function(n){t.vantList.list=[],t.vantList.list.push(n),t.vantList.loading=!1,t.vantList.finished=!0})},onClick:function(t,n,i){var e=this.list[t]["Coupon"][n]["line"][i]["flag"];this.list[t]["Coupon"][n]["line"][i]["flag"]=!e},goPage:function(t){this.$router.push({path:t})}}},c=o,l=(i("7494"),i("2877")),r=Object(l["a"])(c,e,a,!1,null,"6fc115c1",null);r.options.__file="product-4.vue";n["default"]=r.exports}});
//# sourceMappingURL=app.e97c2a17.js.map