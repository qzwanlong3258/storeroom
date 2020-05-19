<template>
	
	
	<view class="container container-fill" v-if="showAuth">
		<view class="scroll-fullpage" id='scrollTouch' @touchstart="scrollTouchstart" @touchmove="scrollTouchmove" @touchend="scrollTouchend" v-bind:style="{margintop: margintop+'px',transform: transform}">
			<view :class="scrollindex==0?'active':''" style="height: 100%;">
				<sectionOne  @testOne='test' :dataOne="dataL[0]"></sectionOne>
			</view>
			<view :class="scrollindex==1?'active':''" style="height: 100%;">
				<sectionTwo @testOne='test' :dataTwo="dataL[1]"></sectionTwo>
			</view>
			<view :class="scrollindex==2?'active':''" style="height: 100%;">
				<sectionThree @testOne='test' :dataThree="dataL[2]"></sectionThree>
			</view>
			<view :class="scrollindex==3?'active':''" style="height: 100%;">
				<sectionFour @testOne='test' :dataFour="dataL[3]"></sectionFour>
			</view>
			<view :class="scrollindex==4?'active':''" style="height: 100%;">
				<sectionFive @testOne='test' :dataFive="dataL[4]"></sectionFive>
			</view>
			<view :class="scrollindex==5?'active':''" style="height: 100%;">
				<sectionSix @testOne='test' @submit='submit' :dataSix="dataL[5]"></sectionSix>
			</view>
		</view>
	</view>
	
</template>

<script>
	"use strict"
	var self_
	import sectionOne from './components/sectionOne';
	import sectionTwo from './components/sectionTwo';
	import sectionThree from './components/sectionThree';
	import sectionFour from './components/sectionFour';
	import sectionFive from './components/sectionFive';
	import sectionSix from './components/sectionSix';
	import { testOneTest ,getIssue} from '@/api/todoChild/loan.js';
	import { LOAN_TESTONETEST_SUBMIT} from '@/config/router.js';
	import { getStorage ,setStorage } from '@/utils/storage.js';
	const { AUTH } = require('../../../../config/router.js');
	
	export default {
		components:{
				  sectionOne,
				  sectionTwo,
				  sectionThree,
				  sectionFour,
				  sectionFive,
				  sectionSix,
		},
	  data () {
	    return {
	       scrollindex:0,  //当前页面的索引值
	          totalnum:6,  //总共页面数
	          starty:0,  //开始的位置x
	          endy:0, //结束的位置y
	          critical: 100, //触发翻页的临界值
	          margintop:0,  //滑动下拉距离
			  transform:'translateY(-' + 0 + '%)',
			  dataList:{},
			  dataL:[],
			  showAuth:false
			  
	    }
	  },
	  methods:{
		  test(e,v,d){
			  console.log(e)
			  switch(v) {
			  	case 1:  
				 self_.dataList.one ={
    "titleid": d,
    "chooseid": e
}
				 return ;
			  	case 2:
				self_.dataList.two = {
				 "titleid": d,
				 "chooseid": e}
				 return ;
			  	case 3: 
				self_.dataList.three = {
				"titleid": d,
				"chooseid": e}
				return ;
			  	case 4: 
				self_.dataList.four ={
				"titleid": d,
				"chooseid":e}
				return ;
				case 5:
				 self_.dataList.five ={
				 "titleid": d,
				 "chooseid": e}
				 return ;
				case 6:
				 self_.dataList.six ={
				 "titleid": d,
				 "chooseid": e}
				 return ;
				 case 7:
				  self_.dataList.seven ={
				  "titleid": d,
				  "chooseid": e}
				  return ;
				  case 8:
				   self_.dataList.eight ={
				   "titleid": d,
				   "chooseid": e}
				   return ;
			  }
			  
		  },
		   countProperties(obj){
			   var count=0
		      for(var property in obj){
		         
		              count++;
		         
		      }
		      return count;
		  },
		 async getList(){
			self_.dataL = (await getIssue()).list
			console.log(self_.dataL)
		  },
		 async submit(){
			 console.log(this.countProperties(this.dataList))
			 if(this.countProperties(this.dataList)!=8){
				 uni.showToast({
				     title: "请选择所有选项后提交",
				     duration: 2000,
				 	icon:'none'
				 });
				 return;
			 }
			 for(let key  in this.dataList){
				 if(this.dataList[key]){
					 await testOneTest(this.dataList[key])
				 }
			         // console.log(key + '---' + obj[key])
			   }
			  
			 
			  uni.showToast({
			  								title: "提交成功",
			  								icon: 'success',
			  								duration: 2000,
			  							});
			  							setTimeout(()=>{
			  											uni.navigateTo({
			  												url:LOAN_TESTONETEST_SUBMIT
			  											})
			  										},2000)
			  
		  },
		  scrollTouchstart:function(e){
			  
		      let py = e.touches[0].pageY;
			  // console.log(py)
			  self_.starty = py
		    },
		    scrollTouchmove:function(e){
		      let py = e.touches[0].pageY;
			  // console.log(py)
		      let d = this;
			  self_.endy =py;
		      if(py-d.starty<100 && py-d.starty>-100){   
				  self_.margintop=py - d.starty
		      }
		    },
		    scrollTouchend:function(e){
				
		      let d = this;
			  // console.log(d.endy)
			  // console.log(d.starty)
			  // console.log(d.scrollindex)
			  // console.log(this.totalnum)
		      if(d.endy-d.starty >100 && d.scrollindex>0){
				  self_.scrollindex=d.scrollindex-1
				  self_.transform = 'translateY(-' + self_.scrollindex*100 + '%)'
		        
		      }else if(d.endy-d.starty <-100 && d.scrollindex<this.totalnum-1 && d.endy!==0){
				   self_.scrollindex=d.scrollindex+1
				   self_.transform = 'translateY(-' + self_.scrollindex*100 + '%)'
		      }
			  self_.starty=0
			  self_.endy=0
			  self_.margintop=0
		    },
		 
	  },
	  onLoad() {
	  	self_=this
		this.getList()
		
		
		const isLogin = getStorage('isLogin');
		if (isLogin) {
			this.showAuth=true
		} else {
			
			let pages = getCurrentPages();
			if (pages.length > 0 && AUTH.indexOf('/' + pages[pages.length - 1].route) === 0) return;
			uni.reLaunch({
				url:`${AUTH}?name=${'testonetest'}`
			});	
			}
	  }
	}
</script>

<style>
	.testonetest{
	font-size: 32rpx;
	background: rgba(242,246,249,1);
	}
</style>
<style scoped>
	.container-fill{
		height: 100%;
		overflow: hidden;
	}
	.scroll-fullpage{
		height: 100%;
		transition: all 0.3s;
	}
	.section{
		height: 100%;
	}
	>>>.section-maintitle{
		display: block;
		text-align: center;
		font-size: 50rpx;
		color: #fff;
		font-weight: bold;
		letter-spacing: 10rpx;
		padding-top: 140rpx;
	}
	>>>.section-subtitle{
		display: block;
		text-align: center;
		font-size: 40rpx;
		color: #fff;
		font-weight: bold;
		letter-spacing: 10rpx;
	}
	.active >>> .section-maintitle,
	.active >>> .section-subtitle{
		animation: mymove 0.8s;
	}
	@keyframes mymove{
		from {
			transform: translateY(-400rpx) scale(0.5) rotateY(90deg);
		}
		to {
			transform: translateY(0) scale(1) rotateY(0);
		}
	}
	
</style>