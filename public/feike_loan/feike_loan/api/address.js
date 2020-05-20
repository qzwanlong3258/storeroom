import {
	request
} from '@/config/http.js';

import {
	LOAD_ADDRESS,
	ADD_ADDRESS,
	UPDATE_ADDRESS,
	DELETE_ADDRESS
} from '@/config/api.js';

// 获取收货地址列表
export function loadAddress(data) {
	return request({
		method: 'GET',
		url: LOAD_ADDRESS,
		data,
	}).then(res => {
		res.list.length && (res.list[0].default = true);
		return res;
	});
}

// 添加收货地址
export function addReceiveAddress(data) {
	return request({
		method: "POST",
		url: ADD_ADDRESS,
		data
	});
}

// 更新收货地址
export function updateReceiveAddress(data) {
	data.default && (Number(data.default));
	return request({
		method: "POST",
		url: UPDATE_ADDRESS,
		data
	});
}

// 删除收货地址
export function deleteReceiveAddress(data) {
	return request({
		method: "POST",
		url: DELETE_ADDRESS,
		data
	});
}