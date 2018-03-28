/**
 * @Author : llnforest
 * @Timestamp : 2018-03-27
 */
var d1 = require("deviceone");
var app = d1.sm("do_App");

app.on("loaded", function () {
	app.openPage({
		source:"source://view/start.ui",
		statusBarState:"transparent",
		animationType:"fade"
	})
});
