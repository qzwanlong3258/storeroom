<template>
	<!-- <view class="application_view-box page_view-all-inner-padding">
		<view class="application_view-module" v-for="(item,index) in form" :key="index">
			<text class="application_text-title">{{item.title}}</text>
			<view class="application_view-content page_view-box page_view-box-inner-padding">
				<view class="page_view-border-top" v-for="(row,j) in item.list" :key="j">
					<application-input v-if="row.type === 'text'" :infor="row" /> mn  
				</view>
			</view>
		</view>
	</view> -->
	<view class="application" >
		<view style="position: absolute;right: 10rpx;top: 10rpx;">
			<image :src="img[2]" mode="widthFix" @click="Back" style="width: 120rpx"></image>
		</view>
		
		<view class="title">
			<view><image :src="img[0]" mode="widthFix"></image></view>
			
			<view style="margin-left: 20rpx;">基础信息</view>
		</view>
		<view class="application_hd">
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">姓名:</view>
				<view class="appli_hd_item_content"><input type="text" placeholder="请输入您的姓名" v-model="dataList.loanerName" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">身份证号码:</view>
				<view class="appli_hd_item_content"><input type="number" v-model="dataList.idCard"  maxlength="18" placeholder="请输入您的身份证号码" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">学历:</view>
				<view class="appli_hd_item_content appli_hd_item_content_work">
					<view class="uni-list uni-input-style">
						<view class="uni-list-cell uni-input-style">
							<view class="uni-list-cell-db uni-input-style">
								<picker @change="studyBindPickerChange" :value="studyIndex" :range="studyArray" >
									<view class="uni-input uni-input-style">{{ studyArray[studyIndex] }}</view>
									<view class="iconfont  iconyou iconclass" ></view>
								</picker>
							</view>
						</view>
					</view>
					
				</view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">联系电话:</view>
				<view class="appli_hd_item_content"><input type="number" v-model="dataList.phone"  maxlength="11"  placeholder="请输入您的联系电话" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">婚姻状态:</view>
				<view class="appli_hd_item_content">
					<radio-group @change="marriageRadioChange">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in marriageItems" :key="item.value">
							<radio :value="item.value" :checked="index === marriageCurrent" />

							<text style="margin: 0 20rpx 0 10rpx;">{{ item.name }}</text>
						</label>
					</radio-group>
				</view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">工作单位性质:</view>
				<view class="appli_hd_item_content appli_hd_item_content_work">
					<view class="uni-list uni-input-style">
						<view class="uni-list-cell uni-input-style">
							<view class="uni-list-cell-db uni-input-style">
								<picker @change="workBindPickerChange" :value="workIndex" :range="workArray" >
									<view class="uni-input uni-input-style">{{ workArray[workIndex] }}</view>
									<view class="iconfont  iconyou iconclass" ></view>
								</picker>
							</view>
						</view>
					</view>
					
				</view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">月收入:</view>
				<view class="appli_hd_item_content" style="position: relative;"><input type="number" maxlength="6" @input='familyMonthIncomenput' v-model="dataList.familyMonthIncome" placeholder="请输入您的月收入" placeholder-class="input_color" />
				<view style="font-size: 28rpx;position: absolute;left: 140rpx;top: 2rpx;" :hidden='!familyMonthIncomeShow'>元</view>
				</view>
			</view>
		</view>
		
	
	<view class="title">
		<view><image :src="img[1]" mode="widthFix"></image></view>
		
		<view style="margin-left: 20rpx;">申请信息:</view>
	</view>
	<view class="application_bd">
		<view class="application_hd_item">
			<view class="appli_hd_item_lable">申请金额:</view>
			<view class="appli_hd_item_content" style="position: relative;"><input type="number" v-model="dataList.loanMoney" maxlength="6" @input='loanMoneyinput' placeholder="请输入您的金额" placeholder-class="input_color" />
			<view style="font-size: 28rpx;position: absolute;left: 140rpx;top: 2rpx;" :hidden='!loanMoneyShow'>元</view>
			</view>
		</view>
		<view class="application_hd_item">
			<view class="appli_hd_item_lable">申请周期:</view>
			<view class="appli_hd_item_content appli_hd_item_content_work">
				<view class="uni-list uni-input-style">
					<view class="uni-list-cell uni-input-style">
						<view class="uni-list-cell-db uni-input-style">
							<picker @change="periodBindPickerChange" :value="periodIndex" :range="periodArray" >
								<view class="uni-input uni-input-style">{{ periodArray[periodIndex]+'期' }}</view>
								<view class="iconfont  iconyou iconclass" ></view>
							</picker>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="application_hd_item">
			<view class="appli_hd_item_lable">装修类型:</view>
			<view class="appli_hd_item_content appli_hd_item_content_work">
				<view class="uni-list uni-input-style">
					<view class="uni-list-cell uni-input-style">
						<view class="uni-list-cell-db uni-input-style">
							<picker @change="loanBindPickerChange" :value="loanIndex" :range="loanArray" >
								<view class="uni-input uni-input-style">{{ loanArray[loanIndex] }}</view>
								<view class="iconfont  iconyou iconclass" ></view>
							</picker>
						</view>
					</view>
				</view>
				
			</view>
		</view>
		<view class="application_hd_item">
			<view class="appli_hd_item_lable">所在地区:</view>
			<pick-regions :defaultRegion="defaultRegionCode" @getRegion="handleGetRegion">
			            <view class="appli_hd_item_content" >
			            	<!-- <input type="number" v-model="pickerText" style="width: 100%;"   placeholder-class="input_color" /> -->
			            	{{regionName}}
			            	</view>
			        </pick-regions> 
			
			<!-- <simple-address ref="simpleAddress" :themeColor="'#FFEA04'" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onOpenConfirm" themeColor='#007AFF'></simple-address> -->
		</view>
		<view class="application_hd_item">
			<view class="appli_hd_item_lable">详细地址:</view>
			<view class="appli_hd_item_content"><input type="text" v-model="adressDetail"  placeholder="请输入您的详细地址" placeholder-class="input_color" /></view>
		</view>
		<!-- <view class="application_hd_item">
			<view class="appli_hd_item_lable">期数</view>
			<view class="appli_hd_item_content appli_hd_item_content_work">
				<view class="uni-list uni-input-style">
					<view class="uni-list-cell uni-input-style">
						<view class="uni-list-cell-db uni-input-style">
							<picker @change="periodBindPickerChange" :value="periodIndex" :range="periodArray" >
								<view class="uni-input uni-input-style">{{ periodArray[periodIndex] }}</view>
							</picker>
						</view>
					</view>
				</view>
				<view class="iconfont  iconyou iconclass" ></view>
			</view>
		</view> -->
	</view>
	<!-- <view class="application_ft">
		<view class="application_hd_item">
			<view class="appli_hd_item_lable">房屋照片采集</view>
			<view class="appli_hd_item_content">
				<radio-group @change="photoRadioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in photoItems" :key="item.value">
						<radio :value="item.value" :checked="index === photoCurrent" />
			
						<text style="margin: 0 20rpx 0 10rpx;">{{ item.name }}</text>
					</label>
				</radio-group>
			</view>
		</view>
		<view class="application_hd_item" :hidden='photoCurrent === 0'>
		<view @click="show" class="appli_hd_item_lable">{{ value }}</view>
		<view class="appli_hd_item_content appli_hd_item_content_work">
			<view class="uni-list uni-input-style">
				<view class="uni-list-cell uni-input-style">
					<view class="uni-list-cell-db uni-input-style">
						<picker @change="dateBindPickerChange" :value="dateIndex" :range="dateArray" >
							<view class="uni-input uni-input-style">{{ dateArray[dateIndex] }}</view>
						</picker>
					</view>
				</view>
			</view>
		</view>
		</view> -->
		<!-- <scroll-view class="scroll-view_H" scroll-x="true">
							<view class="scroll-view-item_H" v-for="(huadong,index) in huadongs" :key="index">
								
								<view @click="chooseimage" class="scroll-view-item_H_img"><image :src="tempFilePaths" mode=""></image>
								<view class="iconfont  iconpaizhao scroll-view-item_H_icon"  :hidden="tempFilePaths!=''"></view>
								</view>
								<view>{{huadong.name}}</view>
								
							</view>
						</scroll-view> -->
						
		<view style="height: 20rpx;"></view>
		<!-- <view style="text-align: center;padding-bottom: 10rpx;height: 20rpx;"><label class="radio" style="font-size: 25rpx;"><radio value="r1" :checked="agree" @click="agree=!agree" />同意<label class="noticeBook" @click="open" style="color: #333333;">《用户告知书》</label></label></view> -->
		<view class="btn" style="margin-top: 320rpx;margin-bottom: 40rpx;" @click="submit">
			提交
		</view>
		
		<!-- <button style="margin:30rpx;" @click="chooseimage">获取图片</button>
		<image :src="tempFilePaths" mode="aspecFill" style="width: 100%; height: 450rpx"/> -->
		</view>
				<!-- <w-picker
					mode="date" 
					    startYear="2017" 
					    
					    :defaultVal="value"
					@confirm="onConfirm"
					:disabledAfter="false"
					ref="date"
				></w-picker> -->
				<!-- <uni-popup ref="popup" type="center">底部弹出 Popup</uni-popup> -->
				<!-- <uni-popup ref="popup" type="center" :mask-click="false" @change="change">
					<view class="uni-tip">
						<text class="uni-tip-title">用户告知书</text>
						<text class="uni-tip-content">内容</text>
						<view class="uni-tip-group-button">
							<text class="uni-tip-button" @click="cancel('tip')">取消</text>
							<text class="uni-tip-button" @click="cancel('tip')">确定</text>
						</view>
					</view>
				</uni-popup> -->
				
	</view>
</template>

<script>
'use scrict';
// import { ApplicationInput } from './components/ApplicationInput.vue';
import wPicker from "@/components/w-picker/w-picker.vue";
import uniPopup from "@/components/uni-popup/uni-popup.vue";
import { DECORATION} from '@/config/router.js';
import { APPT_TITLE_ONE, APPT_TITLE_TWO, BACK_IMG } from '@/config/image.js';
import simpleAddress from "@/components/simple-address-normal/simple-address.nvue";
import pickRegions from '@/components/pick-regions/pick-regions.vue'


import { loanAppt } from '@/api/todoChild/loan.js'
import { getStorage ,setStorage } from '@/utils/storage.js';
		const { AUTH } = require('../../../../config/router.js');
var _self;
export default {
	data() {
		return {
			dataList:{},
			img:[APPT_TITLE_ONE,APPT_TITLE_TWO,BACK_IMG],
			// form: [
			// 	{title: "申请信息", list: [
			// 		{title: "额度", submitKey: "quota", type: "text"},
			// 		{title: "期限", submitKey: "term", type: "option"},
			// 		{title: "邀请人", submitKey: "invite", type: "text"},
			// 		{title: "面签城市", submitKey: "city", type: "option"}
			// 	]}
			// ]
			marriageItems: [
				
				{
					value: '未婚',
					name: '未婚'
				},
				{
					value: '已婚',
					name: '已婚'
				}
			],
			photoItems: [
				{
					value: 'USA',
					name: '用户拍'
				},
				{
					value: 'CHN',
					name: '非客拍'
				}
			],
			workArray: ['公务员事业单位', '一般职员', '个体户', '企业法人', '自由职业', '其他'],
			workIndex: 0,
			studyArray: ['硕士及以上', '大学本科','大专', '高中及以下' ],
			studyIndex: 0,
			loanArray: ['装修公司全包', '装修公司半包', '购买家具', '购买建材', '自装'],
			loanIndex: 0,
			periodArray: [12, 24, 36, 60, 120],
			periodIndex: 0,
			dateArray: ['07:00-10:00', '10:00-13:00', '13:00-16:00', '16:00-19:00'],
			dateIndex: 0,
			marriageCurrent: 0,
			photoCurrent: 0,
			tempFilePaths: '',
			huadongs:[
								{img:'tempFilePaths',name:'舟舟',info:'xxxxxxxx'},
								{img:'tempFilePaths',name:'舟舟',info:'xxxxxxxx'},
								{img:'tempFilePaths',name:'舟舟',info:'xxxxxxxx'},
								{img:'tempFilePaths',name:'舟舟',info:'xxxxxxxx'},
								{img:'tempFilePaths',name:'舟舟',info:'xxxxxxxx'},
								{img:'tempFilePaths',name:'舟舟',info:'xxxxxxxx'},
								],
				agree:false,
				disabledTime: [
				                {
				                    start: '11:00',
				                    end: '12:00'
				                }
				            ],
				value: '',
				cityPickerValueDefault: [0, 0, 1],
				                pickerText: '北京市 市辖区 西城区',
								adressDetail:'',
								familyMonthIncomeShow:false,
								loanMoneyShow:false,
								
								region:[],
								defaultRegion:['北京市','市辖区','西城区'],
								defaultRegionCode:'010101',
								regionName: '北京市 市辖区 西城区',
								
								
			
			
			
			
		};
	},
	onLoad:function(){
		_self = this
		_self.value=this.getTime()
		_self.dataList.marryStatus = 0
		_self.dataList.workunit = 0
		_self.dataList.term = this.periodArray[0]
		_self.dataList.latitude=22.686206,
		_self.dataList.longitude=114.230672,
		_self.dataList.did =getStorage('userInfo').avatarUrl;
		
		
		// const isLogin = getStorage('isLogin');
		// if (isLogin) {
		// 	this.showAuth=true
		// } else {
			
		// 	let pages = getCurrentPages();
		// 	if (pages.length > 0 && AUTH.indexOf('/' + pages[pages.length - 1].route) === 0) return;
		// 	uni.reLaunch({
		// 		url:`${AUTH}?name=${'loanApply'}`
		// 	});	
		// 	}
		
	},
	 // computed:{
	 //            regionName(){
	 //                // 转为字符串
	 //                return this.region.map(item=>item.name).join(' ')
	 //            }
	 //        },
	methods: {
		// 获取选择的地区
		            handleGetRegion(region){
		                this.region = region
						this.regionName = this.region.map(item=>item.name).join(' ')
						this.$forceUpdate()
		            },
		Back(){
			uni.navigateTo({
				url:DECORATION
			})
			
		},
		familyMonthIncomenput(e){
			// console.log(e.detail)
			// this.$forceUpdate();
			if(e.detail.value ==""){
				_self.familyMonthIncomeShow=false
			} else{
				_self.familyMonthIncomeShow=true
			}
			
		},
		loanMoneyinput(e){
			if(e.detail.value ==""){
				_self.loanMoneyShow=false
			} else{
				_self.loanMoneyShow=true
				if(Number(_self.dataList.loanMoney)>500000){
					uni.showToast({
													title: "申请额度需小于500000",
													icon: 'none',
													duration: 2000,
												});
												_self.dataList.loanMoney=500000
												this.$forceUpdate()
					
				}
			}
		},
		marriageRadioChange: function(evt) {
			for (let i = 0; i < this.marriageItems.length; i++) {
				if (this.marriageItems[i].value === evt.target.value) {
					this.marriageCurrent = i;
					_self.dataList.marryStatus = i
					break;
				}
			}
		},
		photoRadioChange: function(evt) {
			for (let i = 0; i < this.photoItems.length; i++) {
				if (this.photoItems[i].value === evt.target.value) {
					this.photoCurrent = i;
					break;
				}
			}
		},
		workBindPickerChange: function(e) {
		            console.log('picker发送选择改变，携带值为', e.target.value)
		            this.workIndex = e.target.value
					_self.dataList.workunit = e.target.value
		        },
		loanBindPickerChange: function(e) {
		            console.log('picker发送选择改变，携带值为', e.target.value)
		            this.loanIndex = e.target.value
					// _self.dataList.workunit = e.target.value
		        },
		studyBindPickerChange: function(e) {
				            console.log('picker发送选择改变，携带值为', e.target.value)
				            this.studyIndex = e.target.value
							// _self.dataList.workunit = e.target.value
				        },
		periodBindPickerChange: function(e){
			console.log('picker发送选择改变，携带值为', e.target.value)
			this.periodIndex = e.target.value
			_self.dataList.term = this.periodArray[e.target.value]
		},
		dateBindPickerChange: function(e){
			console.log('picker发送选择改变，携带值为', e.target.value)
			this.dateIndex = e.target.value
		},
		// 选择照片
		chooseimage: function () {
		    var _this = this;
		    uni.chooseImage({
		      count: 9, // 默认9
		      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		      success: function (res) {
		        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
				_self.tempFilePaths = res.tempFilePaths
				
		      }
		    })
		  },
		selectedTime:function (e) {
		            console.log(e)
		        },
		show () {
								this.$refs.date.show()
							},
		onConfirm (e) {
								this.value = e.result
							},
		getTime:function(){
		
		var date = new Date(),
		year = date.getFullYear(),
		month = date.getMonth() + 1,
		day = date.getDate(),
		hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
		minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
		second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
		month >= 1 && month <= 9 ? (month = "0" + month) : "";
		day >= 0 && day <= 9 ? (day = "0" + day) : "";
		var timer = year + '-' + month + '-' + day ;
		return timer;
		},
		open(){
		         this.$refs.popup.open()
		      },
	    cancel() {
	    	this.$refs.popup.close()
	    },
	    change(e) {
	    	console.log('是否打开:' + e.show)
	    },
		submit: function () {
			console.log(DECORATION)
			_self.dataList.address=this.regionName+ ' '+this.adressDetail
			loanAppt(this.dataList).then( res=>{
				 uni.showToast({
								title: "提交成功",
								icon: 'success',
								duration: 2000,
							});
							setTimeout(function(){
											uni.switchTab({
												url:DECORATION
											})
										},2000)
				
							
			})
			
		},
		openAddres() {
			
		                this.$refs.simpleAddress.open();
		            },
		            onOpenConfirm(e) {
						
						var b=e.label.split('-')
						// console.log(e)
						
		                this.pickerText = b[0]+' '+ b[1]+' '+b[2]
		            },
	},
	components: {
		// ApplicationInput
		
		wPicker,
		uniPopup,
		simpleAddress,
		pickRegions 
	}
};
</script>
<style>
	page{
		background: rgba(255, 255, 255, 1);
	}
</style>
<style lang="scss" scoped>
	
// .application_view-box {
// 	font-size: 32rpx;
// }
// .application_text-title {
// 	color: $color_primary;
// }
// .application_view-content {
// 	box-shadow: 0 0 10rpx 4rpx $color_shadow;
// 	color: $color_text-secondary;
// 	margin-top: 30rpx;
// }
// .applicationInput_view-box {
// 	height: 80rpx;
// 	width: 100%;
// 	display: flex;
// 	align-items: center;
// }
// .application_text-inner.title {
// 	width: 200rpx;
// 	text-align: right;
// }
// .application_text-inner.content {
// 	width: calc(100% - 200rpx);
// 	box-sizing: border-box;
// 	padding-left: 30rpx;
// }
.title{
	height: 90rpx;
	// display: flex;
	display: flex;
	align-items: center;
	border-bottom: 6rpx solid rgba(241,241,241,1);
	
	
	
}
.title image{
	width: 40rpx;
	margin-left: 20rpx;
	
	
}


.application {
	font-size: 30rpx;
	color: #666666;
	position: relative;
	
	
	
}
.application_hd {
	
	padding: 0 16rpx 0 16rpx;
	background: rgba(255, 255, 255, 1);
}
.application_hd_item {
	height: 90rpx;
	display: flex;
	line-height: 90rpx;
	border-bottom: 6rpx solid rgba(241,241,241,1);;
}
.appli_hd_item_lable {
	flex-basis: 200rpx;
	color: #333333;
}
.appli_hd_item_content {
	flex: 1;
	display: flex;
	align-items: center;
}
.appli_hd_item_content input{
	width: 100%;
	height: 100%;
}
.appli_hd_item_content_work{
	position: relative;
}
.application_bd {
	height: 156rpx;
	padding: 0 16rpx 5rpx 16rpx;
	
	background: rgba(255, 255, 255, 1);
}
.application_ft {
	height: 587rpx;
	padding: 0 16rpx 0 16rpx;
	background: rgba(255, 255, 255, 1);
}
.uni-input-style{
	width: 100%;
}
.input_color {
	color: #dbdbdb;
}
.iconclass{
	position: absolute;
	right: 0;
	top: 0;
	transform: rotate(90deg);
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
		margin: 2%  1% 2% 1%;
	}
	
	.scroll-view-item_H_icon{
		position: absolute; 
		top: 50%;
		transform: translateY(-50%);
		
	}
	.scroll-view-item_H view{
		box-sizing: border-box;
	}
	.scroll-view-item_H view:nth-child(1){
		width: 100%;
		height: 146rpx;
		position: relative;
		background: rgba(229, 229, 229, 1);
		border-radius: 10rpx;
	}
	.scroll-view-item_H view:nth-child(1) image{
		width: 100%;
		height: 146rpx;
		border-radius: 10rpx;
		display: block;
	}
	.scroll-view-item_H view:nth-child(2){
		width: 100%;
		height: 49rpx;
	}
	.btn{
		height: 80rpx;
		
		text-align: center;
		line-height: 80rpx;
		border-radius: 40rpx;
		background: #FFE906;
		color: #000000;
		margin-left: 20rpx;
		margin-right: 20rpx;
		box-shadow: 0 4rpx 10rpx rgba(0,0,0,0.3);
		font-size: 28rpx;
		letter-spacing: 4rpx;
	}
	/* 提示窗口 */
	.uni-tip {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		padding: 30rpx;
		width: 600rpx;
		background-color: #fff;
		border-radius: 20rpx;
	}
	.uni-tip-title {
			margin-bottom: 20rpx;
			text-align: center;
			font-weight: bold;
			font-size: 32rpx;
			color: #333;
		}
	
		.uni-tip-content {
			/* padding: 15px;
	*/
			font-size: 14px;
			color: #666;
		}
	
		.uni-tip-group-button {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			margin-top: 40rpx;
		}
	
		.uni-tip-button {
			flex: 1;
			text-align: center;
			font-size: 28rpx;
			color: #3b4144;
		}
	

</style>
