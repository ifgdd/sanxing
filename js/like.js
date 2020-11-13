define(["jquery", "jquery-cookie"], function ($) {
    function downloadlike(){
        $.ajax({
            url:"../data/like.json",
            type:"get",
            success:function(arr){
                var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str += `<div class="col-10-2 col-xs-12-6" >
                        <div class="thumbnail">
                            <a class="shoppingCartRecommendProducts" target=_blank>
                                <img src="${arr[i].img}" alt="">
                                <h2>${arr[i].tname}</h2>                            </a>
                            <p>￥${arr[i].price}.00</p>
                            <a href="javascript:void(0)" class="btn my-events-addToCart" id="${arr[i].id}">加入购物车</a>
                        </div>
                    </div>`;
                }
                $(".new-recommend-list").html(str);
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }

    return{
        downloadlike,
    }
})
