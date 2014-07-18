var yasikDict = {"chickenAndBeer":"치맥은", "pajeonAndMakgeolli":"파전에 막걸리는", "tripeAndSoju":"곱창에 쏘주는"};

var myObj = {
	strTexts: " 정말 몸에 좋을까..요?",
	registerEvents: function(event) {
		var yasikName = event.target.parentNode.id;
		console.log(yasikDict[yasikName] + this.strTexts);
	}
}

var yasik = document.querySelectorAll(".wrapper div");

for (var i = 0; i < yasik.length; i++) { 
	yasik[i].addEventListener("click", myObj.registerEvents.bind(myObj), false);
}