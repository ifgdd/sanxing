define(["jquery"], function($) {
    //电脑、平板、存储 数据加载
    function downloadcomputer() {
        $.ajax({
            url: "../data/computer.json",
            type: "get",
            success: function(arr) {
                var computer = arr[0];
                var node = $(`<p>
                    <span></span>
                </p>
                <b>${computer.title}</b>`)
                node.appendTo("#a3 .ts_title");

                var computer_list1 = computer['computerItem']['lists'][0]['categorys'];
                //遍历目录
                for (var i = 0; i < computer_list1.length; i++) {
                    var node1 = $(`<li class="">
                    <a href="#" class="blue">${computer_list1[i].listName}</a>
                </li>`)
                    node1.appendTo("#a3 .A_loc ul")
                }
                //第一部分数据
                var computer_cont1 = computer['computerItem']['lists'][0]['categorys'][0]['items'];
                for (var k = 0; k < computer_cont1.length; k++) {

                    var node2 = $(`<a href="#" target="_blanl">
                        <div uploaded_date="20201104" style="background-image: url(${computer_cont1[k].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                        </div>
                    </a>`)
                    node2.appendTo("#a3 .d1 .p_left")

                    var node3 = $(`<div>
                            <b class="tagimg">
                                <img alt>
                            </b>
                            <a href="#">
                                <p>
                                    <img src="${computer_cont1[k].pcImgpc}" alt="">
                                </p>
                                <p>
                                    <span>${computer_cont1[k].title}</span>
                                </p>
                                <p>
                                    <span>${computer_cont1[k].subtitle}</span>
                                </p>
                                <p>
                                    <strong>￥${computer_cont1[k].salesprice}</strong>
                                    <span class="scribing_price">￥${computer_cont1[k].listprice}</span>

                                </p>
                            </a>
                        </div>`)

                    node3.appendTo("#a3 .d1 .p_right");
                }
                //第二部分数据
                var computer_cont2 = computer['computerItem']['lists'][0]['categorys'][1]['items'];
                for (var k = 0; k < computer_cont2.length; k++) {

                    var node4 = $(`<a href="#" target="_blanl">
                        <div uploaded_date="20201104" style="background-image: url(${computer_cont2[k].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                        </div>
                    </a>`)
                    node4.appendTo("#a3 .d2 .p_left")

                    var node5 = $(`<div>
                            <b class="tagimg">
                                <img alt>
                            </b>
                            <a href="#">
                                <p>
                                    <img src="${computer_cont2[k].pcImgpc}" alt="">
                                </p>
                                <p>
                                    <span>${computer_cont2[k].title}</span>
                                </p>
                                <p>
                                    <span>${computer_cont2[k].subtitle}</span>
                                </p>
                                <p>
                                    <strong>￥${computer_cont2[k].salesprice}</strong>
                                    <span class="scribing_price">￥${computer_cont2[k].listprice}</span>

                                </p>
                            </a>
                        </div>`)

                    node5.appendTo("#a3 .d2 .p_right");
                }

                //第三部分数据
                var computer_cont2 = computer['computerItem']['lists'][0]['categorys'][2]['items'];
                for (var k = 0; k < computer_cont2.length; k++) {

                    var node6 = $(`<a href="#" target="_blanl">
                        <div uploaded_date="20201104" style="background-image: url(${computer_cont2[k].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                        </div>
                    </a>`)
                    node6.appendTo("#a3 .d3 .p_left")

                    var node7 = $(`<div>
                            <b class="tagimg">
                                <img alt>
                            </b>
                            <a href="#">
                                <p>
                                    <img src="${computer_cont2[k].pcImgpc}" alt="">
                                </p>
                                <p>
                                    <span>${computer_cont2[k].title}</span>
                                </p>
                                <p>
                                    <span>${computer_cont2[k].subtitle}</span>
                                </p>
                                <p>
                                    <strong>￥${computer_cont2[k].salesprice}</strong>
                                    <span class="scribing_price">￥${computer_cont2[k].listprice}</span>

                                </p>
                            </a>
                        </div>`)

                    node7.appendTo("#a3 .d3 .p_right");
                }
            },
            error: function(msg) {
                console.log(msg);
            }
        })
    }
    return {
        downloadcomputer
    }
})