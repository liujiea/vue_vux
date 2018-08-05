<template>
	<div class="alert">
		<div v-if="showValue">
			<div>{{title}}</div>
			<div>{{text}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'alert',
		data() {
			return {
				showValue: false
			}
		},
		props: {
			value: String,
			text: String,
			title: {
				type: String,
				defalut: '我是标题'
			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.alert {
		position: absolute;
	    top: 0;
	    right: 0;
	    left: 0;
	    bottom: 0;
	    background: yellow;
	}
</style>