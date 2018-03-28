/**
 * related to start.ui
 * 
 * @Author : llnforest
 * @Timestamp : 2018-03-28
 */
var app = sm("do_App");
var global = sm("do_Global");
var device = sm("do_Device");

var do_ImageView_content = ui("do_ImageView_content");

//定义一个2秒的动画过程
var img_anima = mm("do_Animation");
img_anima.fillAfter = true;
img_anima.scale({
	delay:0,
	duration:2000,
	curve:"Linear",
	autoReverse:false,
	scaleFromX:1,
	scaleFromY:1,
	scaleToX:1.2,
	scaleToY:1.2
},"start1");
do_ImageView_content.animate(img_anima,function(){
	app.openPage({
		source:"source://view/index.ui", 
		animationType:"fade",
		statusBarState:"transparent"
	});
})