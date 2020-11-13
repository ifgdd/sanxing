define(["jquery", "jquery-cookie"], function ($) {
    /*  加载已经加入购物车的商品
     加载详情页和购物车页面的商品，
     有两部分json数据
     like.json
     list.json 
     通过promise处理两次按照顺序加载数据
     
     */
    function loadCarData() {
        $(".shopcart-list-content").html("");
        new Promise(function (resolve, reject) {
            $.ajax({
                url: "../data/list.json",
                success: function (obj) {
                    //如果下载成功，把下载到数据中的商品列表传输过去
                    resolve(obj);
                },
                error: function (msg) {
                    //如果下载错误，调用reject方法
                    reject(msg);
                }
            })
        }).then(function (arr1) {
            //下载第二份代码
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: "../data/like.json",
                    success: function (arr2) {
                        // 将两份数据合并
                        var newArr = arr1.concat(arr2);
                        resolve(newArr);
                    },
                    error: function (msg) {
                        reject(msg);
                    }
                })
            })
        }).then(function (arr) {
            // arr所有商品的信息，需加载 加入购物车的商品

            // 1.拿到服务器上，所有的商品数据，然后找出cookie中有的数据
            var cookieStr = $.cookie("goods");
            if (cookieStr) {
                var cookieArr = JSON.parse(cookieStr);
                var newArr = [];
                //先遍历cookie的数组
                for (var i = 0; i < cookieArr.length; i++) {
                    // 再遍历已经下载到的数据
                    for (var j = 0; j < arr.length; j++) {
                        // 项目中所有商品的id不能一样
                        if (cookieArr[i].id == arr[j].product_id || cookieArr[i].id == arr[j].goodsid) {
                            arr[j].num = cookieArr[i].num;
                            //设置商品id一致
                            arr[j].id = arr[j].product_id ? arr[j].product_id : arr[j].goodsid;
                            newArr.push(arr[j]);
                        }
                    }
                }
                // newArr 存储的都是购物车中加载的商品    商品信息  id  数量
                // console.log(newArr);

                // 通过循环将拿到的数据 添加到页面上

                for (var k = 0; k < newArr.length; k++) {
                    var node = $(`<div class="shopcart-list" id=${newArr[k].id}>
                    <!-- 选中按钮 -->
                    <div class="xuan">
                    <i class="icon icon-checked is-active"></i>
                    </div>
                    <div class="shopcart-list-right float-clearfix">
                        <div class="shopcart-goods">
                            <!-- 小手机图片 -->
                            <div class="shopcart-list-leftimg">
                                <a href=""><img src="${newArr[k].img}" alt=""></a>
                                <i class="icon icon-outOfStock-bg"></i>
                            </div>
                            <!-- 手机/商品介绍 -->
                            <a href="">
                                ${newArr[k].tname}
                                <p>
                                    夜雾银
                                </p>
                            </a>
                        </div>
                        <!-- 单价 -->
                        <div class="shopcart-unit-price shopcart-unit-discount">
                            <p style="color: #363d4c;font-weight: normal;" pre-info >${newArr[k].price}.00</p>
                        </div>
                        <!-- 积分 -->
                        <div class="shopcart-jifen">${(newArr[k].price * newArr[k].num)}</div>
                        <!-- 数量按钮 -->
                        <div class="shopcart-qty">
                            <div class="calculate-num events-calculateNum">
                                <!-- 减号按钮 -->
                                <button class="down">-</button>
                                <!-- 中间的数字 -->
                                <input type="text" class="qty-input events-input" value="${newArr[k].num}" origindata="1" readonly>
                                <!-- 加号按钮 -->
                                <button class="up">+</button>
                            </div>
                            <!-- 删除 -->
                            <a class="shopcart-remove events-shopcart-remove">删除</a>
                        </div>
                        <!-- 金额 -->
                        <div class="shopcart-sum sgopcart-sum-discount ">
                        
                            <p style="color:#363d4c;font-weight: normal;" pre-info>${(newArr[k].price * newArr[k].num).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                `);

                    node.appendTo(".shopcart-list-content")
                }
                checkedAll();

            }
        }).catch(function (error) {
            console.log(error);
        })
    }



    function download() {
        $.ajax({
            url: "../data/like.json",
            type: "get",
            success: function (arr) {
                var str = ``;
                for (var i = 0; i < arr.length; i++) {
                    str += `<div class="col-10-2 col-xs-12-6" >
                        <div class="thumbnail">
                            <a class="shoppingCartRecommendProducts" target=_blank>
                                <img src="${arr[i].img}" alt="">
                                <h2>${arr[i].tname}</h2>                            </a>
                            ￥<p>${arr[i].price}</p>
                            <a href="javascript:void(0)" class="btn my-events-addToCart" id="${arr[i].goodsid}">加入购物车</a>
                        </div>
                    </div>`;
                }
                $(".new-recommend-list").html(str);
            },
            error: function (msg) {
                console.log(msg);
            }
        })

        //给加入购物车的按钮添加点击事件
        $(".new-recommend-list").on("click", ".my-events-addToCart", function () {
            //获取当前的商品列表
            var id = this.id;
            //进行购物车操作   goods键，json格式字符串为值
            // 本地存储技术 cookie（最大2kb，只能存储字符串）
            // [{id:id,num:1},{id:id,num:1}]  转成json格式字符串。

            //1、先去判断cookie中是否存在商品信息
            var first = $.cookie("goods") == null ? true : false;
            //2、如果是第一次添加
            if (first) {
                //直接创建cookie
                var cookieStr = `[{"id":${id},"num":1}]`;
                $.cookie("goods", cookieStr, {
                    expires: 7
                })
            } else {
                var same = false; //假设没有添加过
                //3、如果不是第一次添加，判断之前是否添加过
                var cookieStr = $.cookie("goods");
                var cookieArr = JSON.parse(cookieStr);
                for (var i = 0; i < cookieArr.length; i++) {
                    if (cookieArr[i].id == id) {
                        //如果之前添加过，数量+1
                        cookieArr[i].num++;
                        same = true;
                        break;
                    }
                }

                if (!same) {
                    //如果没有添加过，新增商品数据
                    var obj = { id: id, num: 1 };
                    cookieArr.push(obj);
                }

                //最后，存回cookie中
                $.cookie("goods", JSON.stringify(cookieArr), {
                    expires: 7
                })
            }
            // alert($.cookie("goods"));
            checkedAll();

            loadCarData();

            return false
        })
    }

    // 全选和单选
    function checked() {
        // 全选
        $(".icon-checked").on("click", function () {

            // console.log(55);
            if ($(this).hasClass('is-active')) {
                //若全选  再次点击 移除is-active
                $(this).removeClass('is-active');
                //     //给每个单个选项框也移除is-active
                $(this).parent().parent().find(".shopcart-list-content .xuan").find("i").removeClass("is-active");
            } else {
                // 添加
                $(this).addClass('is-active');
                $(this).parent().parent().find(".shopcart-list-content .xuan").find("i").addClass("is-active");
            }
            checkedAll();
        })

        // 给每个商品的复选框设置点击
        $(".shopcart-list-content").on("click", ".shopcart-list .xuan i", function () {
            if ($(this).hasClass("is-active")) {
                $(this).removeClass("is-active");
            } else {
                $(this).addClass("is-active");
            }
            checkedAll();
        })
    }


    // 判断有多少个被选中
    function checkedAll() {
        var allChecks = $(".shopcart-list-content").find(".shopcart-list");
        var isAll = true;//假设是否都选中
        var total = 0; //计算总数
        var cort = 0;
        allChecks.each(function (index, item) {
            if (!$(item).find(".xuan i").hasClass("is-active")) {
                //判断其中这个商品没有被选中
                isAll = false;
            } else {
                total += parseFloat($(item).find(".shopcart-unit-price p").html() * parseFloat($(this).find(".calculate-num input").val()));
                cort += parseInt($(item).find(".shopcart-unit-price p").html() * parseFloat($(this).find(".calculate-num input").val()));
            }
        })

        // 总计
        $(".shopcost-sum-title .addprices").html((total).toFixed(2));


        $(".shopcost-sum .jifen .addprice").html(total);
        // 判断是否全选
        if (isAll) {
            $(".shopcart-list-title").find("i").addClass("is-active");
        } else {
            $(".shopcart-list-title").find("i").removeClass("is-active");
        }



    }

    //给页面上商品数量增加减少和删除添加
    function changeCars() {

        $(".shopcart-list-content").on("click", ".events-shopcart-remove", function () {
            var id = $(this).parent().parent().parent().closest("div").remove().attr("id");
            //在cookie中删除这个数据
            var cookieArr = JSON.parse($.cookie("goods"));
            // console.log(cookieArr);

            for (var i = 0; i < cookieArr.length; i++) {
                if (id == cookieArr[i].id) {
                    cookieArr.splice(i, 1);
                    break;
                }
            }
            cookieArr.length == 0 ? $.cookie("goods", null) : $.cookie("goods", JSON.stringify(cookieArr), {
                expires: 7
            })
            checkedAll();
            return false;
        })

        // 增减 减少
        $(".shopcart-list-content").on("click", ".down,.up", function () {
            // 找到当前商品的id
            var id = $(this).closest(".shopcart-list").attr("id");
            var cookieStr = $.cookie("goods");
            var cookieArr = JSON.parse(cookieStr);

            var index = cookieArr.findIndex(item => item.id == id);



            if (this.className == 'up') {
                cookieArr[index].num++
            } else {
                cookieArr[index].num == 1 ? alert("数量已经为1，不能再减少！") : cookieArr[index].num--;
            }

            $(this).siblings('input').val(cookieArr[index].num)

            // 每个点击商品的单价
            var price = $(this).closest(".shopcart-list").find(".shopcart-unit-price p").html();  
            // 每个点击商品的总金额
            var dan_total= (price * cookieArr[index].num).toFixed(2);
            $(this).closest(".shopcart-list").find(".shopcart-sum p").html(dan_total);
            // 每个点击商品的总积分
            var jifen = (price * cookieArr[index].num);
            $(this).closest(".shopcart-list").find(".shopcart-jifen").html(jifen);


            $.cookie("goods", JSON.stringify(cookieArr), {
                expires: 7
            })
            //每次更改一次数据，重新计算一次总价
            checkedAll();

            return false;
        })
    }

    return {
        download: download,
        loadCarData: loadCarData,
        checked: checked,
        changeCars: changeCars,
    }
})