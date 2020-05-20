<template>
	<view class="states-box">
		<text :class="infor.index === index && 'active'" v-for="(item, index) in infor.list" :key="index" @click="stateChange(index)">{{ item.title }}</text>
	</view>
</template>

<script>
	'use scrict';
	
	export default {
		props: {
			infor: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		methods: {
			
			/**
			 * 切换状�
			 */
			stateChange(index) {
				this.$emit('change', {index, item: this.infor.list[index]});
			}
		}
	}
</script>

<style lang="scss" scoped>
	$navHeight: 90rpx;
	
	.states-box {
		width: 100%;
		height: $navHeight;
		background: #f8f8f8;
		display: flex;
		justify-content: space-around;
		align-items: center;
		text {
			text-align: center;
			font-size: 34rpx;
			color: #333333;
			line-height: 50rpx;
		}
		text.active {
			color: $color_primary;
			border-bottom: 5rpx solid $color_primary;
		}
	}
</style>
