<template>
	<button
	class="weui-btn"
	:style="buttonStyle"
	:class="classes"
	:disabled="disabled"
	:type="activeType"
	@click="onClick">
		<i class="weui-loading" v-if="showLoading"></i>
		<slot>{{ text }}</slot>
	</button>
</template>
<script type="text/javascript">
	import { go } from '../../libs/router'
	export default {
		name: 'x-button',
		props: {
			type: {
				default: 'default'
			},
			disabled: Boolean,
			mini: Boolean,
			plain: Boolean,
			text: String,
			actionType: String,
			showLoading: Boolean,
			link: [String, Object],
			gradients: {
				type: Array,
				validator: function (val) {
					return val.length === 2
				}
			}
		},
		methods: {
			onClick () {
				!this.disabled && go(this.link, this.$router)
			}
		},
		computed: {
			noBorder () {
				return Array.isArray(this.gradients)
			},
			buttonStyle () {
				if (this.gradients) {
					return {
						background: `linear-gradient(90deg, ${this.gradients[0]}, ${this.graditens[1]})`,
						color: '#fff'
					}
				}
			},
			classes () {
				return [
					{
						'weui-btn_disabled': !this.plain && this.disabled,
						'weui-btn_plain_disabled': this.plain && this.disabled,
						'weui-btn_mini': this.mini,
						'vue-x-button-no-border': this.noBorder
					},
					!this.plain ? `weui-btn_${this.type}` : '',
					this.plain ? `weui-btn_plain-${this.type}` : '',
					this.showLoading ? `weui-btn_loading` : ''
				]
			}
		}
	}
</script>
<style lang="less">
	@import '../../style/weui/widget/weui-button/weui-button.less';
	// @import '../../style/weui/weui-loading/weui-loading.less'

	.weui-btn.vux-x-button-no-border:after {
		display: none;
	}
</style>