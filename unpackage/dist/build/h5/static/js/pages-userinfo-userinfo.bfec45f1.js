(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-userinfo-userinfo"],{"1c4d":function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("795b"));i("ac6a"),i("5df3");i("2f62");var s=i("58cf"),o={data:function(){return{userInfo:{},form:{avatar:"",nickname:"",gender:"",birthday:"",mobile:""},items:[{value:"1",name:"男",checked:""},{value:"2",name:"女",checked:""}],current:0,baseUrl:(0,s.processUrl)()}},onLoad:function(){this.init()},computed:{},methods:{init:function(){return n.default.all([this.getUserInfo()])},getUserInfo:function(){var e=this;this.$http.get("user.info").then(function(t){1==t.code&&(e.userInfo=t.data,e.form.avatar=e.userInfo.avatar,e.form.nickname=e.userInfo.nickname,e.form.gender=e.userInfo.gender,e.form.birthday=e.userInfo.birthday,e.form.mobile=e.userInfo.mobile,e.current=e.form.gender)})},radioChange:function(e){for(var t=0;t<this.items.length;t++)if(this.items[t].value===e.target.value){this.current=t+1,this.form.gender=this.current;break}},bindDateChange:function(e){this.form.birthday=e.target.value},editImg:function(){var e=this;uni.chooseImage({count:1,sizeType:["original"],sourceType:["album"],success:function(t){var i=t.tempFiles[0].size/1e3/1024,a=!1;if(i>4&&(e.$message.error("上传的图片不能大于4M"),a=!0),a)return!1;var n=t.tempFilePaths;console.log(n),uni.uploadFile({url:e.baseUrl+"/addons/xshop/vendor/upload",filePath:n[0],name:"file",success:function(t){var i=JSON.parse(t.data);1==i.code?e.form.avatar=i.data.url:1e4==i.code&&e.$message.error(i.msg)},fail:function(t){console.log(t),console.log("上传失败"),e.$message.error("上传失败")}})}})},confirm:function(){var e=this;this.$http.post("user.info.edit",this.form).then(function(t){console.log(t),1==t.code?e.$message.success("保存资料成功"):e.$message.error("保存资料失败")})}}};t.default=o},"46ca":function(e,t,i){var a=i("ba88");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("298b9a65",a,!0,{sourceMap:!1,shadowMode:!1})},"58cf":function(e,t,i){"use strict";function a(){return"http://ly1.wuhanlst.com"}Object.defineProperty(t,"__esModule",{value:!0}),t.processUrl=a},"5df3":function(e,t,i){"use strict";var a=i("02f4")(!0);i("01f9")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,i=this._i;return i>=t.length?{value:void 0,done:!0}:(e=a(t,i),this._i+=e.length,{value:e,done:!1})})},"87f0":function(e,t,i){"use strict";var a=i("46ca"),n=i.n(a);n.a},a8cc:function(e,t,i){"use strict";i.r(t);var a=i("1c4d"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},a8d2:function(e,t,i){"use strict";i.r(t);var a=i("ab35"),n=i("a8cc");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("87f0");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"b1bde0a4",null);t["default"]=r.exports},ab35:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"user-section"},[i("v-uni-text",{staticClass:"bg-upload-btn yticon icon-paizhao",on:{click:function(t){t=e.$handleEvent(t),e.editImg(t)}}},[e._v("点击修改头像")]),i("v-uni-view",{staticClass:"portrait-box"},[i("v-uni-image",{staticClass:"portrait",attrs:{src:e.form.avatar||"/static/missing-face.png"}})],1)],1),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"row b-b"},[i("v-uni-text",{staticClass:"tit"},[e._v("用户ID")]),i("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"收货人姓名",disabled:"true","placeholder-class":"placeholder"},model:{value:e.userInfo.user_id,callback:function(t){e.$set(e.userInfo,"user_id",t)},expression:"userInfo.user_id"}})],1),i("v-uni-view",{staticClass:"row b-b"},[i("v-uni-text",{staticClass:"tit"},[e._v("昵称")]),i("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"收货人姓名","placeholder-class":"placeholder"},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),i("v-uni-view",{staticClass:"row b-b"},[i("v-uni-text",{staticClass:"tit"},[e._v("性别")]),i("v-uni-radio-group",{on:{change:function(t){t=e.$handleEvent(t),e.radioChange(t)}}},e._l(e.items,function(t,a){return i("v-uni-label",{key:t.value,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",[i("v-uni-radio",{attrs:{value:t.value,checked:a===e.current-1}})],1),i("v-uni-view",[e._v(e._s(t.name))])],1)}),1)],1),i("v-uni-view",{staticClass:"row b-b"},[i("v-uni-text",{staticClass:"tit"},[e._v("生日")]),i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-picker",{attrs:{mode:"date",value:e.form.birthday},on:{change:function(t){t=e.$handleEvent(t),e.bindDateChange(t)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.form.birthday))])],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"row b-b"},[i("v-uni-text",{staticClass:"tit"},[e._v("手机号码")]),i("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"收货人姓名","placeholder-class":"placeholder"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),i("v-uni-button",{staticClass:"add-btn",on:{click:function(t){t=e.$handleEvent(t),e.confirm(t)}}},[e._v("完成")])],1)],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},ba88:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-b1bde0a4]{background:#f8f8f8;font-size:%?28?%}.user-section[data-v-b1bde0a4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:%?400?%;padding:%?40?% %?30?% 0;position:relative}.user-section .bg[data-v-b1bde0a4]{position:absolute;left:0;top:0;width:100%;height:100%;-webkit-filter:blur(1px);filter:blur(1px);opacity:.7}.user-section .portrait-box[data-v-b1bde0a4]{width:%?200?%;height:%?200?%;border:%?6?% solid #fff;border-radius:50%;position:relative;z-index:2}.user-section .portrait[data-v-b1bde0a4]{position:relative;width:100%;height:100%;border-radius:50%}.user-section .yticon[data-v-b1bde0a4]{position:absolute;line-height:1;z-index:5;font-size:%?48?%;color:#fff;padding:%?4?% %?6?%;border-radius:%?6?%;background:rgba(0,0,0,.4)}.user-section .pt-upload-btn[data-v-b1bde0a4]{right:0;bottom:%?10?%}.user-section .bg-upload-btn[data-v-b1bde0a4]{bottom:%?20?%;font-size:%?28?%}.content .row[data-v-b1bde0a4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;padding:0 %?30?%;height:%?110?%;background:#fff}.content .row .tit[data-v-b1bde0a4]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?180?%;font-size:%?30?%;color:#303133}.content .row .address-box[data-v-b1bde0a4]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.content .row .input[data-v-b1bde0a4]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?30?%;color:#303133}.content .row .icon-shouhuodizhi[data-v-b1bde0a4]{font-size:%?36?%;color:#909399}.content .row uni-radio-group[data-v-b1bde0a4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content .row uni-radio-group .uni-list-cell[data-v-b1bde0a4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?30?%;margin-right:%?20?%}.content .row .uni-list[data-v-b1bde0a4]{font-size:%?30?%}.content .add-btn[data-v-b1bde0a4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:%?690?%;height:%?80?%;margin:%?60?% auto;font-size:%?32?%;color:#fff;background-color:#ff3600;border-radius:%?10?%;-webkit-box-shadow:1px 2px 5px rgba(219,63,96,.4);box-shadow:1px 2px 5px rgba(219,63,96,.4)}body.?%PAGE?%[data-v-b1bde0a4]{background:#f8f8f8}',""])}}]);