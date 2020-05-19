import {
	request
} from '@/config/http.js';
import {
	POST_SHOP
} from '@/config/api.js';


export function postShop(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "POST",
		url: `${POST_SHOP}`,
		showLoading:false,
		hideLoading:false,
		data
	});
}

