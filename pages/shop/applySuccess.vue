<template>
	<view >
		<uni-nav-bar  title="提交成功" background-color="#fff"  right-text="完成" @clickRight="wanchen"/>
		<view class="content">
			<view class="main">
				<view class="image">
					<image :src="'/static/success.png'" ></image>
					<text>入驻申请提交成功</text>
				</view>
				<view class="text">
					<text @click="toProcess">查看进度</text>
					<text @click="toApply">再次入驻</text>
				</view>
			</view>
			<view class="tip">
				<text class="tip-title">温馨提示：</text>
				<view class="tip-content">
					<text>商家入驻申请将在审核进度中查询。</text>
					<text>提交入驻申请后，零元领吧可能与您电话沟通，请保持手机畅通。</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniIcons,
			uniNavBar,
		},
		data(){
			return {
				
			}
		},
		onLoad(){
			this.init();;
		},
		methods:{
			// back() {
			// 	uni.navigateBack({
			// 		delta: 1
			// 	})
			// },
			init(){
				
			},
			//查看进度
			toProcess(){
				uni.navigateTo({
					// url: '/pages/webview/shopApply'
				})
			},
			//再次入驻
			toApply(){
				uni.navigateTo({
					url: '/pages/shop/shopApply'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: $page-color-base;
		font-size:$font-sm+4upx;
	}
	.content{
		border-top:2upx solid $border-color-light;
		.main{
			background:#fff;
			padding:40upx 0;
			.image{
				display:flex;
				flex-direction:column;
				justify-content:center;
				align-items:center;
				padding:80upx 0 30upx 0;
				image{
					width:240upx;
					height:250upx;
				}
				text{
					margin-top:20upx;
					color:$z-color-666;
					font-size:$font-lg;
				}
			}
			.text{
				margin-top:40upx;
				display:flex;
				justify-content:space-around;
				text{
					width:260upx;
					padding:10upx 0;
					text-align:center;
					color:$z-color-666;
					border:2upx solid $border-color-dark;
				}
			}
		}
		.tip{
			margin-top:40upx;
			color:$z-color-999;
			padding:0 30upx;
			font-size:$font-sm;
			.tip-title{
				display:flex;
				margin-bottom:20upx;
				position:relative;
				padding-left:40upx;
				&:before{
					content:'!';
					position:absolute;
					font-size:$font-sm;
					line-height:30upx;
					width:30upx;
					height:30upx;
					border-radius:50%;
					background:$z-color-999;
					text-align:center;
					color:#fff;
					left:0;
					top:0;
				}
			}
			.tip-content{
				display:flex;
				flex-direction:column;
				text{
					padding:10upx 0 10upx 20upx;
					position:relative;
					&:before{
						content:'';
						position:absolute;
						height:10upx;
						width:10upx;
						border-radius:50%;
						background:$z-color-999;
						left:0;
						top:20upx;
					}
				}
			}
		}
	}
</style>
