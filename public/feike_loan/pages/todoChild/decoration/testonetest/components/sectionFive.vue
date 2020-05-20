<template>
	<view class="sectionFive">
		<!-- <text class="section-maintitle">页面1</text>
		<text class="section-subtitle">我的页面”1</text> -->
		<view class="sectionFive-box">
			<view class="sectionFive-hd">{{dataFive.content}}</view>
			<!-- <view class="sectionFive-bd" >
				<view v-for="(item,index) in sexData" :key="index" @click="sexClick(index)">
					<image :src="item.img" mode=""></image>
					<label class="radio"><radio :value="item.value" :checked="index === current" />{{item.name}}</label>
				</view>
				
				
				</view> -->
			<view class="sectionFive-ft">
				<view v-for="(item,index) in dataFive.choose" :key="index" @click="ageClick(index,item.cid)">
					<label class="radio"><radio :value="item.cname" :checked="index === agecurrent" />{{item.cname}}</label>
				</view>
				</view>
			<!-- <view class="sectionFive-ft" style="background: #ffffff;margin: 50rpx 74rpx;height: 175rpx;">
				<view style="height: 80rpx;line-height: 80rpx;text-align: center;">
					你所居住的城市是？
				</view>
				<view style="display: flex;" class="sectionFive-ft-input">
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
	
	import { TESTWOMEN ,TESTMEN} from '@/config/image.js';
	
	var _self;
	export default {
		props: {
			dataFive: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		
		data() {
			return {
				// r2:'',
				// sexData:[
				// 	{ img: TESTMEN, name: "男" ,value:'TESTMEN'},
				// 	{ img: TESTWOMEN, name: "女" ,value:'TESTWOMEN'},
				// ],
				ageData:[
					{  name: "购买建材" ,value:'TESTMEN'},
					{  name: "装修公司结款" ,value:'TESTWOMEN'},
					{  name: "购买家具" ,value:'TESTMEN'},
					{  name: "其他" ,value:'TESTWOMEN'},
				],
				// current:null,
				agecurrent:null
				
			}
		},
		methods: {
			// sexClick(e) {
			// 	// console.log(_self)
			// 	_self.current =e
			// 	},
			ageClick(e,c) {
				// console.log(_self)
				_self.agecurrent =e
				this.$emit('testOne',c,7,this.dataFive.tid)
				},
		    
		},
		created(){
			_self = this
			
		},
		
	}
</script>
<style scoped>
	.sectionFive{
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
	.sectionFive-box{
		position: absolute;
		height: 100%;
		width: 100%;
	}
	.sectionFive-hd{
		height: 80rpx;
		margin: 103rpx 55rpx 63rpx;
		background: #FFFFFF;
		color: #000000;
		font-size: 34rpx;
		line-height: 80rpx;
		padding-left: 20rpx;
	}
	.sectionFive-bd{
		margin: 63rpx 100rpx;
		height: 250rpx;
		
		display: flex;
		flex-wrap: wrap;
	}
	.sectionFive-bd view {
		flex: 45%;
		background: #FFFFFF;
		height: 238rpx;
		margin: 10rpx;
	}
	.sectionFive-bd view image{
		width: 66rpx;
		height: 66rpx;
		display: block;
		margin: 40rpx auto;
	}
	.sectionFive-bd view label {
		width: 100%;
		text-align: center;
		font-size: 30rpx;
		color: 000000;
	}
	.sectionFive-bd view label radio {
		margin-left: 60rpx;
		margin-right: 30rpx;
	}
	.sectionFive-ft{
		margin: 63rpx 100rpx;
		height: 400rpx;
		
		display: flex;
		flex-wrap: wrap;
	}
	.sectionFive-ft view {
		flex: 45%;
		background: #FFFFFF;
		height: 200rpx;
		margin: 10rpx;
		line-height: 200rpx;
	}
	
	.sectionFive-ft view label {
		width: 100%;
		text-align: center;
		font-size: 30rpx;
		color: 000000;
	}
	.sectionFive-ft view label radio {
		margin-left: 15rpx;
		margin-right: 10rpx;
	}
	/* .input_color {
		color: #dbdbdb;
	} */
	/* .sectionFive-ft-input input{
		margin-left: 40rpx;
		border: 2rpx solid #313131;
		font-size: 22rpx;
		text-align: center;
	}
	.sectionFive-ft-input input:nth-child(3){
		margin-right: 40rpx;
		
	} */
</style>
