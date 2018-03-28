/**
 * @Author : llnforest
 * @Timestamp : 2018-03-27
 */
//引入组件库
var do_Notification = sm("do_Notification");
var do_Global = sm("do_Global");
var do_Page = sm("do_Page");
var do_App = sm("do_App");

//生命UI变量
var do_ALayout_root = ui("do_ALayout_root");
var do_ALayout_b0 = ui("do_ALayout_b0");
var do_ALayout_b1 = ui("do_ALayout_b1");
var do_ALayout_b2 = ui("do_ALayout_b2");
var do_ALayout_b3 = ui("do_ALayout_b3");
var do_ImageView_b0 = ui("do_ImageView_b0");
var do_ImageView_b1 = ui("do_ImageView_b1");
var do_ImageView_b2 = ui("do_ImageView_b2");
var do_ImageView_b3 = ui("do_ImageView_b3");
var do_Label_b0 = ui("do_Label_b0");
var do_Label_b1 = ui("do_Label_b1");
var do_Label_b2 = ui("do_Label_b2");
var do_Label_b3 = ui("do_Label_b3");

//定义每个按钮的touch时间
do_ALayout_b0.on("touch",function(){
	do_ImageView_b0.source = "source://image/news_active.png";
	do_ImageView_b1.source = "source://image/contact.png";
	do_ImageView_b2.source = "source://image/find.png";
	do_ImageView_b3.source = "source://image/fankui.png";
	do_Label_b0.fontColor = "008C00FF";
	do_Label_b1.fontColor = "000000FF";
	do_Label_b2.fontColor = "000000FF";
	do_Label_b3.fontColor = "000000FF";
	do_ViewShower_main.showView("news");
})

do_ALayout_b1.on("touch",function(){
	do_ImageView_b0.source = "source://image/news.png";
	do_ImageView_b1.source = "source://image/contact_active.png";
	do_ImageView_b2.source = "source://image/find.png";
	do_ImageView_b3.source = "source://image/fankui.png";
	do_Label_b0.fontColor = "000000FF";
	do_Label_b1.fontColor = "008C00FF";
	do_Label_b2.fontColor = "000000FF";
	do_Label_b3.fontColor = "000000FF";
	do_ViewShower_main.showView("contact");
})

do_ALayout_b2.on("touch",function(){
	do_ImageView_b0.source = "source://image/news.png";
	do_ImageView_b1.source = "source://image/contact.png";
	do_ImageView_b2.source = "source://image/find_active.png";
	do_ImageView_b3.source = "source://image/fankui.png";
	do_Label_b0.fontColor = "000000FF";
	do_Label_b1.fontColor = "000000FF";
	do_Label_b2.fontColor = "008C00FF";
	do_Label_b3.fontColor = "000000FF";
	do_ViewShower_main.showView("find");
})

do_ALayout_b3.on("touch",function(){
	do_App.openPage({
		source: "source://view/feedback/main.ui",
		statusBarState:"transparent",
		animationType:"push_r21"
	});
});

//body 部分
var do_ViewShower_main = ui("do_ViewShower_main");
var viewShower_data = [
    {
    	"id":"news",
    	"path":"source://view/news/main.ui"
    },
    {
    	"id":"contact",
    	"path":"source://view/contact/main.ui"
    },
    {
    	"id":"find",
    	"path":"source://view/find/main.ui"
    },
];
do_ViewShower_main.addViews(viewShower_data);
do_ViewShower_main.showView("news");

//订阅android 系统返回键事件，3秒内连续点两次退出
var canBack = false;
var delayOut = mm("do_timer");
delayOut.delay = 3000;
delayOut.on("tick",function(){
	delayOut.stop();
	canBack = false;
})
do_Page.on("back",function(){
	if(canBack){
		do_Global.exit();
	}else{
		do_Notification.toast("再次点击退出应用");
		canBack = true;
		delayOut.start();
	}
})