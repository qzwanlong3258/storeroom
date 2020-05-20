'use strict';
import {
	formatTime
} from '@/utils/util.js';
import * as img from '@/config/image.js';
import Vue from 'vue';
import { DECORATION, MEASUREHOME, DECORATION_PICTURE, INSHOP ,INVITEGIFT} from '@/config/router.js';

/**
 * 格式化-性别
 */
export function formatGender(value) {
	switch (Number(value)) {
		case 1:
			return '男';
		case 2:
			return '女';
		default:
			return '位置'
	}
}

/**
 * 格式化-订单状态
 */
export function formatOrderState(value) {
	switch (Number(value)) {
		case 1:
			return "待付款";
		case 2:
			return "待发货";
		case 3:
			return "待收货";
		case 4:
			return "完成";
		case 5:
			return "退换";
		default:
			return "未知";
	}
}

/**
 * 格式化-订单ICON
 */
export function formatOrderStateIcon(value) {
	switch (Number(value)) {
		case 1:
			return img.PRE_PAYMENT;
		case 2:
			return img.TO_BE_DELIVERED;
		case 3:
			return img.TO_BE_RECEIVED;
		case 4:
			return img.EVALUATION;
		case 5:
			return img.AFTER_SALE;
		default:
			return img.NULL_DATA;
	}
}

/**
 * 格式化-时间
 */
export function formatDate(value) {
	if (value == null || value === "") {
		return "";
	}
	value = parseInt(value);
	let date, leg = value.length;
	if (leg === 13) {
		date = new Date(value);
	} else if (value.length < 13) {
		date = new Date(value * 10 * (13 - leg));
	} else if (value.length > 13) {
		date = new Date(value / (10 * (leg - 13)));
	} else {
		date = new Date(value);
	}
	if (date.toString() === "Invalid Date") return date.toString();
	return formatTime(date, "yyyy-MM-dd hh:mm:ss");
}

/**
 * 格式化-订单按钮列表
 */
export function formatOrderBtns(value) {
	switch (Number(value)) {
		case 1:
			return [{
				id: 1,
				name: "联系客服",
				event: "makePhoneCall",
				params: "12345678910"
			}, {
				id: 2,
				name: "取消订单",
				event: "deleteOrder",
			}, {
				id: 8,
				name: "兑换",
				event: "linkToWriteOrder"
			}];
		case 2:
			return [{
				id: 4,
				name: "修改地址",
				event: "linkToAddress"
			}, {
				id: 10,
				name: "回到首页",
				event: "linkToHome"
			}];
		case 3:
			return [{
				id: 1,
				name: "联系客服",
				event: "makePhoneCall",
				params: "12345678910"
			}, {
				id: 6,
				name: "确认收货",
				event: "orderDelivery"
			}];
		case 4:
			return [{
				id: 1,
				name: "联系客服",
				event: "makePhoneCall",
				params: "12345678910"
			}, {
				id: 8,
				name: "再来一单",
				event: "linkToWriteOrder"
			}];
		case 5:
			return [];
		default:
			return [];
	}
}

/**
 * 格式化-首页路由
 */
export function formatHomeRoute(value) {
	switch(value) {
		case "装修分期": return DECORATION_PICTURE;
		case "约量房": return MEASUREHOME;
		case "好店入驻": return INSHOP;
		case "邀请有礼": return INVITEGIFT;
	}
}