console.log("加载完成!");
/* 
    配置当前项目引入的模块
*/
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "parabola": "parabola",
        "wear": "wear",
        "hotshop": "hotshop",
        "phone": "phone",
        "tv": "tv",
        "computer": "computer",
        "accessory": "accessory",
        "home": "home",
        "list": "list",

    },
    shim: {
        //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
        "jquery-cookie": ["jquery"],
        //声明当前模块不遵从AMD
        "parabola": {
            exports: "_"
        }
    }
})

require(["wear", "hotshop", "phone", "tv", "computer", "accessory", "home", "list","like",], function(wear, hotshop, phone, tv, computer, accessory, home, list) {

    //主页数据加载
    wear.downloadWear();
    hotshop.downloadHot();
    phone.downloadphone();
    phone.tabMenu();
    phone.tabMenu1();
    tv.downloadtv();
    computer.downloadcomputer();
    accessory.downloadaccessory();
    home.downloadhome();
    list.downloadlist();
})