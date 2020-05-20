import {
	request
} from '@/config/http.js';
import {
	LOAD_CUSTOMER
} from '@/config/api.js';

export function loadCustomer(data) {
	return request({
		method: "GET",
		url: LOAD_CUSTOMER,
		data
	});
}