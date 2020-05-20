<template>
	<view class="content">
		
	</view>
</template>
<script type="text/javascript" src="https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js"></script>
<script type="text/javascript">
	import { getStorage, setStorage } from '@/utils/storage.js';
	// const { AUTH } = require('../../../config/router.js');
console.log(getQuery('data'));  //获取 uni-app 传来的值

function choose(){
	// const isLogin = getStorage('isLogin');
	// console.log(isLogin)
	// 			if (isLogin) {
					
	// 			} else {
					var a={}
					a.token = getQuery("tempToken")
					a.refreshToken = getQuery("refreshToken") 
					a.UserInfo = getQuery("userInfo") 
					a.isLogin = getQuery("isLogin")  //是否暂停
					// ?tempToken=${options.token}&refreshToken=${options.refreshToken}&userInfo=${options.UserInfo}&isLogin=${true}
					setStorage('tempToken', a.token)
					setStorage('refreshToken', a.refreshToken)
					setStorage('userInfo',JSON.parse(a.UserInfo) )
					setStorage('isLogin', true)
				
				
// }
}




choose()

function link(){
	uni.redirectTo({
		url:`pages/todoChild/decoration/index`
	})
}
link()


function getQuery(name) {
    // 正则：[找寻'&' + 'url参数名字' = '值' + '&']（'&'可以不存在）
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if(r != null) {
        // 对参数值进行解码
        return unescape(r[2]);
    }
    return null;
}
</script>

<style>
	
</style>
