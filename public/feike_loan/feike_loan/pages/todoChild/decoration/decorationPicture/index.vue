<template>
	<view class="decorationPicture" :hidden='!show'>
		<image :src="img" mode="widthFix" @load='imgshow'> </image>
		<view class="btn-page">
			<view class="btnone"  @click="submitTest">
				
				
			</view>
			<view class="btntwo"  @click="submitApply">
				
				
			</view>
			
		</view>
	</view>
</template>

<script>
'use strict';
import { LOAN_PICTURE} from '@/config/image.js';
import { LOAN_APPLICATION, LOAN_TESTONETEST} from '@/config/router.js';
var _self;
export default {
	data() {
		return{
			img:LOAN_PICTURE,
			show:false,
			
		}
	},
	methods:{
		imgshow(){
			_self.show=true
		},
		submitTest(){
			uni.navigateTo({
				url:LOAN_TESTONETEST
			})
		},
		submitApply(){
			uni.navigateTo({
				url:LOAN_APPLICATION
			})
		},
	},
	async onLoad() {
		_self=this
	}
};
</script>

<style scoped>
	.decorationPicture{
		width: 100%;
		height: 4200rpx;
		position: relative;
	}
	.decorationPicture image{
		width: 100%;
		
		display: block;
		position: absolute;
	}
	.btn-page{
		width: 100%;
		height: 100%;
		
		position: absolute;
	}
	.btnone{
		height: 80rpx;
		line-height: 80rpx;
		width: 490rpx;
		
		border-radius: 45rpx;
		position: absolute;
		left: 130rpx;
		top:490rpx;
	}
	.btntwo{
		height: 83rpx;
		line-height: 83rpx;
		width: 685rpx;
		
		border-radius: 45rpx;
		position: absolute;
		left: 30rpx;
		top:1070rpx;
	}
</style>
