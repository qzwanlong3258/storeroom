<template>
	<view>
		<view class="btn-list">
			<view v-for="(item, index) in btnList" :key="index" v-if="item.id != 9" @click="clickBtnEvent(item)" class="btn-clonum">{{ item.name }}</view>
			<view v-for="(item, index) in btnList" :key="index" v-if="item.id == 9" class="btn-refund">
				<i @click="showRefundModel" class="iconfont iconmore"></i>
				<view v-if="isShowModel" @click="clickBtnEvent(item)" class="refund-nav">{{ item.name }}</view>
			</view>
		</view>
	</view>
</template>

<script>
import { makePhoneCall, model, toast } from '@/config/package.js';
import { WRITE_ORDER, ADDRESS_INDEX, REFUND_DETAIL, ORDER_LIST, HOME } from '@/config/router.js';
import types from '@/store/mutationTypes.js';
import { mapMutations, mapActions } from 'vuex';
import { deleteOrder, getOrderDetail, orderDelivery } from '@/api/order.js';
import { toRoute } from '@/utils/util.js';

export default {
	data() {
		return {
			isShowModel: false,
			selected: {}
		};
	},
	props: {
		btnList: {
			type: Array,
			default: () => {
				return [];
			}
		},
		infor: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	
	methods: {
		...mapActions('order', ['getOrderItem', 'getOrderStatus']),
		...mapMutations('order', [types.SET_ORDER_ITEM]),
		showRefundModel: function() {
			this.isShowModel = !this.isShowModel;
		},

		/**
		 * 拨打电话
		 */
		makePhoneCall: function(phone) {
			makePhoneCall({ phone });
		},

		/**
		 * 删除订单
		 */
		_deleteOrder: async function() {
			let res = await deleteOrder({ uuid: this.infor.uuid });
			Number(res.count) !== 1 && ((res = null), await model({ content: '删除订单失败', icon: 'none', showCancel: false }));
			return res;
		},

		/**
		 * 取消订单
		 */
		deleteOrder: async function() {
			(await model()).confirm && (await this._deleteOrder({ uuid: this.infor.id })) && this.$emit('change', this.selected);
		},

		/**
		 * 跳转编辑地址页面
		 */
		linkToAddress: function() {
			uni.navigateTo({
				url: `${ADDRESS_INDEX}?operating=orderUpdate&orderid=${this.infor.id?this.infor.id:this.infor.uuid}`
			});
		},

		/**
		 * 复制订单
		 */
		copyOrder: async function() {
			let res = getOrderDetail(this.infor.id);
			let modelRes = await model({ title: '物流单号', showCancel: false, confirmText: '确认复制' });
			uni.setClipboardData({
				data: res.deliveryId,
				success: function() {
					uni.showToast({
						title: '已复制到剪切板',
						icon: 'none'
					});
				}
			});
		},

		/**
		 * 订单收货
		 */
		_orderDelivery: async function() {
			let res = await orderDelivery(this.infor.id);
			Number(res.count) !== 1 && ((res = null), await model({ content: '订单收货失败，请刷新重试', icon: 'none', showCancel: false }));
			return res;
		},

		/**
		 * 订单收货
		 */
		orderDelivery: async function() {
			(await this._orderDelivery()) && (await toast({ title: '收货成功', icon: 'success' })) && (this.$emit('change', this.selected), toRoute(`${ORDER_LIST}?state=4`));
		},

		/**
		 * 跳转编辑订单
		 */
		linkToWriteOrder: function() {
			uni.navigateTo({
				url: `${WRITE_ORDER}?id=${this.infor.id}`
			});
		},

		/**
		 * 售后维权
		 */
		postSale: function() {
			this.showRefundModel();
			this[types.SET_ORDER_ITEM](this.infor);
			uni.navigateTo({
				url: `${REFUND_DETAIL}?id=${this.id}`
			});
		},

		/**
		 * 跳转首页
		 */
		linkToHome: function() {
			uni.switchTab({
				url: HOME
			});
		},

		/**
		 * 按钮点击事件
		 */
		clickBtnEvent: function(item) {
			this.selected = item;
			this[item.event] && this[item.event](this.params);
		}
	}
};
</script>

<style lang="scss">
.btn-list {
	display: flex;
	justify-content: center;

	.btn-clonum {
		margin-top: 30upx;
		margin-left: 30upx;
		width: 160upx;
		height: 46upx;
		line-height: 46upx;
		border: 1upx solid #666;
		color: #666;
		font-size: 26upx;
		border-radius: 40upx;
		background: #fff;
		text-align: center;

		&.btn-clonum:last-child {
			background: #baa16d !important;
			color: #fff;
			border: none;
		}
	}
}

.btn-refund {
	position: absolute;
	left: 36upx;
	width: 80upx;
	height: 46upx;
	text-align: center;
	line-height: 46upx;
	margin-top: 30upx;
	border: 1upx solid #dcdcdc;
	border-radius: 40upx;

	.iconmore {
		font-size: 50upx;
		color: #8f8fa7;
	}

	.refund-nav {
		margin-top: 22upx;
		margin-left: -30upx;
		width: 160upx;
		height: 46upx;
		line-height: 46upx;
		color: #666;
		font-size: 26upx;
		border-radius: 10upx;
		background: #fff;
		text-align: center;
		box-shadow: 0 4upx 4upx 4upx rgba(0, 0, 0, 0.1);
	}
}
</style>
