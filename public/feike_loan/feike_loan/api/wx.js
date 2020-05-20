import {
	request
} from '@/config/http.js';
import {
	GET_ACCESS_TOKEN,
	GET_UNLIMITED,
	SHE_JI_SHI
} from '@/config/api.js';

/**
 * 获取二维码
 */
export async function getUnlimited(data) {
	let accessToken = getApp().globalData.accessToken;
	!accessToken && ((accessToken = (await request({method: 'GET',url: GET_ACCESS_TOKEN})).access_token) && (getApp().globalData.accessToken = accessToken));
	return request({
		method: 'POST',
		url: GET_UNLIMITED,
		data: {
			"access_token": accessToken,
			...data
		}
	});
}
/**
 * 设计师
 */

export function postDesigner(data) {
	return request({
		method: 'POST',
		url: SHE_JI_SHI,
		showSuccessToast: true,
		data
	});
}
