import {
	APP_ID
} from '@/config/common.js'
import {
	request
} from '@/config/http.js'
import {
	login
} from '@/utils/openLogin.js'
import {
	setStorage,getStorage
} from '@/utils/storage.js'
import {
	LOGIN_WECHAT_LOGIN,
	LOGIN_WECHAT_GET_USERINFO,
	LOGIN_APP_REGISTER_LOGIN
} from '@/config/api.js'
import {
	COMPANY_LOGO
} from '@/config/image.js'
import { MINE ,DECORATION,BANK_DETAIL, TO_WEB,INSHOP,QUERYPROGRESS,LOAN_APPLICATION,LOAN_TESTONETEST} from '@/config/router.js';
import { refreshToken } from  '../../utils/openLogin';
import * as home from "@/api/tabbar/home.js";
import {setApplyId,addScore,addScoreRecord} from '@/api/auth.js'




const regeneratorRuntime = require('@/utils/regenerator-runtime/runtime.js')
const wxAuth = {
	data() {
		return {
			yldLogo: COMPANY_LOGO,
			session_key: '',
			show:true,
			dataL:'',
			name:'',
			user:'',
			serve:''
		}
	},

	onLoad:  function(options) {
		//请求微信接口wx.login,获取code
		// const code = await this.login();
		// // const code = getStorage('code')
		// const {
		// 	session_key
		// } = await request({
		// 	method: 'POST',
		// 	url: `${LOGIN_WECHAT_LOGIN}?appId=${APP_ID}&code=${code}`,
		// 	needToken: false,
		// 	showLoading: false,
		// 	showErrorModal: false
		// }).catch(() => {
		// 	console.log('调用wx.login失败')
		// })
		// this.session_key = session_key;
		this.session_key = getStorage('session_key')
		this.name=options.name
		home.loadHomeCarousel({type:4}).then(res => {
			this.user = res.list.find(item=>item.url=='用户协议').img;
			this.serve = res.list.find(item=>item.url=='服务协议').img;
		});
		console.log(this.session_key)
		
	},
	methods: {
		linkToBankOne(){
			let ch = "/";
			// var str = "这是一/个变量，这是一个变量";
			let a = this.user.replace(new RegExp(ch,'g'),"!");
			let e = a.replace(":", "*")
			
			var testmsg=e.substring(e.lastIndexOf('.')+1)
			        const extensio = testmsg === 'jpg'
			        const extensio2 = testmsg === 'png'
			        const extensio3 = testmsg === 'jpeg'
			        if(extensio || extensio2 || extensio3) {
			          uni.navigateTo({ url: `${BANK_DETAIL}?id=${e}` });
			        } else {	
					 uni.navigateTo({ url: `${TO_WEB}?id=${e}` });
					}
		},
		linkToBankTwo(){
			let ch = "/";
			// var str = "这是一/个变量，这是一个变量";
			let a =this.serve.replace(new RegExp(ch,'g'),"!");
			let e = a.replace(":", "*")
			
			
			var testmsg=e.substring(e.lastIndexOf('.')+1)
			        const extensio = testmsg === 'jpg'
			        const extensio2 = testmsg === 'png'
			        const extensio3 = testmsg === 'jpeg'
			        if(extensio || extensio2 || extensio3) {
			          uni.navigateTo({ url: `${BANK_DETAIL}?id=${e}` });
			        } else {	
					 uni.navigateTo({ url: `${TO_WEB}?id=${e}` });
					}
		},
		noBtn(){
			uni.showToast({
											title: "若不同意协议则无法登录和操作下单哦",
											icon:"none",
											duration: 2000,
										});
		},
		 async yesBtn(){
			
			setStorage('sessionKey', this.session_key)
			setStorage('tempToken', this.dataL.token)
			setStorage('refreshToken', this.dataL.refreshToken)
			setStorage('userInfo', this.dataL.UserInfo)
			setStorage('isLogin', true)
			console.log(this.name)
			
			let openid=getStorage('openId')
			let e =getStorage('applyId')
			if(e){
				await setApplyId({
				      applyId: e
				  })
			}
			if(getStorage('newUser')){
				await addScore({
				    id: e,
				    integral: "500"
				    })
					await addScoreRecord({
				 userid: e,
				 money: "500",
				 msg: "邀请用户赠送500积分"
				})
			}
			
			
			
			
			if(this.name=='decoration'){
				 uni.switchTab({
					url: DECORATION,
					fail: () => {
						uni.reLaunch({
							url: DECORATION,
						})
					}
				})
			}
			if(this.name=='mine'){
				 uni.switchTab({
					url: MINE,
					fail: () => {
						uni.reLaunch({
							url: MINE,
						})
					}
				})
			}
			if(this.name=='inShop'){
				 uni.switchTab({
					url: INSHOP,
					fail: () => {
						uni.reLaunch({
							url: INSHOP,
						})
					}
				})
			}
			if(this.name=='queryProgress'){
				 uni.switchTab({
					url: INSHOP,
					fail: () => {
						uni.reLaunch({
							url: QUERYPROGRESS,
						})
					}
				})
			}
			if(this.name=='loanApply'){
				 uni.switchTab({
					url: INSHOP,
					fail: () => {
						uni.reLaunch({
							url: LOAN_APPLICATION,
						})
					}
				})
			}
			if(this.name=='testonetest'){
				 uni.switchTab({
					url: INSHOP,
					fail: () => {
						uni.reLaunch({
							url: LOAN_TESTONETEST,
						})
					}
				})
			}
			
			
			
			
		},
		getUserInfo: async function(e) {
			if (!this.session_key) {
				refreshToken()
				this.session_key = getStorage('session_key')
				if (!this.session_key) {
					return wx.showToast({
						title: '登录失败，重新授权试试',
						icon: 'none'
					})
				}
				
			}
			const {
				encryptedData,
				iv
			} = e.detail
			console.log(e.detail) 
			//获取用户的微信信息
			const {
				openId,
				avatarUrl,
				nickName
			} = await request({
				method: 'POST',
				url: LOGIN_WECHAT_GET_USERINFO,
				data: {
					encryptedData,
					iv,
					"appId": APP_ID,
					"session_key": this.session_key
				},
				needToken: false,
				showLoadind: false,
				hideLoading: false,
				errorText: '登录失败'
			})
			//进行用户注册或登录，将返回的信息储存在本地缓存 
			const {
				data
			} = await request({
				method: 'POST',
				url: LOGIN_APP_REGISTER_LOGIN,
				data: {
					nickName,
					appId: APP_ID,
					openid: openId,
					headImg: avatarUrl
				},
				needToken: false,
				loadingText: '正在登录',
				returnHeader: true,
				errorText: '登录失败'
			})
			this.dataL=data
			this.show=false
			
			// await uni.switchTab({
			// 	url: getApp().globalData.fm,
			// 	fail: () => {
			// 		uni.reLaunch({
			// 			url: getApp().globalData.fm,
			// 		})
			// 	}
			// })
		}
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
}

export default wxAuth;
