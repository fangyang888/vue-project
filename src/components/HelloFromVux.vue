<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <div id="repository" >
      <div class="repository-input">
        <x-input v-model="searchkey" placeholder="搜索标题、关键字、发表人" ></x-input>
      </div>

    </div>
    <div  >

      <scroller style="top: 44px;"
                :on-refresh="refresh"
                :on-infinite="infinite"
                class="repository-scroller"
                ref="my_scroller">


        <div v-for="item in filterList">

          <div  class="repository-list" @click="getItemValue(item)"
                v-on:mouseenter="mouseLeave">
            <div class="repository-list-margin">

              <div class="repository-title" v-html="$options.filters.highlight(item.TITLE, searchkey)" ></div>
              <div class="repository-content" >
                <span class="repository-name" v-html="$options.filters.highlight(item.SUBMIT_STAFF, searchkey)"></span>
                <span class="repository-time" v-html="$options.filters.highlight(item.UPDATE_TIME, searchkey)"></span>
              </div>

            </div>

          </div>

        </div>
      </scroller>


    </div>
    <loading v-model="showDialog" text="Loading"></loading>
  </div>
</template>

<script>
  import { XButton,XInput, Group, Cell,Loading} from 'vux'
  import axios from '../http'
  import { mapActions } from 'vuex';
  import { mapState } from 'vuex';
  import { mapGetters } from 'vuex'
  export default {

    name: 'hello',
    components: {
      XButton ,
      XInput,
      Group,
      Cell,
      Loading
    },
    data () {
      return {
        searchkey:'',
        showDialog:false,
        isChangeColor:false,
        noData:false,
        pageIndex:0,
        pageSize:10,
        totalPage:0,
        showList:[],
        List:[],
        title:'',
        test:[]

      }

    },
    computed:{
      filterList() {
        // `this` points to the vm instance
        var searchkey = this.searchkey;
        var List = this.showList;

        return List.filter(function (item) {
          var key=item.SUBMIT_STAFF+item.TITLE+item.UPDATE_TIME;
          return key.toLowerCase().indexOf(searchkey.toLowerCase()) != -1;
        });
      },

      ...mapGetters({
        getList: 'getList',
      })
    },
    methods:{
      getItemValue(item){
        this.showDialog=true;
        setTimeout(() => {
          this.getValue(item)
        },1000)

      },
      getValue(item){
        this.$router.push({
          path:'/detail',
          query:{
            id:item.ATTACHE_ID,
            title:item.TITLE,
            content:item.CONTENT
          }
        })
      },
      addData(pageIndex){

        this.getPageData(pageIndex);
        if(pageIndex>=this.totalPage) {
          this.noData = true;
        }

        setTimeout(() => {
          this.$refs.my_scroller.finishInfinite(0);
        })

        // }


      },
      refresh(){
        this.updateList({"time":'1023',"vaule":'123'});

        setTimeout(()=> {
          this.pageIndex=1;
          this.showList=[];

          this.getPageData(1);
          this.$refs.my_scroller.finishPullToRefresh();
          this.noData=false;

        }, 1000)
      },
      infinite(){
        if(this.noData){
          setTimeout(() => {
            this.$refs.my_scroller.finishInfinite(1);
          })
          return;
        }
        setTimeout(() => {
          this.pageIndex+=1;
          this.addData(this.pageIndex);

        }, 1500)

      },
      mouseLeave(){

      },
      getTotal(data){
        var totalSize;
        var pageSize= this.pageSize;
        var page = data % pageSize;

        if (page) {
          totalSize = parseInt(data / pageSize) + 1;
        } else {
          totalSize = parseInt(data / pageSize);
        }
        return totalSize;
      },
      getPageData(pageIndex){
        var pageSize= this.pageSize;
        var totalPage= this.totalPage;
        var list=this.List;
        var showList=this.showList;
        if(totalPage>pageIndex){

          for(let i=pageSize*(pageIndex-1);i<pageSize*pageIndex;i++){

            showList.push(list[i]);
          }
        }else if(totalPage==pageIndex){

          for(let i=pageSize*(pageIndex-1);i<list.length;i++){

            showList.push(list[i]);
          }
        }else{
          showList=list;
        }

      },
      getRequestData(){
        var self = this;
        var reqXml = "<root>";
        reqXml += "<rsQry>";
        reqXml += "<rsId>"+35760010+"</rsId>";
        reqXml += "<excuteType>"+0+"</excuteType>";
        reqXml += "</rsQry>";
        reqXml += "</root>";
        let value=reqXml;
        let  url='api/CommonServlet?actType=5&isParse=0';

        axios.post(url,value)
          .then(({ data }) => {
            self.List=data.rowSet;
            self.totalPage=this.getTotal(self.List.length);
          });
      },
      ...mapActions({
        updateList: 'updateList',
        repositoryList:'repositoryList'
      })


    },
    filter:{
      highlights(words, query){
        var iQuery = new RegExp(query, "ig");
        return words.toString().replace(iQuery, function(matchedTxt,a,b){
          // return ('<span class=\'highlight\'>' + matchedTxt + '</span>');
          console.log(111);
        })
      }

    },
    created() {
      var reqXml = "<root>";
      reqXml += "<rsQry>";
      reqXml += "<rsId>"+35760010+"</rsId>";
      reqXml += "<excuteType>"+0+"</excuteType>";
      reqXml += "</rsQry>";
      reqXml += "</root>";
      let  url='api/CommonServlet?actType=5&isParse=0';
      this.repositoryList({"url":url,"value":reqXml});
//     this.getRequestData();

      this.$nextTick(()=>{
      this.List=this.getList;
      console.log(this.List)
      console.log("=22222===")
         this.totalPage=this.getTotal(this.List.length);
      });



    }

  }
</script>
<style scoped>
  @import '../assets/css/test.css';
</style>
<style  >
  /*#repository{*/
    /*position: fixed;*/
    /*!* margin: 5px 10px; *!*/
    /*background-color: #efefef;*/
    /*margin-top: 45px;*/
    /*width: 100%;*/
    /*z-index: 10001;*/
    /*!* border: 1px solid; *!*/
    /*height: 55px;*/

  /*}*/

  .search-key{

  }
  .repository-list{
    min-height: 85px;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid #dfdfdf;

  }
  span.highlight {
    background-color: yellow;
  }
  .repository-title{
    min-height: 45px;
  }
  .repository-content {
    margin-top: 10px;
    /*  float: left;*/
    width: 100%;
    height: 25px;
  }
  .repository-name {
    /* margin-left: 10px; */
    float: left;
    width: 50%;
  }
  .repository-time {
    float: right;
    /* margin-right: 10px; */
  }
  .repository-scroller {
    height: 100%;
    margin-top: 60px;
  }
  .repository-list-margin{
    margin:0px 10px;
  }
</style>
<style >
  .vux-header {
    z-index: 10001;
    background-color: #3cd597;
    position: fixed;
    top: 0px;
    height: 45px;
    width: 100%;
  }
</style>
