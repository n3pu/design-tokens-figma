const now = new Date();
function saveJson(obj, name) {
	var str = JSON.stringify(obj);
	var data = encode( str );

	var blob = new Blob( [ data ], {
		type: "application/octet-stream"
	});
	
	var url = URL.createObjectURL( blob );
	var link = document.createElement( "a" );
	link.setAttribute("href", url);
	link.setAttribute("download", now.getUTCDate() + "." + (now.getUTCMonth()+1) + "." + now.getUTCFullYear() + "-" + name + ".json");
	var event = document.createEvent("MouseEvents");
	event.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
	link.dispatchEvent(event);
};

var encode = function( s ) {
	var out = [];
	for ( var i = 0; i < s.length; i++ ) {
		out[i] = s.charCodeAt(i);
	}
	return new Uint8Array( out );
};

document.getElementById('parse_file').addEventListener('click', function(){
	saveJson(currentJSON, $(".file-result__name").text());
});