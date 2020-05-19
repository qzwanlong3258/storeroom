<template>
	<view>
		<button class="btn-box" @click.capture.self="clickEvent">
			<slot></slot>
		</button>
	</view>
</template>

<script>
	export default {
		methods: {
			clickEvent: function() {
				this.$emit('clickBtn')
			}
		}
	}
</script>

<style>
	.btn-box {
		/* width: 300upx;
		height: 70upx;
		border-radius: 32upx;
		background: #FFEA04;
		color: #fff;
		font-size: 30upx;
		line-height: 70upx;
		text-align: center; */
		
		height: 80rpx;
		
		text-align: center;
		line-height: 80rpx;
		border-radius: 40rpx;
		background: #FFEA04;
		color: #000000;
		margin-left: 20rpx;
		margin-right: 20rpx;
		box-shadow: 0 4rpx 4rpx  rgba(153,153,153,0.3);
		font-size: 28rpx;
		letter-spacing: 4rpx;
	}
</style>
