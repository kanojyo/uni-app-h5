(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-login"],{"0aec":function(t,e,n){"use strict";n.r(e);var i=n("67e7"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"0cf7":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"left-bottom-sign"}),n("v-uni-view",{staticClass:"back-btn yticon icon-zuojiantou-up",on:{click:function(e){e=t.$handleEvent(e),t.navBack(e)}}}),n("v-uni-view",{staticClass:"right-top-sign"}),n("v-uni-view",{staticClass:"wrapper"},[n("v-uni-view",{staticClass:"left-top-sign"},[t._v("LOGIN")]),n("v-uni-view",{staticClass:"welcome"},[t._v("欢迎回来！")]),n("v-uni-view",{staticClass:"input-content"},[n("v-uni-view",{staticClass:"login-way"},[n("v-uni-view",{staticClass:"left nav",class:{active:!t.loginWay},on:{click:function(e){e=t.$handleEvent(e),t.setLoginWay(0)}}},[t._v("账号密码登录")]),n("v-uni-view",{staticClass:"right nav",class:{active:t.loginWay},on:{click:function(e){e=t.$handleEvent(e),t.setLoginWay(1)}}},[t._v("短信验证码登录")])],1),0==t.loginWay?n("v-uni-view",{staticClass:"input-item"},[n("v-uni-text",{staticClass:"tit"},[t._v("账户")]),n("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入用户名/手机号码/邮箱",maxlength:"11","data-key":"input"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1):t._e(),0==t.loginWay?n("v-uni-view",{staticClass:"input-item"},[n("v-uni-text",{staticClass:"tit"},[t._v("密码")]),n("v-uni-input",{staticClass:"input",attrs:{type:"mobile",placeholder:"8-18位不含特殊字符的数字、字母组合","placeholder-class":"input-empty",maxlength:"20",password:"","data-key":"password"},on:{confirm:function(e){e=t.$handleEvent(e),t.toLogin(e)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1):t._e(),1==t.loginWay?n("v-uni-view",{staticClass:"input-item"},[n("v-uni-text",{staticClass:"tit"},[t._v("手机号")]),n("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入手机号码",maxlength:"11","data-key":"mobile"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1):t._e(),1==t.loginWay?n("v-uni-view",{staticClass:"input-item"},[n("v-uni-view",{staticClass:"verify-code-selection"},[n("v-uni-text",{staticClass:"tit"},[t._v("验证码")]),n("v-uni-text",{staticClass:"btn-get-code",on:{click:function(e){e=t.$handleEvent(e),t.getCode(e)}}},[t._v("获取验证码")])],1),n("v-uni-input",{staticClass:"input",attrs:{type:"number",value:"",placeholder:"请输入验证码","placeholder-class":"input-empty",maxlength:"8",password:"","data-key":"code"},on:{input:function(e){e=t.$handleEvent(e),t.inputChange(e)},confirm:function(e){e=t.$handleEvent(e),t.toLogin(e)}}})],1):t._e()],1),n("v-uni-button",{staticClass:"confirm-btn",attrs:{disabled:t.logining},on:{click:function(e){e=t.$handleEvent(e),t.toLogin(e)}}},[t._v("登录")]),n("v-uni-view",{staticClass:"third-party"},[n("v-uni-button",{staticClass:"btn",on:{click:function(e){e=t.$handleEvent(e),t.vendorLogin("WxH5")}}},[t._v("微信登录")])],1)],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"1c82":function(t,e,n){var i=n("ebc9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("8893c7aa",i,!0,{sourceMap:!1,shadowMode:!1})},"33fe":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("795b"));n("96cf");var o=i(n("3b8d")),r=i(n("d263"));i(n("476a"));function s(){this.appCode="wx_mp_appid",this.appCodeKey="xshop_wx_mp_appid",r.default.call(this)}s.prototype=r.default.prototype,s.prototype.constructor=s,s.prototype.isLogin=(0,o.default)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new a.default(function(t,e){wx.checkSession({success:function(){t(!0)},fail:function(){t(!1)}})}));case 1:case"end":return t.stop()}},t,this)})),s.prototype.getCode=(0,o.default)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new a.default(function(t,e){wx.login({success:function(n){n.code?t(n.code):e(n)}})}));case 1:case"end":return t.stop()}},t,this)})),s.prototype.getScope=function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new a.default(function(t,n){wx.getSetting({success:function(n){n.authSetting[e]?t():wx.authorize({scope:e,success:function(){t()},fail:function(e){t()}})}})}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),s.prototype.login2=(0,o.default)(regeneratorRuntime.mark(function t(){var e,n,i=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:{},n=this,t.abrupt("return",new a.default(function(t,i){wx.login({success:function(a){a.code&&(e.code=a.code,n.http.post("vendor.login2",e,{vendor:"WechatMp"}).then(function(e){t(e)}).catch(function(t){i(t)}))}})}));case 3:case"end":return t.stop()}},t,this)})),s.prototype.login=(0,o.default)(regeneratorRuntime.mark(function t(){var e,n=this,i=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:{},e.openid=uni.getStorageSync("openId"),t.abrupt("return",new a.default(function(t,i){n.http.post("vendor.login",e,{vendor:"WechatMp"}).then(function(e){t(e)}).catch(function(t){i(t)})}));case 3:case"end":return t.stop()}},t,this)}));var c=s;e.default=c},4757:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("33fe")),o=i(n("85cf")),r={services:{WechatMp:new a.default,App5:new o.default},init:function(t){return this.services[t]}};e.default=r},"67e7":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("3b8d")),o=i(n("cebc")),r=n("2f62"),s=i(n("4757")),c={data:function(){return{username:"",password:"",logining:!1,referer:null,loginWay:0,mobile:"",code:"",loginCode:""}},onLoad:function(t){this.referer=t.referer?t.referer:null,t.token&&(uni.setStorageSync("token",t.token),this.getUserinfo(),this.goReferer())},methods:(0,o.default)({},(0,r.mapActions)(["login","getCartProducts","getUserinfo"]),{inputChange:function(t){var e=t.currentTarget.dataset.key;this[e]=t.detail.value},setLoginWay:function(t){this.loginWay=t},getCode:function(){uni.showLoading({title:"短信发送中"}),this.$http.post("index.code.get",{mobile:this.mobile}).then(function(t){uni.hideLoading(),uni.showToast({title:"短信已发送"})})},navBack:function(){uni.navigateBack()},toRegist:function(){uni.navigateTo({url:"/pages/public/registe"})},toCenter:function(){uni.reLaunch({url:"/pages/user/user"})},toLogin:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(){var e,n,i,a,o,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.logining=!0,e={},0==this.loginWay?(n=this.username,i=this.password,e={username:n,password:i,loginWay:this.loginWay}):1==this.loginWay&&(a=this.mobile,o=this.code,e={mobile:a,code:o,loginWay:this.loginWay}),this.login(e).then(function(t){r.logining=!1,r.getCartProducts(),r.goReferer()}).catch(function(t){r.logining=!1});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),vendorLogin:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(e,n){var i,a,o,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:i=s.default.init(e),t.t0=e,t.next="WxH5"===t.t0?4:"WechatMp"===t.t0?8:"App5"===t.t0?15:17;break;case 4:return a="/addons/xshop/vendor/getAuthUrl?vendor=WxH5",this.referer&&(a+="&payload[referer]="+encodeURIComponent(this.referer)),window.location.href=a,t.abrupt("break",17);case 8:return t.next=10,i.login(n);case 10:return o=t.sent,uni.setStorageSync("token",o.data.token),this.getUserinfo(),this.goReferer(),t.abrupt("break",17);case 15:return i.login(n,function(t){uni.setStorageSync("token",t.data.token),r.getUserinfo(),r.goReferer()},function(t){}),t.abrupt("break",17);case 17:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),goReferer:function(){this.referer?uni.reLaunch({url:decodeURIComponent(this.referer),fail:this.toCenter()}):this.toCenter()},onGotUserInfo:function(t){var e=t.detail,n={encryptedData:e.encryptedData,iv:e.iv,rawData:e.iv};this.vendorLogin("WechatMp",n)}})};e.default=c},"85cf":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("d263"));i(n("476a"));function o(){this.appCode="app_appId",this.appCodeKey="xshop_app_appid",a.default.call(this)}var r=o;e.default=r},c8f7:function(t,e,n){"use strict";var i=n("1c82"),a=n.n(i);a.a},d263:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("3b8d")),o=i(n("1acc"));function r(){this.http=o.default,this.getAppId=(0,a.default)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=uni.getStorageSync("appId"),e){t.next=7;break}return t.next=4,o.default.post("index.config",{code:[this.appCode]});case 4:n=t.sent,e=n.data[this.appCodeKey],uni.setStorageSync("appId",e);case 7:return t.abrupt("return",e);case 8:case"end":return t.stop()}},t,this)}))}var s=r;e.default=s},ebc9:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-50df77e3]{background:#fff}.container[data-v-50df77e3]{position:relative;width:100vw;height:100vh;overflow:hidden;background:#fff}.wrapper[data-v-50df77e3]{position:relative;z-index:90;background:#fff;padding-bottom:%?40?%}.back-btn[data-v-50df77e3]{position:absolute;left:%?40?%;z-index:9999;padding-top:0;top:%?40?%;font-size:%?40?%;color:#303133}.left-top-sign[data-v-50df77e3]{font-size:%?120?%;color:#f8f8f8;position:relative;left:%?-16?%}.right-top-sign[data-v-50df77e3]{position:absolute;top:%?80?%;right:%?-30?%;z-index:95}.right-top-sign[data-v-50df77e3]:after,.right-top-sign[data-v-50df77e3]:before{display:block;content:"";width:%?400?%;height:%?80?%;background:#b4f3e2}.right-top-sign[data-v-50df77e3]:before{-webkit-transform:rotate(50deg);-ms-transform:rotate(50deg);transform:rotate(50deg);border-radius:0 50px 0 0}.right-top-sign[data-v-50df77e3]:after{position:absolute;right:%?-198?%;top:0;-webkit-transform:rotate(-50deg);-ms-transform:rotate(-50deg);transform:rotate(-50deg);border-radius:50px 0 0 0\n    /* background: pink; */}.left-bottom-sign[data-v-50df77e3]{position:absolute;left:%?-270?%;bottom:%?-320?%;border:%?100?% solid #d0d1fd;border-radius:50%;padding:%?180?%}.welcome[data-v-50df77e3]{position:relative;left:%?50?%;top:%?50?%;font-size:%?46?%;color:#555;text-shadow:1px 0 1px rgba(0,0,0,.3)}.input-content[data-v-50df77e3]{padding:%?60?% %?60?% 0 %?60?%}.input-item[data-v-50df77e3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 %?30?%;background:#f8f6fc;height:%?120?%;border-radius:4px;margin-bottom:%?50?%}.input-item[data-v-50df77e3]:last-child{margin-bottom:0}.input-item .tit[data-v-50df77e3]{height:%?50?%;line-height:%?56?%;font-size:%?26?%;color:#606266}.input-iteminput[data-v-50df77e3]{height:%?60?%;font-size:%?30?%;background:#f8f6fc;color:#303133;width:100%}.input-item .input[data-v-50df77e3]{width:100%}.confirm-btn[data-v-50df77e3]{height:%?76?%;line-height:%?76?%;border-radius:50px;margin-top:%?70?%;background:#fa436a;color:#fff;font-size:%?32?%}.confirm-btn[data-v-50df77e3]:after{border-radius:100px}.forget-section[data-v-50df77e3]{font-size:%?26?%;color:#4399fc;text-align:center;margin-top:%?40?%}.register-section[data-v-50df77e3]{position:absolute;left:0;bottom:%?50?%;width:100%;font-size:%?26?%;color:#606266;text-align:center}.register-section uni-text[data-v-50df77e3]{color:#4399fc;margin-left:%?10?%}.login-way[data-v-50df77e3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:%?28?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:%?10?%}.login-way .left[data-v-50df77e3],.login-way .right[data-v-50df77e3]{margin:%?10?%}.login-way .nav[data-v-50df77e3]{padding:%?14?% %?20?%;border-radius:%?40?%;border:1px solid #ccc;color:#ccc}.login-way .active[data-v-50df77e3]{border:1px solid #ff4500;color:#ff4500}.verify-code-selection[data-v-50df77e3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%}.verify-code-selection .btn-get-code[data-v-50df77e3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?28?%;border:%?2?% solid #ff4500;color:#ff4500;border-radius:%?44?%;padding:%?4?% %?20?%}.third-party[data-v-50df77e3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:%?20?%}.third-party .btn[data-v-50df77e3]{font-size:%?28?%;height:%?80?%;line-height:%?80?%}.third-party uni-button[data-v-50df77e3],.third-party uni-button[data-v-50df77e3]:hover{background:#fff;color:#222;border:none}.third-party uni-button[data-v-50df77e3]:after{border:none}body.?%PAGE?%[data-v-50df77e3]{background:#fff}',""])},f61a:function(t,e,n){"use strict";n.r(e);var i=n("0cf7"),a=n("0aec");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("c8f7");var r=n("2877"),s=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"50df77e3",null);e["default"]=s.exports}}]);