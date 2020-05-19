<template>
	<view class="sectionFour">
		<!-- <text class="section-maintitle">页面1</text>
		<text class="section-subtitle">我的页面”1</text> -->
		<view class="sectionFour-box">
			<view class="sectionFour-hd"> {{dataFour.content}}</view>
			<view class="sectionFour-bd" >
				<view v-for="(item,index) in busyData" :key="index" @click="busyClick(index,item.cid)">
					<image :src="item.img" mode=""></image>
					<label class="radio"><radio :value="item.cname" :checked="index === current" />{{item.cname}}</label>
				</view>
				
				
				</view>
			<view class="sectionFour-ft">
				<view v-for="(item,index) in incomData" :key="index" @click="incomeClick(index,item.cid)">
					<label class="radio"><radio :value="item.cname" :checked="index === incomeCurrent" />{{item.cname}}</label>
				</view>
				</view>
			<!-- <view class="sectionFour-ft" style="background: #ffffff;margin: 50rpx 74rpx;height: 175rpx;">
				<view style="height: 80rpx;line-height: 80rpx;text-align: center;">
					你所居住的城市是？
				</view>
				<view style="display: flex;" class="sectionFour-ft-input">
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
	
	import { SERVANTMAN ,STAFF, EMPLOYEE, BUSINESSMAN} from '@/config/image.js';
	
	var _self;
	export default {
		props: {
			dataFour: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		watch:{
			dataFour(newValue, oldValue) {
							// console.log("obj",newValue,oldValue)
							_self.busyData.push(newValue.choose[0])
							_self.busyData.push(newValue.choose[1])
							_self.busyData.push(newValue.choose[2])
							_self.busyData.push(newValue.choose[3])
							_self.incomData.push(newValue.choose[4])
							_self.incomData.push(newValue.choose[5])
							_self.incomData.push(newValue.choose[6])
							_self.incomData.push(newValue.choose[7])
							
						}
		},
		data() {
			return {
				busyData:[
					// { img: SERVANTMAN, name: "公务员" ,value:'TESTMEN'},
					// { img: STAFF, name: "一般职员" ,value:'TESTWOMEN'},
					// { img: EMPLOYEE, name: "自由职业" ,value:'TESTMEN'},
					// { img: BUSINESSMAN, name: "企业法人" ,value:'TESTWOMEN'},
				],
				incomData:[
					// {  name: "5万以下" ,value:'TESTMEN'},
					// {  name: "5-10万" ,value:'TESTWOMEN'},
					// {  name: "10-20万" ,value:'TESTMEN'},
					// {  name: "20万以上" ,value:'TESTWOMEN'},
				],
				current:null,
				incomeCurrent:null
				
			}
		},
		methods: {
			busyClick(e,c) {
				// console.log(_self)
				_self.current =e
				this.$emit('testOne',c,5,this.dataFour.tid)
				},
			incomeClick(e,c) {
				// console.log(_self)
				_self.incomeCurrent =e
				this.$emit('testOne',c,6,this.dataFour.tid)
				},
		    
		},
		created(){
			_self = this
			
		},
		
	}
</script>
<style scoped>
	.sectionFour{
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
	.sectionFour-box{
		position: absolute;
		height: 100%;
		width: 100%;
	}
	.sectionFour-hd{
		height: 80rpx;
		margin: 103rpx 55rpx 63rpx;
		background: #FFFFFF;
		color: #000000;
		font-size: 34rpx;
		line-height: 80rpx;
		padding-left: 20rpx;
	}
	.sectionFour-bd{
		margin: 63rpx 100rpx;
		height: 500rpx;
		
		display: flex;
		flex-wrap: wrap;
	}
	.sectionFour-bd view {
		flex: 45%;
		background: #FFFFFF;
		height: 238rpx;
		margin: 10rpx;
	}
	.sectionFour-bd view image{
		width: 66rpx;
		height: 66rpx;
		display: block;
		margin: 40rpx auto;
	}
	.sectionFour-bd view label {
		width: 100%;
		text-align: center;
		font-size: 30rpx;
		color: 000000;
	}
	.sectionFour-bd view label radio {
		margin-left: 50rpx;
		margin-right: 10rpx;
	}
	.sectionFour-ft{
		margin: 63rpx 100rpx;
		height: 200rpx;
		
		display: flex;
		flex-wrap: wrap;
	}
	.sectionFour-ft view {
		flex: 45%;
		background: #FFFFFF;
		height: 100rpx;
		margin: 10rpx;
		line-height: 100rpx;
	}
	
	.sectionFour-ft view label {
		width: 100%;
		text-align: center;
		font-size: 30rpx;
		color: 000000;
	}
	.sectionFour-ft view label radio {
		margin-left: 40rpx;
		margin-right: 10rpx;
	}
	/* .input_color {
		color: #dbdbdb;
	} */
	/* .sectionFour-ft-input input{
		margin-left: 40rpx;
		border: 2rpx solid #313131;
		font-size: 22rpx;
		text-align: center;
	}
	.sectionFour-ft-input input:nth-child(3){
		margin-right: 40rpx;
		
	} */
</style>
