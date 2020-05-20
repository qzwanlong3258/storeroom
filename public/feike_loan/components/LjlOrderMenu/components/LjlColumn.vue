<template>
	<view class="column-box">
		<view :hidden="!infor.count" class="count">{{ infor.count }}</view>
		<image class="icon" :src="infor.state | formatOrderStateIcon" mode="aspectFit" />
		<text class="title">{{infor.state | formatOrderState}}</text>
	</view>
</template>

<script>
	'use strict';
	import { formatOrderState, formatOrderStateIcon } from '@/config/filter.js';
	
	export default {
		props: {
			infor: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		filters: {
			formatOrderState,
			formatOrderStateIcon
		}
	}
</script>

<style lang="scss">
	.column-box {
		width: 100%;
		box-sizing: border-box;
		padding: 12rpx 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		.count {
			position: absolute;
			top: 0;
			right: 0;
			width: 30rpx;
			height: 30rpx;
			border-radius: 50%;
			z-index: 99;
			background: #fad64c;
			line-height: 30rpx;
			text-align: center;
			font-size: .3em;
			color: white;
		}
		.icon {
			width: 40rpx;
			height: 40rpx;
		}
		.title {
			font: 24rpx/34rpx verdana;
			color: #999999;
		}
	}
</style>
