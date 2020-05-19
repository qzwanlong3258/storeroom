<template>
	<view class="sectionThree">
		<!-- <text class="section-maintitle">页面1</text>
		<text class="section-subtitle">我的页面”1</text> -->
		<view class="sectionThree-box">
			<view class="sectionThree-hd"> {{dataThree.content}}</view>
			<view class="sectionThree-bd">
				<view v-for="(item,index) in dataThree.choose" :key="index" @click="incomeClick(index,item.cid)">
					<image :src="item.img" mode=""></image>
					<label class="radio"><radio :value="item.cname" :checked="index === current" />{{item.cname}}</label>
				</view>
				</view>
			<!-- <view class="sectionThree-ft" style="background: #ffffff;margin: 50rpx 74rpx;height: 175rpx;">
				<view style="height: 80rpx;line-height: 80rpx;text-align: center;">
					你所居住的城市是？
				</view>
				<view style="display: flex;" class="sectionThree-ft-input">
					<input type="text" placeholder="请选择省" placeholder-class="input_color">
					<input type="text" placeholder="请选择市" placeholder-class="input_color">
					<input type="text" placeholder="请选择区" placeholder-class="input_color">
				</view>
				
			</view> -->
		</view>
		<view class="iconfont iconnexts nextclass" ></view>
		<view class="textClass">NEXT</view>
	</view>
</template>

<script>
	"use strict"
	
	import { INCOMEONE ,INCOMETWO, INCOMETHREE ,INCOMEFOUR} from '@/config/image.js';
	
	var _self;
	export default {
		props: {
			dataThree: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		
		data() {
			return {
				
				
				incomeData:[
					{ img: INCOMEONE, name: "10万以下" ,value:'INCOMEONE'},
					
					{ img: INCOMETWO, name: "10万-15万" ,value:'INCOMETWO'},
					{ img: INCOMETHREE, name: "15-20万"  ,value:'INCOMETHREE'},
					{ img: INCOMEFOUR, name: "20万以上"  ,value:'INCOMEFOUR'},
				],
				current:null
			}
		},
		methods: {
			incomeClick(e,c) {
				// console.log(_self)
				_self.current =e
				this.$emit('testOne',c,4,this.dataThree.tid)
				},
		    
		},
		created(){
			_self = this
			
		},
		
	}
</script>
<style scoped>
	.sectionThree{
		font-size: 32rpx;
		font-family: MicrosoftYaHei;
		background: rgba(242,246,249,1);
		height: 100%;
		position: relative;
		}
	.nextclass{
		position: absolute;
		left: calc(50% - 20rpx);
		bottom: 60rpx;
		transform: rotate(-90deg);
		color: #333333;
		
	}
	.textClass{
		position: absolute;
		left: calc(50% - 36rpx);
		bottom: 20rpx;
		font-size: 28rpx;
		color: #333333;
	}
	.sectionThree-box{
		position: absolute;
		height: 100%;
		width: 100%;
	}
	.sectionThree-hd{
		height: 80rpx;
		margin: 103rpx 55rpx 63rpx;
		background: #FFFFFF;
		color: #000000;
		font-size: 34rpx;
		line-height: 80rpx;
		padding-left: 20rpx;
	}
	.sectionThree-bd{
		margin: 63rpx 100rpx;
		height: 500rpx;
		
		display: flex;
		flex-wrap: wrap;
	}
	.sectionThree-bd view {
		flex: 45%;
		background: #FFFFFF;
		height: 238rpx;
		margin: 10rpx;
	}
	.sectionThree-bd view image{
		width: 66rpx;
		height: 66rpx;
		display: block;
		margin: 40rpx auto;
	}
	.sectionThree-bd view label {
		width: 100%;
		text-align: center;
		font-size: 30rpx;
	}
	.sectionThree-bd view label radio {
		margin-left: 30rpx;
		margin-right: 10rpx;
	}
	/* .input_color {
		color: #dbdbdb;
	} */
	/* .sectionThree-ft-input input{
		margin-left: 40rpx;
		border: 2rpx solid #313131;
		font-size: 22rpx;
		text-align: center;
	}
	.sectionThree-ft-input input:nth-child(3){
		margin-right: 40rpx;
		
	} */
</style>
