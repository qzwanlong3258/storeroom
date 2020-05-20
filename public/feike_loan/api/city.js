import {
	request
} from '@/config/http.js';
import {
	LOAD_CITY
} from '@/config/api.js';

// 获取城市列表
export function loadCity(data) {
	return request({
		method: 'GET',
		url: LOAD_CITY,
		data
	});
}