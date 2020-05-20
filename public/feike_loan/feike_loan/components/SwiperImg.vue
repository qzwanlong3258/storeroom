<template>
	<view>
		<swiper class="swiper" :style="{height:`${heightNum}rpx`}" :autoplay='autoplay' :circular='circular'  @change='changeDot'>
			<swiper-item v-for="(item,index) in imgList" :key="index" @click="linkToPage(item.url)">
				<view class="swiper-item">
					<image :src="item.img"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class='show-swiper'>
			<view v-for="(item,index) in imgList.length" :key="index" v-bind:class="[{'swiper-dot-active':index===dotIndex},'swiper-dot']"></view>
		</view>
	</view>
</template>

<script>
	// import { HOME_DEMO ,BANNER_ONE,BANNER_TWO,BANNER_THREE,BANNER_FOUR} from '@/config/image.js';
	import { BANK_DETAIL,TO_WEB} from '@/config/router.js';
	export default {
		props: {
			imgList: {
				type: Array,
			},
			heightNum: {
				type: Number,
				default: 662
			},
			autoplay: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				dotIndex: 0,
				circular: true,
				// imgList: [{'img': BANNER_TWO},{'img': BANNER_THREE},{'img': BANNER_FOUR}],
			};
		},
		methods: {
			changeDot: function(e) {
				this.dotIndex = e.detail.current
			},
			linkToPage: function(e) {
				if(!e){return}
				var testmsg=e.substring(e.lastIndexOf('.')+1)
				        const extensio = testmsg === 'jpg'
				        const extensio2 = testmsg === 'png'
				        const extensio3 = testmsg === 'jpeg'
				        if(extensio || extensio2 || extensio3) {
				          uni.navigateTo({ url: `${BANK_DETAIL}?id=${e}` });
				        } else {
							
						 uni.navigateTo({ url: `${TO_WEB}?id=${e}` });
						}
				
			}
		},
	}
</script>

<style lang="scss" scoped>
	.swiper {
		width: 100%;

		.swiper-item {
			width: 100%;
			height: 100%;
			position: relative;
			image {
				width: 100%;
				height: 100%;
			}
		}

	}

	.show-swiper {
		position: absolute;
		z-index: 3;
		width: 100%;
		height: 30rpx;
		margin: -30rpx auto 0;
		display: flex;
		justify-content: center;

		.swiper-dot {
			width: 70rpx;
			height: 14rpx;
			border-radius: 20rpx;
			background: #eee;
			border: 1upx solid #eee;
			&.swiper-dot:not(:first-child) {
				margin-left: 8rpx;
			}
		}
		.swiper-dot-active {
			background: rgb(223,54,93);
			color: #fff;
		}
	}
</style>
