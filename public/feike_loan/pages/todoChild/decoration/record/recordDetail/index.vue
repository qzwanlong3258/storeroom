<template>
	<view style="position: relative;">
		
			
		<view style="position: absolute;right: 10rpx;top: 10rpx;z-index: 1;">
			<image :src="imgback" mode="widthFix" @click="Back" style="width: 120rpx"></image>
		</view>
		<view style="position: absolute;width: 100%;height: 100%;">
		<view class="bg">
		
		</view>
		<view style="display: flex;justify-content: space-between;">
			<view class="triangleLeft">
			</view>
			<view class="triangleRight">
			</view>
		</view>
		
		
		
		</view>
		
		<view class="box">
			<image :src="img" mode="widthFix" class="img"></image>
			
			<!-- <view class="box-content" > -->
				<view class="boxl">
					<view class="box-left">申请金额</view>
					<view class="box-right">
						{{orderList.loanMoney|num}}
					</view>
				</view>
				<view class="boxl">
					<view class="box-left">申请期限</view>
					<view class="box-right">
						{{orderList.term?orderList.term:''}} 期
					</view>
				</view>
				<view class="boxl" v-if='bankData.name'>
					<view class="box-left">放款机构</view>
					<view class="box-right">
						{{bankData.name}}
					</view>
				</view>
				<view class="boxl">
					<view class="box-left">申请单号</view>
					<view class="box-right">
						{{orderList.id}}
					</view>
				</view>
				
				
				
				<view class="boxl">
					<view class="box-left">申请时间</view>
					<view class="box-right">
						{{orderList.lastTime|time}}
					</view>
				</view>
				<view class="boxl">
					<view class="box-left">当前进度</view>
					<view class="box-right">
						{{orderList.state|arry}}
					</view>
				</view>
			<!-- </view> -->
		</view>
		
		<!-- <null-data v-if="!dataList.length" class="nullData_view" /> -->
	</view>
</template>

<script>
'use strict';
import { getCheckIn, checkIn } from '@/api/tabbar/mine.js';
import { getStorage } from '@/utils/storage.js';
import { loanListDetail, loanBank, loanFaceMember, loanPeriod } from '@/api/todoChild/loan.js';
import {BOTTOM_JIANTOU,BACK_IMG} from '@/config/image.js'
var _self;
export default {
	data() {
		return{
			img:BOTTOM_JIANTOU,
			imgback:BACK_IMG,
			orderList:[],
			periodList:[],
			bankData:{},
			faceMemberData:{},
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
		}
		
		
	},
	filters:{
		num(val){
			if(!val){
				return ''
			}
			return Number(val).toFixed(2)
		},
		arry(val){
			let b=["待预审" ,"预审通过（待面签）","预审失败", "面签通过", "面签失败"]
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
	
	methods:{
		
		Back(){
			uni.navigateBack({
				delta:1
			})
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
		if(r.list[0]){
			if(r.list[0].name == "渤海银行"){
				_self.latitude=34.199315
				_self.longitude=108.881563
				
				_self.covers[0].latitude=34.199315
				_self.covers[0].longitude=108.881563
				_self.covers[0].label.content = "渤海银行"
			}
			}
		
		console.log(r)
		// 获取面签员
		let f =await loanFaceMember({orderid:options.id})
		_self.faceMemberData =f.list[0]
		console.log(f)
		
	},
};
</script>
<style>
	page{
		background: #FFFFFF;
	}
</style>
<style scoped>
	.bg{
		background: #FEE614;
		height: 500rpx;
		
	}
	.triangleLeft{
		 width: 0;
		    height: 0;
		    border-top: 80rpx solid #FEE614;
		    border-left: 200rpx solid transparent;
	}
	.triangleRight{
		width: 0;
		   height: 0;
		   border-bottom: 80rpx solid transparent;
		   border-left: 200rpx solid  #FEE614;
	}
	.box{
		position: absolute;
		width: 650rpx;
		/* height: 300rpx; */
		box-shadow: 0 0 5px rgba(0,0,0,0.3);
		left: 50%;
		transform: translateX(-50%);
		top: 110rpx;
		background: #FFFFFF;
		padding: 100rpx 30rpx;
	}
	.img{
		position: absolute;
		left:calc(50% - 40rpx) ;
		width: 80rpx;
		top:0 ;
		transform: translateY(-40rpx);
	}
	.box-content{
		/* background: #F0EFED; */
		width: 100%;
		height: 400rpx;
		/* position: relative; */
		/* margin-bottom: 20rpx; */
	}
	/* .btn{
		width: 100%;height: 60rpx;background:#FEE50E ;border-radius: 30rpx;flex: 1;margin: 0 40rpx;font-size: 28rpx;color: #333333;line-height: 60rpx;text-align: center;
	}
	.text{
		width: 100%;height: 100%;flex: 1;line-height: 10rpx;text-align: center;margin:0 40rpx;font-size: 28rpx;color: #333333;
	} */
	.iconclass{
		position: absolute;
		right: 1rpx;
		top: 50%;
		transform:translateY(-50%) ;
		color: #666666;
	}
	.boxl{
		padding: 20rpx 40rpx 20rpx 20rpx;
		display: flex;
		font-size: 28rpx;
		border-bottom: 2rpx solid #F1F1F1;
		margin-bottom: 40rpx;
	}
	.box-left{
		flex-basis: 200rpx;
		color: #333333;
		text-align: left;
	}
	.box-right{
		flex: 1;
		color: #666666;
		text-align: right;
	}
</style>
