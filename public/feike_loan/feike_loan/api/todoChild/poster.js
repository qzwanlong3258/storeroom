import {
	request
} from '@/config/http.js';
import {
	GET_POSTER
} from '@/config/api.js';

export function getPoster(data) {
	return request({
		method: "GET",
		url: GET_POSTER,
		data
	});
}