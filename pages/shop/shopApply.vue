<template>
	<view>
		<uni-nav-bar left-icon="arrowleft" title="入驻申请" background-color="#fff" @clickLeft="back"/>
		<view class="content">
			<view class="row ">
				<text class="tit">店铺名称</text>
				<input class="input" type="text" v-model="form.shop_name" placeholder="店铺名称"  placeholder-class="placeholder" />
			</view>
			<view class="row upload">
				<text class="tit">店铺头像</text>
				<view class="upload-add-btn" v-if="!form.avatar" @click="chooseImage(1)"></view>
				<view class="upload-item" v-else>
					<image class="upload-img" :src="form.avatar" mode="aspectFill" @click="previewImage(1)"></image>
					<image class="upload-del-btn"
						@click="delImage(1)" 
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjNBODgzQjUwNDM5MTFFOUJDMjlGN0UwRTJGMjVCNjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjNBODgzQjYwNDM5MTFFOUJDMjlGN0UwRTJGMjVCNjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGM0E4ODNCMzA0MzkxMUU5QkMyOUY3RTBFMkYyNUI2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGM0E4ODNCNDA0MzkxMUU5QkMyOUY3RTBFMkYyNUI2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuYQTIAAAAHNSURBVHjazJgxasMwFIbjnsD4BDmCLxDQDZrNQ5bcILlBvXvpDRLIWmiHFkyH2t0LyVbwEkPpbE/eYlUCGYQax096UuIffkIgij7ryU/vyZuYy2e+Z56K70R8lsJcOfPn5AriMCvmZ2YKdMW8EQ/hRA9iEorwXlpZtObMRySQ6kysvrFWloHUEIcmUBuHUDLccmxQskErt7wyVLdy00tQ4Q2g5De2V9kNwWjffiNDA33f/42i6E13Qj5uNptlwJD+SyODuaqqqi/KVBTFOxSKA7VtW/NxSZI8AcbE2nuraZpvKgSBk6G4drsdBOwogz1CwAghH/JEl+BUKJ1VltPHHjoIAoeE4l53YFqb+RKcBSgqyqXhtxEKZwkKB3YOThYCqjPuCDoHZwGK3mGLtdPp5LmqTI1Dqe4p26EkNqA4iE6eg2z+iQ0okyQMATvYgLIIt9Y6knTyFBIudHqIq3BpmkL60VJ9O0sXZY8MBwSLtdNGEAQ/i8XiVXcz83EcEPDbuq/fzMdYWt+6GTmMsX2rh9q3TtsxNrzXhKt1rwg6rR1Dhdjqo7QMlWOvoWTF4imxQMRF7eaL8L5ohmwrLgDB8pCQc8DlcG7y538CDABJNGPqfaJgfgAAAABJRU5ErkJggg==" 
						mode="scaleToFill">
					</image>
				</view>
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
			<view class="row idCard">
				<text class="tit">身份证件</text>
				<!-- <input class="input" type="text" v-model="form.face_full_photo" placeholder="昵称" placeholder-class="placeholder" /> -->
				<view class="idCard-content">
					<view class="item">
						<text>正面</text>
						<view class="upload-add-btn" v-if="!form.face_full_photo" @click="chooseImage(2)"></view>
						<view class="upload-item" v-else>
							<image class="upload-img" :src="form.face_full_photo" mode="aspectFill" @click="previewImage(2)"></image>
							<image class="upload-del-btn"
								@click="delImage(2)" 
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjNBODgzQjUwNDM5MTFFOUJDMjlGN0UwRTJGMjVCNjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjNBODgzQjYwNDM5MTFFOUJDMjlGN0UwRTJGMjVCNjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGM0E4ODNCMzA0MzkxMUU5QkMyOUY3RTBFMkYyNUI2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGM0E4ODNCNDA0MzkxMUU5QkMyOUY3RTBFMkYyNUI2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuYQTIAAAAHNSURBVHjazJgxasMwFIbjnsD4BDmCLxDQDZrNQ5bcILlBvXvpDRLIWmiHFkyH2t0LyVbwEkPpbE/eYlUCGYQax096UuIffkIgij7ryU/vyZuYy2e+Z56K70R8lsJcOfPn5AriMCvmZ2YKdMW8EQ/hRA9iEorwXlpZtObMRySQ6kysvrFWloHUEIcmUBuHUDLccmxQskErt7wyVLdy00tQ4Q2g5De2V9kNwWjffiNDA33f/42i6E13Qj5uNptlwJD+SyODuaqqqi/KVBTFOxSKA7VtW/NxSZI8AcbE2nuraZpvKgSBk6G4drsdBOwogz1CwAghH/JEl+BUKJ1VltPHHjoIAoeE4l53YFqb+RKcBSgqyqXhtxEKZwkKB3YOThYCqjPuCDoHZwGK3mGLtdPp5LmqTI1Dqe4p26EkNqA4iE6eg2z+iQ0okyQMATvYgLIIt9Y6knTyFBIudHqIq3BpmkL60VJ9O0sXZY8MBwSLtdNGEAQ/i8XiVXcz83EcEPDbuq/fzMdYWt+6GTmMsX2rh9q3TtsxNrzXhKt1rwg6rR1Dhdjqo7QMlWOvoWTF4imxQMRF7eaL8L5ohmwrLgDB8pCQc8DlcG7y538CDABJNGPqfaJgfgAAAABJRU5ErkJggg==" 
								mode="scaleToFill">
							</image>
						</view>
					</view>
					<view class="item">
						<text>反面</text>
						<view class="upload-add-btn" v-if="!form.negative_phone" @click="chooseImage(3)"></view>
						<view class="upload-item" v-else>
							<image class="upload-img" :src="form.negative_phone" mode="aspectFill" @click="previewImage(3)"></image>
							<image class="upload-del-btn"
								@click="delImage(3)" 
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjNBODgzQjUwNDM5MTFFOUJDMjlGN0UwRTJGMjVCNjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjNBODgzQjYwNDM5MTFFOUJDMjlGN0UwRTJGMjVCNjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGM0E4ODNCMzA0MzkxMUU5QkMyOUY3RTBFMkYyNUI2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGM0E4ODNCNDA0MzkxMUU5QkMyOUY3RTBFMkYyNUI2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuYQTIAAAAHNSURBVHjazJgxasMwFIbjnsD4BDmCLxDQDZrNQ5bcILlBvXvpDRLIWmiHFkyH2t0LyVbwEkPpbE/eYlUCGYQax096UuIffkIgij7ryU/vyZuYy2e+Z56K70R8lsJcOfPn5AriMCvmZ2YKdMW8EQ/hRA9iEorwXlpZtObMRySQ6kysvrFWloHUEIcmUBuHUDLccmxQskErt7wyVLdy00tQ4Q2g5De2V9kNwWjffiNDA33f/42i6E13Qj5uNptlwJD+SyODuaqqqi/KVBTFOxSKA7VtW/NxSZI8AcbE2nuraZpvKgSBk6G4drsdBOwogz1CwAghH/JEl+BUKJ1VltPHHjoIAoeE4l53YFqb+RKcBSgqyqXhtxEKZwkKB3YOThYCqjPuCDoHZwGK3mGLtdPp5LmqTI1Dqe4p26EkNqA4iE6eg2z+iQ0okyQMATvYgLIIt9Y6knTyFBIudHqIq3BpmkL60VJ9O0sXZY8MBwSLtdNGEAQ/i8XiVXcz83EcEPDbuq/fzMdYWt+6GTmMsX2rh9q3TtsxNrzXhKt1rwg6rR1Dhdjqo7QMlWOvoWTF4imxQMRF7eaL8L5ohmwrLgDB8pCQc8DlcG7y538CDABJNGPqfaJgfgAAAABJRU5ErkJggg==" 
								mode="scaleToFill">
							</image>
						</view>
					</view>
				</view>
			</view>
			<view class="row upload">
				<text class="tit">营业执照</text>
				<view class="upload-add-btn" v-if="!form.business_license" @click="chooseImage(4)"></view>
				<view class="upload-item" v-else>
					<image class="upload-img" :src="form.business_license" mode="aspectFill" @click="previewImage(4)"></image>
					<image class="upload-del-btn"
						@click="delImage(4)" 
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjNBODgzQjUwNDM5MTFFOUJDMjlGN0UwRTJGMjVCNjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjNBODgzQjYwNDM5MTFFOUJDMjlGN0UwRTJGMjVCNjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGM0E4ODNCMzA0MzkxMUU5QkMyOUY3RTBFMkYyNUI2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGM0E4ODNCNDA0MzkxMUU5QkMyOUY3RTBFMkYyNUI2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuYQTIAAAAHNSURBVHjazJgxasMwFIbjnsD4BDmCLxDQDZrNQ5bcILlBvXvpDRLIWmiHFkyH2t0LyVbwEkPpbE/eYlUCGYQax096UuIffkIgij7ryU/vyZuYy2e+Z56K70R8lsJcOfPn5AriMCvmZ2YKdMW8EQ/hRA9iEorwXlpZtObMRySQ6kysvrFWloHUEIcmUBuHUDLccmxQskErt7wyVLdy00tQ4Q2g5De2V9kNwWjffiNDA33f/42i6E13Qj5uNptlwJD+SyODuaqqqi/KVBTFOxSKA7VtW/NxSZI8AcbE2nuraZpvKgSBk6G4drsdBOwogz1CwAghH/JEl+BUKJ1VltPHHjoIAoeE4l53YFqb+RKcBSgqyqXhtxEKZwkKB3YOThYCqjPuCDoHZwGK3mGLtdPp5LmqTI1Dqe4p26EkNqA4iE6eg2z+iQ0okyQMATvYgLIIt9Y6knTyFBIudHqIq3BpmkL60VJ9O0sXZY8MBwSLtdNGEAQ/i8XiVXcz83EcEPDbuq/fzMdYWt+6GTmMsX2rh9q3TtsxNrzXhKt1rwg6rR1Dhdjqo7QMlWOvoWTF4imxQMRF7eaL8L5ohmwrLgDB8pCQc8DlcG7y538CDABJNGPqfaJgfgAAAABJRU5ErkJggg==" 
						mode="scaleToFill">
					</image>
				</view>
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
			chooseImage(val){
				console.log(val);
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: (res)=> {
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
									if(val ==1){ //店铺头像
										this.form.avatar =_res.data.url;
									}else if(val == 2){ //身份证正面照片
										this.form.face_full_photo =_res.data.url;
									}else if(val ==3){ //身份证反面照片
										this.form.negative_phone =_res.data.url;
									}else{ //营业执照
										this.form.business_license =_res.data.url;
									}
									console.log(this.form.avatar)
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
			//预览图片
			previewImage(val){
				let urls = [];
				if(val ==1){
					urls.push(this.form.avatar);
				}else if(val ==2){
					urls.push(this.form.face_full_photo);
				}else if(val ==3){
					urls.push(this.form.negative_phone);
				}else{
					urls.push(this.form.business_license);
				}
				uni.previewImage({
					urls: urls
				})
			},
			//删除图片
			delImage(val){
				uni.showModal({
					content: '确定要放弃这张图片么？',
					success: (confirmRes)=> {
						if (confirmRes.confirm) {
							// this.imageList.splice(index, 1);
							if(val ==1){
								this.form.avatar ='';
							}else if(val ==2){
								this.form.face_full_photo ='';
							}else if(val ==3){
								this.form.negative_phone ='';
							}else{
								this.form.business_license ='';
							}
						} 
					}
				});
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
						uni.navigateTo({url:'/pages/shop/applySuccess'})
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
		background: $page-color-base;
		font-size:$font-sm+4upx;
	}
	.content{
		border-top:2upx solid $border-color-light;
		background:#fff;
		padding-bottom:20upx;
		.upload{
			margin:20upx 0;
			height:250upx !important;
		}
		.idCard{
			margin:20upx 0;
			height:700upx !important;
			.idCard-content{
				height:100%;
				width:100%;
				.item{
					height:40%;
					width:100%;
					text{
						font-size:$font-sm;
						color:$z-color-666;
					}
					.upload-add-btn {
						position: relative;
						float:left;
						width: 100%;
						height: 100%;
						margin-bottom:20upx;
						z-index: 99;
						border-radius:8upx;
						background:#fff;
						border:2upx solid $border-color-light;
						margin:10upx 0;
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
					.upload-item{
						position: relative;
						float:left;
						width:100%;
						height:100%;
						// margin-right:30upx;
						// margin-bottom:30upx;
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
							width:60upx;
							height:60upx;
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
				}
			}
		}
		.row{
			display: flex;
			align-items: center;
			position: relative;
			padding:0 30upx;
			height: 110upx;
			background: #fff;
			.upload-add-btn {
				position: relative;
				float:left;
				width: 100%;
				height: 100%;
				margin-bottom:20upx;
				z-index: 99;
				border-radius:8upx;
				background:#fff;
				border:2upx solid $border-color-light;
				margin:30upx 0;
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
			.upload-item{
				position: relative;
				float:left;
				width:100%;
				height:100%;
				// margin-right:30upx;
				// margin-bottom:30upx;
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
					width:60upx;
					height:60upx;
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
