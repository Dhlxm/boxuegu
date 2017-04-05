define([], function () {
    //配置模块的路径和依赖
    require.config({
        baseUrl: './',
        paths: {
            //配置自己写的js模块别名
            advertAdd: 'js/advert/advert_add',
            adverList: 'js/advert/advert_list',
            courseAdd1: 'js/course/couse_add_step1',
            courseAdd2: 'js/course/couse_add_step2',
            courseAdd3: 'js/course/couse_add_step3',
            courseAdd: 'js/course/couse_add',
            courseCategoryAdd: 'js/course/couse_category_add',
            courseCategory: 'js/course/couse_category',
            courseList: 'js/course/couse_list',
            courseTopic: 'js/course/couse_topic',
            login: 'js/home/login',
            repass: 'js/home/repass',
            settings: 'js/home/settings',
            index: 'js/home/index',
            teacherAdd: 'js/teacher/teacher_add',
            teacherList: 'js/teacher/teacher_list',
            userList: 'js/user/user_list',
            userProfile: 'js/user/user_profile',

            //配置第三方js模块别名
            template: 'lib/artTemplate/template-debug',
            bootstrap: 'lib/bootstrap/js/bootstrap',
            datepicker: 'lib/bootstrap-datepicker/js/bootstrap-datepicker',
            ckeditor: 'lib/ckeditor/ckeditor',
            ckeditorLand: 'lib/ckeditor/lang/zh-cn',
            echarts: 'lib/echarts/echarts.min',
            jquery: 'lib/jquer/jquer.min',
            jqueryCookie: 'lib/jquer-cookie/jquery.cookie',
            jqueryFrom: 'lib/jquer-form/jquery.form',
            jqueryRegion: 'lib/jquer-region/jquery.region',
            nprogress: 'lib/nprogress/nprogress',
        },
        shim: {
            //bootstrap是非define的模块 又依赖于jquery
            bootstrap: {
                deps: ['jquery']
            }
        }
    });

    //这里根据页面的路径进行不同页面的区分进而加载不同的js
    var pathname = location.pathname;

    switch (pathname) {
        case '/':
            require(['index']);
            break;
        case '/html/home/login.html':
            require(['login']);
            break;
        case '/html/home/repass.html':
            require(['repass']);
            break;
        case '/html/home/settings.html':
            require(['settings']);
            break;
        case '/html/advert/advert_add.html':
            require(['advert_add.html'])
            break;
        case '/html/advert/list.html':
            require(['list.html'])
            break;

    }


})