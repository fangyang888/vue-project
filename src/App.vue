<template>
  <div id="app">
    <x-header :left-options="{backText: ''}">{{title}}</x-header>

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
      // this.headerTitle='知识库'

      this.setTitle();
    },
    computed:{
      // title(){
      //   return '知识库';
      // }
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

  body {
    background-color: #fbf9fe;
  }
  .vux-header{

  }

</style>
