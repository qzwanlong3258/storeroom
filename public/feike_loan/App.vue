<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
@import "./style/yld.scss";
@import "./style/global.scss";
@import "./style/iconfont.scss";

page {
	background: $color_background;
}
</style>
