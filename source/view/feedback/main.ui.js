/**
 * related to main.ui
 * 
 * @Author : llnforest
 * @Timestamp : 2018-03-28
 */

var do_App = sm("do_App");
var do_Page = sm("do_Page");

var do_ALayout_back = ui("do_ALayout_back");

//关闭当前页
do_ALayout_back.on("touch",function(){
	do_App.closePage();
})
//android 系统返回键
do_Page.on("back",function(){
	do_App.closePage();
})