(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-coupon"],{"01a8":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("795b")),a=i(n("1d08")),s={components:{couponDetail:a.default},data:function(){return{couponVisible:0,list:[],detail:[],currentCoupon:{},couponType:0}},mounted:function(){this.getCoupon()},methods:{getCoupon:function(){var t=this;return new o.default(function(e,n){uni.showLoading(),t.$http.post("coupon").then(function(n){uni.hideLoading(),t.list=n.data,e(n)}).catch(function(t){uni.hideLoading(),n(t)})})},showDetail:function(t){var e=this;if(0!=t.coupon.type){var n={coupon_id:t.coupon.id};this.currentCoupon=t,this.couponType=t.coupon.type,uni.showLoading(),this.$http.post("coupon.detail",n).then(function(t){uni.hideLoading(),e.detail=t.data,e.$refs.$popup.open()}).catch(function(t){uni.hideLoading()})}}},onPullDownRefresh:function(){this.getCoupon().then(function(t){uni.stopPullDownRefresh()}).catch(function(t){uni.stopPullDownRefresh()})}};e.default=s},"0a50":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.h3[data-v-b31f38de]{color:#444;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-bottom:#eee;font-size:%?32?%;margin:%?20?%}.popup-content[data-v-b31f38de]{font-size:%?26?%}.popup-content .content[data-v-b31f38de]{max-height:60vh;overflow-y:scroll}.popup-content .item[data-v-b31f38de]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.popup-content .product[data-v-b31f38de]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:%?140?%;margin:%?10?% 0}.popup-content .product .image[data-v-b31f38de]{width:100%;max-width:%?140?%;height:%?140?%;border-radius:3px;overflow:hidden}.popup-content .product .image uni-image[data-v-b31f38de]{width:100%;height:100%;opacity:1}.popup-content .product .desc[data-v-b31f38de]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;line-height:150%;text-align:left;padding:%?10?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.popup-content .product .desc .price[data-v-b31f38de]{color:#fa436a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.popup-content .category-content[data-v-b31f38de]{max-height:40vh;overflow-y:scroll}.popup-content .category-content .item[data-v-b31f38de]{font-size:%?30?%;text-align:center;margin:%?20?% 0}',""])},1033:function(t,e,n){"use strict";var i=n("64a3"),o=n.n(i);o.a},1266:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-93339232]{background:#f3f3f3}\n/* 优惠券面板 */.coupon-content[data-v-93339232]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.coupon-content .mask-content[data-v-93339232]{width:100%;background:#f3f3f3;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.coupon-content.none[data-v-93339232]{display:none}.coupon-content.show .mask-content[data-v-93339232]{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}\n/* 优惠券列表 */.coupon-item[data-v-93339232]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:%?20?% %?24?%;background:#fff}.coupon-item .con[data-v-93339232]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;height:%?120?%;padding:0 %?30?%}.coupon-item .con[data-v-93339232]:after{position:absolute;left:0;bottom:0;content:"";width:100%;height:0;border-bottom:1px dashed #f3f3f3;-webkit-transform:scaleY(50%);-ms-transform:scaleY(50%);transform:scaleY(50%)}.coupon-item .left[data-v-93339232]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow:hidden;height:%?100?%}.coupon-item .title[data-v-93339232]{font-size:%?32?%;color:#303133;margin-bottom:%?10?%}.coupon-item .time[data-v-93339232]{font-size:%?24?%;color:#909399}.coupon-item .right[data-v-93339232]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?26?%;color:#606266;height:%?100?%}.coupon-item .price[data-v-93339232]{font-size:%?44?%;color:#fa436a}.coupon-item .price[data-v-93339232]:before{content:"\\FFE5";font-size:%?34?%}.coupon-item .circle[data-v-93339232]{position:absolute;left:%?-6?%;bottom:%?-10?%;z-index:10;width:%?20?%;height:%?20?%;background:#f3f3f3;border-radius:100px}.coupon-item .circle.r[data-v-93339232]{left:auto;right:%?-6?%}.coupon-item .op[data-v-93339232]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:%?26?%;padding:%?10?% %?20?%}.coupon-item .op .tips[data-v-93339232]{font-size:%?24?%;color:#909399;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.coupon-item .op .op-btn[data-v-93339232]{border:%?2?% solid #fa436a;border-radius:%?10?%;padding:%?4?% %?20?%;background:#fa436a;color:#fff}body.?%PAGE?%[data-v-93339232]{background:#f3f3f3}',""])},"1b18":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.uni-popup[data-v-42ec1a42]{position:fixed;top:50px;bottom:0;left:0;right:0;z-index:999;overflow:hidden}.uni-popup__mask[data-v-42ec1a42]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:998;background:rgba(0,0,0,.4);opacity:0}.uni-popup__mask.ani[data-v-42ec1a42]{-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s}.uni-popup__mask.uni-bottom[data-v-42ec1a42],.uni-popup__mask.uni-center[data-v-42ec1a42],.uni-popup__mask.uni-top[data-v-42ec1a42]{opacity:1}.uni-popup__wrapper[data-v-42ec1a42]{position:absolute;z-index:999;-webkit-box-sizing:border-box;box-sizing:border-box}.uni-popup__wrapper.ani[data-v-42ec1a42]{-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s}.uni-popup__wrapper.top[data-v-42ec1a42]{top:0;left:0;width:100%;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%)}.uni-popup__wrapper.bottom[data-v-42ec1a42]{bottom:0;left:0;width:100%;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%)}.uni-popup__wrapper.center[data-v-42ec1a42]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-42ec1a42]{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.uni-popup__wrapper.uni-custom .uni-popup__wrapper-box[data-v-42ec1a42]{padding:%?30?%;background:#fff}.uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box[data-v-42ec1a42]{position:relative;max-width:80%;max-height:80%;overflow-y:scroll}.uni-popup__wrapper.uni-custom.bottom .uni-popup__wrapper-box[data-v-42ec1a42],.uni-popup__wrapper.uni-custom.top .uni-popup__wrapper-box[data-v-42ec1a42]{width:100%;max-height:500px;overflow-y:scroll}.uni-popup__wrapper.uni-bottom[data-v-42ec1a42],.uni-popup__wrapper.uni-top[data-v-42ec1a42]{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.uni-popup__wrapper.uni-center[data-v-42ec1a42]{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1}',""])},"1d08":function(t,e,n){"use strict";n.r(e);var i=n("a31e"),o=n("756a");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("9469");var s=n("2877"),c=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"b31f38de",null);e["default"]=c.exports},"20c8":function(t,e,n){"use strict";n.r(e);var i=n("e37b"),o=n("599d");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("1033");var s=n("2877"),c=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"42ec1a42",null);e["default"]=c.exports},"275d":function(t,e,n){var i=n("0a50");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("7cb188f5",i,!0,{sourceMap:!1,shadowMode:!1})},2900:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var o=i(n("20c8")),a={components:{uniPopup:o.default},data:function(){return{}},props:{couponType:{type:String|Number,default:0},detail:{type:Array}},methods:{goProduct:function(t){uni.navigateTo({url:"/pages/product/product?id="+t.id})},goCategory:function(t){uni.navigateTo({url:"/pages/product/list?cat_id="+t.id})},open:function(){this.$refs.$popup.open()},close:function(){this.$refs.$popup.close()}}};e.default=a},"386b3":function(t,e,n){"use strict";var i=n("58ca"),o=n.n(i);o.a},"4f0c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniPopup",props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},custom:{type:Boolean,default:!1},maskClick:{type:Boolean,default:!0}},data:function(){return{ani:"",show:!1}},created:function(){},methods:{clear:function(){},open:function(){var t=this;this.show=!0,this.$nextTick(function(){setTimeout(function(){t.ani="uni-"+t.type},30)})},close:function(t){var e=this;!this.maskClick&&t||(this.ani="",this.$nextTick(function(){setTimeout(function(){e.show=!1},300)}))}}};e.default=i},"58ca":function(t,e,n){var i=n("1266");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("3f5c1c68",i,!0,{sourceMap:!1,shadowMode:!1})},"599d":function(t,e,n){"use strict";n.r(e);var i=n("4f0c"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"5b95":function(t,e,n){"use strict";n.r(e);var i=n("01a8"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"64a3":function(t,e,n){var i=n("1b18");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("7a6f2530",i,!0,{sourceMap:!1,shadowMode:!1})},"6f1f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"coupon-content show"},[n("v-uni-view",{staticClass:"mask-content"},t._l(t.list,function(e,i){return n("v-uni-view",{key:i,staticClass:"coupon-item",on:{click:function(n){n=t.$handleEvent(n),t.showDetail(e)}}},[n("v-uni-view",{staticClass:"con"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-text",{staticClass:"title"},[t._v(t._s(e.coupon&&e.coupon.name)+" x "+t._s(e.usable_count))]),n("v-uni-text",{staticClass:"time"},[t._v("有效期至"+t._s(e.coupon&&e.coupon.use_end_time_text))])],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-text",{staticClass:"price"},[t._v(t._s(e.coupon&&e.coupon.money))]),n("v-uni-text",[t._v("满"+t._s(e.coupon&&e.coupon.order_min_amount)+"可用")])],1),n("v-uni-view",{staticClass:"circle l"}),n("v-uni-view",{staticClass:"circle r"})],1),n("v-uni-view",{staticClass:"op"},[n("v-uni-text",{staticClass:"tips"},[t._v(t._s(e.coupon&&e.coupon.desc))])],1)],1)}),1),n("coupon-detail",{ref:"$popup",attrs:{"coupon-type":t.couponType,detail:t.detail}})],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"756a":function(t,e,n){"use strict";n.r(e);var i=n("2900"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},9469:function(t,e,n){"use strict";var i=n("275d"),o=n.n(i);o.a},a31e:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-popup",{ref:"$popup",staticClass:"popup-content",attrs:{type:"bottom"}},[n("v-uni-view",{},[2==t.couponType?n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"h3"},[t._v("以下商品可用")]),t._l(t.detail,function(e,i){return n("v-uni-view",{key:i,staticClass:"item"},[n("v-uni-view",{staticClass:"product",on:{click:function(n){n=t.$handleEvent(n),t.goProduct(e)}}},[n("v-uni-view",{staticClass:"image"},[e.image&&e.image[0]?n("v-uni-image",{attrs:{src:e.image&&e.image[0],mode:"aspectFill"}}):t._e()],1),n("v-uni-view",{staticClass:"desc"},[n("v-uni-text",{staticClass:"title"},[t._v(t._s(e.title))]),n("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(e.price))])],1)],1)],1)})],2):t._e(),1==t.couponType?n("v-uni-view",{staticClass:"category-content"},[n("v-uni-text",{staticClass:"h3"},[t._v("以下分类可用")]),t._l(t.detail,function(e,i){return n("v-uni-view",{key:i,staticClass:"item",on:{click:function(n){n=t.$handleEvent(n),t.goCategory(e)}}},[n("v-uni-text",[t._v(t._s(e.name))])],1)})],2):t._e()],1)],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},dde4:function(t,e,n){"use strict";n.r(e);var i=n("6f1f"),o=n("5b95");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("386b3");var s=n("2877"),c=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"93339232",null);e["default"]=c.exports},e37b:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{staticClass:"uni-popup"},[n("v-uni-view",{staticClass:"uni-popup__mask",class:[t.ani,t.animation?"ani":"",t.custom?"":"uni-custom"],on:{click:function(e){e=t.$handleEvent(e),t.close(!0)}}}),n("v-uni-view",{staticClass:"uni-popup__wrapper",class:[t.type,t.ani,t.animation?"ani":"",t.custom?"":"uni-custom"],on:{click:function(e){e=t.$handleEvent(e),t.close(!0)}}},[n("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.clear(e)}}},[t._t("default")],2)],1)],1):t._e()},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})}}]);