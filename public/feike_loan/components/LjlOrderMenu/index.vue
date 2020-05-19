<template>
	<view class="menu-box">
		<view v-if="header" class="header">
			<text class="title">我的订单</text>
			<view class="link" @click="handChilck">查看全部订单<image class="icon" :src="img.RIGHT" /></view>
		</view>
		<view class="content" @click="handChilck">
			<ljl-column :infor="item" class="column" v-for="(item, index) in list" :key="index" :data-index="index" />
		</view>
	</view>
</template>

<script>
'use strict';
import LjlColumn from './components/LjlColumn.vue';
import { RIGHT } from '@/config/image.js';

export default {
	data() {
		return {
			img: {
				RIGHT
			}
		}
	},
	props: {
		header: {
			type: Boolean,
			default() {
				return true;
			}
		},
		list: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	methods: {
		handChilck(e) {
			let index = e.target.dataset.index || 0;
			this.$emit("change", this.list[index].state);
		}
	},
	components: {
		LjlColumn
	}
};
</script>

<style lang="scss" scoped>
.menu-box {
	background: white;
	.header {
		height: 60rpx;
		box-sizing: border-box;
		padding: 10rpx 20rpx;
		display: flex;
		.title {
			font: 28rpx/40rpx verdana;
			color: #333333;
		}
		.link {
			font: 24rpx/34rpx verdana;
			color: #999999;
			position: absolute;
			right: 20rpx;
			.icon {
				margin-left: 6rpx;
				width: 12rpx;
				height: 22rpx;
			}
		}
	}
	.content {
		height: 100rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
}
</style>
