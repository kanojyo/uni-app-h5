<template>
	<view >
		<uni-nav-bar left-icon="arrowleft" title="我的店铺" background-color="#fff" @clickLeft="back"/>
		<view class="content">
			<view class="shop-has" v-if="shopData">
				<view class="pass" v-if="shopData.status ==2"></view>
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
							<text>审核进度：您的入驻申请正在审核中，请您注意查看</text>
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
	export default {
		components: {
			uniIcons,
			uniNavBar,
			uniSteps
		},
		data(){
			return{
				hasData:0,
				shopData:[],
				stepActive: 0,
				stepList: [{
					title: '提交申请',
					desc: '2018-11-11'
				}, {
					title: '申请中',
					desc: '2018-11-12'
				}, {
					title: '处理完成',
					desc: ''
				}]
			}
		},
		onLoad(){
			this.init()
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
				return Promise.all([this.getShopInfo()])
			},
			getShopInfo(){
				this.$http.get('shop.shopInfo').then(res => {
					console.log(res.data)
					this.shopData = res.data;
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
			.pass{}
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
</style>
