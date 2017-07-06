<template>
    <div>
      <list-component :list="list" :searchkey="searchkey"  :columns="columns" :mydata="mydata"></list-component>
    </div>
</template>

<script>
    import ListComponent from './ListComponent'
    export default {
        components: {
            'ListComponent':ListComponent
        },
        data () {
            return {
              list:[{name:"zhangsh",age:12,time:'2017-10-12'},{name:"zhangsh",age:14,time:'2017-11-12'}],
              searchkey:'',
              columns:['name','age','time'],
              mydata:{"name":"hash","age":123}

            }
        },
        computed: {

        },
        created(){

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
