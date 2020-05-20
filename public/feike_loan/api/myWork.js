import {
	request
} from '@/config/http.js';

import {
   MYWORK_FACE, MYWORKPHOTO, MYWORKPHOTO_LOCATION, PHOTO_SUMBIT
} from '@/config/api.js'

//加载积分商品
export function myWorkFace(data) {
	return request({
		method: 'GET',
		url: MYWORK_FACE,
		showSuccessToast: true,
		data
	});
}
//加载拍照任务
export function myWorkPhoto(data) {
	return request({
		method: 'GET',
		url: MYWORKPHOTO,
		showSuccessToast: true,
		data
	});
}
//加载拍照任务
export function myWorkPhotoLocation(data) {
	return request({
		method: 'GET',
		url: MYWORKPHOTO_LOCATION,
		showSuccessToast: true,
		data
	});
}
//提交拍照任务
export function photoSubmit(data) {
	return request({
		method: 'POST',
		url: PHOTO_SUMBIT,
		showSuccessToast: true,
		data
	});
}
