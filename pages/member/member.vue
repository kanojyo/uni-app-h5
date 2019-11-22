<template>
	<view>
		<view class="user-section">
			<!-- <image class="bg" src="/static/user-bg.jpg"></image> -->
			<view class="portrait-box">
				<image class="portrait" :src="'/static/score.png'"></image>
			</view>
			<view class="text">
				<text>当前会员积分</text>
				<text>{{score.user_score}}</text>
			</view>
			<view class="rule" @click="toRule">?</view>
			<view class="record" @click="toRecord">积分记录</view>
		</view>
		<view class="score">
			<view class="get">
				<text>累计获得</text>
				<text>{{score.score_in}}</text>
			</view>
			<view class="use">
				<text>累计使用</text>
				<text>{{score.score_out}}</text>
			</view>
		</view>
		<view class="card">
			<view class="title">会员卡</view>
			<view class="card-has" v-if="length">
				<view class="card-list" v-for="(item,index) in shopList" :key="index">
					<view class="card-header">
						<view class="card-img">
							<image :src="item.avatar" ></image>
						</view>
						<text>晨光</text>
					</view>
					<view class="card-main">
						<view class="card-content">
							<view class="card-t">
								<text>会员卡</text>
								<text>余额：{{item.money}}</text>
							</view>
							<view class="card-m">
								<text>{{item.shop_name}}</text>
								<text>仅限店内使用</text>
							</view>
							<view class="card-b">
								<text>卡号：{{item.vip_code}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="card-no" v-else>
				<view class="info">
					<view class="img-content">
						<image :src="'/static/u1669.png'" mode="widthFix"></image>
						<view class="text">暂无会员卡包</view>
					</view>
					
					<button class="add-btn" @click="confirm">成为会员</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				score:[],
				shopList:[],
				length:'',
			}
		},
		onLoad(option){
			this.init();
		},
		methods:{
			init(){
				return Promise.all([this.getVipInfo(),this.getCardList()])
			},
			getVipInfo(){
				this.$http.get('vip.info').then(res =>{
					if(res.code ==1){
						console.log(res.data)
						this.score = res.data;
					}
				})
			},
			getCardList(){
				this.$http.get('vip.cardList').then(res =>{
					if(res.code ==1){
						// this.shopList = res.data.data;
						this.shopList=[];
						this.length = this.shopList.length;
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: $page-color-base;
		font-size:$font-base;
	}
	.user-section{
		display:flex;
		flex-direction:column;
		align-items:center;
		justify-content: center;
		height: 400upx;
		padding: 40upx 30upx 0;
		position:relative;
		background:#ccc;
		.bg{
			position:absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			filter: blur(1px);
			opacity: .7;
		}
		.portrait-box{
			width: 140upx;
			height: 140upx;
			// border:6upx solid #fff;
			border-radius: 50%;
			position:relative;
			z-index: 2;
		}
		.portrait{
			position: relative;
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
		.text{
			display:flex;
			flex-direction:column;
			justify-content: center;
			align-items:center;
			color:$z-color-red;
			margin-top:20upx;
			text{
				font-size:$font-sm+4upx;
			}
			text+text{
				font-size:30px;
				font-weight:bold;
			}
		}
		.record{
			position:absolute;
			right:20upx;
			top:20upx;
			font-size:$font-sm;
			color:$z-color-666;
		}
		.rule{
			position:absolute;
			left:20upx;
			top:20upx;
			width:36upx;
			height:36upx;
			border-radius:50%;
			text-align:center;
			border:2upx solid $z-color-666;
			font-size:$font-sm;
			color:$z-color-666;
		}
	}
	.score{
		display:flex;
		align-items:center;
		border-top:2upx solid $border-color-light;
		border-bottom:2upx solid $border-color-light;
		background:#fff;
		.get{
			padding:20upx 0;
			display:flex;
			flex:1;
			text-align:center;
			flex-direction:column;
			text{
				color:$z-color-666;
			}
			text+text{
				color:$z-color-red;
				font-size:$font-lg;
				font-weight:bold;
			}
		}
		.use{
			padding:20upx 0;
			display:flex;
			flex:1;
			flex-direction:column;
			text-align:center;
			border-left:2upx solid $border-color-light;
			text{
				color:$z-color-666;
			}
			text+text{
				color:$z-color-red;
				font-size:$font-lg;
				font-weight:bold;
			}
		}
	}
	.card{
		margin:20upx 0;
		.title{
			font-size:$font-base;
			color:$z-color-666;
			padding-left:30upx;
			margin-bottom:20upx;
		}
		.card-has{
			.card-list{
				background:#fff;
				border-bottom:2upx solid $border-color-light;
				padding:20upx 30upx;
				.card-header{
					display:flex;
					margin-bottom:20upx;
					.card-img{
						height:60upx;
						width:60upx;
						border-radius:50%;
						image{
							height:60upx;
							width:60upx;
							border-radius:50%;
						}
					}
					text{
						color:$z-color-666;
						padding-left:20upx;
						line-height:60upx;
					}
				}
				.card-main{
					background:$image-bg-color;
					border-radius:14upx;
					padding:30upx 40upx;
					.card-t{
						display:flex;
						justify-content:space-between;
						font-size:20px;
						font-weight:bold;
						color:$z-color-666;
						margin-bottom:10upx;
					}
					.card-m{
						display:flex;
						justify-content:space-between;
						color:$z-color-666;
						margin-bottom:20upx;
						text+text{
							color:$z-color-999;
						}
					}
					.card-b{
						color:$z-color-666;
						font-size:$font-sm;
					}
				}
			}
		}
		.card-no{
			.info{
				background:#fff;
				padding:20upx 0;
				.img-content{
					position:relative;
					width:100%;
					text-align:center;
					image{
						width:200upx;
					}
					.text{
						position:absolute;
						font-size:$font-base;
						color:$z-color-666;
						left:37%;
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
		
	}
</style>
