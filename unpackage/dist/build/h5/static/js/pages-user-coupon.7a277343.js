(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-coupon"],{"0ae1":function(t,e,n){"use strict";n.r(e);var i=n("4237"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"10b7":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.uni-popup[data-v-090f85de]{position:fixed;top:50px;bottom:0;left:0;right:0;z-index:999;overflow:hidden}.uni-popup__mask[data-v-090f85de]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:998;background:rgba(0,0,0,.4);opacity:0}.uni-popup__mask.ani[data-v-090f85de]{-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s}.uni-popup__mask.uni-bottom[data-v-090f85de],.uni-popup__mask.uni-center[data-v-090f85de],.uni-popup__mask.uni-top[data-v-090f85de]{opacity:1}.uni-popup__wrapper[data-v-090f85de]{position:absolute;z-index:999;-webkit-box-sizing:border-box;box-sizing:border-box}.uni-popup__wrapper.ani[data-v-090f85de]{-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s}.uni-popup__wrapper.top[data-v-090f85de]{top:0;left:0;width:100%;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%)}.uni-popup__wrapper.bottom[data-v-090f85de]{bottom:0;left:0;width:100%;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%)}.uni-popup__wrapper.center[data-v-090f85de]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-090f85de]{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.uni-popup__wrapper.uni-custom .uni-popup__wrapper-box[data-v-090f85de]{padding:%?30?%;background:#fff}.uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box[data-v-090f85de]{position:relative;max-width:80%;max-height:80%;overflow-y:scroll}.uni-popup__wrapper.uni-custom.bottom .uni-popup__wrapper-box[data-v-090f85de],.uni-popup__wrapper.uni-custom.top .uni-popup__wrapper-box[data-v-090f85de]{width:100%;max-height:500px;overflow-y:scroll}.uni-popup__wrapper.uni-bottom[data-v-090f85de],.uni-popup__wrapper.uni-top[data-v-090f85de]{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.uni-popup__wrapper.uni-center[data-v-090f85de]{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1}',""])},1147:function(t,e,n){"use strict";var i=n("d115"),o=n.n(i);o.a},1672:function(t,e,n){"use strict";var i=n("d3d9"),o=n.n(i);o.a},"29d9":function(t,e,n){"use strict";var i=n("52e3"),o=n.n(i);o.a},4237:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniPopup",props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},custom:{type:Boolean,default:!1},maskClick:{type:Boolean,default:!0}},data:function(){return{ani:"",show:!1}},created:function(){},methods:{clear:function(){},open:function(){var t=this;this.show=!0,this.$nextTick(function(){setTimeout(function(){t.ani="uni-"+t.type},30)})},close:function(t){var e=this;!this.maskClick&&t||(this.ani="",this.$nextTick(function(){setTimeout(function(){e.show=!1},300)}))}}};e.default=i},"482b":function(t,e,n){"use strict";n.r(e);var i=n("cb84"),o=n("0ae1");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("1147");var c=n("2877"),s=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,"090f85de",null);e["default"]=s.exports},"4e9c":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-ca11d616]{background:#f3f3f3}\n/* 优惠券面板 */.coupon-content[data-v-ca11d616]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.coupon-content .mask-content[data-v-ca11d616]{width:100%;background:#f3f3f3;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.coupon-content.none[data-v-ca11d616]{display:none}.coupon-content.show .mask-content[data-v-ca11d616]{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}\n/* 优惠券列表 */.coupon-item[data-v-ca11d616]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:%?20?% %?24?%;background:#fff}.coupon-item .con[data-v-ca11d616]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;height:%?120?%;padding:0 %?30?%}.coupon-item .con[data-v-ca11d616]:after{position:absolute;left:0;bottom:0;content:"";width:100%;height:0;border-bottom:1px dashed #f3f3f3;-webkit-transform:scaleY(50%);-ms-transform:scaleY(50%);transform:scaleY(50%)}.coupon-item .left[data-v-ca11d616]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow:hidden;height:%?100?%}.coupon-item .title[data-v-ca11d616]{font-size:%?32?%;color:#303133;margin-bottom:%?10?%}.coupon-item .time[data-v-ca11d616]{font-size:%?24?%;color:#909399}.coupon-item .right[data-v-ca11d616]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?26?%;color:#606266;height:%?100?%}.coupon-item .price[data-v-ca11d616]{font-size:%?44?%;color:#fa436a}.coupon-item .price[data-v-ca11d616]:before{content:"\\FFE5";font-size:%?34?%}.coupon-item .circle[data-v-ca11d616]{position:absolute;left:%?-6?%;bottom:%?-10?%;z-index:10;width:%?20?%;height:%?20?%;background:#f3f3f3;border-radius:100px}.coupon-item .circle.r[data-v-ca11d616]{left:auto;right:%?-6?%}.coupon-item .op[data-v-ca11d616]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:%?26?%;padding:%?10?% %?20?%}.coupon-item .op .tips[data-v-ca11d616]{font-size:%?24?%;color:#909399;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.coupon-item .op .op-btn[data-v-ca11d616]{border:%?2?% solid #fa436a;border-radius:%?10?%;padding:%?4?% %?20?%;background:#fa436a;color:#fff}body.?%PAGE?%[data-v-ca11d616]{background:#f3f3f3}',""])},"52e3":function(t,e,n){var i=n("eab4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("402c22ba",i,!0,{sourceMap:!1,shadowMode:!1})},"64f2":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("795b")),a=i(n("e064")),c={components:{couponDetail:a.default},data:function(){return{couponVisible:0,list:[],detail:[],currentCoupon:{},couponType:0}},mounted:function(){this.getCoupon()},methods:{getCoupon:function(){var t=this;return new o.default(function(e,n){uni.showLoading(),t.$http.post("coupon").then(function(n){uni.hideLoading(),t.list=n.data,e(n)}).catch(function(t){uni.hideLoading(),n(t)})})},showDetail:function(t){var e=this;if(0!=t.coupon.type){var n={coupon_id:t.coupon.id};this.currentCoupon=t,this.couponType=t.coupon.type,uni.showLoading(),this.$http.post("coupon.detail",n).then(function(t){uni.hideLoading(),e.detail=t.data,e.$refs.$popup.open()}).catch(function(t){uni.hideLoading()})}}},onPullDownRefresh:function(){this.getCoupon().then(function(t){uni.stopPullDownRefresh()}).catch(function(t){uni.stopPullDownRefresh()})}};e.default=c},"6cb7":function(t,e,n){"use strict";n.r(e);var i=n("64f2"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},b956:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var o=i(n("482b")),a={components:{uniPopup:o.default},data:function(){return{}},props:{couponType:{type:String|Number,default:0},detail:{type:Array}},methods:{goProduct:function(t){uni.navigateTo({url:"/pages/product/product?id="+t.id})},goCategory:function(t){uni.navigateTo({url:"/pages/product/list?cat_id="+t.id})},open:function(){this.$refs.$popup.open()},close:function(){this.$refs.$popup.close()}}};e.default=a},bd8e:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"coupon-content show"},[n("v-uni-view",{staticClass:"mask-content"},t._l(t.list,function(e,i){return n("v-uni-view",{key:i,staticClass:"coupon-item",on:{click:function(n){n=t.$handleEvent(n),t.showDetail(e)}}},[n("v-uni-view",{staticClass:"con"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-text",{staticClass:"title"},[t._v(t._s(e.coupon&&e.coupon.name)+" x "+t._s(e.usable_count))]),n("v-uni-text",{staticClass:"time"},[t._v("有效期至"+t._s(e.coupon&&e.coupon.use_end_time_text))])],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-text",{staticClass:"price"},[t._v(t._s(e.coupon&&e.coupon.money))]),n("v-uni-text",[t._v("满"+t._s(e.coupon&&e.coupon.order_min_amount)+"可用")])],1),n("v-uni-view",{staticClass:"circle l"}),n("v-uni-view",{staticClass:"circle r"})],1),n("v-uni-view",{staticClass:"op"},[n("v-uni-text",{staticClass:"tips"},[t._v(t._s(e.coupon&&e.coupon.desc))])],1)],1)}),1),n("coupon-detail",{ref:"$popup",attrs:{"coupon-type":t.couponType,detail:t.detail}})],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},cb84:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{staticClass:"uni-popup"},[n("v-uni-view",{staticClass:"uni-popup__mask",class:[t.ani,t.animation?"ani":"",t.custom?"":"uni-custom"],on:{click:function(e){e=t.$handleEvent(e),t.close(!0)}}}),n("v-uni-view",{staticClass:"uni-popup__wrapper",class:[t.type,t.ani,t.animation?"ani":"",t.custom?"":"uni-custom"],on:{click:function(e){e=t.$handleEvent(e),t.close(!0)}}},[n("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.clear(e)}}},[t._t("default")],2)],1)],1):t._e()},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},d115:function(t,e,n){var i=n("10b7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("90dd0e0e",i,!0,{sourceMap:!1,shadowMode:!1})},d3d9:function(t,e,n){var i=n("4e9c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("c89b0bb2",i,!0,{sourceMap:!1,shadowMode:!1})},d5a7:function(t,e,n){"use strict";n.r(e);var i=n("b956"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},e064:function(t,e,n){"use strict";n.r(e);var i=n("e52c"),o=n("d5a7");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("29d9");var c=n("2877"),s=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,"21e4cd43",null);e["default"]=s.exports},e52c:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-popup",{ref:"$popup",staticClass:"popup-content",attrs:{type:"bottom"}},[n("v-uni-view",{},[2==t.couponType?n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"h3"},[t._v("以下商品可用")]),t._l(t.detail,function(e,i){return n("v-uni-view",{key:i,staticClass:"item"},[n("v-uni-view",{staticClass:"product",on:{click:function(n){n=t.$handleEvent(n),t.goProduct(e)}}},[n("v-uni-view",{staticClass:"image"},[e.image&&e.image[0]?n("v-uni-image",{attrs:{src:e.image&&e.image[0],mode:"aspectFill"}}):t._e()],1),n("v-uni-view",{staticClass:"desc"},[n("v-uni-text",{staticClass:"title"},[t._v(t._s(e.title))]),n("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(e.price))])],1)],1)],1)})],2):t._e(),1==t.couponType?n("v-uni-view",{staticClass:"category-content"},[n("v-uni-text",{staticClass:"h3"},[t._v("以下分类可用")]),t._l(t.detail,function(e,i){return n("v-uni-view",{key:i,staticClass:"item",on:{click:function(n){n=t.$handleEvent(n),t.goCategory(e)}}},[n("v-uni-text",[t._v(t._s(e.name))])],1)})],2):t._e()],1)],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},eab4:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.h3[data-v-21e4cd43]{color:#444;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-bottom:#eee;font-size:%?32?%;margin:%?20?%}.popup-content[data-v-21e4cd43]{font-size:%?26?%}.popup-content .content[data-v-21e4cd43]{max-height:60vh;overflow-y:scroll}.popup-content .item[data-v-21e4cd43]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.popup-content .product[data-v-21e4cd43]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:%?140?%;margin:%?10?% 0}.popup-content .product .image[data-v-21e4cd43]{width:100%;max-width:%?140?%;height:%?140?%;border-radius:3px;overflow:hidden}.popup-content .product .image uni-image[data-v-21e4cd43]{width:100%;height:100%;opacity:1}.popup-content .product .desc[data-v-21e4cd43]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;line-height:150%;text-align:left;padding:%?10?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.popup-content .product .desc .price[data-v-21e4cd43]{color:#fa436a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.popup-content .category-content[data-v-21e4cd43]{max-height:40vh;overflow-y:scroll}.popup-content .category-content .item[data-v-21e4cd43]{font-size:%?30?%;text-align:center;margin:%?20?% 0}',""])},ef71:function(t,e,n){"use strict";n.r(e);var i=n("bd8e"),o=n("6cb7");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("1672");var c=n("2877"),s=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,"ca11d616",null);e["default"]=s.exports}}]);