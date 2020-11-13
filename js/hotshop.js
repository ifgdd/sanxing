define(["jquery"], function($) {
    //首页数据加载
    function downloadHot() {
        $.ajax({
            url: "../data/hotshop.json",
            success: function(arr) {
                var hotshop = arr[0];
                var node = $(`
                <p>
                    <span></span>
                </p>
                <b>${hotshop.title}</b>
           `)
                node.appendTo("#hotshop .title");

                //通过循环将子元素进行创建
                for (var i = 0; i < hotshop.childs.length; i++) {
                    var node1 = $(`<div class="hotEvent">
                    <a href="#" target="_blank">
                        <p>
                            <img alt="">
                        </p>
                        <p>
                            <b>${hotshop.childs[i].title}</b>
                        </p>
                        <p>
                            <span>${hotshop.childs[i].desc}</span>
                        </p>
                        <p>
                            <strong>￥${hotshop.childs[i].price}</strong>
                            <span class="scribing_price">￥${hotshop.childs[i].del}</span>
                        </p>
                        <p>
                            <img src="${hotshop.childs[i].img}" alt="" class="pro_img">
                        </p>
                    </a>
                </div>`)
                    node1.appendTo(".j_left")
                }
            },
            error: function(msg) {
                console.log(msg);
            }
        })
    }

    return {
        downloadHot
    }
})