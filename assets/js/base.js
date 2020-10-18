$.ajaxPrefilter(function (options) { 
    // 在发起ajax请求的时候 统一拼接 
    // 这里的options就是整个ajax的对象 这样就可以在发起请求前修改
    options.url = 'http://ajax.frontend.itheima.net' + options.url
})