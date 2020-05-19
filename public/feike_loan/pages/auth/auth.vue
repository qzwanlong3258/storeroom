<template>
	<view>
	<!-- <view class="container" >
		
			<image class="gxg-logo-nowx" :src="yldLogo"></image>
			<view class="auth-login title-font">
				<i class="iconfont iconshouji border-primary-color"></i>
				<input v-model="param.phone" class="type-input" type="number" maxlength="13" placeholder="手机号码" />
			</view>
			<view class="auth-login title-font code-box">
				<i class="iconfont iconyanzhengma border-primary-color"></i>
				<input v-model="param.code" class="type-input" type="number" maxlength="6" placeholder="验证码" />
				<view class="get-code content-font" @click="getCode">{{codeValue}}</view>
			</view>
			<button class="auth-btn title-font" style="margin-top: 80rpx;" @click='login'>登录</button>
		
	</view> -->
	   <image :src="yldLogo" class="img" mode="widthFix"></iamge>
	   <view style="display: flex;padding: 0 60rpx;margin-bottom: 100rpx;">
		   <i class="iconfont iconshouji border-primary-color" style="padding: 10rpx 10rpx 0;"></i>
		   <input v-model="param.phone" class="type-input" type="number" maxlength="13" style="width: 100%;" placeholder="手机号码" />
	   </view>
	   <view style="display: flex;padding: 0 60rpx;">
		   <i class="iconfont iconyanzhengma border-primary-color" style="padding: 10rpx 10rpx 0;"></i>
		   <input v-model="param.code" class="type-input" type="number" maxlength="6" style="width:calc(100% - 120rpx) ;" placeholder="验证码" />
		   <view class="get-code content-font" @click="getCode">{{codeValue}}</view>
	   </view>
	   
	   <view class="apptMeasureHome_ft">
	   	<view class="btn" @click='login'>登录</view>
	   </view>
	   
	   
	</view>
</template>

<script>
		import notWxAuth from './notWxAuth.js'
		export default {
			...notWxAuth
		}
		
</script>


<style lang="scss" scoped>
	.img{
		width: 130rpx;
		display: block;
		margin: 180rpx auto;
	}
	.apptMeasureHome_ft{
		/* position: absolute;
		left: 0;
		bottom: 20rpx; */
		width: 100%;
		height: 100rpx;
		margin-top: 120px;
		
	}
	.btn{
		height: 80rpx;
		
		text-align: center;
		line-height: 80rpx;
		border-radius: 20px;
		background: #FFE906;
		color: #000000;
		margin-left: 20rpx;
		margin-right: 20rpx;
		box-shadow: 0 2px 5px rgba(0,0,0,0.3);
		font-size: 14px;
		letter-spacing: 2px;
	}
	.container {
		display: flex;
		// justify-content: center;
		align-items: center;
		//小程序
		.gxg-logo {
			position: absolute;
			margin-top: -150upx;
			width: 160upx;
			height: 160upx;
		}
		//除小程序
		.gxg-logo-nowx {
			// position: absolute;
			// top:5%;
			width: 180upx;
			height: 180upx;
			margin: 40upx auto;
		}
		.auth-login {
			// position: absolute;
			width: 80%;
			height: 600upx;
			border-radius: 20upx;
			display: flex;
			justify-content: center;
			i {
				font-size: 50upx;
				line-height: 70upx;
				display: inline-block;
				width: 15%;
				height: 70upx;
				border-top-left-radius: 30upx;
				border-bottom-left-radius: 30upx;
				text-align: center;
			}
			input {
				border-left: none;
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				width: 85%;
			}
		}
		.code-box {
			margin-top: 140upx;
			margin-bottom: 140upx;
			input {
				width: 55%;
				border-left: none;
				border-right: none;
				border-radius: 0;
			}
			.get-code {
				width: 30%;
				height: 70upx;
				line-height: 70upx;
				text-align: center;
				border-top-right-radius: 30upx;
				border-bottom-right-radius: 30upx;
				background: #e8be2e;
				color: #fff;
			}
		}
		.auth-btn {
			position: absolute;
			background: #e8be2e;
			width: 550upx;
			height: 80upx;
			line-height: 80upx;
			color: #fff;
			border-radius: 42upx;
		}
		
	}
	// .btn{
	// 	height: 100rpx;
		
	// 	background: #ffffff;
	// 	display: flex;
	// 	padding-left: 20rpx;
	// 	padding-right: 20rpx;
	// 	margin: 20px 0;
		
	// }
	// .noBtn{
	// 	flex: 48%;
	// 	margin: 10rpx 45rpx;
	// 	background:#FFFFFF;
	// 	color: #000000;
	// 	border: 2rpx solid #E8BE2E;
	// 	height: 80rpx;
	// 	line-height: 80rpx;
	// 	text-align: center;
	// 	border-radius: 40rpx;
	// }
	// .yesBtn{
	// 	flex: 48%;
	// 	margin: 10rpx 45rpx;
	// 	background: #E8BE2E;
	// 	color: #000000;
	// 	height: 80rpx;
	// 	line-height: 80rpx;
	// 	text-align: center;
	// 	border-radius: 40rpx;
	// 	border: 2rpx solid #E8BE2E;
	// }
	.get-code {
		width: 30%;
		height: 70upx;
		line-height: 70upx;
		text-align: center;
		border-top-right-radius: 30upx;
		border-bottom-right-radius: 30upx;
		background: #e8be2e;
		color: #fff;
	}

</style>
