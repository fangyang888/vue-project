import Vue from 'vue'

export default {
    install: function (Vue, options) {
    	console.log("===1=="+options);
       Vue.filter('formatTime', function (value) {
       	console.log("===2=="+value);
       Date.prototype.Format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    return new Date(value).Format("yyyy-MM-dd hh:mm:ss");
    })

    Vue.filter('highlight', function(words, query){
      var iQuery = new RegExp(query, "ig");
    return words.toString().replace(iQuery, function(matchedTxt,a,b){
    	// return matchedTxt;
        return ('<span class=\'highlight\'>' + matchedTxt + '</span>');
    })
   })

     Vue.filter('unescape', function(html){
    
    	return html
      .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, "\"")
      .replace(/&#39;/g, "\'");
    
   })

  Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.innerText
    el.remove()
  }
  })


    Vue.prototype.NOTICE = true;


        // 3. 注入组件
        //  注入组件，插件加载开始前提示
    Vue.mixin({
            created: function () {
                if (this.NOTICE)
                    console.log("组件开始加载")
            },
            methods: {
                test: function () {
                    console.log("mixin test");
                }
            }
        })
    }
  

};
