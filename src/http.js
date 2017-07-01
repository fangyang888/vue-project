
import axios from 'axios'
import Qs from 'qs'
export default {
  post: function (url, data) {

     axios.defaults.headers.post['Content-Type'] = 'application/json';
    let config = {

      url: url,

      method: 'post', // default

      baseURL: 'http://192.168.32.143:7002/servlet/',
      　　
      transformRequest: [function (data) {

        // 　　 console.log('----1111---'+data);
        // data = Qs.stringify({});
        // data=qs.parse(data)
        //  console.log('----2222---'+data);
        return data;
      }],
      withCredentials:true,
      transformResponse: [function (data) {


        return data;
      }],

      // 请求头信息
      headers: {'X-Requested-With': 'XMLHttpRequest'},

      //parameter参数
      params: {
        timestamp: Date.parse(new Date()) / 1000
      },

      //post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
      data: data,

      //设置超时时间
      timeout: 5000,
      //返回数据类型
      responseType: 'json' // default

    }
    return axios.post(url, data, this.config)
  }
}
