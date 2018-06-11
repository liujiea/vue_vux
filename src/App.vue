<template>
  <div class="contianer">
      <ul>
          <router-link :key="idx" v-for="(val, idx) in list" tag='li' :to="{path: '/' + val}" v-html="val"></router-link>
      </ul>
    <transition name="slid">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
    import VIcon from './components/icon/icon'
export default {
  name: 'App',
  data () {
    return {
        list: [
            'icon',
            'x-button'
        ]
    }
  },
  components: {
    VIcon
  }
}
</script>

<style>
    .contianer {

    }
    .contianer ul {
        display: flex;
        flex-wrap: wrap;
    }
    .contianer ul li {
        list-style-type: none;
        /* width: 50px; */
        padding: 20px 20px;
        /* height: 50px; */
        /* line-height: 50px; */
        background-color: yellow;
        margin: 0 10px;
        text-align: center;
        white-space: nowrap;
    }
    .rating_page {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        background-color: #ffe;
    }
    .slid-enter-active, .fade-leave-active {
        transition: opacity .4s;
    }
    .slid-enter, .slid-leave-to {
        opacity: 0;
    }
</style>
