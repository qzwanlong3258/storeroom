import {
	request
} from '@/config/http.js';

import {
	LOAD_GOODS_LIST,
	LOAD_GOODS_DETAIL,
	LOAD_GOODS_EVALUATION,
	LOAD_GOODS_CONVERT
} from '@/config/api.js'

//加载积分商品
export function getGoodsList(data) {
	return request({
		method: 'GET',
		url: LOAD_GOODS_LIST,
		showSuccessToast: true,
		data
	});
}

//查看积分商品详情
export function getGoodsDetail(data) {
	return request({
		method: 'GET',
		url: LOAD_GOODS_DETAIL,
		showSuccessToast: true,
		data
	});
}

/**
 * 查看积分商品评价
 */
export function getGoodsEvaluation(data) {
	return request({
		method: 'GET',
		url: LOAD_GOODS_EVALUATION,
		showSuccessToast: true,
		data
	});
}

//查看参与商品兑换记录
export function getGoodsConvert(data) {
	const {
		id,
		page,
		size
	} = data
	return request({
		url: `${LOAD_GOODS_CONVERT}?id=${id}&page=${page}&size=${size}`,
		showSuccessToast: true,
	});
}
