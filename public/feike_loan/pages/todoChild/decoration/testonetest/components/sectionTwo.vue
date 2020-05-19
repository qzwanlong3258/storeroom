<template>
	<view class="sectionTwo">
		<!-- <text class="section-maintitle">页面1</text>
		<text class="section-subtitle">我的页面”1</text> -->
		<view class="sectionTwo-box">
			<view class="sectionTwo-hd"> {{dataTwo.content}}</view>
			<view class="sectionTwo-bd" >
				<view v-for="(item,index) in sexData" :key="index" @click="sexClick(index,item.cid)">
					<image :src="item.img" mode=""></image>
					<label class="radio"><radio :value="item.cname" :checked="index === current" />{{item.cname}}</label>
				</view>
				
				
				</view>
			<view class="sectionTwo-ft">
				<view v-for="(item,index) in ageData" :key="index" @click="ageClick(index,item.cid)">
					<label class="radio"><radio :value="item.cname" :checked="index === agecurrent" />{{item.cname}}</label>
				</view>
				</view>
			<!-- <view class="sectionTwo-ft" style="background: #ffffff;margin: 50rpx 74rpx;height: 175rpx;">
				<view style="height: 80rpx;line-height: 80rpx;text-align: center;">
					你所居住的城市是？
				</view>
				<view style="display: flex;" class="sectionTwo-ft-input">
					<input type="text" placeholder="请选择省" placeholder-class="input_color">
					<input type="text" placeholder="请选择市" placeholder-class="input_color">
					<input type="text" placeholder="请选择区" placeholder-class="input_color">
				</view>
				
			</view> -->
			<view class="iconfont iconnexts nextclass" ></view>
			<view class="textClass">NEXT</view>
		</view>
		
	</view>
</template>

<script>
	"use strict"
	
	import { TESTWOMEN ,TESTMEN} from '@/config/image.js';
	
	var _self;
	export default {
		props: {
			dataTwo: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		watch:{
			dataTwo(newValue, oldValue) {
							// console.log("obj",newValue,oldValue)
							_self.sexData.push(newValue.choose[0])
							_self.sexData.push(newValue.choose[1])
							_self.ageData.push(newValue.choose[2])
							_self.ageData.push(newValue.choose[3])
							_self.ageData.push(newValue.choose[4])
							_self.ageData.push(newValue.choose[5])
							
						}
		},
		data() {
			return {
				r2:'',
				sexData:[
					// { img: TESTMEN, name: "男" ,value:'TESTMEN'},
					// { img: TESTWOMEN, name: "女" ,value:'TESTWOMEN'},
				],
				ageData:[
					// {  name: "35岁以下" ,value:'TESTMEN'},
					// {  name: "35-45岁" ,value:'TESTWOMEN'},
					// {  name: "45-55岁" ,value:'TESTMEN'},
					// {  name: "55岁以上" ,value:'TESTWOMEN'},
				],
				current:null,
				agecurrent:null
				
			}
		},
		methods: {
			sexClick(e,c) {
				// console.log(_self)
				_self.current =e
				this.$emit('testOne',c,2,this.dataTwo.tid)
				},
			ageClick(e,c) {
				// console.log(_self)
				_self.agecurrent =e
				this.$emit('testOne',c,3,this.dataTwo.tid)
				},
		    
		},
		created(){
			_self = this
			// console.log(this.dataTwo)
			// _self.sexData.push(this.dataTwo.choose[0])
			// _self.sexData.push(this.dataTwo.choose[1])
			// _self.ageData.push(this.dataTwo.choose[2])
			// _self.ageData.push(this.dataTwo.choose[3])
			// _self.ageData.push(this.dataTwo.choose[4])
			// _self.ageData.push(this.dataTwo.choose[5])
			
		},
		
	}
</script>
<style scoped>
	.sectionTwo{
		font-size: 32rpx;
		font-family: MicrosoftYaHei;
		background: rgba(242,246,249,1);
		height: 100%;
		position: relative;
		}
	.sectionTwo-box{
		position: absolute;
		height: 100%;
		width: 100%;
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
	.sectionTwo-hd{
		height: 80rpx;
		margin: 103rpx 55rpx 63rpx;
		background: #FFFFFF;
		color: #000000;
		font-size: 34rpx;
		line-height: 80rpx;
		padding-left: 20rpx;
	}
	.sectionTwo-bd{
		margin: 63rpx 100rpx;
		height: 250rpx;
		
		display: flex;
		flex-wrap: wrap;
	}
	.sectionTwo-bd view {
		flex: 45%;
		background: #FFFFFF;
		height: 238rpx;
		margin: 10rpx;
	}
	.sectionTwo-bd view image{
		width: 66rpx;
		height: 66rpx;
		display: block;
		margin: 40rpx auto;
	}
	.sectionTwo-bd view label {
		width: 100%;
		text-align: center;
		font-size: 30rpx;
		color: 000000;
	}
	.sectionTwo-bd view label radio {
		margin-left: 60rpx;
		margin-right: 30rpx;
	}
	.sectionTwo-ft{
		margin: 63rpx 100rpx;
		height: 400rpx;
		
		display: flex;
		flex-wrap: wrap;
	}
	.sectionTwo-ft view {
		flex: 45%;
		background: #FFFFFF;
		height: 200rpx;
		margin: 10rpx;
		line-height: 200rpx;
	}
	
	.sectionTwo-ft view label {
		width: 100%;
		text-align: center;
		font-size: 30rpx;
		color: 000000;
	}
	.sectionTwo-ft view label radio {
		margin-left: 40rpx;
		margin-right: 10rpx;
	}
	/* .input_color {
		color: #dbdbdb;
	} */
	/* .sectionTwo-ft-input input{
		margin-left: 40rpx;
		border: 2rpx solid #313131;
		font-size: 22rpx;
		text-align: center;
	}
	.sectionTwo-ft-input input:nth-child(3){
		margin-right: 40rpx;
		
	} */
</style>
