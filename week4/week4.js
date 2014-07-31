/*
객체 소유권과 밀접히 관련된 이론으로, 전역 변수나 함수 사용을 가능한 한 피해야 한다. 
이는 스크립트가 실행되는 환경을 항상 일정하게, 관리하기 쉽게 만드는 일이다. 
전역 변수는 단 하나만 생성하고 그 안에 다른 객체와 함수가 존재하도록 해야 한다. 
전역 변수는 단 하나만 생성하고 그 안에 다른 객체와 함수가 존재하도록 해야 한다. 다음의 코드를 보자.
*/

// 전역에 변수와 함수를 추가하는 나쁜 코딩 사례이다.
var name = "Woonohyo";
function sayName() {
	alert(name);
}

/*
위 코드는 전역에 변수 name과 함수 sayName()을 추가한다. 
하지만 위의 방법보다는 다음과 같이 이들을 모두 포함하는 객체를 만드는 편이 낫다.
*/

// 전역에는 단 하나만 추가하자.
var MyApplication = {
	name = "Woonohyo";
	sayName: function() {
		alert(this.name);
		}
};

/*
고쳐 쓴 코드에서는 전역 객체를 MyApplication 단 하나만 정의하며 
name 변수와 sayName() 함수는 모두 그 안에 존재한다. 
이렇게 하면 이전 코드의 문제 두 가지를 해결할 수 있다. 

1. 변수 name이 다른 기능과 관련 있을 수도 있는 window.name 프로퍼티를 덮어쓰지 않는다.
2. 기능을 어디서 호출하는지 혼란스럽지 않다. 
MyApplication.sayName()을 호출하는 코드만 보아도, 
문제가 있을 때는 MyApplication을 정의한 코드를 살펴봐야 함을 알 수 있다.


이렇게 전역에 단 하나의 객체만을 추가하는 방법이 '네임스페이스'라는 개념이며 
야후! 사용자 인터페이스(YUI) 라이브러리에 도입되어 유명해졌다. 
YUI 버전 2에서는 다음과 같이 여러 가지 네임스페이스를 통해 기능을 추가했다.

YAHOO.util.Dom - DOM을 조작하는 메서드이다.
YAHOO.util.Event - 이벤트를 다루는 메서드이다.
YAHOO.lang - 저수준 언어 기능과 관련된 메서드이다.
 
YUI에서는 전역 객체 YAHOO가 컨테이너이며 이 안에 다른 객체가 정의된다. 
이런 식으로 단순히 기능을 한데 묶기 위해 사용하는 객체를 '네임스페이스'라고 한다. 
YUI 라이브러리는 전체가 이 개념 위에서 만들어졌으므로 같은 페이지에서 

다른 자바스크립트 라이브러리와 문제 없이 공존할 수 있다.
네임스페이스에 쓸 전역 객체 이름을 정할 때는 모든 사람이 동의하고 
다른 라이브러리에서 쓰지 않을만큼 충분히 고유하게 정해야 한다. 

대개는 YAHOO나 Wrox처럼 회사 이름을 쓰면 된다. 
일단 네임스페이스를 만들면 다음과 같이 기능을 한데 묶는다.
*/

// 전역 객체 생성
var Woonohyo = {};

// Professional Javascript의 네임스페이스 생성
Woonohyo.ProJS = {};

// 기존에 사용한 다른 객체 등록
Woonohyo.ProJS.EventUtil = { ... };
Woonohyo.ProJS.CookieUtil = { ... };

/*
위 예제에서는 전역인 Woonohyo에 네임스페이스를 생성한다. 
이 포스트에 있는 코드를 모두 Woonohyo.ProJS 네임스페이스에 두면 
다른 저자들도 자신의 코드를 Woonohyo 객체에 추가할 수 있다. 

모두가 이 패턴을 따른다면 다른 개발자가 EventUtil이나 CookieUtil이란 객체를 사용하더라도 
다른 네임스페이스에 존재하므로 걱정할 필요가 사라진다.

다음 예제를 살펴보자.
*/

// Professional Ajax의 네임스페이스 생성
Woonohyo.ProAjax = {};

// 기존에 사용한 다른 객체 등록
Woonohyo.ProAjax.EventUtil = { ... };
Woonohyo.ProAjax.CookieUtil = { ... };

// ProJS의 객체는 그대로 사용 가능
Woonohyo.ProJS.EventUtil.addHandler( ... );

// ProAjax도 별도로 존재
Woonohyo.ProAjax.EventUtil.addHandler( ... );


/*
네임스페이스를 쓰면 코드가 좀 늘어나긴 하지만 관리하기 쉬워지므로 그만한 가치는 충분하다. 
또한 페이지에 다른 개발자의 코드가 존재하더라도 서로 침범하지 않게 된다.
*/