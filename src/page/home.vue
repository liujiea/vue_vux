<template>
  <div class="contianer">
        <ul>
            <router-link :key="idx" v-for="(val, idx) in list" tag='li' :to="{path: '/' + val}" v-html="val"></router-link>
        </ul>
        <button @click="openClick">开启</button>
        <button @click="closeClick">关闭</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
        list: [
            'study',
            'icon',
            'x-button',
            'divider',
            'flexbox'
        ]
    }
  },
  methods: {
    openClick () {
      this.$vux.alert.show({
        text: '我是弹窗',
        onShow() {
          console.log('我显示了')
        },
        onHide() {
          console.log('我隐藏了')
        }
      });
    },
    closeClick () {
      this.$vux.alert.hide();
    }
  }
}
</script>

<style>
</style>
