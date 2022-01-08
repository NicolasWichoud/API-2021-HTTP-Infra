$(function() {
	console.log("Loading addresses");

	function loadAddresses() {
		$.getJSON( "/api/addresses/", function( addresses ) {
			console.log(addresses);
			var message = addresses[0].address + ", " + addresses[0].zip + " "
				    + addresses[0].city + ", " + addresses[0].country;
			console.log(message);
			$(".display-4").text(message);
		});
	};

	loadAddresses();
	setInterval( loadAddresses, 2000 );
});