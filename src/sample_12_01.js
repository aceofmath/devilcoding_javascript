/**
 * 12_01. setTimeout / setInterval
 * setTimeout : 일정 시간이 지난 후 함수를 실행
 * setInterval : 일정 시간 간격으로 함수를 반복
  */

/**
 * 1-1. setTimeout(fn, time, param)
 * fn : 함수, time : 시간, param : 인수
  */
function fn(){
	console.log(3);
}
function showName(name){
	console.log(name);
}

//setTimeout(fn, 3000);
// setTimeout(() => {console.log(4)}, 4000);
//setTimeout(showName, 1000, 'Mike');

// 브라우저는 약 4ms~ 시간 지연 현상이 있음.
setTimeout(function(){console.log(2)}, 0); // 2는 1보다 나중실행
console.log(1); // 1이 먼저 실행


/**
 * 1-2. setInterval(fn, time, param)
 * fn : 함수, time : 시간, param : 인수
  */
//const tId = setInterval(showName, 1000, 'Mike');
let num = 0;

function showTime(){
	console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
	if (num > 4){
		clearInterval(tId);
	}
}

const tId = setInterval(showTime, 1000);