// A simple helper function to make it easier to generate a dynamic list of CSS
// classes. It accepts an opts hash which maps class names to booleans. If the
// boolean is true, the class name is included.
//
// Example:
//
// classNames({ "foo": true, "bar": 0, "baz": "", "blink": "ya" }) -> "foo blink"
// classNames({ "bar": 0, "baz": "" }) -> ""
function classNames(opts) {
	var classes = [];

	for ( var name in opts ) {
		if ( opts[name] ) {
			classes.push(name);
		}
	}

	return classes.join(" ");
}

// storeInSession is a utility function for storing specific data in the
// session storage. It does this by wrapping the value in an array and encoding
// it to JSON.
function storeInSession(key, value) {
	window.sessionStorage.setItem(key, JSON.stringify([value]));
}

// readFromSession will read data written to the session storage by storeInSession.
function readFromSession(key) {
	var value = window.sessionStorage.getItem(key);

	if ( value ) {
		var extracted = JSON.parse(value)[0];

		return extracted;
	} else {
		return null;
	}
}

// The base URL used to connect to the Chat Box Challenge server.
var baseUrl = "http://odin.local:8089/";

// postJSON issues an AJAX POST and calls the given callback. The callback is
// called with a Chat Box Challenge kind of value, even if there's a
// communications error.
function postJSON(path, payload, callback) {
	$.ajax({
		method: "POST",
		url: baseUrl + path,
		data: JSON.stringify(payload),
		dataType: "json",
		contentType: "application/json",
		success: (response) => {
			callback(response);
		},
		error: (response) => {
			callback({ success: false, error_message: "unknown communications error" });
		},
	});
}

// encodedParams takes a JSON object and turns it into an encoded query string.
function encodeParams(params) {
	var first = true;
	var encoded = "";

	for ( var key in params ) {
		var value = params[key];

		encoded += first ? "?" : "&";
		encoded += encodeURIComponent(key);
		encoded += "=";
		encoded += encodeURIComponent(value);

		first = false;
	}

	return encoded;
}

// getJSON issues an AJAX GET and calls the given callback. The callback is
// called with a Chat Box Challenge kind of value, even if there's a
// communications error.
function getJSON(path, params, callback) {
	$.ajax({
		method: "GET",
		url: baseUrl + path + encodeParams(params),
		dataType: "json",
		success: (response) => {
			callback(response);
		},
		error: (response) => {
			callback({ success: false, error_message: "unknown communications error" });
		},
	});
}

// nextSequenceValue simply returns a sequential value.
var _nextSequenceValue = 1;
function nextSequenceValue() {
	return _nextSequenceValue++;
}
