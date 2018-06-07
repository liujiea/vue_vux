<template>
  <div>
    <v-icon type="success"></v-icon>
    <v-icon type="info"></v-icon>
    <v-icon type="info-circle"></v-icon>
    <v-icon type="warn"></v-icon>
    <v-icon type="waiting"></v-icon>
    <v-icon type="waiting-circle"></v-icon>
    <v-icon type="safe-success"></v-icon>
    <v-icon type="safe-warn"></v-icon>
    <v-icon type="success-circle"></v-icon>
    <v-icon type="success-no-circle"></v-icon>
    <v-icon type="circle"></v-icon>
    <v-icon type="download"></v-icon>
    <v-icon type="cancel"></v-icon>
    <v-icon type="search"></v-icon>
    <v-icon type="clear"></v-icon>
    <v-icon type="success" is-msg></v-icon>
    <v-icon type="info" is-msg></v-icon>
    <v-icon type="safe-success" is-msg></v-icon>
    <v-icon type="safe-warn" is-msg></v-icon>
  </div>
</template>

<script>
    import VIcon from './components/icon/icon'
export default {
  name: 'App',
  components: {
    VIcon
  }
}
</script>

<style>

</style>
