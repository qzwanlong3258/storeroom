/**
 * 储存页面路径，对应app.json的路由，用于页面跳转
 */

module.exports = {
	/**
	 * 登录
	 */
	AUTH: '/pages/auth/auth', //授权登录页

	/**
	 * 首页
	 */
	HOME: '/pages/tabbar/home/home', //首页
	// 积分商城
	SHOP: '/pages/tabbar/todo/todo', //积分商城
	SHOP_DETAIL: '/pages/todoChild/shopDetail/shopDetail', //商品详情
	REFUND_ORDER: '/pages/todoChild/refundOrder/refundOrder', //退单详情
	// 订单
	WRITE_ORDER: '/pages/todoChild/writeOrder/writeOrder', //填写订单
	ORDER_DETAIL: '/pages/todoChild/orderDetail/orderDetail', //订单详情
	ORDER_LIST: '/pages/todoChild/orderList/orderList', //兑换记录
	// 个人中心
	MINE: '/pages/tabbar/mine/mine',
	//角色互换
	SWAPROLE: '/pages/todoChild/swapRole/index',
	//我的工作
	MYWORK:'/pages/todoChild/myWork/index',
	MYWORKDETAIL:'/pages/todoChild/myWork/myWorkDetail/index',
	//拍照任务
	MYWORK_PHOTO:'/pages/todoChild/myWorkPhoto/index',
	MYWORK_PHOTO_DETAIL:'/pages/todoChild/myWorkPhoto/myWorkPhotoDetail/index',
	// 收货地址
	ADDRESS_INDEX: '/pages/todoChild/address/addressIndex/addressIndex',
	ADDRESS_DETAIL: '/pages/todoChild/address/addressDetail/addressDetail',
	//申请记录
	APPTRECORD: '/pages/todoChild/apptRecord/index',
	// 推荐中心
	RECOMMENDED: '/pages/todoChild/recommended/index',
	// 分销中心
	DISTRIBUTION: '/pages/todoChild/distribution/index',
	// 推荐会员
	RECOMMENDED_MEMBER: '/pages/todoChild/member/index',
	// 客户列表
	CUSTOMER_LIST: '/pages/todoChild/customerList/index',
	// 推广商品
	PROMOTE_GOODS: '/pages/todoChild/promoteGoods/index',
	// 提现
	WITHDRAW: '/pages/todoChild/withdraw/index',
	// 专属海报
	POSTER: '/pages/todoChild/poster/index',
	//开通会员
	OPENMEMBER:'/pages/todoChild/openMember/index',
	// 家装分期
	DECORATION: '/pages/todoChild/decoration/index',
	DECORATION_PICTURE: '/pages/todoChild/decoration/decorationPicture/index',
	
	LOAN_TESTONETEST:'/pages/todoChild/decoration/testonetest/index',//测一测
	LOAN_TESTONETEST_SUBMIT:'/pages/todoChild/decoration/testonetest/testonetestsubmit/index',//测一测结果
	
	LOAN_APPLICATION: '/pages/todoChild/decoration/application/index',//发起申请
	LOAN_SCHEDULE: '/pages/todoChild/decoration/schedule/index',//进度查询
	LOAN_RECORD: '/pages/todoChild/decoration/record/index',//申请记录
	LOAN_RECORD_Detail: '/pages/todoChild/decoration/record/recordDetail/index',//申请记录详情
	
	//约量房
	MEASUREHOME: '/pages/todoChild/measureHome/index',
	APPTMEASUREHOME:'/pages/todoChild/measureHome/ApptMeasureHome/index',//预约量房
	CHOOSEBUSSINESS:'/pages/todoChild/measureHome/ApptMeasureHome/chooseBussiness/index',//选择商户
	QUERYPROGRESS:'/pages/todoChild/measureHome/queryProgress/index',//约量房进度
	APPT_MEASUREHOME_SUCCESS:'/pages/todoChild/measureHome/ApptMeasureHome/success/index',//预约量房成功
	
	//好店入驻
	INSHOP:'/pages/todoChild/inShop/index',
	UPLOAD:'/pages/todoChild/inShop/upload/index',//上传资料
	INVITE:'/pages/todoChild/inShop/inviteShop/index',//邀请商户
	//推荐中心
	RECOMMENDCENTER:'/pages/todoChild/recommendCenter/index',//   
	//邀请有礼
	INVITEGIFT:'/pages/todoChild/inviteGift/index',
	//日历
	CALENDER:'/pages/todoChild/calender/index',
	//拍照
	CAMERA:`/pages/todoChild/camera/index` ,
	//银行详情
	BANK_DETAIL:`/pages/todoChild/bankDetail/index`,
	
	//跳转图片  
	TO_PRIVACY:'/pages/todoChild/toLink/privacy/index',
	TO_SERVICE:'/pages/todoChild/toLink/service/index',
	TO_WEB:'/pages/todoChild/toLink/webview/index',
	
	//积分详情
	TO_SCORE_DETAIL:'/pages/tabbar/todo/scoreDetail/index',
	
	//设计师
	TO_DESGER:'/pages/todoChild/Designer/index',
	
	
	
	
}
