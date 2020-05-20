<template>
	<view style="position: relative;">
		<view style="position: absolute;right: 10rpx;top: 10rpx;z-index: 1;">
			<image :src="imgback" mode="widthFix" @click="Back" style="width: 120rpx"></image>
		</view>
		<view v-if="dataList.length">
			
		
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
			
			
			<view class="box-content" :data-id="item.id" v-for="(item,index) in dataList" @click="linkRecordDetail" :key="index">
				<view style="height: 70%;display: flex;align-items: center;">
					<view class="btn" >申请金额</view>
					<view class="btn" >申请期限</view>
				</view>
				<view style="height: 30%;display: flex;align-items: center;">
					<view class="text" >{{item.loanMoney|num}}
</view>
					<view class="text" >{{item.term}}</view>
				</view>
				<view class="iconfont iconyou iconclass" ></view>
			</view>
		</view>
		</view>
		<null-data v-if="!dataList.length" class="nullData_view" />
	</view>
</template>

<script>
'use strict';
import {BOTTOM_JIANTOU} from '@/config/image.js'



import NullData from '@/components/NullData.vue';
import { LOAN_RECORD_Detail } from '@/config/router.js';
import { BANK_LOGO ,BACK_IMG} from '@/config/image.js';
import { loanList } from '@/api/todoChild/loan.js'
var _self;
export default {
	data() {
		return{
			img:BOTTOM_JIANTOU,
			nullContent: '暂无数据',
			show: true,
			dataList:[],
			imgback:BACK_IMG
		}
	},
	filters:{
		num(val){
			return Number(val).toFixed(2)
		}
	},
	components: {
		NullData
	},
	methods:{
		
		
		Back(){
			uni.navigateBack({
				delta:1
			})
		},
		linkRecordDetail(e) {
			console.log(e)
			uni.navigateTo({ 
				url:`${LOAN_RECORD_Detail}?id=${e.currentTarget.dataset.id}`,
			});
		}
		
	},
	async onLoad (options){
		_self =this
		let p =[]
		 let v = await loanList({status:1})
		 console.log(v)
		 p.push(...v.list)
		 let a = await loanList({status:2})
		 console.log(a)
		 p.push(...a.list)
		 let b = await loanList({status:4})
		 console.log(b)
		 p.push(...b.list)
		 let c = await loanList({status:3})
		 console.log(b)
		 p.push(...c.list)
		 let d = await loanList({status:5})
		 console.log(b)
		 p.push(...d.list)
		 _self.dataList =p
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
		padding: 200rpx 30rpx;
	}
	.img{
		position: absolute;
		left:calc(50% - 40rpx) ;
		width: 80rpx;
		top:0 ;
		transform: translateY(-40rpx);
	}
	.box-content{
		background: #F0EFED;
		width: 100%;
		height: 200rpx;
		position: relative;
		margin-bottom: 20rpx;
	}
	.btn{
		width: 100%;height: 60rpx;background:#FEE50E ;border-radius: 30rpx;flex: 1;margin: 0 40rpx;font-size: 28rpx;color: #333333;line-height: 60rpx;text-align: center;
	}
	.text{
		width: 100%;height: 100%;flex: 1;line-height: 10rpx;text-align: center;margin:0 40rpx;font-size: 28rpx;color: #333333;
	}
	.iconclass{
		position: absolute;
		right: 1rpx;
		top: 50%;
		transform:translateY(-50%) ;
		color: #666666;
	}
</style>
