define(["jquery"], function($) {
    //首页 智能手机模块 数据加载
    function downloadphone() {
        $.ajax({
            url: "../data/phone.json",
            type: "get",
            success: function(arr) {

                var phone = arr[0];
                var node = $(`<p>
                    <span></span>
                </p>
                <b>${phone.title}</b>`)
                node.appendTo("#a0 .ts_title");

                var phone_list1 = phone['mobileItem']['lists'][0]['categorys'];
                //遍历目录
                for (var i = 0; i < phone_list1.length; i++) {
                    var node1 = $(`<li class="">
                    <a href="#" class="blue">${phone_list1[i].listName}</a>
                </li>`)
                    node1.appendTo("#a0 .A_loc ul")
                }

                //“全部”下所有商品
                var phone_cont = phone['mobileItem']['lists'][0]['categorys'][0]['items'];
                for (var k = 0; k < phone_cont.length; k++) {

                    var node2 = $(`<a href="#" target="_blanl">
                        <div uploaded_date="20201104" style="background-image: url(${phone_cont[k].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                        </div>
                    </a>`)
                    node2.appendTo("#a0 .b1 .p_left")

                    var node3 = $(`<div>
                            <b class="tagimg">
                                <img alt>
                            </b>
                            <a href="#">
                                <p>
                                    <img src="${phone_cont[k].pcImgpc}" alt="">
                                </p>
                                <p>
                                    <span>${phone_cont[k].title}</span>
                                </p>
                                <p>
                                    <span>${phone_cont[k].subtitle}</span>
                                </p>
                                <p>
                                    <strong>￥${phone_cont[k].salesprice}</strong>
                                    <span class="scribing_price">￥${phone_cont[k].listprice}</span>

                                </p>
                            </a>
                        </div>`)

                    node3.appendTo("#a0 .b1 .p_right");
                }

                // “Galaxy S” 下的商品
                var phone_cont2 = phone['mobileItem']['lists'][0]['categorys'][1]['items'];
                for (var d = 0; d < phone_cont2.length; d++) {
                    var node4 = $(`<a href="#" target="_blanl">
                        <div uploaded_date="20201104" style="background-image: url(${phone_cont2[d].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                        </div>
                    </a>`)
                    node4.appendTo("#a0 .b2 .p_left")

                    var node5 = $(`<div>
                            <b class="tagimg">
                                <img alt>
                            </b>
                            <a href="#">
                                <p>
                                    <img src="${phone_cont2[d].pcImgpc}" alt="">
                                </p>
                                <p>
                                    <span>${phone_cont2[d].title}</span>
                                </p>
                                <p>
                                    <span>${phone_cont2[d].subtitle}</span>
                                </p>
                                <p>
                                    <strong>￥${phone_cont2[d].salesprice}</strong>
                                    <span class="scribing_price">￥${phone_cont2[d].listprice}</span>

                                </p>
                            </a>
                        </div>`)

                    node5.appendTo("#a0 .b2 .p_right");
                }

                //“ Galaxy Note” 下的商品
                var phone_cont3 = phone['mobileItem']['lists'][0]['categorys'][2]['items'];
                for (var f = 0; f < phone_cont3.length; f++) {
                    var node6 = $(`<a href="#" target="_blanl">
                           <div uploaded_date="20201104" style="background-image: url(${phone_cont3[f].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                           </div>
                       </a>`)
                    node6.appendTo("#a0 .b3 .p_left")

                    var node7 = $(`<div>
                               <b class="tagimg">
                                   <img alt>
                               </b>
                               <a href="#">
                                   <p>
                                       <img src="${phone_cont3[f].pcImgpc}" alt="">
                                   </p>
                                   <p>
                                       <span>${phone_cont3[f].title}</span>
                                   </p>
                                   <p>
                                       <span>${phone_cont3[f].subtitle}</span>
                                   </p>
                                   <p>
                                       <strong>￥${phone_cont3[f].salesprice}</strong>
                                       <span class="scribing_price">￥${phone_cont3[f].listprice}</span>

                                   </p>
                               </a>
                           </div>`)

                    node7.appendTo("#a0 .b3 .p_right");
                }

                //“ Galaxy A” 下的商品
                var phone_cont4 = phone['mobileItem']['lists'][0]['categorys'][3]['items'];
                for (var g = 0; g < phone_cont4.length; g++) {
                    var node8 = $(`<a href="#" target="_blanl">
                            <div uploaded_date="20201104" style="background-image: url(${phone_cont4[g].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                            </div>
                        </a>`)
                    node8.appendTo("#a0 .b4 .p_left")

                    var node9 = $(`<div>
                                <b class="tagimg">
                                    <img alt>
                                </b>
                                <a href="#">
                                    <p>
                                        <img src="${phone_cont4[g].pcImgpc}" alt="">
                                    </p>
                                    <p>
                                        <span>${phone_cont4[g].title}</span>
                                    </p>
                                    <p>
                                        <span>${phone_cont4[g].subtitle}</span>
                                    </p>
                                    <p>
                                        <strong>￥${phone_cont4[g].salesprice}</strong>
                                        <span class="scribing_price">￥${phone_cont4[g].listprice}</span>
 
                                    </p>
                                </a>
                            </div>`)

                    node9.appendTo("#a0 .b4 .p_right");
                }

                //“ Galaxy A” 下的商品
                var phone_cont4 = phone['mobileItem']['lists'][0]['categorys'][4]['items'];
                for (var g = 0; g < phone_cont4.length; g++) {
                    var node8 = $(`<a href="#" target="_blanl">
                            <div uploaded_date="20201104" style="background-image: url(${phone_cont4[g].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                            </div>
                        </a>`)
                    node8.appendTo("#a0 .b5 .p_left")

                    var node9 = $(`<div>
                                <b class="tagimg">
                                    <img alt>
                                </b>
                                <a href="#">
                                    <p>
                                        <img src="${phone_cont4[g].pcImgpc}" alt="">
                                    </p>
                                    <p>
                                        <span>${phone_cont4[g].title}</span>
                                    </p>
                                    <p>
                                        <span>${phone_cont4[g].subtitle}</span>
                                    </p>
                                    <p>
                                        <strong>￥${phone_cont4[g].salesprice}</strong>
                                        <span class="scribing_price">￥${phone_cont4[g].listprice}</span>
 
                                    </p>
                                </a>
                            </div>`)

                    node9.appendTo("#a0 .b5 .p_right");
                }

            },
            error: function(msg) {
                console.log(msg);
            }
        })
    }
    //通过事件委托添加切换函数
    function tabMenu() {
        $(".A_loc ul").on("mouseenter", "li", function() {
            $(this).addClass("active").siblings("li").removeClass("active");
            //
            $(this).closest(".productRecommend").find("div.recommend_banner").css("display", "none").eq($(this).index()).css("display", "block");
            return false
        })
    }





    function tabMenu1() {
        //                  
        $("#logo .nav").on("mouseenter", "li", function() {
            $(this).closest("#logo").find("div.sub-menu").css("display", "none").eq($(this).index()).css("display", "block");
        })
        $("#logo .nav").on("mouseleave", "li", function() {
            $(this).closest("#logo").find("div.sub-menu").css("display", "none");
        })

        $("#logo").on("mousemove", ".sub-menu", function() {
            $(this).css("display", "block");

            $("#logo").on("mouseleave", "li , .sub-menu", function() {
                $("li").closest("#logo").find("div.sub-menu").css("display", "none");
            })
        })
    }


    return {
        downloadphone,
        tabMenu,
        tabMenu1

    }
})