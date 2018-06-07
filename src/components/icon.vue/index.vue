<template>
    <i :class="[className, isMsg ? 'weui-icon-msg' : '']"></i>
</template>
<script>
    export default {
        name: 'icon',
        props: {
            type: String,
            isMsg: Boolean
        },
        computed: {
            className() {
                return `weui-icon weui_icon_${this.type} weui-icon-${this.type.replace(/ _/g, '-')}`
            }
        }
    }
</script>
<style lang="less">
    @import '../../style/weui/icon/weui_icon_font';

    .icon-big:before {
        font-size: 30px;
    }
</style>