import {
	request
} from '@/config/http.js';
import {
	CREATE_ORDER,
	PAY_ORDER,
	GET_ORDER_DETAIL,
	GET_ORDER_LIST,
	DELETE_ORDER,
	UPDATE_ORDER,
	ORDER_DELIVERY
} from '@/config/api.js';

/**
 * 创建订单
 */
export function createOrder(data) {
	return request({
		method: 'POST',
		url: CREATE_ORDER,
		data
	});
}

/**
 * 订单支付
 */
export function payOrder(data) {
	return request({
		method: 'POST',
		url: PAY_ORDER,
		data
	});
}

/**
 * 查询订单详情
 */
export function getOrderDetail(data) {
	return request({
		method: 'GET',
		url: GET_ORDER_DETAIL,
		data
	});
}

/**
 * 删除订单
 */
export function deleteOrder(data) {
	return request({
		method: 'POST',
		url: DELETE_ORDER,
		data
	});
}

/*确认收货*/
export function orderDelivery(id){
	return request({
		method: 'POST',
		url: ORDER_DELIVERY,
		data: {
			orderid: id
		}
	})
}

/**
 * 查询订单列表
 */
export function getOrderList(data) {
	return request({
		method: 'GET',
		url: GET_ORDER_LIST,
		data
	});
}

/**
 * 更新订单
 */
export function updateOrder(data) {
	return request({
		method: 'POST',
		url: UPDATE_ORDER,
		data
	});
}