// {div의 ID:출력할 문구}
var yasikDict = {"chickenAndBeer":"치맥은", "pajeonAndMakgeolli":"파전에 막걸리는", "tripeAndSoju":"곱창에 쏘주는"};

var myObj = {
	strTexts: " 정말 몸에 좋을까..요?",
	registerEvents: function(event) {
		// 마우스 클릭 이벤트가 일어난 Element의 ID를 통해 사용자가 누른 사진이 무엇인지 판별합니다.
		var yasikName = event.target.parentNode.id;
		console.log(yasikDict[yasikName] + this.strTexts);
	}
}

var yasik = document.querySelectorAll(".wrapper div");

// bind를 통해 registerEvents 함수의 this는 myObj가 됩니다.
// 만약 bind를 하지 않으면 registerEvents의 this == "클릭한 엘리먼트"가 되기 때문에 this.strTexts를 사용하지 못하기 때문입니다.
for (var i = 0; i < yasik.length; i++) { 
	yasik[i].addEventListener("click", myObj.registerEvents.bind(myObj), false);
}
