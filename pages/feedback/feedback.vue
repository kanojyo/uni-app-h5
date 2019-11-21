<template>
	<view class="content">
		<view class="row b-b">
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-db">
						<picker @change="bindPickerChange" :value="type"  mode="selector" :range="array">
							<view class="uni-input">{{array[type]}}</view>
						</picker>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-textarea b-b">
			<textarea @blur="bindTextAreaBlur" @input="textNum" auto-height maxlength="200" placeholder="请写下您对零元领吧的感受,我们将认真听取您的意见,努力提供更优质的服务"/>
			<text>{{num}}/200</text>
		</view>
		<view class="row b-b">
			<input class="input" type="text" v-model="contact_info" placeholder="手机/邮箱/QQ(选填)" placeholder-class="placeholder" />
		</view>
		<!-- 图片上传 -->
		<view class="text b-b">上传图片（最多6张）</view>	
		<uploadImages ref="uploadImg" :url="baseUrl+'/addons/xshop/vendor/upload'" :count="1" :length="6" @toFatherData='sendImgData'></uploadImages>
		<!-- 图片上传 -->
		<button class="add-btn" @click="confirm">提交</button>
	</view>
</template>

<script>
	import { mapActions } from 'vuex'
	import uploadImages from '@/components/upload-images'
	import { processUrl } from "../../common/request/url.js";
	export default {
		components: {
			uploadImages
		},
		data() {
			return {
				array: ['商品相关', '物流状况', '客户服务', '积分相关','产品体验','产品功能','其他'],
				type: 0,
				content:'',
				img_url:'',
				contact_info:'',
				num:0,
				baseUrl:processUrl(),
				imageList:[],
				length:6,
			}
		},
		onLoad(option){
			
		},
		computed: {
			rduLength(){
				return this.length - this.imageList.length;
			}
		},
		methods: {
			bindPickerChange(e) {
				// console.log('picker发送选择改变，携带值为', e.target.value)
				this.type = e.target.value
			},
			textNum(e){
				this.num =e.target.value.length;
			},
			bindTextAreaBlur(e) {
				// console.log(e.detail.value);
				this.content = e.detail.value;
			},
			sendImgData(data){
				this.img_url = data;
				// this.img_url = eval(JSON.stringify(this.img_url))
				this.img_url = JSON.parse(JSON.stringify(data))
				if(this.img_url == []){
					this.img_url =''
				}
			},
			confirm(){
				//触发子组件中方法向父组件传递img地址
				this.$refs.uploadImg.transmitImg();
				if(this.content ==''){
					uni.showToast({
					    title: '意见反馈内容不能为空',
						icon:'none',
					    duration: 2000
					});
					return false
				}
				this.$http.post('user.feedback',{type:this.type+1,content:this.content,img_url:this.img_url,contact_info:this.contact_info}).then(res =>{
					if(res.code ==1){
						uni.showToast({
						    title: '提交成功',
							icon:'success',
						    duration: 2000,
						});
						setTimeout(()=>{
							uni.navigateBack({
							    delta: 1
							});
						}, 2000);
						
					}else{
						uni.showToast({
						    title: '提交失败',
							icon:'none',
						    duration: 2000,
						});
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: $page-color-base;
		padding-top: 16upx;
		// padding:16upx 0upx 0 0upx;
	}

	.row{
		display: flex;
		align-items: center;
		position: relative;
		padding:0 30upx;
		height: 110upx;
		background: #fff;
		
		.tit{
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.address-box {
			flex: 1;
		}
		.input{
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.icon-shouhuodizhi{
			font-size: 36upx;
			color: $font-color-light;
		}
	}
	.b-b{
		margin-bottom:20upx;
	}
	.text{
		padding-left:30upx;
		font-size:30upx;
	}
	.uni-textarea{
		position:relative;
		background: #fff;
		// min-height:110upx;
		padding:10upx 30upx 40upx 30upx;
		uni-textarea{
			width:100%;
			min-height:200upx;
		}
		text{
			position:absolute;
			right:30upx;
			bottom:10upx;
			font-size: 28upx;
			color:$z-color-999;
			
		}
	}
	.default-row{
		margin-top: 16upx;
		.tit{
			flex: 1;
		}
		switch{
			transform: translateX(16upx) scale(.9);
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
	.uni-input{
		font-size: 30upx;
	}
	.upload-content{
		padding:24upx 0 0 28upx;
		background-color: #fff;
		overflow:hidden;
	}
	.upload-item{
		position: relative;
		float:left;
		width:150upx;
		height:150upx;
		margin-right:30upx;
		margin-bottom:30upx;
		&:nth-child(4n){
			margin-right:0;
		}
		.upload-img{
			width:100%;
			height:100%;
			border-radius:8upx;
		}
		.upload-del-btn{
			position: absolute;
			right:-16upx;
			top:-14upx;
			width:36upx;
			height:36upx;
			border: 4upx solid #fff;
			border-radius: 100px;
		}
		.upload-progress{
			position: absolute;
			left:0;
			top:0;
			display:flex;
			align-items:center;
			justify-content: center;
			width:100%;
			height:100%;
			background-color: rgba(0,0,0,.4);
			color:#fff;
			font-size:24upx;
			border-radius:8upx;
		}
	}
	.upload-add-btn {
		position: relative;
		float:left;
		width: 150upx;
		height: 150upx;
		z-index: 99;
		border-radius:8upx;
		background:#f9f9f9;
		&:before,
		&:after {
			content: " ";
			position: absolute;
			top: 50%;
			left: 50%;
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
			width: 4upx;
			height: 60upx;
			background-color: #d6d6d6;
		}
		&:after {
			width: 60upx;
			height: 4upx;
		}
		&:active {
			background-color: #f7f7f7;
		}
	}
	
</style>
