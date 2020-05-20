<template>
	<view class="menu-item-box">
		<image class="icon" :src="infor.icon" mode="aspectFit" />
		<text class="title">{{infor.title}}</text>
	</view>
</template>

<script>
	'use scrict';
	
	export default {
		props: {
			infor: {
				type: Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.menu-item-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		.icon {
			width: 60rpx;
			height: 60rpx;
		}
		.title {
			display: block;
			color: #666666;
			font-size: 26rpx;
			margin-top: 15rpx;
		}
	}
</style>
