const quotes = [
    { quote: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라", author: "빌립보서 4:13" },
    { quote: "생각하건대 현재의 고난은 장차 우리에게 나타날 영광과 비교할 수 없도다.", author: "로마서 8:18" },
    { quote: "그런즉 누구든지 그리스도 안에 있으면 새로운 피조물이라. 이전 것은 지나갔으니, 보라. 새것이 되었도다.", author: "고린도후서 5:17" },
    { quote: "내가 너로 큰 민족을 이루고 네게 복을 주어 네 이름을 창대하게 하리니 너는 복이 될지라", author: "창세기 12:2" },
    { quote: "예수께서 대답하시되 이 사람이나 그 부모의 죄로 인한 것이\n 아니라 그에게서 하나님이 하시는 일을 나타내고자 하심이라", author: "요한복음 9:3" },
    { quote: "사람이 마음으로 자기 길을 계획할지라도 그 걸음을 인도하시는 분은 여호와이시다.", author: "잠언 16:9" },
    { quote: "그러나 내가 가는 길을 그가 아시나니 그가 나를 단련하신 후에는 내가 순금 같이 되어 나오리라", author: "욥기 23:10" },
    { quote: "야곱은 마리아의 남편 요셉을 낳았으니 마리아에게서 그리스도라 칭하는 예수가 나시니라", author: "마태복음 1:16" },
    { quote: "무릇 의인들의 길은 여호와께서 인정하시나 악인들의 길은 망하리로다", author: "시편 1:6" },
    { quote: "여호와는 나의 목자시니 내게 부족함이 없으리로다", author: "시편 23:1" }
];

const quote = document.querySelector(".wisecomment");
const author = document.querySelector(".wisepeople");

const randomNumber = Math.random() * quotes.length;
const floorNumber = Math.floor(randomNumber);

const todaysQuote = quotes[floorNumber]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author