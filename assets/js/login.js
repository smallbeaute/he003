$(function () {
  // 点击 去注册的链接
  $("#link-qu").on("click", function () {
    $(".login-box").hide();
    $(".reg-box").show();
  });

  //点击去登陆的链接
  $("#link-deng").on("click", function () {
    $(".login-box").show();
    $(".reg-box").hide();
  });

  // 从layui中获取form对象
  var form = layui.form;
  var layer = layui.layer;
  // console.log(form);
  // 通过form.verify()函数自定义校验规则
  form.verify({
    //自定义了一个叫pwd的校验规则
    pwd: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"],
    //   校验两次密码输入是否一致
    repwd: function (value) {
      //   通过形参拿到的是确认密码框中的内容
      // 还需要拿到密码框中的内容
      // 然后进行一次等于的判断
      // 如果判断失败，则return一个提示消息就可以了
      var pwd = $(".reg-box [name=password]").val();
      if (pwd !== value) {
        // 这里一定要写return 否则用户得不到返回值
        return "两次密码不一致！";
      }
    },
  });
  //  监听注册表单的提交事件
  $("#form-reg").on("submit", function (e) {
    //首先阻止默认行为
    e.preventDefault();
    //获取页面元素的时候因为是查找 所以中间的空格不能少
    var data = {
      username: $("#form-reg [name=username]").val(),
      password: $("#form-reg [name=password]").val(),
    };
    // 这里的url地址要记得拼接
    $.post("/api/reguser", data, function (res) {
      if (res.status !== 0) {
        return layer.msg(res.message);
      } else {
        layer.msg("恭喜你注册成功啦，请登录");
        //成功的时候就最自动跳转到登陆页面
        $("#link-deng").click();
      }
    });

    //监听登陆表单的提交事件
    $("#form-login").submit(function (e) {
      e.preventDefault();
      $.ajax({
        method: "POST",
        url: "/api/login",
        // 获取表单中所有的数据
        data: $(this).serialize(),
        success: function (res) {
          if (res.status !== 0) {
            return layer.msg("登陆失败");
          } else {
            layer.msg("登陆成功");
            // 将登陆成功得到的token字符串 保存在localStorage中
            localStorage.setItem("token", res.token);
            //更改地址跳转
            location.href = "/index.html";
          }
        },
      });
    });
  });






















  
});
