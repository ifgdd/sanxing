<?php
   header('content-type:text/html;charset="utf-8"');
  $phone=$_POST['phone'];/*获取登录表单提交过来的数据*/
  $pwd=$_POST['pwd'];

  if(!$phone){
    echo "请输入手机号";
  }
  if(!$pwd){
    echo "请输入密码";
  }

   // 链接数据库
   $link = mysql_connect("127.0.0.1","root","123456");

   // 判断数据库是否连接成功
   if(!$link){
       echo "服务器忙";
       exit;
   }

   // 设置访问字符集
   mysql_set_charset("utf-8");

   // 选择要访问的数据库
   mysql_select_db("sanxing");

// 判断手机号是否已经注册
   $sql_isphone="SELECT * from user where phone='$phone'";
   $sql_data= mysql_query($sql_isphone);
   $sql_data_res= mysql_fetch_array($sql_data);
   if($sql_data_res){
      header("refresh:5;url='/register.html'");
      print('该手机号已经注册！请勿重复注册！...<br>五秒后自动跳转。');
    return false;
   }

   //  准备sql语句 判断均无问题 插入sql
   $sql = "INSERT INTO user (phone,pwd) VALUES('{$phone}','{$pwd}')";
   //6、发送sql语句闭嘴
   $res = mysql_query($sql);
   if($res){
        header("refresh:5;url='/login.html'");
        print('注册成功！...<br>五秒后自动跳转。');
        return false;
   }else{
        header("refresh:5;url='/register.html'");
        print('注册失败,重新注册！...<br>五秒后自动跳转。');
        return false;
   }
?>