<template>
  <div class="repository-detail" >
    <h4> {{title}}</h4>
    <div >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{content}}</div>
    <div class="detail-list">
      <div  v-for="item of dailyPaper">
        <div class="detail-button">
          <x-button class="button-color">{{item.NAME}}</x-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { XButton} from 'vux'
  import axios from '../http'
  import { mapActions } from 'vuex';
  import { mapGetters } from 'vuex'
  export default {
    components: {
      XButton
    },
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        routerValue:{},
        dailyPaper:[],
        headerTitle:'',
        id:'',
        content:'',
        title:''
      }
    },
    methods:{
      fetchData () {
        this.id=this.$route.query.id;
        this.title=this.$route.query.title;
        this.content=this.$route.query.content;

      }
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    computed:{

    },
    created(){


      this.fetchData();
      var reqXml = "<root>";
      reqXml += "<rsQry>";
      reqXml += "<rsId>"+35760011+"</rsId>";
      reqXml += "<param name='ATTACHE_ID'>"+this.id+"</param>";
      reqXml += "<excuteType>"+0+"</excuteType>";
      reqXml += "</rsQry>";
      reqXml += "</root>";
//
      let value=reqXml;
      let  url='api/CommonServlet?actType=5&isParse=0';

      axios.post(url,value)
        .then(({ data }) => {
          this.dailyPaper=data.rowSet;
        });


    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .repository-detail{
    margin: 10px;
    margin-top: 55px;
  }
  .detail-title {
    margin-left: 35px;
  }
  .detail-button{
    margin-top: 15px;
  }
  .detail-list{
    margin-top: 100px;
  }
  .button-color{
    background-color: #3cd597;
    border-radius: 12px;
    color: white;
  }

</style>
