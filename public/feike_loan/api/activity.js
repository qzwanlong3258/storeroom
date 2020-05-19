import {
	request
} from '@/config/http.js';
import {
	LOAD_ACTIVITY,
	COMPLETE_ACTIVITY
} from '@/config/api.js';

// 获取活动列表
export function loadActivity(data) {
	return request({
		method: 'GET',
		url: LOAD_ACTIVITY,
		data
	});
}

// 活动完成
export function completeActivity(data) {
	return request({
		method: "POST",
		url: COMPLETE_ACTIVITY,
		data
	});
}