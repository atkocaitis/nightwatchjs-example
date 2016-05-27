var resize = function(width, height) {

	if (width && height) {
		this
			.log("Resize browser window to " + width + "x" + height + " ", "message")
			.resizeWindow(width, height);
	} else {
		this
			.log("Resize browser window to Max ", "message")
			.windowMaximize();
	}

    return this;
};

exports.command = resize;