define(['jquery'], function($) {
    //电视/影音/显示器
    function downloadtv() {
        $.ajax({
            url: "../data/tv.json",
            type: "get",
            success: function(arr) {
                var tv = arr[0];
                var node = $(`<p>
                    <span></span>
                </p>
                <b>${tv.title}</b>`)
                node.appendTo("#a2 .ts_title");

                var tv_list1 = tv['ctvItem']['lists'][0]['categorys'];
                //遍历目录
                for (var i = 0; i < tv_list1.length; i++) {
                    var node1 = $(`<li class="">
                    <a href="#" class="blue">${tv_list1[i].listName}</a>
                </li>`)
                    node1.appendTo("#a2 .A_loc ul")
                }
                //加载数据
                var tv_cont1 = tv['ctvItem']['lists'][0]['categorys'][0]['items'];
                for (var k = 0; k < tv_cont1.length; k++) {

                    var node2 = $(`<a href="#" target="_blanl">
                        <div uploaded_date="20201104" style="background-image: url(${tv_cont1[k].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                        </div>
                    </a>`)
                    node2.appendTo("#a2 .c1 .p_left")

                    var node3 = $(`<div>
                            <b class="tagimg">
                                <img alt>
                            </b>
                            <a href="#">
                                <p>
                                    <img src="${tv_cont1[k].pcImgpc}" alt="">
                                </p>
                                <p>
                                    <span>${tv_cont1[k].title}</span>
                                </p>
                                <p>
                                    <span>${tv_cont1[k].subtitle}</span>
                                </p>
                                <p>
                                    <strong>￥${tv_cont1[k].salesprice}</strong>
                                    <span class="scribing_price">￥${tv_cont1[k].listprice}</span>

                                </p>
                            </a>
                        </div>`)

                    node3.appendTo("#a2 .c1 .p_right");
                }

                //第二部分子数据
                var tv_cont2 = tv['ctvItem']['lists'][0]['categorys'][1]['items'];
                for (var j = 0; j < tv_cont2.length; j++) {

                    var node4 = $(`<a href="#" target="_blanl">
                        <div uploaded_date="20201104" style="background-image: url(${tv_cont2[j].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                        </div>
                    </a>`)
                    node4.appendTo("#a2 .c2 .p_left")

                    var node5 = $(`<div>
                            <b class="tagimg">
                                <img alt>
                            </b>
                            <a href="#">
                                <p>
                                    <img src="${tv_cont2[j].pcImgpc}" alt="">
                                </p>
                                <p>
                                    <span>${tv_cont2[j].title}</span>
                                </p>
                                <p>
                                    <span>${tv_cont2[j].subtitle}</span>
                                </p>
                                <p>
                                    <strong>￥${tv_cont2[j].salesprice}</strong>
                                    <span class="scribing_price">￥${tv_cont2[j].listprice}</span>

                                </p>
                            </a>
                        </div>`)

                    node5.appendTo("#a2 .c2 .p_right");
                }

                //第三部分子数据
                var tv_cont3 = tv['ctvItem']['lists'][0]['categorys'][2]['items'];
                for (var a = 0; a < tv_cont3.length; a++) {

                    var node6 = $(`<a href="#" target="_blanl">
                        <div uploaded_date="20201104" style="background-image: url(${tv_cont3[a].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                        </div>
                    </a>`)
                    node6.appendTo("#a2 .c3 .p_left")

                    var node7 = $(`<div>
                            <b class="tagimg">
                                <img alt>
                            </b>
                            <a href="#">
                                <p>
                                    <img src="${tv_cont3[a].pcImgpc}" alt="">
                                </p>
                                <p>
                                    <span>${tv_cont3[a].title}</span>
                                </p>
                                <p>
                                    <span>${tv_cont3[a].subtitle}</span>
                                </p>
                                <p>
                                    <strong>￥${tv_cont3[a].salesprice}</strong>
                                    <span class="scribing_price">￥${tv_cont3[a].listprice}</span>

                                </p>
                            </a>
                        </div>`)

                    node7.appendTo("#a2 .c3 .p_right");
                }

                //第四部分子数据
                var tv_cont4 = tv['ctvItem']['lists'][0]['categorys'][3]['items'];
                for (var a = 0; a < tv_cont4.length; a++) {

                    var node8 = $(`<a href="#" target="_blanl">
                        <div uploaded_date="20201104" style="background-image: url(${tv_cont4[a].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                        </div>
                    </a>`)
                    node8.appendTo("#a2 .c4 .p_left")

                    var node9 = $(`<div>
                            <b class="tagimg">
                                <img alt>
                            </b>
                            <a href="#">
                                <p>
                                    <img src="${tv_cont4[a].pcImgpc}" alt="">
                                </p>
                                <p>
                                    <span>${tv_cont4[a].title}</span>
                                </p>
                                <p>
                                    <span>${tv_cont4[a].subtitle}</span>
                                </p>
                                <p>
                                    <strong>￥${tv_cont4[a].salesprice}</strong>
                                    <span class="scribing_price">￥${tv_cont4[a].listprice}</span>

                                </p>
                            </a>
                        </div>`)

                    node9.appendTo("#a2 .c4 .p_right");
                }

                //第五部分子数据
                var tv_cont5 = tv['ctvItem']['lists'][0]['categorys'][4]['items'];
                for (var a = 0; a < tv_cont5.length; a++) {

                    var node10 = $(`<a href="#" target="_blanl">
                        <div uploaded_date="20201104" style="background-image: url(${tv_cont5[a].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                        </div>
                    </a>`)
                    node10.appendTo("#a2 .c5 .p_left")

                    var node11 = $(`<div>
                            <b class="tagimg">
                                <img alt>
                            </b>
                            <a href="#">
                                <p>
                                    <img src="${tv_cont5[a].pcImgpc}" alt="">
                                </p>
                                <p>
                                    <span>${tv_cont5[a].title}</span>
                                </p>
                                <p>
                                    <span>${tv_cont5[a].subtitle}</span>
                                </p>
                                <p>
                                    <strong>￥${tv_cont5[a].salesprice}</strong>
                                    <span class="scribing_price">￥${tv_cont5[a].listprice}</span>

                                </p>
                            </a>
                        </div>`)

                    node11.appendTo("#a2 .c5 .p_right");
                }

                //第六部分子数据
                var tv_cont5 = tv['ctvItem']['lists'][0]['categorys'][5]['items'];
                for (var a = 0; a < tv_cont5.length; a++) {

                    var node10 = $(`<a href="#" target="_blanl">
                        <div uploaded_date="20201104" style="background-image: url(${tv_cont5[a].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                        </div>
                    </a>`)
                    node10.appendTo("#a2 .c6 .p_left")

                    var node11 = $(`<div>
                            <b class="tagimg">
                                <img alt>
                            </b>
                            <a href="#">
                                <p>
                                    <img src="${tv_cont5[a].pcImgpc}" alt="">
                                </p>
                                <p>
                                    <span>${tv_cont5[a].title}</span>
                                </p>
                                <p>
                                    <span>${tv_cont5[a].subtitle}</span>
                                </p>
                                <p>
                                    <strong>￥${tv_cont5[a].salesprice}</strong>
                                    <span class="scribing_price">￥${tv_cont5[a].listprice}</span>

                                </p>
                            </a>
                        </div>`)

                    node11.appendTo("#a2 .c6 .p_right");
                }

            },
            error: function(msg) {
                console.log(msg);
            }
        })
    }


    return {
        downloadtv
    }
})