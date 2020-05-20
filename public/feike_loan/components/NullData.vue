<template>
	<view class="nullData_view">
		<image class="nullData_image" :src="imgs.NULL_DATA" mode="aspectFit"></image>
		<text class="nullData_text">{{content}}</text>
	</view>
</template>

<script>
'use scrict';
import { NULL_DATA } from '@/config/image.js';

export default {
	data() {
		return {
			imgs: {
				NULL_DATA
			}
		};
	},
	props: {
		content: {
			type: String,
			default: "暂无数据"
		}
	}
};
</script>

<style lang="scss">
.nullData_image {
	width: 100%;
	height: 300rpx;
}
.nullData_text {
	display: block;
	width: 100%;
	text-align: center;
}
</style>
