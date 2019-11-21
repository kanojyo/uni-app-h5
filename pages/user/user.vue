<template>  
    <view class="container">  
		
		<view class="user-section">
			<image class="bg" src="/static/user-bg.jpg"></image>
			<view class="user-info-box">
				<view class="portrait-box">
					<!-- #ifdef H5 -->
					<img class="portrait" :src="userinfo.avatar || '/static/missing-face.png'"  @click="navTo('/pages/userinfo/userinfo')"/>
					<!-- #endif -->
					<!-- #ifndef H5 -->
					<image class="portrait" :src="userinfo.avatar || '/static/missing-face.png'"></image>
					<!-- #endif -->
					
				</view>
				<view class="info-box">
					<text class="username" v-if="userinfo.id">{{userinfo.nickname}}</text>
					<text class="username" v-else @click="toLogin">登录</text>
				</view>
			</view>
			<view class="vip-card-box">
				<image class="card-bg" src="/static/vip-card-bg.png" mode=""></image>
				<view class="b-btn" v-if="!userinfo.id" @click="toLogin">
					立即登录
				</view>
				<view class="tit">
					<text class="yticon icon-iLinkapp-"></text>
					Vip会员
				</view>
				<!-- <text class="e-m">加入XShop</text>
				<text class="e-b">优惠多多</text> -->
			</view>
		</view>
		
		<view 
			class="cover-container"
			:style="[{
				transform: coverTransform,
				transition: coverTransition
			}]"
			@touchstart="coverTouchstart"
			@touchmove="coverTouchmove"
			@touchend="coverTouchend"
		>
			<image class="arc" src="/static/arc.png"></image>
			
			<view class="order-section">
				<view class="order-item" @click="navTo('/pages/order/order?state=0')" hover-class="common-hover"  :hover-stay-time="50">
					<view class="yticon icon-shouye">
						<uni-badge text="" type="primary"></uni-badge>
					</view>
					<text>全部订单</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=1')"  hover-class="common-hover" :hover-stay-time="50">
					<view class="yticon icon-daifukuan">
						<uni-badge :text="orderNum.no_pay_num>99?'99+':orderNum.no_pay_num" type="primary"></uni-badge>
					</view>
					<text>待付款</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=2')" hover-class="common-hover"  :hover-stay-time="50">
					<view class="yticon icon-yishouhuo">
						<uni-badge :text="orderNum.no_send_num>99?'99+':orderNum.no_send_num" type="primary"></uni-badge>
					</view>
					<text>待收货</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=5')" hover-class="common-hover"  :hover-stay-time="50">
					<view class="yticon icon-pingjia">
						<uni-badge :text="orderNum.no_receive_num>99?'99+':orderNum.no_receive_num" type="primary"></uni-badge>
					</view>
					<text>待发货</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=6')" hover-class="common-hover"  :hover-stay-time="50">
					<view class="yticon icon-pingjia">
						<uni-badge :text="orderNum.over_num>99?'99+':orderNum.over_num" type="primary"></uni-badge>
					</view>
					<text>已完成</text>
				</view>
			</view>
			<!-- 浏览历史 -->
			<view class="history-section icon">
				<view class="sec-header" v-if="viewList.length">
					<text class="yticon icon-lishijilu"></text>
					<text>足迹</text>
				</view>
				<scroll-view scroll-x class="h-list" v-if="viewList.length">
					<image v-for="(item, index) in viewList" v-if="item.product"
						:key="index" @click="navTo('/pages/product/product?id=' + item.product.id)" 
						:src="item.product.image[0]"></image>
				</scroll-view>
				<list-cell icon="icon-iconfontweixin" iconColor="#5fcda2" title="我的优惠券" v-if="$tools.has_addon('xshopcoupon')" @eventClick="navPlugin('xshopcoupon', '/pages/user/coupon')"></list-cell>
				<list-cell icon="icon-dizhi" iconColor="#5fcda2" title="我的会员" @eventClick="navTo('/pages/member/member')"></list-cell>
				<list-cell icon="icon-dizhi" iconColor="#5fcda2" title="地址管理" @eventClick="navTo('/pages/address/address')"></list-cell>
				<list-cell icon="icon-shoucang_xuanzhongzhuangtai" iconColor="#54b4ef" title="我的收藏" @eventClick="navTo('/pages/user/favorite')"></list-cell>
				<list-cell icon="icon-shezhi" iconColor="#e07472" title="设置" @eventClick="navTo('/pages/set/set')"></list-cell>
				<list-cell icon="icon-shezhi1" iconColor="#e07472" title="意见反馈" @eventClick="navTo('/pages/feedback/feedback')"></list-cell>
				<list-cell icon="icon-shezhi1" iconColor="#e07472" title="关于我们" @eventClick="navTo('/pages/set/set')"></list-cell>
				<list-cell icon="icon-shezhi1" iconColor="#e07472" title="当前版本" v-if="appVersion" :tips="appVersion" @eventClick="checkVersion"></list-cell>

				<view class="list-cell log-out-btn" v-if="userinfo.id" @click="toLogout">
					<text class="cell-tit">退出登录</text>
				</view>
			</view>
			
			<view class="bq-selection">
				<view class="">
					Copyright@2019-{{(new Date().Format('yyyy'))}}	
				</view>
				<view class="">
					版权所有
				</view>
				
				
			</view>
		</view>
			
		
    </view>  
</template>  
<script>  
	import listCell from '@/components/mix-list-cell';
	import {uniBadge} from '@dcloudio/uni-ui'
    import {  
        mapState, mapActions
    } from 'vuex';  
	let startY = 0, moveY = 0, pageAtTop = true;
    export default {
		components: {
			listCell,
			uniBadge
		},
		data(){
			return {
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
				viewList: [],
				appVersion: 0,
				orderNum:{},
			}
		},
		onLoad(){
			this.init()
			// #ifdef APP-PLUS
			plus.runtime.getProperty(plus.runtime.appid, (wgtInfo) => {
				this.appVersion = wgtInfo.version
			})
			// #endif
		},
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.navTo('/pages/set/set');
			}else if(index === 1){
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		},
		// #endif
        computed: {
			...mapState({
				userinfo: state => state.user.userinfo
			}),
			hasLogin() {
				return this.userinfo.id ? true : false
			}
		},
        methods: {
			...mapActions(['logout']),
			init(){
				return new Promise ((resolve, reject) => {
					Promise.all([this.getViewList(),this.getOrderNum()]).then(res => {
						resolve(res)
					}).catch(e => { reject(e) })
				})
			},
			getViewList() {
				this.$http.post('user.viewlist').then(res => {
					this.viewList = res.data.data
				})
			},
			getOrderNum(){
				this.$http.get('user.orderNum').then(res => {
					this.orderNum = res.data
					if(this.orderNum.no_pay_num ==0){
						this.orderNum.no_pay_num ='';
					}
					if(this.orderNum.no_receive_num ==0){
						this.orderNum.no_receive_num ='';
					}
					if(this.orderNum.no_send_num ==0){
						this.orderNum.no_send_num ='';
					}
					if(this.orderNum.over_num ==0){
						this.orderNum.over_num ='';
					}
					
				})
			},
			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url){
				if(!this.userinfo.id){
					url = '/pages/public/login';
				}
				uni.navigateTo({  
					url
				})  
			}, 
			navPlugin(addon, url) {
				if (this.$tools.has_addon(addon)) this.navTo(url)
			},
			/**
			 *  会员卡下拉和回弹
			 *  1.关闭bounce避免ios端下拉冲突
			 *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
			 *    transition设置0.1秒延迟，让css来过渡这段空窗期
			 *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
			 */
			coverTouchstart(e){
				/* if(pageAtTop === false){
					return;
				}
				this.coverTransition = 'transform .1s linear';
				startY = e.touches[0].clientY; */
			},
			coverTouchmove(e){
				/* moveY = e.touches[0].clientY;
				let moveDistance = moveY - startY;
				if(moveDistance < 0){
					this.moving = false;
					return;
				}
				this.moving = true;
				if(moveDistance >= 80 && moveDistance < 100){
					moveDistance = 80;
				}
		
				if(moveDistance > 0 && moveDistance <= 80){
					this.coverTransform = `translateY(${moveDistance}px)`;
				} */
			},
			coverTouchend(){
				if(this.moving === false){
					return;
				}
				this.moving = false;
				this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
				this.coverTransform = 'translateY(0px)';
			},
			toLogout(){
				uni.showModal({
				    content: '确定要退出登录么',
				    success: (e)=>{
				    	if(e.confirm){
				    		this.logout().then(() => {
								this.viewList = []
								uni.navigateBack()
							})
				    	}
				    }
				});
			},
			toLogin() {
				uni.navigateTo({
					url: '/pages/public/login'
				})
			},
			checkVersion() {
				let _this = this
				plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
					let platform = uni.getSystemInfoSync().platform
					_this.$http.post('update', {version: widgetInfo.version, name: widgetInfo.name, platform}).then(res => {
						var data = res.data
						if (data.update == 1) {
							uni.showModal({
								title: '检测到更新，是否下载？',
								content: data.description,
								confirmText: '确定',
								confirmColor: '#FF4443',
								cancelText: "取消",
								cancelColor: '#A9A9A9', 
								success: e => {
									if (e.confirm) {
										uni.showLoading({
											icon: 'none'
										})
										uni.downloadFile({
											url: data.wgtUrl,
											success: function(downloadResult) {
												if (downloadResult.statusCode == 200) {
													plus.runtime.install(downloadResult.tempFilePath, {
														force: false
													}, function() {
														uni.hideLoading()
														plus.runtime.restart()
													}, function(e) {
														uni.hideLoading()
														uni.showModal({
															title: '提示',
															content: e.message
														})
													})
												}
											}
										})
										
									}
								}
							})
						} else {
							uni.showToast({
								title: "当前是最新版本"
							})
						}
					}).catch(e => {})
				});
			},
		},
		onShow() {
			this.getViewList()
		},
		onPullDownRefresh() {
			this.init().then(e => {
				uni.stopPullDownRefresh()
			}).catch(e => {
				uni.stopPullDownRefresh()
			})
		}
    }  
</script>  
<style lang='scss'>
	
	%flex-center {
	 display:flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
	}
	%section {
	  display:flex;
	  justify-content: space-around;
	  align-content: center;
	  background: #fff;
	  border-radius: 10upx;
	}
	.list-cell {
		display:flex;
		align-items:baseline;
		padding: 20upx $page-row-spacing;
		line-height:60upx;
		position:relative;
		background: #fff;
		justify-content: center;
		&.log-out-btn{
			margin-top: 40upx;
			.cell-tit{
				color: $uni-color-primary;
				text-align: center;
				margin-right: 0;
				font-size: $font-base + 6upx;
			}
		}
	}
	.user-section{
		height: 520upx;
		padding: 100upx 30upx 0;
		position:relative;
		.bg{
			position:absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			filter: blur(1px);
			opacity: .7;
		}
	}
	.user-info-box{
		height: 180upx;
		display:flex;
		align-items:center;
		position:relative;
		z-index: 1;
		.portrait{
			width: 130upx;
			height: 130upx;
			border:5upx solid #fff;
			border-radius: 50%;
		}
		.username{
			font-size: $font-lg + 6upx;
			color: $font-color-dark;
			margin-left: 20upx;
		}
	}

	.vip-card-box{
		display:flex;
		flex-direction: column;
		color: #f7d680;
		height: 240upx;
		background: linear-gradient(left, rgba(0,0,0,.7), rgba(0,0,0,.8));
		border-radius: 16upx 16upx 0 0;
		overflow: hidden;
		position: relative;
		padding: 20upx 24upx;
		.card-bg{
			position:absolute;
			top: 20upx;
			right: 0;
			width: 380upx;
			height: 260upx;
		}
		.b-btn{
			position: absolute;
			right: 20upx;
			top: 16upx;
			width: 132upx;
			height: 40upx;
			text-align: center;
			line-height: 40upx;
			font-size: 22upx;
			color: #36343c;
			border-radius: 20px;
			background: linear-gradient(left, #f9e6af, #ffd465);
			z-index: 1;
		}
		.tit{
			font-size: $font-base+2upx;
			color: #f7d680;
			margin-bottom: 28upx;
			.yticon{
				color: #f6e5a3;
				margin-right: 16upx;
			}
		}
		.e-b{
			font-size: $font-sm;
			color: #d8cba9;
			margin-top: 10upx;
		}
	}
	.cover-container{
		background: $page-color-base;
		margin-top: -150upx;
		padding: 0 30upx;
		position:relative;
		background: #f5f5f5;
		padding-bottom: 20upx;
		.arc{
			position:absolute;
			left: 0;
			top: -34upx;
			width: 100%;
			height: 36upx;
		}
	}
	.tj-sction{
		@extend %section;
		.tj-item{
			@extend %flex-center;
			flex-direction: column;
			height: 140upx;
			font-size: $font-sm;
			color: #75787d;
		}
		.num{
			font-size: $font-lg;
			color: $font-color-dark;
			margin-bottom: 8upx;
		}
	}
	.order-section{
		@extend %section;
		padding: 28upx 0;
		margin-top: 20upx;
		.order-item{
			@extend %flex-center;
			width: 120upx;
			height: 120upx;
			border-radius: 10upx;
			font-size: $font-sm;
			color: $font-color-dark;
		}
		.yticon{
			font-size: 48upx;
			margin-bottom: 18upx;
			color: #fa436a;
			position:relative;
			.uni-badge{
				position:absolute;
				right:-20upx;
				top:-24upx;
			}
		}
		.icon-shouhoutuikuan{
			font-size:44upx;
		}
	}
	.history-section{
		padding: 30upx 0 0;
		margin-top: 20upx;
		background: #fff;
		border-radius:10upx;
		.sec-header{
			display:flex;
			align-items: center;
			font-size: $font-base;
			color: $font-color-dark;
			line-height: 40upx;
			margin-left: 30upx;
			.yticon{
				font-size: 44upx;
				color: #5eba8f;
				margin-right: 16upx;
				line-height: 40upx;
			}
		}
		.h-list{
			white-space: nowrap;
			padding: 30upx 30upx 0;
			image{
				display:inline-block;
				width: 160upx;
				height: 160upx;
				margin-right: 20upx;
				border-radius: 10upx;
			}
		}
	}
	.bq-selection {
	    padding: 15px 0 0;
		margin-top: 10px;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #888;
		font-size: $font-base;
	}
</style>