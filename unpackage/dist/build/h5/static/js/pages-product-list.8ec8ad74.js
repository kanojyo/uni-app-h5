(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-list"],{"1e27":function(t,e,i){"use strict";i.r(e);var a=i("7752"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},2146:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-load-more"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[i("v-uni-view",{staticClass:"load1"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load2"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load3"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1)],1),i("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},3264:function(t,e,i){"use strict";i.r(e);var a=i("a60c"),n=i("1e27");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("c85b");var s=i("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"5e36b006",null);e["default"]=r.exports},4402:function(t,e,i){var a=i("f0c9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3110f1da",a,!0,{sourceMap:!1,shadowMode:!1})},"488b":function(t,e,i){"use strict";var a=i("4402"),n=i.n(a);n.a},7752:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("3b8d")),o=a(i("77cf")),s={components:{uniLoadMore:o.default},data:function(){return{cateMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:0,cat_id:0,priceOrder:0,cateList:[],goodsList:[],kw:"",options:{}}},mounted:function(){this.headerTop=document.getElementsByTagName("uni-page-head")[0].offsetHeight+"px"},onLoad:function(t){this.headerTop=document.getElementsByTagName("uni-page-head")[0].offsetHeight+"px",this.cat_id=t.cat_id,this.kw=t.kw||"",this.options=t,this.loadData()},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.loadData("refresh")},onReachBottom:function(){this.loadData()},methods:{loadData:function(){var t=(0,n.default)(regeneratorRuntime.mark(function t(){var e,i,a,n,o,s=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=s.length>0&&void 0!==s[0]?s[0]:"add",i=s.length>1?s[1]:void 0,"add"!==e){t.next=8;break}if("nomore"!==this.loadingType){t.next=5;break}return t.abrupt("return");case 5:this.loadingType="loading",t.next=9;break;case 8:this.loadingType="more";case 9:if(a={cat_id:this.cat_id||0,sort:this.filterIndex,priceOrder:this.priceOrder,kw:this.kw},!this.$tools.has_addon("xshopgroupon")||1!=this.options.groupon){t.next=17;break}return a.groupon=1,t.next=14,this.$http.get("groupon.product.list",a);case 14:n=t.sent,t.next=20;break;case 17:return t.next=19,this.$http.get("product.list",a);case 19:n=t.sent;case 20:o=n.data.data,"refresh"===e&&(this.goodsList=[]),this.goodsList=this.goodsList.concat(o),this.loadingType=n.data.current_page>=n.data.last_page?"nomore":"more","refresh"===e&&(1==i?uni.hideLoading():uni.stopPullDownRefresh());case 25:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),tabClick:function(t){this.filterIndex===t&&2!==t||(this.filterIndex=t,this.priceOrder=2===t?1===this.priceOrder?2:1:0,uni.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),uni.showLoading({title:"正在加载"}))},toggleCateMask:function(t){var e=this,i="show"===t?10:300,a="show"===t?1:0;this.cateMaskState=2,setTimeout(function(){e.cateMaskState=a},i)},changeCate:function(t){this.cat_id=t.id,this.toggleCateMask(),uni.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),uni.showLoading({title:"正在加载"})},navToDetailPage:function(t){var e=t.id;uni.navigateTo({url:"/pages/product/product?id=".concat(e)})},stopPrevent:function(){}}};e.default=s},"77cf":function(t,e,i){"use strict";i.r(e);var a=i("2146"),n=i("d886");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("488b");var s=i("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"bcc92d98",null);e["default"]=r.exports},"9f7a":function(t,e,i){var a=i("cec9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1b7d942b",a,!0,{sourceMap:!1,shadowMode:!1})},a60c:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"navbar",style:{position:t.headerPosition,top:t.headerTop}},[i("v-uni-view",{staticClass:"nav-item",class:{current:0===t.filterIndex},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(0)}}},[t._v("综合排序")]),i("v-uni-view",{staticClass:"nav-item",class:{current:1===t.filterIndex},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(1)}}},[t._v("销量优先")]),i("v-uni-view",{staticClass:"nav-item",class:{current:2===t.filterIndex},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(2)}}},[i("v-uni-text",[t._v("价格")]),i("v-uni-view",{staticClass:"p-box"},[i("v-uni-text",{staticClass:"yticon icon-shang",class:{active:1===t.priceOrder&&2===t.filterIndex}}),i("v-uni-text",{staticClass:"yticon icon-shang xia",class:{active:2===t.priceOrder&&2===t.filterIndex}})],1)],1)],1),i("v-uni-view",{staticClass:"goods-list"},t._l(t.goodsList,function(e,a){return i("v-uni-view",{key:a,staticClass:"goods-item",on:{click:function(i){i=t.$handleEvent(i),t.navToDetailPage(e)}}},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{attrs:{src:e.image[0],mode:"aspectFill"}})],1),i("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"price-box"},[i("v-uni-text",{staticClass:"price"},[t._v(t._s(e.price))]),i("v-uni-text",[t._v("已售 "+t._s(e.sold_count))])],1)],1)}),1),i("uni-load-more",{attrs:{status:t.loadingType}}),i("v-uni-view",{staticClass:"cate-mask",class:0===t.cateMaskState?"none":1===t.cateMaskState?"show":"",on:{click:function(e){e=t.$handleEvent(e),t.toggleCateMask(e)}}},[i("v-uni-view",{staticClass:"cate-content",on:{click:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.stopPrevent(e)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.stopPrevent(e)}}},[i("v-uni-scroll-view",{staticClass:"cate-list",attrs:{"scroll-y":""}},t._l(t.cateList,function(e){return i("v-uni-view",{key:e.id},[i("v-uni-view",{staticClass:"cate-item b-b two"},[t._v(t._s(e.name))]),t._l(e.child,function(e){return i("v-uni-view",{key:e.id,staticClass:"cate-item b-b",class:{active:e.id==t.cat_id},on:{click:function(i){i=t.$handleEvent(i),t.changeCate(e)}}},[t._v(t._s(e.name))])})],2)}),1)],1)],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},c85b:function(t,e,i){"use strict";var a=i("9f7a"),n=i.n(a);n.a},cec9:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.content[data-v-5e36b006],uni-page-body[data-v-5e36b006]{background:#f8f8f8}.content[data-v-5e36b006]{padding-top:%?96?%}.navbar[data-v-5e36b006]{position:fixed;left:0;top:var(--window-top);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:%?80?%;background:#fff;-webkit-box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06);box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06);z-index:10}.navbar .nav-item[data-v-5e36b006]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;font-size:%?30?%;color:#303133;position:relative}.navbar .nav-item.current[data-v-5e36b006]{color:#ff3600}.navbar .nav-item.current[data-v-5e36b006]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:%?120?%;height:0;border-bottom:%?4?% solid #ff3600}.navbar .p-box[data-v-5e36b006]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.navbar .p-box .yticon[data-v-5e36b006]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:%?30?%;height:%?14?%;line-height:1;margin-left:%?4?%;font-size:%?26?%;color:#888}.navbar .p-box .yticon.active[data-v-5e36b006]{color:#ff3600}.navbar .p-box .xia[data-v-5e36b006]{-webkit-transform:scaleY(-1);-ms-transform:scaleY(-1);transform:scaleY(-1)}.navbar .cate-item[data-v-5e36b006]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;width:%?80?%;position:relative;font-size:%?44?%}.navbar .cate-item[data-v-5e36b006]:after{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border-left:1px solid #ddd;width:0;height:%?36?%}\n/* 分类 */.cate-mask[data-v-5e36b006]{position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:rgba(0,0,0,0);z-index:95;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.cate-mask .cate-content[data-v-5e36b006]{width:%?630?%;height:100%;background:#fff;float:right;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.cate-mask.none[data-v-5e36b006]{display:none}.cate-mask.show[data-v-5e36b006]{background:rgba(0,0,0,.4)}.cate-mask.show .cate-content[data-v-5e36b006]{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.cate-list[data-v-5e36b006]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%}.cate-list .cate-item[data-v-5e36b006]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?90?%;padding-left:%?30?%;font-size:%?28?%;color:#555;position:relative}.cate-list .two[data-v-5e36b006]{height:%?64?%;color:#303133;font-size:%?30?%;background:#f8f8f8}.cate-list .active[data-v-5e36b006]{color:#ff3600}\n/* 商品列表 */.goods-list[data-v-5e36b006]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?30?%;background:#fff}.goods-list .goods-item[data-v-5e36b006]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:48%;padding-bottom:%?40?%}.goods-list .goods-item[data-v-5e36b006]:nth-child(odd){margin-right:4%}.goods-list .image-wrapper[data-v-5e36b006]{width:100%;height:%?330?%;border-radius:3px;overflow:hidden}.goods-list .image-wrapper uni-image[data-v-5e36b006]{width:100%;height:100%;opacity:1}.goods-list .title[data-v-5e36b006]{font-size:%?32?%;color:#303133;line-height:%?80?%}.goods-list .price-box[data-v-5e36b006]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-right:%?10?%;font-size:%?24?%;color:#909399}.goods-list .price[data-v-5e36b006]{font-size:%?32?%;color:#ff3600;line-height:1}.goods-list .price[data-v-5e36b006]:before{content:"\\FFE5";font-size:%?26?%}body.?%PAGE?%[data-v-5e36b006]{background:#f8f8f8}',""])},d886:function(t,e,i){"use strict";i.r(e);var a=i("ff31"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},f0c9:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-load-more[data-v-bcc92d98]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-load-more__text[data-v-bcc92d98]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-bcc92d98]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-bcc92d98]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-bcc92d98]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-bcc92d98 1.56s ease infinite;animation:load-data-v-bcc92d98 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-bcc92d98]:first-child{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-bcc92d98]:nth-child(2){-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-bcc92d98]:nth-child(3){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-bcc92d98]:nth-child(4){top:11px;left:0}.load1[data-v-bcc92d98],.load2[data-v-bcc92d98],.load3[data-v-bcc92d98]{height:24px;width:24px}.load2[data-v-bcc92d98]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-bcc92d98]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-bcc92d98]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-bcc92d98]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-bcc92d98]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-bcc92d98]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-bcc92d98]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-bcc92d98]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-bcc92d98]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-bcc92d98]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-bcc92d98]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-bcc92d98]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-bcc92d98]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-bcc92d98]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-bcc92d98{0%{opacity:1}to{opacity:.2}}",""])},ff31:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=a}}]);