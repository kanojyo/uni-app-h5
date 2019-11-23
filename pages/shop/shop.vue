<template>
	<view >
		<uni-nav-bar left-icon="arrowleft" title="我的店铺" background-color="#fff" @clickLeft="back"/>
		<view class="content">
			<view class="shop-has" v-if="shopData">
				<view class="pass" v-if="shopData.status ==2">
					<view class="shopInfo">
						<image class="avatar" :src="shopData.avatar" mode=""></image>
						<view class="info">
							<text>{{shopData.shop_name}}</text>
							<text>{{shopData.address}}</text>
						</view>
						<view class="changeShop" @click="exchage">切换店铺</view>
						<view class="income" @click="toIncome">我的收益</view>
						<view class="qrcode">
							<image :src="'/static/u2312.png'" mode="" @click="toQrcode"></image>
						</view>
					</view>
					<view class="tab">
						<view class="navbar">
							<view 
								v-for="(item, index) in navList" :key="index" 
								class="nav-item" 
								:class="{current: tabCurrentIndex === index}"
								@click="tabClick(index)"
							>
								{{item.text}}
							</view>
						</view>
					
						<swiper :current="tabCurrentIndex" class="swiper-box" :style="{height: swiperHeight}" duration="300" @change="changeTab">
							<swiper-item class="tab-content" v-for="(tabItem,tabIndex) in navList" :key="tabIndex">
								<scroll-view 
									class="list-scroll-content" 
									scroll-y
									@scrolltolower="loadData"
								>
									<!-- 空白页 -->
									<empty v-if="tabItem.loaded === true && tabItem.orderList.length === 0"></empty>
									
									<!-- 订单列表 -->
									<view v-for="(item,index) in tabItem.orderList" :key="index"
										class="order-item">
									</view>
									 
									<uni-load-more :status="tabItem.loadingType"></uni-load-more>
									
								</scroll-view>
							</swiper-item>
						</swiper>
						<!-- <after-sale-box @callback="handleOrderRefund" :value="refund_order_sn" ref="$afterSaleBox" type="center"></after-sale-box> -->
					</view>
				</view>
				<view class="check" v-else>
					<view class="shopInfo">
						<image class="avatar" :src="shopData.avatar" mode=""></image>
						<view class="info">
							<text>{{shopData.shop_name}}</text>
							<text>{{shopData.address}}</text>
						</view>
					</view>
					<view class="timeInfo">
						<text>服务单号：{{shopData.service_code}}</text>
						<text>申请时间：{{shopData.createtime}}</text>
					</view>
					<view class="checkInfo">
						<view class="title">
							<text v-if="shopData.status == 1">审核进度：您的入驻申请正在审核中，请您注意查看</text>
							<text v-if="shopData.status == 3">审核进度：您的入驻申请<text style="color:#ff3600;" @click="reason">审核不通过</text>，请您注意查看</text>
						</view>
						<uni-steps :options="stepList" active-color="#333" :active="stepActive"  />
					</view>
				</view>
			</view>
			<view class="shop-no" v-else>
				<view class="image">
					<image :src="'/static/shopNone.png'" mode="widthFix"></image>
					<text>暂无入驻店铺</text>
				</view>
				<button class="add-btn" @click="goAplly">我要入驻</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	// import afterSaleBox from './child/afterSaleBox'
	import empty from "@/components/empty";
	export default {
		components: {
			uniIcons,
			uniNavBar,
			uniSteps,
			uniLoadMore,
			empty,
			// afterSaleBox,
		},
		data(){
			return{
				hasData:0,
				shopData:[],
				stepActive: 0,
				stepList: [{
					title: '提交申请',
					desc: ''
				}, {
					title: '申请中',
					desc: ''
				}, {
					title: '处理完成',
					desc: ''
				}],
				 tabCurrentIndex: 0,
				 navList: [{
				 		index:0,
				 		text: '我的用户',
				 		loadingType: 'more',
				 		orderList: [],
				 		reload: true,
				 		page: 1
				 	},
				 	{
				 		index:1,
				 		text: '消费记录',
				 		loadingType: 'more',
				 		orderList: [],
				 		reload: true,
				 		page: 1
				 	}
				 ],
				 swiperHeight: '',
				 refund_order_sn: '',
				 ShopUserList:{
					 shop_id:'',
					 page:1
				 }
			}
		},
		onLoad(){
			this.init()
			let info = uni.getSystemInfoSync()
			this.swiperHeight = info.windowHeight - 227 + 'px';
		},
		computed: {
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			init(){
				return Promise.all([this.getShopInfo()]);
			},
			getShopInfo(){
				this.$http.get('shop.shopInfo').then(res => {
					console.log(res.data)
					this.shopData = res.data;
					this.stepList[0].desc = this.shopData.createtime;
					this.stepList[1].desc = this.shopData.createtime;
					this.stepList[2].desc = this.shopData.updatetime;
					if(this.shopData.status == 1){
						this.stepActive =1;
					}else{
						this.stepActive =2;
					}
				})
			},
			goAplly(){
				uni.navigateTo({
					url: '/pages/shop/shopApply'
				})
			},
			reason(){
				let reject = this.shopData.reject_reason;
				uni.showModal({
				    title: '驳回原因',
				    content: reject,
					showCancel:false,
					confirmText:'知道了',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } 
				    }
				});
			},
			//swiper 切换
			changeTab(e){
				this.tabCurrentIndex = e.target.current || e.detail.current;
				// this.loadData('tabChange');
			},
			//顶部tab点击
			tabClick(index){
				this.tabCurrentIndex = index;
				// this.loadData('tabChange')
			},
			//加载页面数据
			loadData(source){
				//这里是将订单挂载到tab列表下
				let index = this.tabCurrentIndex;
				let navItem = this.navList[index];
				if(source === 'tabChange' && navItem.loaded === true && navItem.reload == false){
					//tab切换只有第一次需要加载数据
					return;
				}
				if(navItem.loadingType === 'loading'){
					//防止重复加载
					return;
				}
				if (navItem.reload == true) navItem.orderList = []
				navItem.loadingType = 'loading';
			},
			getUserList(){
				this.$http.get('vip.shopUserList',{shop_id})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #fff;
		font-size:$font-base;
	}
	.content{
		background: $page-color-base;
		.shop-has{
			.pass{
				.shopInfo{
					position:relative;
					padding:100upx 30upx 40upx 30upx;
					background:$border-color-dark;
					display:flex;
					.avatar{
						width:120upx;
						height:120upx;
						border-radius:50%;
					}
					.info{
						margin-left:20upx;
						display:flex;
						flex-direction:column;
						text{
							font-size:$font-lg;
							padding:10upx 0;
						}
						text+text{
							font-size:$font-sm;
						}
					}
					.changeShop{
						position:absolute;
						background:$border-color-light;
						left:0;
						top:20upx;
						padding:10upx 20upx;
						border-top-right-radius:30upx;
						border-bottom-right-radius:30upx;
					}
					.income{
						position:absolute;
						background:$border-color-light;
						right:0;
						top:20upx;
						padding:10upx 20upx;
						border-top-left-radius:30upx;
						border-bottom-left-radius:30upx;
					}
					.qrcode{
						position:absolute;
						right:40upx;
						top:100upx;
						image{
							width:60upx;
							height:60upx;
						}
					}
				}
				.tab{
					.navbar{
						display: flex;
						height: 40px;
						padding: 0 5px;
						background: #fff;
						box-shadow: 0 1px 5px rgba(0,0,0,.06);
						position: relative;
						z-index: 10;
						.nav-item{
							flex: 1;
							display: flex;
							justify-content: center;
							align-items: center;
							height: 100%;
							font-size: 15px;
							color: $font-color-dark;
							position: relative;
							&.current{
								color: $base-color;
								&:after{
									content: '';
									position: absolute;
									left: 50%;
									bottom: 0;
									transform: translateX(-50%);
									width: 44px;
									height: 0;
									border-bottom: 2px solid $base-color;
								}
							}
						}
					}
					.swiper-box{
						/* #ifndef MP-ALIPAY */
						// height: calc(100% - 40px);
						/* #endif */
					}
				}
			}
			.check{
				.shopInfo{
					padding:100upx 30upx 40upx 30upx;
					background:$border-color-dark;
					display:flex;
					.avatar{
						width:120upx;
						height:120upx;
						border-radius:50%;
					}
					.info{
						margin-left:20upx;
						display:flex;
						flex-direction:column;
						text{
							font-size:$font-lg;
							padding:10upx 0;
						}
						text+text{
							font-size:$font-sm;
						}
					}
				}
				.timeInfo{
					background:#fff;
					margin-top:20upx;
					padding:30upx 30upx;
					display:flex;
					flex-direction:column;
					text{
						padding:10upx 0;
						font-size:$font-base;
						color:$z-color-666;
					}
				}
				.checkInfo{
					background:#fff;
					margin-top:20upx;
					.title{
						padding:20upx 30upx;
						margin-bottom:40upx;
						border-bottom:2upx solid $border-color-light;
						font-size:$font-sm;
						color:$z-color-666;
					}
				}
			}
		}
		.shop-no{
			.image{
				display:flex;
				flex-direction:column;
				justify-content:center;
				align-items:center;
				padding-top:250upx;
				padding-bottom:40upx;
				image{
					width:240upx;
				}
			}
			.add-btn{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 690upx;
				height: 80upx;
				margin: 60upx auto;
				font-size: $font-lg;
				color: #fff;
				background-color: $base-color;
				border-radius: 10upx;
				box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
			}
		}
	}
	.uni-swiper-item{
		height: auto;
	}
	.order-item{
		
	}
</style>
