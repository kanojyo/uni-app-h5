<template>
	<view>
		<uni-nav-bar left-icon="arrowleft" title="入驻申请" background-color="#f8f8f8" @clickLeft="back"/>
		<view class="content">
			<view class="row ">
				<text class="tit">店铺名称</text>
				<input class="input" type="text" v-model="form.shop_name" placeholder="店铺名称"  placeholder-class="placeholder" />
			</view>
			<view class="row ">
				<text class="tit">店铺头像</text>
				<input class="input" type="text" v-model="form.avatar" placeholder="店铺头像" placeholder-class="placeholder" />
			</view>
			<view class="row ">
				<text class="tit">店铺地址</text>
				<input class="input" type="text" v-model="form.address" placeholder="店铺地址" placeholder-class="placeholder" />
			</view>
			<view class="row ">
				<text class="tit">店家姓名</text>
				<input class="input" type="text" v-model="form.name" placeholder="店家姓名" placeholder-class="placeholder" />
			</view>
			<view class="row ">
				<text class="tit">联系方式</text>
				<input class="input" type="text" v-model="form.telephone" placeholder="联系方式" placeholder-class="placeholder" />
			</view>
			<view class="row ">
				<text class="tit">身份证件</text>
				<input class="input" type="text" v-model="form.face_full_photo" placeholder="昵称" placeholder-class="placeholder" />
			</view>
			<view class="row ">
				<text class="tit">营业执照</text>
				<input class="input" type="text" v-model="form.business_license" placeholder="营业执照" placeholder-class="placeholder" />
			</view>
			<view class="row ">
				<text class="tit">保证金</text>
				<input class="input" type="text" v-model="bound"  disabled="true" placeholder-class="placeholder" />
			</view>
			<button class="add-btn" @click="confirm">完成</button>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import { processUrl } from "../../common/request/url.js";
	export default {
		components: {
			uniIcons,
			uniNavBar,
		},
		data() {
			return {
				form:{
					shop_name:'',
					avatar:'',
					address:'',
					name:'',
					telephone:'',
					face_full_photo:'',
					negative_phone:'',
					business_license:''
				},
				bound:'',
				baseUrl:processUrl(),
			}
		},
		onLoad(){
			this.init();;
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			init(){
				return Promise.all([this.getBond()])
			},
			getBond(){
				this.$http.get('shop.shopBond').then(res =>{
					console.log(res);
					this.bound = res.data.bound;
				})
			},
			confirm(){
				if(this.form.shop_name ==''){
					uni.showToast({
					    title: '店铺名称不能为空',
						icon:'none',
					    duration: 2000
					});
					return false
				}
				if(this.form.avatar ==''){
					uni.showToast({
					    title: '店铺头像不能为空',
						icon:'none',
					    duration: 2000
					});
					return false
				}
				if(this.form.address ==''){
					uni.showToast({
					    title: '店铺地址不能为空',
						icon:'none',
					    duration: 2000
					});
					return false
				}
				if(this.form.name ==''){
					uni.showToast({
					    title: '店家姓名不能为空',
						icon:'none',
					    duration: 2000
					});
					return false
				}
				if(this.form.telephone ==''){
					uni.showToast({
					    title: '联系方式不能为空',
						icon:'none',
					    duration: 2000
					});
					return false
				}
				if(this.form.face_full_photo ==''){
					uni.showToast({
					    title: '身份证正面照片不能为空',
						icon:'none',
					    duration: 2000
					});
					return false
				}
				if(this.form.negative_phone ==''){
					uni.showToast({
					    title: '身份证反面照片为空',
						icon:'none',
					    duration: 2000
					});
					return false
				}
				if(this.form.business_license ==''){
					uni.showToast({
					    title: '营业执照不能为空',
						icon:'none',
					    duration: 2000
					});
					return false
				}
				this.$http.post('shop.shop_apply',this.form).then(res =>{
					if(res.code ==1){
						
						// setTimeout(()=>{
						// 	uni.navigateBack({
						// 	    delta: 1
						// 	});
						// }, 2000);
					}else{
						uni.showToast({
						    title: '提交失败',
							icon:'none',
						    duration: 2000,
						});
					}
				})
			}
		},
	}
</script>

<style lang="scss">
	page{
		background: #fff;
		font-size:$font-sm+4upx;
	}
	.content{
		.row{
			display: flex;
			align-items: center;
			position: relative;
			padding:0 30upx;
			height: 110upx;
			background: #fff;
			
			.tit{
				flex-shrink: 0;
				width: 180upx;
				font-size: 30upx;
				color: $font-color-base;
			}
			.address-box {
				flex: 1;
			}
			.input{
				flex: 1;
				font-size: 30upx;
				color: $font-color-dark;
				height:80upx;
				padding-left:10upx;
				border:2upx solid $border-color-base;
			}
			.icon-shouhuodizhi{
				font-size: 36upx;
				color: $font-color-light;
			}
			uni-radio-group{
				display:flex;
				.uni-list-cell{
					display:flex;
					font-size: 30upx;
					margin-right:20upx;
				}
			}
			.uni-list{font-size: 30upx;}
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
</style>
