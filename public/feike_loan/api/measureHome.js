import {
	request
} from '@/config/http.js';
import {
	MEASURE_HOME, GET_SHOP ,MEASURE_SUCCESS, GET_MY_SHOP
} from '@/config/api.js';


export function measureHome(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "POST",
		url: `${MEASURE_HOME}`,
		showLoading:false,
		hideLoading:false,
		data
	});
}
export function getShop(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "GET",
		url: `${GET_SHOP}`,
		showLoading:false,
		hideLoading:false,
		data
	});
}
export function measureSuccess(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "POST",
		url: `${MEASURE_SUCCESS}`,
		showLoading:false,
		hideLoading:false,
		data
	});
}
export function getMyShop(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "GET",
		url: `${GET_MY_SHOP}`,
		showLoading:false,
		hideLoading:false,
		data
	});
}
