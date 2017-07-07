<template xmlns:v-on="">
    <div>
      <list-component :url="url" :reqData="reqData" :columns="columns"
                      :placeholder="placeholder" v-on:increment="increment"></list-component>
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
              columns:['TITLE','SUBMIT_STAFF','UPDATE_TIME'],
              mydata:{"name":"hash","age":123},
              url:'api/CommonServlet?actType=5&isParse=0',
              placeholder:'搜索标题、关键字、发表人'


            }
        },
        computed: {
          reqData(){
            var reqXml = "<root>";
            reqXml += "<rsQry>";
            reqXml += "<rsId>" + 35760010 + "</rsId>";
            reqXml += "<excuteType>" + 0 + "</excuteType>";
            reqXml += "</rsQry>";
            reqXml += "</root>";
            return reqXml;
          }
        },
        created(){

        },
        methods:{
          increment(item){
            this.$router.push({
              path: '/repositoryDetail',
              query: {
                id: item.ATTACHE_ID,
                title: item.TITLE,
                content: item.CONTENT
              }
            })
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
