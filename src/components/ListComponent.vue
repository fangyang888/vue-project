<template>
    <div style="margin-top: 45px">
      <div class="list-search" >
        <x-input class="list-search-key" v-model="search" :placeholder="placeholder"></x-input>
      </div>
       <div v-for="item in list">
         <div v-for="(value,key) in item">
             {{key}}---{{value}}
          </div>
       </div>
       <div v-for="i in columns">
          {{i}}
       </div>
    </div>
</template>

<script>
  import {XInput} from 'vux'
    export default {
        components: {
          XInput
        },
        data () {
            return {
              search: this.searchkey
            }
        },
        computed: {
          placeholder(){
              return '搜索标题、关键字、发表人'
          }
        },
        created(){
            console.log(this.mydata);
           this.columns.forEach((value)=>{
             for(var [key,values] of Object.entries(value)) {
               console.log(key+"==="+values);
             }
           });

          for(var [key,value] of Object.entries(this.mydata)) {
            console.log(key+"==="+value);
          }
        },
        props:{
          list:Array,
          columns:Array,
          mydata:Object,
          searchkey:String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .list-search{
   background-color: #c9c9c9;
 }
 .list-search-key{

 }

</style>
