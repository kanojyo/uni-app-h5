export function processUrl(){ 							//	跳转地址
	if (process.env.NODE_ENV === 'development'){
		return 'http://ly1.wuhanlst.com'
	}else if (process.env.NODE_ENV === 'test'){
		return 'http://ly1.wuhanlst.com'
	}else{
		return 'http://ly1.wuhanlst.com'
	}
}