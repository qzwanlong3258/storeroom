<template>
	<view class="schedule" >
		<view style="position: absolute;right: 10rpx;top: 10rpx;">
			<image :src="imgback" mode="widthFix" @click="Back" style="width: 120rpx"></image>
		</view>
		<view style="height: 30rpx;"></view>
		<!-- <ljl-states :infor="states" @change="stateChange"  /> -->
		<view class="schedule-left"  v-for="(item,index) in dataList" :key="index">
			<view class="schedule-hd">
				<view class="schedule-hd-left">
					<image :src="item.did" v-if="item.did" class="schedule-hd-left-img" mode="aspectFill">
				</view>
				<view class="schedule-hd-mid">
					<view class="schedule-hd-mid-top" style="font-size: 30rpx;padding: 10rpx;">{{item.loanerName}}</view>
					<view class="schedule-hd-mid-bottom" style="font-size: 28rpx;padding-left: 10rpx;;color:#999999">电话：{{item.phone?item.phone:"无"}}</view>
				</view>
				<view class="schedule-hd-right">
					<view class="schedule-hd-mid-bottom" style="font-size: 28rpx;padding-left: 20rpx;;color:#999999">正在进行</view>
					<view class="schedule-hd-mid-top" style="font-size: 30rpx;padding: 10rpx;">{{[{title: '提交申请'}, {title: '预审'}, {title: '预审成功'}, {title: '待面签'}, {title: '面签成功'},{title: '申请成功'}][item.state==1?0: item.state].title}}</view>
				</view>
			</view>
			<view class="schedule-bd">
				<view style="font-size: 28rpx;color:#999999">申请额:<text style="font-size: 28rpx;color:#8A4850">{{item.loanMoney}}</text></view>
				<view style="font-size: 29rpx;color:#999999">申请日期: {{item.lastTime|time}}</view>
			</view>
			<uni-steps :options="[{title: '提交申请'}, {title: '预审'}, {title: '预审成功'}, {title: '待面签'}, {title: '面签成功'},{title: '申请成功'}]"  :active="item.state|state"></uni-steps>
			<!-- <view class="schedule-ft">
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
			</view> -->
		</view>
		<view class="schedule-left"  v-for="(item,index) in failDataListOne" :key="index" >
			<view class="schedule-hd">
				<view class="schedule-hd-left">
					<image :src="item.did" v-if="item.did" class="schedule-hd-left-img" mode="aspectFill">
				</view>
				<view class="schedule-hd-mid">
					<view class="schedule-hd-mid-top" style="font-size: 30rpx;padding: 10rpx;">{{item.loanerName}}</view>
					<view class="schedule-hd-mid-bottom" style="font-size: 28rpx;padding-left: 10rpx;;color:#999999">电话：{{item.phone?item.phone:"无"}}</view>
				</view>
				<view class="schedule-hd-right">
					<view class="schedule-hd-mid-bottom" style="font-size: 28rpx;padding-left: 20rpx;;color:#999999">正在进行</view>
					<view class="schedule-hd-mid-top" style="font-size: 30rpx;padding: 10rpx;">{{[{title: '提交申请'}, {title: '预审'}, {title: '预审失败'}, {title: '待面签'}, {title: '面签成功'},{title: '申请成功'}][item.state - 1].title}}</view>
				</view>
			</view>
			<view class="schedule-bd">
				<view style="font-size: 28rpx;color:#999999">申请额:<text style="font-size: 28rpx;color:#8A4850">{{item.loanMoney}}</text></view>
				<view style="font-size: 29rpx;color:#999999">申请日期: {{item.lastTime|time}}</view>
			</view>
			<uni-steps :options="[{title: '提交申请'}, {title: '预审'}, {title: '预审失败'}, {title: '待面签'}, {title: '面签成功'},{title: '申请成功'}]" :activeColor="'#FF3B30'" :active="item.state|state"></uni-steps>
			<!-- <view class="schedule-ft">
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
			</view> -->
		</view>
		<view class="schedule-left"  v-for="(item,index) in failDataListTwo" :key="index" >
			<view class="schedule-hd">
				<view class="schedule-hd-left">
					<image :src="item.did" v-if="item.did" class="schedule-hd-left-img" mode="aspectFill">
				</view>
				<view class="schedule-hd-mid">
					<view class="schedule-hd-mid-top" style="font-size: 30rpx;padding: 10rpx;">{{item.loanerName}}</view>
					<view class="schedule-hd-mid-bottom" style="font-size: 28rpx;padding-left: 10rpx;;color:#999999">电话：{{item.phone?item.phone:"无"}}</view>
				</view>
				<view class="schedule-hd-right">
					<view class="schedule-hd-mid-bottom" style="font-size: 28rpx;padding-left: 20rpx;;color:#999999">正在进行</view>
					<view class="schedule-hd-mid-top" style="font-size: 30rpx;padding: 10rpx;">{{[{title: '提交申请'}, {title: '预审'}, {title: '预审成功'}, {title: '待面签'}, {title: '面签失败'},{title: '申请成功'}][item.state - 1].title}}</view>
				</view>
			</view>
			<view class="schedule-bd">
				<view style="font-size: 28rpx;color:#999999">申请额:<text style="font-size: 28rpx;color:#8A4850">{{item.loanMoney}}</text></view>
				<view style="font-size: 29rpx;color:#999999">申请日期: {{item.lastTime|time}}</view>
			</view>
			<uni-steps :options="[{title: '提交申请'}, {title: '预审'}, {title: '预审成功'}, {title: '待面签'}, {title: '面签失败'},{title: '申请成功'}]" :activeColor="'#FF3B30'" :active="item.state|state"></uni-steps>
			<!-- <view class="schedule-ft">
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
			</view> -->
		</view>
		<null-data v-if="!dataList.length&&!failDataListOne.length&&!failDataListTwo.length" class="nullData_view" />
		
	</view>
</template>

<script>
'use strict';
var _self;
import uniSteps from '@/components/uni-steps/uni-steps.vue';
import LjlStates from '@/components/LjlStates';
import { loanList } from '@/api/todoChild/loan.js';
import { getStorage } from '@/utils/storage.js';
import NullData from '@/components/NullData.vue';
import {BACK_IMG} from "@/config/image.js"
export default {
	 components: {uniSteps,LjlStates,NullData
	 },
	data() {
		return{
			dataList:[],
			failDataListOne:[],
			failDataListTwo:[],
			userInfo:{
			},
			states: {
				index: 0,
				list: [ { title: '正常', nullContent: "暂无客户" }, { title: '非正常', nullContent: "暂无设计师" }]
			},
			imgback:BACK_IMG
		}
	},
	filters:{
		state(val){
			if(val=='1'){
				return 0
			}
			if(val=='2'){
				return 2
			}
			if(val=='3'){
				return 2
			}
			if(val=='4'){
				return 4
			}
			if(val=='5'){
				return 4
			}
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
			      return y + '-' + timeAdd0(m) + '-' + timeAdd0(d) ;
		}
	},
	methods:{
		

		Back(){
			uni.navigateBack({
				delta:1
			})
		},
		/**
		 * 切换状态
		 */
		stateChange: async function({ index }) {
			this.states.index = index;
			this[`stateTo${index}`] && this[`stateTo${index}`]();
		}
	},
	async onLoad() {
		
		_self = this;
		// _self.userInfo = getStorage('userInfo');
		// console.log(this.userInfo);
		
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
		 _self.dataList =p
		
		 let o =[]
		 let c = await loanList({status:3})
		 console.log(c)
		 o.push(...c.list)
		 let i =[]
		 let d = await loanList({status:5})
		 console.log(d)
		 i.push(...d.list)
		  console.log(_self.dataList)
		  _self.failDataListOne =o
		  _self.failDataListTwo =i
		 
	}
};
</script>
<style>
	page{
		background: #FFFFFF;
	}
</style>
<style scoped>
		
	.schedule{
		/* background: #FFFFFF;
		position: absolute;
		width: 100%;
		height: 100%; */
		padding: 0 0 80rpx 0;
		position: relative;
	}
	.schedule-left{
		margin: 40rpx 0;
	}
	.schedule-hd{
		
		display: flex;
		padding: 20rpx 0;
		margin: 0 20rpx ;
		border-bottom: 2rpx solid rgba(241,241,241,1);;
	}
	.schedule-hd-left{
		flex-basis: 100rpx;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-left: 20rpx;
		
	}
	.schedule-hd-left image{
		width: 110rpx;
		height: 110rpx;
		display: block;
		margin-top: -5rpx;
		margin-left: -5rpx;
	}
	.schedule-hd-mid{
		margin-left: 10px;
		flex: 1;
		
	}
	.schedule-hd-right{
		flex-basis: 180rpx;
		margin-right: 20rpx;
	}
	.schedule-bd{
		display: flex;
		justify-content: space-between;
		height: 80rpx;
		line-height: 80rpx;
		margin: 0 40rpx 40rpx;
	}
	.schedule-ft{
		display: flex;
	}
	
	
</style>
