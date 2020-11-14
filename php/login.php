<?php
    header('content-type:text/html;charset="utf-8"');
    $phone=$_POST['phone'];/*获取登录表单提交过来的数据*/
    $psd=$_POST['psd'];
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

    // 准备sql语句
    $sql = "SELECT * FROM user where phone={$phone}";

    // 发送sql语句
    $sql_result = mysql_query($sql);
    $result= mysql_fetch_assoc($sql_result);

    if(!$result){
        header("refresh:3;url='/login.html'");
        print('该用户不存在！...<br>三秒后自动跳转。');
        return false;
    } 
    //以后只有两种结果的判断的话 尽量不写else 先判断错误的 
    //就是说  如果错误  就返回错误并跳出也好 停止也好

    // 下面就是正确的话的流程 所有不用else 直接写在外面就行ok

    //判断密码输入是否正确
    if($result['pwd']!==$psd){// 以后只有两种结果的判断的话 尽量不写else 先判断错误的 
        header("refresh:3;url='/login.html'");
        print('密码不正确请重新输入！...<br>三秒后自动跳转。');
        return false;
    }

    //登录成功后 跳转并返回值 
   header("refresh:3;url='/index.html'");
   print('登录成功！...<br>三秒后自动跳转。');
   return json_encode($result);
    
   

?>
