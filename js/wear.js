define(["jquery"], function($) {
    //首页可穿戴设备数据加载
    function downloadWear() {
        $.ajax({
            url: "../data/wear.json",
            success: function(arr) {
                var wear = arr[0];
                var node = $(`
                <p>
                    <span></span>
                </p>
                <b>${wear.title}</b>
           `)
                node.appendTo("#a1 .a1 .ts_title");

                //通过循环将子元素进行创建
                for (var i = 0; i < wear.childs.length; i++) {
                    var node1 = $(`<div>
                    <b class="tagimg">
                        <img alt>
                    </b>
                    <a href="#">
                        <p>
                            <img src="${wear.childs[i].img}" alt="">
                        </p>
                        <p>
                            <span>${wear.childs[i].title}</span>
                        </p>
                        <p>
                            <span>${wear.childs[i].desc}</span>
                        </p>
                        <p>
                            <strong>￥${wear.childs[i].price}</strong>
                            <span class="scribing_price">￥${wear.childs[i].del}</span>
                        </p>
                    </a>
                </div>`);
                    node1.appendTo("#a1 .p_right")
                }
            },
            error: function(msg) {
                console.log(msg);
            }
        })
    }

    return {
        downloadWear
    }
})