<template>
  <div id="app" >
    <div>
    <x-header :left-options="{backText: ''}">{{title}}</x-header>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  export default {
    components: {
      XHeader
    },
    data(){
      return{
        title:''
      }
    },
    created(){
     this.setTitle();
    },
    computed:{

    } ,
    watch: {
      '$route' () {
        this.setTitle();
      }
    },
    methods: {
      setTitle () {
        this.title=this.$route.meta.title;
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  .vux-demo-header-box {
    z-index: 100;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }
  .vux-header{
    overflow: hidden;
  }

</style>
<style scoped>
  .vux-header {
    z-index: 10001;
    background-color: #3cd597;
    position: fixed;
    top: 0px;
    height: 45px;
    width: 100%;
  }
</style>
