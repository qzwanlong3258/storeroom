import {
	request
} from '@/config/http.js';

import {
	LOAD_INTEGRAL,GET_SCORE_DETAIL
} from '@/config/api.js';

// 获取我的积分余额
export function loadIntegral(data) {
	return request({
		method: 'GET',
		url: LOAD_INTEGRAL,
		data,
		showLoading:false,
		hideLoading:false,
	});
}
// 获取我的积分余额
export function loadIntegralDeyail(data) {
	return request({
		method: 'GET',
		url: GET_SCORE_DETAIL,
		data,
	});
}
