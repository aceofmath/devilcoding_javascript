/**
 * 13_01. call, apply, bind
 * call : call매서드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있습니다.
  */

/**
 * 1-1. call(Object, param1, param2, ...)
 * call매서드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있습니다.
 * Object : this에 적용할 객체, param 1 ~ n : 함수 param
  */

const mike = {
	name : "Mike"
}

const tom = {
	name : "Tom"
}

function showThisName(){
	console.log(this.name);
}

// 1-1-1. 여기서 this는 윈도우이름()
showThisName();
//console.log(window.name);

// 1-1-2. call 함수 호출 시 this의 값을 mike로 설정
// 즉, call함수로 호출하면 객체(mike)의 함수(showThisName)로 호출한 것 처럼 사용가능
showThisName.call(mike);
showThisName.call(tom);

// 1-1-3. update 함수 생성
function update(birthYear, occupation){
	this.birthYear = birthYear;
	this.occupation = occupation;
}

update.call(mike, 1999, "singer");
update.call(tom, 2002, "teacher");

console.log("1-1-3. update함수에 call로 실행 시킴", mike);
console.log("1-1-3. update함수에 call로 실행 시킴", tom);


/**
 * 1-2. apply(Object, param1, param2, ...)
 * apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같습니다.
 * call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 "배열"로 받습니다.
 * Object : this에 적용할 객체, param 1 ~ n : 함수 param
  */

update.apply(mike, [1999, "singer"]);
update.apply(tom, [2002, "teacher"]);

console.log("1-2. update함수에 apply 로 실행 시킴", mike);
console.log("1-2. update함수에 apply 로 실행 시킴", tom);

// apply 예제
const nums = [3,10,1,6,4];

const minNum = Math.min.apply(null, nums);
const maxNum = Math.max.call(null, ...nums);

console.log("1-2. 일반 함수 적용>>>", Math.min(...nums));
console.log("1-2. 일반 함수 적용>>>", Math.max(...nums));
console.log("1-2. 일반 함수에 call적용>>>", Math.min.call(null, ...nums));
console.log("1-2. 일반 함수에 call적용>>>", Math.max.call(null, ...nums));
console.log("1-2. 일반 함수에 apply 적용>>>", Math.min.apply(null, nums));
console.log("1-2. 일반 함수에 apply 적용>>>", Math.max.apply(null, nums));

/**
 * 1-3. bind(Object, param1, param2, ...)
 * 함수의 this값을 영구히 바꿀 수 있습니다.
 * Object : this에 적용할 객체, param 1 ~ n : 함수 param
  */

mike = {
	name : "Mike"
}

function update(birthYear, occupation){
	this.birthYear = birthYear;
	this.occupation = occupation;
}

const updateMike = update.bind(mike);
updateMike(1980, 'police');
console.log(mike);


// 1-3-1. bind 실사용 예제
const user = {
	name : 'Mike',
	showName: function(){
		console.log(`hello, ${this.name}`);
	},
};

// user.showName();

let fn = user.showName;

fn();
fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);
boundFn();