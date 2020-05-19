 // const baseUrl = 'http://47.104.232.184:1001';
const baseUrl = 'https://feiaizn.com:1001';
 // const baseUrl = 'https://192.168.3.25:1001';
 // const baseUrl = 'http://yapi.open.com.cn/mock/2423';
const auth = `${baseUrl}/wx/user`;


module.exports = {
	/** 微信 **/
	GET_ACCESS_TOKEN: `${baseUrl}/wx/user/getAccessToken`,
	GET_UNLIMITED: `${baseUrl}/wx/user/getUnlimited`,
	
	/** 登录 **/
	LOGIN_NOWECAHT_LOGIN: `${baseUrl}/user/createToken`,
	LOGIN_WECHAT_LOGIN: `${auth}/getSessionkey`,
	LOGIN_TOKEN_REFRESH: `${auth}/refresh`,
	LOGIN_OPENID_REFRESH: `${auth}/register`,
	LOGIN_WECHAT_GET_USERINFO: `${auth}/getUserInfo`,
	SEND_VERIFICATION_CODE: `${baseUrl}/user/loadCode`,
	LOGIN_APP_REGISTER_LOGIN: `${auth}/register`,
	
	/** 积分商城 **/
	LOAD_GOODS_LIST: `${baseUrl}/goods/loadGoods`, // 加载积分商品
	LOAD_GOODS_DETAIL: `${baseUrl}/goods/loadGoodsDetails`, // 查看积分商品详情
	LOAD_GOODS_EVALUATION: `${baseUrl}/wx/user/loadWxGoodsEvaluation`, // 查看评价商品
	LOAD_GOODS_CONVERT: `${baseUrl}/wx/user/loadWxGoodsConvert`,// 查看参与商品兑换记录
	LOAD_INTEGRAL: `${baseUrl}/wx/user/loadIntegral`,  // 查询积分余额
	
	/** 首页 **/
	LOAD_HOME_CAROUSEL: `${baseUrl}/picture/loadPicture`,
	LOAD_HOME_NEWS: `${baseUrl}/news/loadNews`,
	
	/** 我的 **/
	GET_CHECK_IN: `${baseUrl}/wx/user/isSignIn`,
	CHECK_IN: `${baseUrl}/wx/user/signIn`,
	CALENDER:`${baseUrl}/wx/user/loadRegistration`,
	
	/** 城市 **/
	LOAD_CITY: `${baseUrl}/city/loadCity`,
	
	/** 收货地址 **/
	LOAD_ADDRESS: `${baseUrl}/wx/user/loadAddress`,
	ADD_ADDRESS: `${baseUrl}/wx/user/insertAddress`,
	UPDATE_ADDRESS: `${baseUrl}/wx/user/updateAddress`,
	DELETE_ADDRESS: `${baseUrl}/wx/user/deleteAddress`,
	
	/** 订单 **/
	CREATE_ORDER: `${baseUrl}/wx/user/createOrder`,
	PAY_ORDER: `${baseUrl}/wx/user/payOrder`,
	GET_ORDER_DETAIL: `${baseUrl}/wx/user/orderDetails`,
	GET_ORDER_LIST: `${baseUrl}/wx/user/loadMyOrder`,
	DELETE_ORDER: `${baseUrl}/wx/user/deleteOrder`,
	UPDATE_ORDER: `${baseUrl}/wx/user/updateOrder`,
	ORDER_DELIVERY: `${baseUrl}/wx/user/orderComplete`,
	
	/** 活动 **/
	LOAD_ACTIVITY: `${baseUrl}/activity/loadActivity`,
	COMPLETE_ACTIVITY: `${baseUrl}/wx/user/completeActivity`,
	
	/** 客户 **/
	LOAD_CUSTOMER: `${baseUrl}/invite/loadApplyUserList`,
	
	/** 贷款分期申请 **/
	LOAN_APPT:`${baseUrl}/wx/login/apply`,
	LOAN_LIST:`${baseUrl}/wx/user/shcedule`,
	LOAN_LIST_DETAIL:`${baseUrl}/wx/login/loadOrderPhaseInfo`,
	LOAN_BANK:`${baseUrl}/wx/login/loadBankInfo`,
	LOAN_FACE_MEMBER:`${baseUrl}/wx/login/loadOrderVisa`,
	LOAN_PERIOD:`${baseUrl}/wx/login/loadOrderPhaseImg`,
	
	/** 我的工作—面签 **/
	MYWORK_FACE:`${baseUrl}/wx/login/loadOrderVisaList`,
	FACE_SUBMIT:`${baseUrl}/wx/login/submitVisa`,
	
	
	/** 上传照片 **/
	UPLOADPHOTO:`${baseUrl}/ftp/upload`,
	
	/** 我的工作—拍照 **/
	MYWORKPHOTO:`${baseUrl}/wx/login/loadPictures`,
	MYWORKPHOTO_LOCATION:`${baseUrl}/wx/login/loadPicturesDetail`,
	PHOTO_SUMBIT:`${baseUrl}/wx/login/submitPictures`,
	/** 测一测 **/
	TESTONETEST:`${baseUrl}/test/submitChoose`,
	GET_COUNT:`${baseUrl}/test/loadChooseCount`,
	GET_ISSUE:`${baseUrl}/test/loadTest`,
	/** 好店入驻 **/
	POST_SHOP:`${baseUrl}/decorate/createDecorate`,
	/** 预约量房**/
	MEASURE_HOME:`${baseUrl}/make/createMake`,
	GET_SHOP:`${baseUrl}/make/loadDecorate`,
	MEASURE_SUCCESS:`${baseUrl}/make/makeDecorate`,
	GET_MY_SHOP:`${baseUrl}/make/loadMakeRecord`,
	/** 海报**/
	GET_POSTER:`${baseUrl}/posters/loadPosters`,
	/** 积分**/
	GET_SCORE_DETAIL:`${baseUrl}/integral/loadIntegral`,
	/** 角色**/
	GET_USER_ROLE:`${baseUrl}/user/loadRoleList`,
	/** 设置邀请人id**/
	SET_APPLY_ID:`${baseUrl}/wx/user/setApplyId`,
	GET_APPLY_ID:`${baseUrl}/wx/user/loadApplyId`,
	/** 积分**/
	ADD_SCORE:`${baseUrl}/wx/user/addIntegral`,
	ADD_SCORE_RECORD:`${baseUrl}/wx/user/insertIntegralInfo`,
	/** 设计师**/
	SHE_JI_SHI:`${baseUrl}/design/submitDesign`,
	/** 新用户**/
	NEW_USER:`${baseUrl}/wx/user/openIdCount`,
	
	
	
	
	
	
	
	
	
	
}
