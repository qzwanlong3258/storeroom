<template>
	<view :hidden="!isShow" class="no-more-data-box" :style="{animation: isShow ? 'no-data 2s' : ''}">
		<text>没有更多数据了哦！</text>
	</view>
</template>

<script>
	'use scrict';
	import { debounce } from '@/utils/util.js';
	
	export default {
		data() {
			return {
				isShow: false
			}
		},
		computed: {
			handHide() {
				return debounce(() => {this.isShow = false}, 2000);
			}
		},
		methods: {
			show() {
				this.isShow = true;
				this.handHide();
			}
		}
	}
</script>

<style lang="scss">
	.no-more-data-box {
		width: 100%;
		height: 50rpx;
		background-color: #666666;
		text-align: center;
		overflow: hidden;
		animation-fill-mode: forwards;
		text {
			color: #FFFFFF;
			font-size: 26rpx;
		}
	}
	
	@keyframes no-data {
		80% {
			height: 50rpx;
		}
		100% {
			height: 0;
		}
	}
</style>
