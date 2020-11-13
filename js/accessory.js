define(["jquery"], function($) {
    //配件 数据加载
    function downloadaccessory() {
        $.ajax({
            url: "../data/accessory.json",
            type: "get",
            success: function(arr) {
                var accessory = arr[0];
                var node = $(`<p>
                    <span></span>
                </p>
                <b>${accessory.title}</b>`)
                node.appendTo("#a4 .ts_title");

                var accessory_list1 = accessory['accessoryItem']['lists'][0]['categorys'];
                //遍历目录
                for (var i = 0; i < accessory_list1.length; i++) {
                    var node1 = $(`<li class="">
                    <a href="#" class="blue">${accessory_list1[i].listName}</a>
                </li>`)
                    node1.appendTo("#a4 .A_loc ul")
                }

                //第一部分数据
                var accessory_cont1 = accessory['accessoryItem']['lists'][0]['categorys'][0]['items'];
                for (var k = 0; k < accessory_cont1.length; k++) {

                    var node2 = $(`<a href="#" target="_blanl">
                         <div uploaded_date="20201104" style="background-image: url(${accessory_cont1[k].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                         </div>
                     </a>`)
                    node2.appendTo("#a4 .e1 .p_left")

                    var node3 = $(`<div>
                             <b class="tagimg">
                                 <img alt>
                             </b>
                             <a href="#">
                                 <p>
                                     <img src="${accessory_cont1[k].pcImgpc}" alt="">
                                 </p>
                                 <p>
                                     <span>${accessory_cont1[k].title}</span>
                                 </p>
                                <p>
                                    <span> ${accessory_cont1[k].subtitle == null ? "" : "accessory_cont1[k].subtitle "}</span>
                                </p>                                
                                 <p>
                                     <strong>￥${accessory_cont1[k].salesprice}</strong>
                                     <span class="scribing_price">￥${accessory_cont1[k].listprice}</span>
 
                                 </p>
                             </a>
                         </div>`)

                    node3.appendTo("#a4 .e1 .p_right");
                }

                //第二部分数据
                var accessory_cont2 = accessory['accessoryItem']['lists'][0]['categorys'][1]['items'];
                for (var k = 0; k < accessory_cont2.length; k++) {

                    var node4 = $(`<a href="#" target="_blanl">
                         <div uploaded_date="20201104" style="background-image: url(${accessory_cont2[k].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                         </div>
                     </a>`)
                    node4.appendTo("#a4 .e2 .p_left")

                    var node5 = $(`<div>
                             <b class="tagimg">
                                 <img alt>
                             </b>
                             <a href="#">
                                 <p>
                                     <img src="${accessory_cont2[k].pcImgpc}" alt="">
                                 </p>
                                 <p>
                                     <span>${accessory_cont2[k].title}</span>
                                 </p>
                                 <p>
                                 <span> ${accessory_cont1[k].subtitle == null ? "" : "accessory_cont1[k].subtitle "}</span>
                             </p> 
                                 <p>
                                     <strong>￥${accessory_cont2[k].salesprice}</strong>
                                     <span class="scribing_price">￥${accessory_cont2[k].listprice}</span>
 
                                 </p>
                             </a>
                         </div>`)

                    node5.appendTo("#a4 .e2 .p_right");
                }

                //第三部分数据
                var accessory_cont3 = accessory['accessoryItem']['lists'][0]['categorys'][2]['items'];
                for (var k = 0; k < accessory_cont3.length; k++) {

                    var node6 = $(`<a href="#" target="_blanl">
                         <div uploaded_date="20201104" style="background-image: url(${accessory_cont3[k].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                         </div>
                     </a>`)
                    node6.appendTo("#a4 .e3 .p_left")

                    var node7 = $(`<div>
                             <b class="tagimg">
                                 <img alt>
                             </b>
                             <a href="#">
                                 <p>
                                     <img src="${accessory_cont3[k].pcImgpc}" alt="">
                                 </p>
                                 <p>
                                     <span>${accessory_cont3[k].title}</span>
                                 </p>
                                 <p>
                                 <span> ${accessory_cont1[k].subtitle == null ? "" : "accessory_cont1[k].subtitle "}</span>
                             </p>                                  <p>
                                     <strong>￥${accessory_cont3[k].salesprice}</strong>
                                     <span class="scribing_price">￥${accessory_cont3[k].listprice}</span>
 
                                 </p>
                             </a>
                         </div>`)

                    node7.appendTo("#a4 .e3 .p_right");
                }

                //第四部分数据
                var accessory_cont4 = accessory['accessoryItem']['lists'][0]['categorys'][3]['items'];
                for (var k = 0; k < accessory_cont4.length; k++) {

                    var node8 = $(`<a href="#" target="_blanl">
                         <div uploaded_date="20201104" style="background-image: url(${accessory_cont4[k].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                         </div>
                     </a>`)
                    node8.appendTo("#a4 .e4 .p_left")

                    var node10 = $(`<div>
                             <b class="tagimg">
                                 <img alt>
                             </b>
                             <a href="#">
                                 <p>
                                     <img src="${accessory_cont4[k].pcImgpc}" alt="">
                                 </p>
                                 <p>
                                     <span>${accessory_cont4[k].title}</span>
                                 </p>
                                 <p>
                                    <span> ${accessory_cont1[k].subtitle == null ? "" : "accessory_cont1[k].subtitle "}</span>
                                </p> 
                                 <p>
                                     <strong>￥${accessory_cont4[k].salesprice}</strong>
                                     <span class="scribing_price">￥${accessory_cont4[k].listprice}</span>
 
                                 </p>
                             </a>
                         </div>`)

                    node10.appendTo("#a4 .e4 .p_right");
                }


            },
            error: function(msg) {
                console.log(msg);
            }
        })
    }
    return {
        downloadaccessory
    }
})