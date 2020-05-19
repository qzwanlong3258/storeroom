<template>
	<view class="nav-box">
		<image class="avatar" :src="userInfo.avatarUrl" model="aspectFit"></image>
		<text v-if="middle === 'nickName'" class="nick-name">{{userInfo.nickName}}</text>
		<view v-if="middle === 'member'" class="member">
			<text class="top">{{userInfo.nickName}} {{userInfo.level}}</text>
			<text class="bottom">加入时间: {{userInfo.joinTime}}</text>
		</view>
		<button v-if="middle === 'nickName'" class="check-in" data-tab="open" @click="handerCheckInChange">{{userInfo.checkIn ? "已签到" : "签到有礼"}}</button>
		<view class="check-in-barrage" :style="{visibility: checkIn.isShow ? 'visible' : 'hidden'}">
			<view class="checkImg">
				<image class="img" :src="checkIn.url" model="aspectFit"></image>
				<text class="font">签到成功，今日已领<text>1</text>积分</text>
			</view>
			<image class="cross" data-tab="close" :src="checkIn.crossUrl" model="aspectFit" @click="handerCheckInChange"></image>
		</view>
	</view>
</template>

<script>
	'use scrict';
	import { CHECK_IN, CROSS } from "@/config/image.js";
	import { checkIn } from '@/api/tabbar/mine.js';
	import { model } from '@/config/package.js';
	
	export default {
		data() {
			return {
				checkIn: {
					isShow: false,
					url: CHECK_IN,
					crossUrl: CROSS
				}
			}
		},
		props: {
			userInfo: {
				type: Object,
				default() {
					return {};
				}
			},
			middle: {
				type: String,
				default: "nickName"
			}
		},
		methods: {
			
			/**
			 * 签到
			 */
			handCheckIn: async function() {
				let res = await checkIn();
				Number(res.count) !== 1 && ((res = null), await model({ content: "签到失败，请刷新重试", showCancel: false }));
				return res;
			},
			
			/**
			 * 处理签到
			 */
			handerCheckInChange: async function(e) {
				if (this.userInfo.checkIn && !this.checkIn.isShow) return;
				e.target.dataset.tab === "open" && (await this.handCheckIn(), this.$emit('checkIn'));
				this.checkIn.isShow = !this.checkIn.isShow;
				this.checkIn.isShow ? uni.hideTabBar() : uni.showTabBar();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav-box {
		width: 100%;
		height: 250rpx;
		background: #FAD64C;
		display: flex;
		z-index: -1;
		.avatar {
			width: 112rpx;
			height: 112rpx;
			border-radius: 50%;
			margin: 28rpx 0 0 42rpx;
		}
		.nick-name {
			font: 48rpx/66rpx verdana;
			color: white;
			margin: 52rpx 0 0 26rpx;
		}
		.member {
			display: flex;
			flex-direction: column;
			margin: 40rpx 0 0 25rpx;
			color: white;
			text + text {
				margin-top: 10rpx;
			}
		}
		.check-in {
			width: 192rpx;
			height: 66rpx;
			background: #FFF566;
			border-radius: 33rpx;
			position: absolute;
			top: 52rpx;
			right: 22rpx;
			color: #EC233B;
			font: 32rpx/66rpx verdana;
			font-weight: bold;
		}
		.check-in-barrage {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: rgba(#000000, 0.7);
			z-index: 99;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.checkImg {
				width: 550rpx;
				height: 400rpx;
				position: relative;
				.img {
					width: 100%;
					height: 100%;
				}
				.font {
					position: absolute;
					top: 70%;
					left: 14%;
					text {
						display: inline-block;
						color: #D63754;
						font-size: 36rpx;
						width: 50rpx;
						text-align: center;
					}
				}
			}
			.cross {
				margin-top: 100rpx;
				width: 100rpx;
				height: 100rpx;
			}
		}
	}
</style>
