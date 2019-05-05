function initialize() {
	document.getElementById("image").src = "Images/" + getDirectory() + "/Image" + getImageNumber() + ".jpg";
	document.getElementById("imageInfo").innerHTML = "Bild " + getImageNumber() + "/" + getImageCount();
}

function closeDiashow() {
	var homeUrl = window.location.href.split('?')[0];
	window.location = homeUrl.substr(0, homeUrl.length - 12) + getPreviousPage() + ".html";
}

function getDirectory() {
	return getParameters()[0];
}

function getImageNumber() {
	return parseInt(getParameters()[1]);
}

function getPreviousPage() {
	return getParameters()[2];
}

function getParameters() {
	var url = window.location.href;
	var queryString = url.split('?')[1];
	return queryString.split('&');
}

function showFirstImage() {
	window.location = window.location.href.split('?')[0] + "?" + getDirectory() + "&" + 1 + "&" + getPreviousPage();
}

function showNextImage() {
	if (getImageNumber() < getImageCount()) {
		window.location = window.location.href.split('?')[0] + "?" + getDirectory() + "&" + (getImageNumber() + 1) + "&" + getPreviousPage();
	}
}

function showPreviousImage() {
	if (getImageNumber() > 1) {
		window.location = window.location.href.split('?')[0] + "?" + getDirectory() + "&" + (getImageNumber() - 1) + "&" + getPreviousPage();
	}
}

function showLastImage() {
	window.location = window.location.href.split('?')[0] + "?" + getDirectory() + "&" + getImageCount() + "&" + getPreviousPage();
}

function getImageCount() {
	switch (getDirectory()) {
		case "Fotos":
			return 49;
		case "WM_2009":
			return 13;
		case "WM_2010":
			return 18;
		case "Reise_an_WM":
			return 7;
	}
}
