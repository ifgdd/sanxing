define(["jquery"], function($) {
    function downloadlist() {
        $.ajax({
            url: "../data/list.json",
            type: "get",
            success: function(arr) {
                for (var i = 0; i < arr.length; i++) {
                    var node = $(`<div class="col-12-3 col-sm-12-6 col-xs-12-12 list-rowr">
                <div class="list-boximg">
                    <a href="detail.html?id=${arr[i].product_id}">
                        <img src="${arr[i].img}" alt="">
                    </a>
                    <div class="icon-active-box">
                        <label class="icon icon-orange">
                            <span>${arr[i].span1}</span>
                            <i class="arrow-top"></i>
                            <i class="arrow-bottom"></i>
                        </label>
                    </div>
                    <div class="icon-active-box">
                        <label class="icon icon-orange">
                            <span>${arr[i].span2}</span>
                            <i class="arrow-top"></i>
                            <i class="arrow-bottom"></i>
                        </label>
                    </div>
                </div>
                <div class="list-scroll-all">
                    <div class="scroll-list">
                        <div class="scroll scroll-gallery events-scroll-gallery float-clearfix">
                            <div class="pc-jian img-list-pdcenter">
                                <ul class="img-cor-list mg-l-imp" style="margin-left:0px; margin-top: 0px;">
                                    <li class="cur">
                                        <a class="thumbnail" style="background: #bd7bd3;">
                                            <i></i>
                                        </a>
                                    </li>
                                    <li class="cur">
                                        <a class="thumbnail" style="background: #04030b;">
                                            <i></i>
                                        </a>
                                    </li>
                                    <li class="cur">
                                        <a class="thumbnail" style="background: #a8903a;">
                                            <i></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="product-name">
                        <h2>
                            <a href="./detail.html">${arr[i].tname}</a>
                        </h2>
                        <p class="balck">${arr[i].price}</p>
                        
                    </div>
                </div>
            </div>`);
                    node.appendTo(".list-cont-right .row");
                }
            },
            error: function(msg) {
                console.log(msg);
            }
        })
    }

    return {
        downloadlist
    }
})