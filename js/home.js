define(["jquery"], function($) {
    function downloadhome() {
        $.ajax({
            url: "../data/home.json",
            success: function(arr) {
                var home = arr[0];
                var node = $(`
                <p>
                    <span></span>
                </p>
                <b>${home.title}</b>
           `)
                node.appendTo("#a5 .ts_title");

                var phone_cont = home['homeItem']['lists'][0]['categorys'][0]['items'];
                for (var k = 0; k < phone_cont.length; k++) {

                    var node2 = $(`<a href="#" target="_blanl">
                        <div uploaded_date="20201104" style="background-image: url(${phone_cont[k].floorKv}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: 100% 100%;">
                        </div>
                    </a>`)
                    node2.appendTo("#a5 .f1 .p_left")

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
                                    <span> ${phone_cont[k].subtitle == null ? "" : "accessory_cont1[k].subtitle "}</span>
                                </p>
                                
                                <p>
                                    <strong>￥${phone_cont[k].salesprice}</strong>
                                    <span class="scribing_price">￥${phone_cont[k].listprice}</span>

                                </p>
                            </a>
                        </div>`)


                    node3.appendTo("#a5 .f1 .p_right");
                }
            },
            error: function(msg) {}
        })
    }
    // ${phone_cont[k].subtitle == null ? "" : "accessory_cont1[k].subtitle "}
    return {
        downloadhome
    }
})