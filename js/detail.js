define(["jquery", "jquery-cookie"], function ($) {
    function download() {
        //找到详情页加载的商品的id
        var product_id = byid();
        // var product_id = valueByName(location.search, "product_id");
        console.log(product_id);
        $.ajax({
            url: "../data/list.json",
            type: "get",
            success: function (arr) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].product_id == product_id) {
                        var node1 = $(`
                        <ul class='list-inline'>
                            <li>
                                <a href="/index.html">网上商城</a>
                            </li>
                            <li class="divider">/</li>
                            <li>
                                <a href="list.html">智能手机</a>
                            </li>
                            <li class="divider">/</li>
                            <li>${arr[i].desc}</li>
                        </ul>
                    `);
                        node1.appendTo(".sam-breakcrumb");

                        var node2 = $(`<section class="proImg g_l">
                    <div class="largeimg">
                        <div id="kv-pdp" class="swiper-container swiper-container-horizontal">
                            <div class="swiper-warrper"
                                style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
                                <div class="swiper-slide swiper-slide-active" style="width: 410px;" id="small">
                                    <a href="">
                                        <img src="${arr[i].img}" alt="">
                                        <div id="mark"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="bigimg" style="position: absolute;">
                    <img src="${arr[i].img}" alt="">
                </div>`);
                        node2.appendTo(".pro-info");

                        var node3 = $(` 
                <h3 class="new-biaoqian">换新补贴至高2000元</h3>
                <h1 class="pro-name">${arr[i].desc}</h1>
                
                <ul class="price">
                        <li>优惠价格：</li>
                        <li>${arr[i].price}元</li>
                    </ul>
            `);
                        node3.appendTo(".moblie-shop-show-div");

                        var node4 = $(`<li>
                        <a href="#" class="btn btn-primary btn-biglarge J_login" id="${arr[i].product_id}">加入购物车</a>
                    </li>
                    <li>
                        <a href="cart.html" class="btn-gray btn-like btn-biglarge">
                            <i class="iconfont default"></i>查看购物车
                        </a>
                    </li>`);
                    node4.appendTo("#J_buyBtnBox");
                    }
                }
            },
            error: function (msg) {
                console.log(msg);
            }
        })
    }

    function byid() {
        var url = window.location.href;
        var arr = url.split('?')[1];
        var id = arr.slice(3);
        return id
    }

   
    

 //给加入购物车的按钮添加点击事件
 $("#J_buyBtnBox").on("click", ".J_login", function () {
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

    return false

   

})
 return{
        download
    }
})