<template>
	<view class="search-box">
		<i class="icon iconfont iconiconfontzhizuobiaozhun22"></i>
		<input type="text" v-model="search.value" placeholder="搜索" placeholder-class="placeholder-class" @input="handSearchValueThrottl" />
	</view>
</template>

<script>
	'use scrict';
	import { SEARCH } from '@/config/image.js';
	import { waterTap } from "@/utils/util.js";
	
	export default {
		data() {
			return {
				search: {
					icon: SEARCH,
					value: ""
				}
			}
		},
		computed: {
			handSearchValueThrottl() {
				return waterTap(this.handSearchValue, 1000);
			}
		},
		methods: {
			handSearchValue() {
				this.$emit("change", this.search.value);
			}
		}
	}
</script>

<style lang="scss">
	$searchHeight: 60rpx;
	
	.search-box {
		position: relative;
		width: 100%;
		height: $searchHeight;
		background: #F2F2F2;
		.icon {
			width: 28rpx;
			height: 28rpx;
			position: absolute;
			left: 20rpx;
			top: 15rpx;
			font-size: 1em;
		}
		input {
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			padding: 7rpx 60rpx;
			font-size: 26rpx;
		}
		.placeholder-class {
			line-height: $searchHeight;
		}
	}
</style>
