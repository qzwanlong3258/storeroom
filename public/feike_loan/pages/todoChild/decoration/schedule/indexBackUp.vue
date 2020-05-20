<template>
	<view class="schedule">
		<ljl-states :infor="states" @change="stateChange"  />
		<view class="schedule-left" :hidden='states.index==1'><view class="scheduleCard" >
			<view class="scheduleCard-top" style="height: 50%;border-bottom:4rpx solid #F0F0F0 ;">
				<view class="scheduleCard-top-left">
					<image :src="userInfo.avatarUrl" class="scheduleCard-top-left-img" mode="aspectFill">
				</view>
				<view class="scheduleCard-top-mid">
					<view class="scheduleCard-top-mid-top" style="font-size: 31rpx;padding: 10rpx;">{{userInfo.nickName}}</view>
					<view class="scheduleCard-top-mid-bottom" style="font-size: 28rpx;padding-left: 10rpx;;color:#999999">电话：{{userInfo.phone}}</view>
				</view>
				<view class="scheduleCard-top-right">
					<view class="scheduleCard-top-right-success">
						<view class="scheduleCard-top-right-success-circle">
							20%
						</view>
					</view>
					<view class="scheduleCard-top-right-fail">
						
					</view>
				</view>
			</view>
			<view class="scheduleCard-bottom" style="height: 50%;">
				<view class="scheduleCard-bottom-top" style="height: 50%;">
					<view>贷款额</view>
					<view>贷款日期</view>
					<view>正在进行</view>
				</view>
				<view class="scheduleCard-bottom-bottom" style="height: 50%;">
					<view style="font-size: 32rpx;color: #C4282B;">500000元</view>
					<view style="font-size: 30rpx;color: #333333;">2019-08-25</view>
					<view style="font-size: 30rpx;color: #333333;padding-left: 40rpx;">提交申请</view>
				</view>
			</view>
		</view></view>
		<view class="schedule-right" :hidden='states.index==0'><view class="scheduleCard" >
			<view class="scheduleCard-top" style="height: 50%;border-bottom:4rpx solid #F0F0F0 ;">
				<view class="scheduleCard-top-left">
					<image :src="userInfo.avatarUrl" class="scheduleCard-top-left-img" mode="aspectFill">
				</view>
				<view class="scheduleCard-top-mid">
					<view class="scheduleCard-top-mid-top" style="font-size: 31rpx;padding: 10rpx;">{{userInfo.nickName}}</view>
					<view class="scheduleCard-top-mid-bottom" style="font-size: 28rpx;padding-left: 10rpx;;color:#999999">电话：{{userInfo.phone}}</view>
				</view>
				<view class="scheduleCard-top-right">
					<!-- <view class="scheduleCard-top-right-success">
						<view class="scheduleCard-top-right-success-circle">
							20%
						</view>
					</view> -->
					<view class="scheduleCard-top-right-fail">
						<text style="color: #C4282B;">照片不清晰</text>
						<icon class="iconfont iconfenxiang"></icon>
					</view>
				</view>
			</view>
			<view class="scheduleCard-bottom" style="height: 50%;">
				<view class="scheduleCard-bottom-top" style="height: 50%;">
					<view>贷款额</view>
					<view>贷款日期</view>
					<view>正在进行</view>
				</view>
				<view class="scheduleCard-bottom-bottom" style="height: 50%;">
					<view style="font-size: 32rpx;color: #C4282B;">500000元</view>
					<view style="font-size: 30rpx;color: #333333;">2019-08-25</view>
					<view style="font-size: 30rpx;color: #333333;padding-left: 40rpx;">提交申请</view>
				</view>
			</view>
		</view>
		</view>
		
	</view>
</template>


<script>
	'use scrict';
	import LjlStates from '@/components/LjlStates';
	import { getCheckIn, checkIn } from '@/api/tabbar/mine.js';
	import { getStorage } from '@/utils/storage.js';
	
	export default {
		data() {
			return {
				states: {
					index: 0,
					list: [ { title: '正常', nullContent: "暂无客户" }, { title: '非正常', nullContent: "暂无设计师" }]
				},
				userInfo:{},
			}
		},
		onLoad: async function() {
			this.userInfo = getStorage('userInfo');
			console.log(this.userInfo)
		},
		methods: {
			/**
			 * 切换状态
			 */
			stateChange: async function({ index }) {
				this.states.index = index;
				this[`stateTo${index}`] && this[`stateTo${index}`]();
			}
		},
		components: {
			LjlStates
		}
	}
</script>

<style>
	.schedule{
	font-size: 32rpx;
	background: rgba(242,246,249,1);}
	
	.scheduleCard{
		margin: 48rpx 15rpx;
		height: 231rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		box-shadow: 0 5rpx 10rpx 4rpx rgb(0,0,0,0.1);
		overflow: hidden;
		padding: 20rpx;
	}
	.scheduleCard-top{
		padding-bottom: 10rpx;
		display: flex;
	}
	.scheduleCard-top-left{
		flex-basis: 120rpx;
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		overflow: hidden;
	}
	.scheduleCard-top-left image{
		width: 140rpx;
		height: 140rpx;
		display: block;
		margin-top: -10rpx;
		margin-left: -10rpx;
	}
	.scheduleCard-top-mid{
		flex: 1;
		
	}
	.scheduleCard-top-right{
		flex-basis: 180rpx;
	}
	.scheduleCard-top-right-success{
		padding-left: 54rpx;
		
	}
	.scheduleCard-top-right-success-circle{
		width: 98rpx;
		height: 98rpx;
		border: 8rpx solid rgba(230,230,230,1);
		border-radius: 50%;
		line-height: 98rpx;
		text-align: center;
	}
	.scheduleCard-bottom-top{
		display: flex;
	}
	.scheduleCard-bottom-top view{
		flex: 1;
		padding: 20rpx 0 0 20rpx;
		font-size: 28rpx;
		color: #999999;
	}
	.scheduleCard-bottom-bottom{
		display: flex;
	}
	.scheduleCard-bottom-bottom view{
		flex: 1;
	}
	
	
	
</style>
