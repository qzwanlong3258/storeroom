<template>
	<view class="sectionsix">
		<!-- <text class="section-maintitle">页面1</text>
		<text class="section-subtitle">我的页面”1</text> -->
		<view class="sectionsix-box">
			<view class="sectionsix-hd"> {{dataSix.content}}</view>
			<view class="sectionsix-bd">
				<view v-for="(item,index) in dataSix.choose" :key="index" @click="homeClick(index,item.cid)">
					<image :src="item.img" mode=""></image>
					<label class="radio"><radio :value="item.cname" :checked="index === current" />{{item.cname}}</label>
				</view>
				
				
				</view>
			<!-- <view class="sectionsix-ft" style="background: #ffffff;margin: 50rpx 74rpx;height: 175rpx;">
				<view style="height: 80rpx;line-height: 80rpx;text-align: center;">
					你所居住的城市是？
				</view>
				<view style="display: flex;" class="sectionsix-ft-input">
					<input type="text" placeholder="请选择省" placeholder-class="input_color">
					<input type="text" placeholder="请选择市" placeholder-class="input_color">
					<input type="text" placeholder="请选择区" placeholder-class="input_color">
				</view>
				
			</view> -->
			<view class="sectionsix-ft">
				<!-- <view class="sectionsix-ft-hd" >信息确认</view> -->
				<!-- <view class="sectionsix-ft-text">*房屋所在城市</view> -->
				<!-- <button type="primary" @tap="openAddres">打开地址</button> -->
				<!-- <view class="sectionsix-ft-city" style="letter-spacing: 5rpx;" @click="openAddres">{{pickerText}}</view> -->
				<!-- <view class="sectionsix-ft-phone">
					<view class="sectionsix-ft-phone-left">手机号码</view>
					<input class="sectionsix-ft-phone-right"></input>
				</view> -->
				<!-- <view style="text-align: center;padding-bottom: 10rpx;height: 20rpx;"><label class="radio" style="font-size: 25rpx;"><radio value="r1" :checked="agree" @click="agre" />同意<label class="noticeBook" @click.stop="open" style="color: #333333;">《用户告知书》</label></label></view> -->
				<view class="btn" style="margin: 35rpx 0 20rpx 0;" @click="submit">
					完成
				</view>
				<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor='#007AFF'></simple-address>
				<uni-popup ref="popup" type="center" :mask-click="false" @change="change">
					<view class="uni-tip">
						<text class="uni-tip-title">用户告知书</text>
						<text class="uni-tip-content">内容</text>
						<view class="uni-tip-group-button">
							<text class="uni-tip-button" @click="cancel('no')">取消</text>
							<text class="uni-tip-button" @click="cancel('ok')">确定</text>
						</view>
					</view>
				</uni-popup>
			</view>
		</view>
		
		   
		
	</view>
</template>

<script>
	"use strict"
	
	 import { HOMEONE ,HOMETWO, HOMETHREE ,HOMEFOUR} from '@/config/image.js';
	 import simpleAddress from "@/components/simple-address/simple-address.nvue"
	 import uniPopup from "@/components/uni-popup/uni-popup.vue"
	 
	 
	
	var _self;
	export default {
		props: {
			dataSix: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		components: {
		            simpleAddress,
					uniPopup
		        },
		
		data() {
			return {
				
				homeData:[
					{ img: HOMEONE, name: "地中海风格" ,value:'ONEHOME'},
					{ img: HOMETWO, name: "现代简约" ,value:'TWOHOME'},
					{ img: HOMETHREE, name: "新中式风格"  ,value:'THREEHOME'},
					{ img: HOMEFOUR, name: "欧式风格"  ,value:'OTHERHOME'},
				],
				current:null,
				cityPickerValueDefault: [0, 0, 1],
				                pickerText: '北京市 市辖区 西城区',
								agree:false
			}
		},
		methods: {
			homeClick(e,c) {
				// console.log(_self)
				_self.current =e
				this.$emit('testOne',c,8,this.dataSix.tid)
				},
				agre() {
					_self.agree=!this.agree
				},
				openAddres() {
					
				                this.$refs.simpleAddress.open();
				            },
				            onConfirm(e) {
								
								var b=e.label.split('-')
								// console.log(e)
								
				                this.pickerText = b[0]+' '+ b[1]+' '+b[2]
				            },
				open(){
				         this.$refs.popup.open()
				      },
				cancel(e) {
					if(e == 'ok'){
						this.agree=true
					}
					if(e == 'no'){
						this.agree=false
					}
					this.$refs.popup.close()
				},
				change(e) {
					console.log('是否打开:' + e.show)
				},
				submit:function () {
					this.$emit('submit')
					
					
				}
		    
		},
		created(){
			_self = this
			
		},
		
	}
</script>
<style scoped>
	.sectionsix{
		font-size: 32rpx;
		font-family: MicrosoftYaHei;
		background: rgba(242,246,249,1);
		height: 100%;
		position: relative;
		}
	.sectionsix-box{
		position: absolute;
		height: 100%;
		width: 100%;
	}
	.sectionsix-hd{
		height: 80rpx;
		margin: 103rpx 55rpx 63rpx;
		background: #FFFFFF;
		color: #000000;
		font-size: 34rpx;
		line-height: 80rpx;
		padding-left: 20rpx;
	}
	.sectionsix-bd{
		margin: 63rpx 100rpx;
		height: 500rpx;
		
		display: flex;
		flex-wrap: wrap;
	}
	.sectionsix-bd view {
		flex: 45%;
		background: #FFFFFF;
		height: 238rpx;
		margin: 10rpx;
	}
	.sectionsix-bd view image{
		width: 172rpx;
		height: 112rpx;
		display: block;
		margin: 25rpx auto;
	}
	.sectionsix-bd view label {
		width: 100%;
		text-align: center;
		font-size: 30rpx;
	}
	.sectionsix-bd view label radio {
		margin-left: 30rpx;
		margin-right: 10rpx;
	}
	/* .input_color {
		color: #dbdbdb;
	} */
	/* .sectionsix-ft-input input{
		margin-left: 40rpx;
		border: 2rpx solid #313131;
		font-size: 22rpx;
		text-align: center;
	}
	.sectionsix-ft-input input:nth-child(3){
		margin-right: 40rpx;
		
	} */
	.sectionsix-ft{
		height: 150rpx;
		background: #FFFFFF;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
	}
	.sectionsix-ft-hd{
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 36rpx;
		letter-spacing: 5rpx;
	}
	.sectionsix-ft-text{
		color: #A5A5A5;
		font-size:22rpx;
		margin: 0 0 0 20rpx;
	}
	.sectionsix-ft-city{
		padding-left: 110rpx;
		font-size: 31rpx;
		margin: 10rpx 0;
	}
	.sectionsix-ft-phone{
		display: flex;
		padding-left: 110rpx;
		margin: 10rpx 0;
	}
	.sectionsix-ft-phone-left{
		flex: 0.8;
		font-size: 33rpx;
		letter-spacing: 5rpx;
	}
	.sectionsix-ft-phone-right{
		flex: 2;
		border: 2rpx solid #E5E5E5;
		margin-right: 40rpx;
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
	/* 提示窗口 */
	.uni-tip {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		padding: 15px;
		width: 200px;
		background-color: #fff;
		border-radius: 10px;
	}
	.uni-tip-title {
			margin-bottom: 10px;
			text-align: center;
			font-weight: bold;
			font-size: 16px;
			color: #333;
		}
	
		.uni-tip-content {
			/* padding: 15px;
	*/
			font-size: 14px;
			color: #666;
		}
	
		.uni-tip-group-button {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			margin-top: 20px;
		}
	
		.uni-tip-button {
			flex: 1;
			text-align: center;
			font-size: 14px;
			color: #3b4144;
		}
	
</style>
