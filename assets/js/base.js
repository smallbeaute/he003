<<<<<<< HEAD
$.ajaxPrefilter(function(options) {
    // 在发起真正的 Ajax 请求之前，统一拼接请求的根路径
    options.url = 'http://ajax.frontend.itheima.net' + options.url
  })
  
=======
$.ajaxPrefilter(function (options) { 
    // 在发起ajax请求的时候 统一拼接 
    // 这里的options就是整个ajax的对象 这样就可以在发起请求前修改
    options.url = 'http://ajax.frontend.itheima.net' + options.url
})
>>>>>>> login
