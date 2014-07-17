var myObj = {
	strTexts: " 정말 몸에 좋을까..요?",
	registerEvents: function(e) {
		console.log(e.target.parentNode.id);
		var yasikName = e.target.parentNode.id;
		switch(yasikName) {
			case "chickenAndBeer":
				console.log("치맥은" + this.strTexts);
				break;
			case "pajeonAndMakgeolli":
				console.log("파전에 막걸리는" + this.strTexts);
				break;
			case "tripeAndSoju":
				console.log("곱창에 쏘주는" + this.strTexts);
				break;
		}
	}
}

var yasik = document.querySelectorAll(".wrapper div");

for (var i = 0; i < yasik.length; i++) { 
	yasik[i].onclick = function(event) {
		myObj.registerEvents(event);
	}
}