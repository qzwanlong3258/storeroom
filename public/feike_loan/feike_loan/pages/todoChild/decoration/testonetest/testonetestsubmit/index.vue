<template>
	<view class="testonetestsubmit" :hidden='show'>
		<view class="testSuccess">
			<view style="height: 115rpx;text-align: center;padding-top: 30rpx;">
				<image :src="imgsuccess" mode="" style="width: 82rpx;
		height:73rpx ;"></image>
			</view>
			<view style="height: 24rpx;margin-top: 20rpx;text-align: center;">
				恭喜您已完成测试！
			</view>
		</view>
		<view class="testFail" :hidden='!show'>
			<view style="height: 115rpx;text-align: center;padding-top: 30rpx;">
				<image :src="imgfail" mode="" style="width: 59rpx;
		height:59rpx ;"></image>
			</view>
			<view style="height: 24rpx;margin-top: 20rpx;text-align: center;">
				对不起，您暂不符合条件！
			</view>
		</view>
		<view style="position: fixed;left: 0;bottom: 0;width: 100%;height: 140rpx;" :hidden='show'>
			<view class="btn" style="margin-top: 20rpx;" @click="submitToAppt">
				立即申请
				
			</view>
		</view>
		<view style="position: fixed;left: 0;bottom: 0;width: 100%;height: 140rpx;" :hidden='!show'>
			<view class="btn" style="margin-top: 20rpx;" @click="submit">
				返回
				
			</view>
		</view>
	</view>
</template>

<script>
'use strict';
var _self;
import { TESTSUCCESS, TESTFAIL} from '@/config/image.js';
import { DECORATION ,LOAN_APPLICATION} from '@/config/router.js';
import { getCount } from '@/api/todoChild/loan.js';
import { getStorage, setStorage } from '@/utils/storage.js';
export default {
	data(){
		return{
			imgsuccess:TESTSUCCESS,
			imgfail:TESTFAIL,
			show:false
		}
	},
	methods:{
		submit(){
			uni.switchTab({
				url:DECORATION
			})
		},
		submitToAppt(){
			uni.navigateTo({
				url:LOAN_APPLICATION
			})
		}
	},
	async onLoad() {
		_self =this
		let e= await getCount()
		console.log(e)
		if (e.count == '0'){
			_self.show=true
			setStorage('canloan',true)
		} else {
			setStorage('canloan',false)
		}
	}
};
</script>

<style scoped>
	.testonetestsubmit{
		font-size: 32rpx;
		background: rgba(242, 246, 249, 1);
		height: 100%;
	}
	.testSuccess{
		margin: 30rpx;
		background: #FFFFFF;
		height: 226rpx;
	}
	.testFail{
		margin: 30rpx;
		background: #FFFFFF;
		height: 226rpx;
	}
	
	.btn{
		margin:10rpx 20rpx 0 20rpx ;
		border-radius: 40rpx;
		background: #E8BE2E;
		cursor:pointer;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		color: #FFFFFF;
	}
</style>
