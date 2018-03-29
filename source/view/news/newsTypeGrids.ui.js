/**
 * related to newsTypeGrids.ui
 * 
 * @Author : llnforest
 * @Timestamp : 2018-03-29
 */
//声明UI变量
var do_Page = sm("do_Page");
var do_ALayout_root = ui("do_ALayout_root");
var do_GridView_Types = ui("do_GridView_types");
var do_ALayout_Types = ui("do_ALayout_types");

//申明成员变量
var listData = null;

//计算内容区域的高度
var totalHeight = parseInt(do_ALayout_Types.height);
//定义展示UI的动画
var animShow = mm("do_Animator");
for(var i = 1;i <= 5; i++){
	animShow.append(30,{
		"height":parseInt(totalHeight/5 * i)
	})
}

//定义收起UI的动画
var animHide = mm("do_Animator");
for(var i =1;i <= 5; i++){
	animHide.appden(15,{
		height:parseInt(totalHeight - totalHeight/5 *i)
	})
}

//初始时隐藏
do_ALayout_root.visible = false;
//点击其他区域，则隐藏关闭当前view
do_ALayout_root.on("touch",function(){
	do_ALayout_Types.animate(animHide,function(){
		do_ALayout_root.visible = false;
	})
})

//在当前页面下订阅refreshNewsTypes自定义消息
do_Page.on("RefreshNewsTypes",function(data){
	if(listData != data){
		listData = data;
		do_GridView_Types.bindItems(listData);
		return;
	}
	do_GridView_Types.refreshItems();
})

//在当前页面下订阅selectOneTab的事件
do_Page.on("selectOneTab",function(){
	if(do_ALayout_root.visible){
		do_ALayout_root.visible = false;
	}
})

//在当前页面下订阅showAllNewsTypes的事件
do_Page.on("showAllNewsTypes",function(data){
	do_ALayout_Types.height = 0;
	do_ALayout_Types.redraw();
	do_ALayout_root.visible = true;
	do_ALayout_Types.animate(animShow);
})