import {
	request
} from '@/config/http.js';
import {
	LOGIN_NOWECAHT_LOGIN,
	SEND_VERIFICATION_CODE,
	GET_USER_ROLE,
	SET_APPLY_ID,
	GET_APPLY_ID,
	ADD_SCORE,
	ADD_SCORE_RECORD,
	NEW_USER
} from '@/config/api.js';

//获取验证码
export function sendVerificationCode(data) {
	return request({
		method: 'GET',
		url: SEND_VERIFICATION_CODE,
		showSuccessToast: true,
		data,
	})
}

//通过手机验证码登录授权
export function getPhoneLogin(data){
	return request({
		method: 'POST',
		url: LOGIN_NOWECAHT_LOGIN,
		showSuccessToast: true,
		data,
	})
}


// 获取用户角色
export function getUserRole(data) {
	return request({
		method: 'GET',
		url: GET_USER_ROLE,
		showLoading:false,
		hideLoading:false,
		data,
	});
}

// 获取用户角色
export function getApplyId(data) {
	return request({
		method: 'GET',
		url: GET_APPLY_ID,
		showLoading:false,
		hideLoading:false,
		data,
	});
}
// 获取用户角色
export function setApplyId(data) {
	return request({
		method: 'POST',
		url: SET_APPLY_ID,
		showLoading:false,
		hideLoading:false,
		data,
	});
}

ADD_SCORE_RECORD
// 增加积分
export function addScore(data) {
	return request({
		method: 'POST',
		url: ADD_SCORE,
		showLoading:false,
		hideLoading:false,
		data,
	});
}
// 增加积分记录
export function addScoreRecord(data) {
	return request({
		method: 'POST',
		url: ADD_SCORE_RECORD,
		showLoading:false,
		hideLoading:false,
		data,
	});
}
// 获取用户角色
export function getUserNum(data) {
	return request({
		method: 'GET',
		url: NEW_USER,
		showLoading:false,
		hideLoading:false,
		data,
	});
}



