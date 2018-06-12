<template>
  <div class="contianer">
        <ul>
            <router-link :key="idx" v-for="(val, idx) in list" tag='li' :to="{path: '/' + val}" v-html="val"></router-link>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
        list: [
            'icon',
            'x-button',
            'divider'
        ]
    }
  }
}
</script>

<style>
</style>
