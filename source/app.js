/**
 * @Author : llnforest
 * @Timestamp : 2018-03-27
 */
var deviceone = require("deviceone");
var app = deviceone.sm("do_App");
var demo =1;

app.on("loaded", function () {
	app.openPage({
		source:"source://view/index.ui",
		statusBarState:"transparent",
		animationType:"fade"
	})
});
