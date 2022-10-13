
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	
	var url;
	url = "http://192.168.1.8:6942";
	
	showHelp(url);

	function showHelp(url) {

		var target = "_blank";

		var options = "fullscreen=yes,location=no,toolbar=no,menubar=no,scrollbars=no,resizable=no";

		inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);

		inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);

		inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);

		inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);

	}

	function loadStartCallBack() {
	
		$('#status-message').text("plaese wait ...");
	
	}

	function loadStopCallBack() {
	
		if (inAppBrowserRef != undefined) {
			
			// inAppBrowserRef.insertCSS({ code: "body{font-size: 25px;}" });
		
			$('#status-message').text("");
		
			inAppBrowserRef.show();
		
		}

	}

	function loadErrorCallBack(params) {
		
		$('#status-message').text("");
		
		var scriptErrorMesssage =
		   "alert('problem in loading');"
		
		inAppBrowserRef.executeScript({ code: scriptErrorMesssage }, executeScriptCallBack);
		
		inAppBrowserRef.close();
		
		inAppBrowserRef = undefined;
		
	}

	function executeScriptCallBack(params) {
		
		if (params[0] == null) {
			$('#status-message').text("problem in loading");
		}
		
	}

}
