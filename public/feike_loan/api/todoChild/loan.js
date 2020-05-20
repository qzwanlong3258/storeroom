import {
	request
} from '@/config/http.js';
import {
	LOAN_APPT ,LOAN_LIST, LOAN_LIST_DETAIL, LOAN_BANK, LOAN_FACE_MEMBER, LOAN_PERIOD, FACE_SUBMIT, TESTONETEST, GET_COUNT, GET_ISSUE
} from '@/config/api.js';
const {  getStorage } = require('./storage.js')

export function loanAppt(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "POST",
		url: `${LOAN_APPT}`,
		data
	});
}

export function loanList(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "GET",
		url: `${LOAN_LIST}`,
		showLoading:false,
		hideLoading:false,
		data
	});
}
export function loanListDetail(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "GET",
		url: `${LOAN_LIST_DETAIL}`,
		showLoading:false,
		hideLoading:false,
		data
	});
}
export function loanBank(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "GET",
		url: `${LOAN_BANK}`,
		showLoading:false,
		hideLoading:false,
		data
	});
}
export function loanFaceMember(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "GET",
		url: `${LOAN_FACE_MEMBER}`,
		showLoading:false,
		hideLoading:false,
		data
	});
}
export function loanPeriod(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "GET",
		url: `${LOAN_PERIOD}`,
		showLoading:false,
		hideLoading:false,
		data
	});
}

export function faceSumbit(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "POST",
		url: `${FACE_SUBMIT}`,
		data
	});
}
export function testOneTest(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "POST",
		url: `${TESTONETEST}`,
		data
	});
}

export function getCount(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "GET",
		url: `${GET_COUNT}`,
		showLoading:false,
		hideLoading:false,
		data
	});
}

export function getIssue(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "GET",
		url: `${GET_ISSUE}`,
		showLoading:false,
		hideLoading:false,
		data
	});
}