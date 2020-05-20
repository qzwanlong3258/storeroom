<template>
	<view class="recordDetail">
		<view class="recordDetailCard" :hidden='true'>
			<image class="recordDetailCard_image" :src="img" mode=""></image>
			<view class="recordDetailCard-text">银行打款成功</view>
		</view>
		<view class="recordDetailCardBd">
			<view class="recordDetailCard-hd">申请订单详情</view>
			<view class="recordDetailCard-bd">
				<view class="recordDetailCard-bd-item">
					<view class="recordDetailCard-bd-item-left">借款金额</view>
					<view class="recordDetailCard-bd-item-mid"></view>
					<view class="recordDetailCard-bd-item-right" style="color:#E02F17;"><text v-if="orderList.loanMoney">￥</text>{{orderList.loanMoney|num}}</view>
				</view>
				<view class="recordDetailCard-bd-item">
					<view class="recordDetailCard-bd-item-left">借款期限</view>
					<view class="recordDetailCard-bd-item-mid"></view>
					<view class="recordDetailCard-bd-item-right" style="color: #333333;"><text v-if='orderList.term'>{{orderList.term?orderList.term:''}} 期</text> </view>
				</view>
				<!-- <view class="recordDetailCard-bd-item">
					<view class="recordDetailCard-bd-item-left">利率</view>
					<view class="recordDetailCard-bd-item-mid"></view>
					<view class="recordDetailCard-bd-item-right" style="color:#E02F17;">0.6%</view>
				</view> -->
				<!-- <view class="recordDetailCard-bd-item">
					<view class="recordDetailCard-bd-item-left">产品类型</view>
					<view class="recordDetailCard-bd-item-mid"></view>
					<view class="recordDetailCard-bd-item-right">合作产品</view>
				</view> -->
				<view class="recordDetailCard-bd-item" v-if='bankData.name'>
					<view class="recordDetailCard-bd-item-left">放款机构</view>
					<view class="recordDetailCard-bd-item-mid"></view>
					<view class="recordDetailCard-bd-item-right">{{bankData.name}}</view>
				</view>
				<view class="recordDetailCard-bd-item">
					<view class="recordDetailCard-bd-item-left">借款单号</view>
					<view class="recordDetailCard-bd-item-mid"></view>
					<view class="recordDetailCard-bd-item-right">20190102001</view>
				</view>
				<view class="recordDetailCard-bd-item">
					<view class="recordDetailCard-bd-item-left">申请时间</view>
					<view class="recordDetailCard-bd-item-mid"></view>
					<view class="recordDetailCard-bd-item-right">{{orderList.lastTime|time}}</view>
				</view>
				<view class="recordDetailCard-bd-item">
					<view class="recordDetailCard-bd-item-left">进度</view>
					<view class="recordDetailCard-bd-item-mid"></view>
					<view class="recordDetailCard-bd-item-right">{{orderList.state|arry}}</view>
				</view>
			</view>
		</view>
		<view class="recordDetailCardBd" v-if="bankData.name">
			<view class="recordDetailCard-hd">银行信息</view>
			<view class="recordDetailCard-bd">
				<map style="width: 94%; height: 150px;margin-left:3%" scale="20" :latitude="latitude" :longitude="longitude" :markers="covers"></map>
				<view class="recordDetailCard-bd-text" style="margin: 20rpx 0;">{{bankData.name}}</view>
				<view class="recordDetailCard-bd-text" style="padding-bottom: 40rpx; font-weight: 400;">{{bankData.address}}</view>
			</view>
		</view>
		<view class="recordDetailCardBd" v-if="faceMemberData.nickName">
			<view class="recordDetailCard-hd">面签员信息</view>
			<view class="recordDetailCard-bd recordDetailCardBd-bd">
				<view class="recordDetailCard-bd-left">
				   <image :src="faceMemberData.avatarUrl" class="recordDetailCard-bd-left-img" mode="aspectFill">
			   </view>
				<view class="recordDetailCard-bd-right">{{ faceMemberData.nickName }}</view>
			</view>
			<view class="recordDetailCard-bd-item">
				<view class="recordDetailCard-bd-item-left">面签时间</view>
				<view class="recordDetailCard-bd-item-mid"></view>
				<view class="recordDetailCard-bd-item-right">{{ faceMemberData.lastTime|time }}</view>
			</view>
			<view class="recordDetailCardBd-ft" style="text-align: center;padding: 10rpx;">
				<icon class="iconfont icondianhua icondianhuaclass" @click="phone(faceMemberData.phone)"></icon>
				<text style="font-size: 26rpx;margin-left: 10rpx;">致电面签员</text>
			</view>
		</view>
		<view class="recordDetailCardBd" v-if="periodList.length !==0">
			<view class="recordDetailCard-hd">放款管理</view>
			<view class="recordDetailCard_ft" v-for='(item,index) in periodList' :key='index'>
				<view class="recordDetailCard_ft-title">
					{{item.list[0].name}}
				</view>
				<scroll-view class="scroll-view_H" scroll-x="true">
					<view class="scroll-view-item_H" v-for="(value, ind) in item.list" :key="ind">
						<view class="scroll-view-item_H_img">
							<image :src="value.photo" mode=""></image>
							<view class="iconfont  iconpaizhao scroll-view-item_H_icon" :hidden="value.photo != ''"></view>
						</view>
						<view>{{ value.locationName }}</view>
					</view>
				</scroll-view>

				
				
			</view>
			<!-- <view class="recordDetailCard_ft">
				<view class="recordDetailCard_ft-title">
					水电期
				</view>
				<scroll-view class="scroll-view_H" scroll-x="true">
					<view class="scroll-view-item_H" v-for="(huadong, index) in huadongs" :key="index">
						<view @click="chooseimage" class="scroll-view-item_H_img">
							<image :src="tempFilePaths" mode=""></image>
							<view class="iconfont  iconpaizhao scroll-view-item_H_icon" :hidden="tempFilePaths != ''"></view>
						</view>
						<view>{{ huadong.name }}</view>
					</view>
				</scroll-view>
			</view> -->
		</view>
		
		<button type="primary" @click="btn"></button>
	</view>
</template>

<script>
'use scrict';
import { SUCCESSPAY ,COMPANY_LOGO } from '@/config/image.js';
import { getCheckIn, checkIn } from '@/api/tabbar/mine.js';
import { getStorage } from '@/utils/storage.js';
import { loanListDetail, loanBank, loanFaceMember, loanPeriod } from '@/api/todoChild/loan.js';

import {
		makePhoneCall
	} from '@/config/package.js';

var _self;

export default {
	data() {
		return {
			orderList:[],
			periodList:[],
			bankData:{},
			faceMemberData:{},
			img: SUCCESSPAY,
			imglogo:COMPANY_LOGO,
			latitude: 34.199315,
			longitude: 108.881563,
			covers: [
				{
					id: 1,
					latitude: 34.199315,
					longitude: 108.881563,
					label: {
						content: '渤海银行',
						color: '#ddd',
						borderRadius: 12,
						bgColor: '#000',
						padding: 6,
						display: 'ALWAYS',
						textAlign: 'center'
					},
					iconPath: '../../../static/location.png'
				}
			],
			
			userInfo: {},
			
			tempFilePaths: '',
			huadongs: [
				{ img: 'tempFilePaths', name: '舟舟', info: 'xxxxxxxx' },
				{ img: 'tempFilePaths', name: '舟舟', info: 'xxxxxxxx' },
				{ img: 'tempFilePaths', name: '舟舟', info: 'xxxxxxxx' },
				{ img: 'tempFilePaths', name: '舟舟', info: 'xxxxxxxx' },
				{ img: 'tempFilePaths', name: '舟舟', info: 'xxxxxxxx' },
				{ img: 'tempFilePaths', name: '舟舟', info: 'xxxxxxxx' }
			],
			
		};
	},
	filters:{
		num(val){
			if(!val){
				return ''
			}
			return Number(val).toFixed(2)
		},
		arry(val){
			let b=["待预审" ,"预审通过（待面签）","预审没过", "面签通过", "面签未通过"]
			let e=Number(val) - 1
			return b[e]
		},
		bank(val){
			let b=["渤海银行"]
			let e=Number(val) - 1
			return b[e]
		},
		time(val){
			if(!val){
				return ''
			}
			var time = new Date(val);
			    
			      function timeAdd0(str) {
			        if (str < 10) {
			          str = '0' + str;
			        }
			        return str
			      }
			      var y = time.getFullYear();
			      var m = time.getMonth() + 1;
			      var d = time.getDate();
			      var h = time.getHours();
			      var mm = time.getMinutes();
			      var s = time.getSeconds();
			      return y + '-' + timeAdd0(m) + '-' + timeAdd0(d) + ' ' + timeAdd0(h) + ':' + timeAdd0(mm) + ':' + timeAdd0(s);
		}
	},
	methods: {
		phone(e){
			makePhoneCall({
				phone: e
			})
		},
		
		// 选择照片
		chooseimage: function() {
			var _this = this;
			uni.chooseImage({
				count: 9, // 默认9
				sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				success: function(res) {
					// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
					_self.tempFilePaths = res.tempFilePaths;
				}
			});
		},
		
	},
	onLoad: async function(options) {
		
		this.userInfo = getStorage('userInfo');
		console.log(this.userInfo);
		_self = this;
		console.log(options)
		// 获取订单信息
		let v = await loanListDetail({orderid:options.id})
		console.log(v)
		_self.orderList = v.order[0]
		if(v.period.length){
			for(let i =0;i<v.period.length;i++){
				_self.periodList.push(await loanPeriod({uuid:v.period[i].uuid}))
			}
		}
		console.log(_self.periodList)
		
		// 获取银行信息
		let r = await loanBank({orderid:options.id})
		_self.bankData=r.list[0]
		if(r.list[0].name = "渤海银行"){
			_self.latitude=34.199315
			_self.longitude=108.881563
			
			_self.covers[0].latitude=34.199315
			_self.covers[0].longitude=108.881563
			_self.covers[0].label.content = "渤海银行"
		}
		console.log(r)
		// 获取面签员
		let f =await loanFaceMember({orderid:options.id})
		_self.faceMemberData =f.list[0]
		console.log(f)
		
	},
	components: {
		// ApplicationInput
		
	}
};
</script>
<style>
	page{
		background: rgba(242, 246, 249, 1);
	}
</style>
<style scoped>
.recordDetail {
	font-size: 32rpx;
	
}
.recordDetailCard {
	margin: 48rpx 15rpx;
	height: 231rpx;
	background: #ffffff;
	border-radius: 20rpx;
	box-shadow: 0 5rpx 10rpx 4rpx rgb(0, 0, 0, 0.1);
	overflow: hidden;
	position: relative;
}
.recordDetailCardBd {
	margin: 48rpx 15rpx;
	/* height: 231rpx; */
	background: #ffffff;
	border-radius: 20rpx;
	box-shadow: 0 2px 2px  rgba(153,153,153,0.3);
}
.recordDetailCard_image {
	width: 100%;
	height: 100%;
	display: block;
	position: absolute;
}
.recordDetailCard-text {
	position: absolute;
	width: 100%;
	height: 100%;
	line-height: 231rpx;
	text-align: center;
	font-size: 50rpx;
	color: #ffffff;
}
.recordDetailCard-hd {
	height: 54rpx;
	border-bottom: 2rpx solid #e6e6e6;
	font-size: 28rpx;
	color: #333333;
	line-height: 54rpx;
	font-weight: bold;
	padding-left: 20rpx;
}
.recordDetailCard-bd-item {
	height: 54rpx;
	display: flex;
}
.recordDetailCard-bd-item-left {
	flex-basis: 150rpx;
	font-size: 27rpx;
	color: #666666;
	margin-left: 10rpx;
}
.recordDetailCard-bd-item-mid {
	flex: 40%;
}
.recordDetailCard-bd-item-right {
	flex: 60%;
	font-size: 27rpx;
	color: #666666;
}
.recordDetailCard-bd-text {
	height: 54rpx;
	font-size: 28rpx;
	color: #333333;
	line-height: 54rpx;
	font-weight: bold;
	padding-left: 20rpx;
}
.recordDetailCardBd-bd {
	padding: 20rpx;
	display: flex;
}
.recordDetailCard-bd-left {
	flex-basis: 120rpx;
	width: 120rpx;
	height: 120rpx;
	border-radius: 50%;
	overflow: hidden;
}
.recordDetailCard-bd-left image {
	width: 140rpx;
	height: 140rpx;
	display: block;
	margin-top: -10rpx;
	margin-left: -10rpx;
}
.recordDetailCard-bd-right {
	flex: 1;
	line-height: 80rpx;
	padding: 20rpx;
	font-size: 30rpx;
	font-weight: 700;
}
.icondianhuaclass {
	color: #1296db;
}
.application_ft {
	height: 587rpx;
	padding: 0 16rpx 0 16rpx;
	background: rgba(255, 255, 255, 1);
}
.uni-input-style {
	width: 100%;
}
.input_color {
	color: #dbdbdb;
}
.iconclass {
	position: absolute;
	right: 0;
}
.scroll-view_H {
	/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
	white-space: nowrap;
	width: 100%;
}
.scroll-view-item_H {
	display: inline-block;
	width: 159rpx;
	height: 195rpx;
	text-align: center;
	margin: 2% 1% 2% 1%;
}

.scroll-view-item_H_icon {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}
.scroll-view-item_H view {
	box-sizing: border-box;
}
.scroll-view-item_H view:nth-child(1) {
	width: 100%;
	height: 146rpx;
	position: relative;
	background: rgba(229, 229, 229, 1);
	border-radius: 10rpx;
}
.scroll-view-item_H view:nth-child(1) image {
	width: 100%;
	height: 146rpx;
	border-radius: 10rpx;
	display: block;
}
.scroll-view-item_H view:nth-child(2) {
	width: 100%;
	height: 49rpx;
}
.recordDetailCard_ft-title{
	color: #666666;
	font-size: 26rpx;
	padding: 10rpx;
}

</style>
