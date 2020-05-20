<template>
	<view class="applicationInput_view-box">
		<text class="application_text-inner title">{{infor.title}}:</text>
		<input class="application_text-inner content" :value="infor.content" :placeholder="'请输入'+infor.title" @input="valueChange" />
	</view>
</template>

<script>
	'use scrict';
	
	export default {
		data() {
			return {
				
			}
		},
		props: {
			infor: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		methods: {
			valueChange(e) {
				console.log(e);
			}
		}
	}
</script>

<style lang="scss">
	.applicationInput_view-box {

	}
	.application_text-inner {
		line-height: 150rpx;
	}
</style>
