//jqueryCookie是define定义的模块,但是像这种jQuery插件,
//他们提供给的功能都放置到了jQuery原型或者自己身上,并没有返回东西,所有引入他们得到的返回值都是undefined
//要使用他们提供的功能,必须要借助于jquery
define(['jquery','jqueryCookie'], function ($,undefined) {
    /**
     * 判断用户有没有登录过
     * 没有的话跳转到登录页
     */
    // var cookieArr = document.cookie.split(';');
    // var isLogin = false;
    // //必须是所有的cookie,都没有PHPSESSID.才算没有登录过,那么转到登录页面
    // for (var i = 0; i < cookieArr.length; i++) {
    //     //不全等于0,证明没有登录过,跳转到登录页面
    //     //expires为负数,为当前时间之前
    //     if (cookieArr[i].indexOf('PHPSESSID') === 0) {
    //         //存在,那么证明登录过
    //         isLogin = true;
    //         break;
    //     }
    // };
    // !isLogin&& (location.href='/html/home/login.html');
    if(!$.cookie('PHPSESSID')){
        location.href='/html/home/login.html';
    }
});