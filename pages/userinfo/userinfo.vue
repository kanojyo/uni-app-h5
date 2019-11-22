<template>
	<view>
		<view class="user-section">
			<!-- <image class="bg" src="/static/user-bg.jpg"></image> -->
			<text class="bg-upload-btn yticon icon-paizhao" @tap="editImg">点击修改头像</text>
			<view class="portrait-box">
				<image class="portrait" :src="form.avatar || '/static/missing-face.png'"></image>
				<!-- <text class="pt-upload-btn yticon icon-paizhao">点击修改头像</text> -->
			</view>
			
		</view>
		<view class="content">
			<view class="row b-b">
				<text class="tit">用户ID</text>
				<input class="input" type="text" v-model="userInfo.user_id"  disabled='true' placeholder-class="placeholder" />
			</view>
			<view class="row b-b">
				<text class="tit">昵称</text>
				<input class="input" type="text" v-model="form.nickname" placeholder="昵称" placeholder-class="placeholder" />
			</view>
			<view class="row b-b">
				<text class="tit">性别</text>
				<radio-group @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
						<view>
							<radio :value="item.value" :checked="index === current-1" />
						</view>
						<view>{{item.name}}</view>
					</label>
				</radio-group>
			</view>
			<view class="row b-b">
				<text class="tit">生日</text>
				 <view class="uni-list">
					 <view class="uni-list-cell">
						 <view class="uni-list-cell-db">
							 <picker mode="date" :value="form.birthday||date" :start="startDate" :end="endDate"  @change="bindDateChange">
								 <view class="uni-input">{{form.birthday||date}}</view>
							 </picker>
						 </view>
					 </view>
				 </view>
			</view>
			<view class="row b-b">
				<text class="tit">手机号码</text>
				<input class="input" type="text" v-model="form.mobile" placeholder="手机号码" placeholder-class="placeholder" />
			</view>
			<button class="add-btn" @click="confirm">完成</button>
		</view>
	</view>
</template>

<script>
	import {  
	    mapState,  
	    mapMutations  
	} from 'vuex';  
	import { processUrl } from "../../common/request/url.js";
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				userInfo:{},
				form:{
					avatar:'',
					nickname:'',
					gender:'',
					birthday:'',
					mobile:''
				},
				 items: [{
						value: '1',
						name: '男',
						checked:'',
					},
					{
						value: '2',
						name: '女',
						checked:'',
					},
				],
				current:0,
				baseUrl:processUrl(),
				date: currentDate,
			};
		},
		onLoad(){
			this.init();;
		},
		computed:{
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods:{
			getDate(type) {
				const date = new Date();
				console.log(date)
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			init(){
				return Promise.all([this.getUserInfo()])
			},
			getUserInfo(){
				this.$http.get('user.info').then(res => {
					if(res.code ==1){
						this.userInfo = res.data;
						this.form.avatar = this.userInfo.avatar;
						this.form.nickname = this.userInfo.nickname;
						this.form.gender = this.userInfo.gender;
						if(this.userInfo.birthday == ''){
							// this.form.birthday =this.date;
						}else{
							this.form.birthday = this.userInfo.birthday;
						}
						this.form.mobile = this.userInfo.mobile;
						this.current = this.form.gender;
					}
				})
			},
			radioChange(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i+1;
						this.form.gender = this.current;
						break;
					}
				}
			},
			bindDateChange(e) {
				console.log(e)
				this.form.birthday = e.target.value
			},
			editImg(){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: (res)=> {
						// console.log(res)
						let imgSize = res.tempFiles[0].size/1000/1024;
						let state = false;
						if(imgSize>4){
							uni.showToast({
							    title: '上传的图片不能大于4M',
								icon:'none',
							    duration: 2000
							});
							state = true;
						}
						if(state){
							return false
						}else{
							const tempFilePaths = res.tempFilePaths;
							uni.showLoading({
								title: '请稍后..',
								mask: true,
							})
							uni.uploadFile({
								url: this.baseUrl+'/addons/xshop/vendor/upload', //仅为示例，非真实的接口地址
								filePath: tempFilePaths[0],
								name: 'file',
								success: (res) => {
									uni.hideLoading();
									let _res = JSON.parse(res.data)
									if(_res.code == 1){
										this.form.avatar =_res.data.url;
									}else if(_res.code == 10000){
										// uni.showToast({
										//     title: _res.msg,
										// 	icon:'none',
										//     duration: 2000,
										// });
									}
								},
								fail:(res)=>{
									uni.hideLoading();
									uni.showToast({
									    title: '上传失败',
										icon:'none',
									    duration: 2000,
									});
								}
							});
						}
				    }
				});
			},
			confirm(){
				this.$http.post('user.info.edit',this.form).then(res =>{
					if(res.code ==1){
						uni.showToast({
						    title: '保存资料成功',
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
						    title: '保存资料失败',
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
		background: $page-color-base;
		font-size:$font-sm+4upx;
	}
	.user-section{
		display:flex;
		align-items:center;
		justify-content: center;
		height: 400upx;
		padding: 40upx 30upx 0;
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
		.portrait-box{
			width: 200upx;
			height: 200upx;
			border:6upx solid #fff;
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
		.yticon{
			position:absolute;
			line-height: 1;
			z-index: 5;
			font-size: 48upx;
			color: #fff;
			padding: 4upx 6upx;
			border-radius: 6upx;
			background: rgba(0,0,0,.4);
		}
		.pt-upload-btn{
			right: 0;
			bottom: 10upx;
		}
		.bg-upload-btn{
			// right: 20upx;
			bottom: 20upx;
			font-size:$font-sm+4upx;
		}
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
	uni-toast{
		font-size:14px;
	}
</style>
