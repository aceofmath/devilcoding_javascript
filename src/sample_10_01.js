/**
 * 10_01. 나머지 매개변수(Rest parameters), 전개 구문(Spread syntax)
  */

/**
 * 1-1. 인수 전달
 * 인수는 갯수 제한 없음
 * 인수는 arguments, 나머지 매개변수로 전달 가능
 * 단, 화살표 함수에는 "나머지 매개변수"가 없음
 * 
  */
function showName1(name){
  console.log(name);
}
showName1('Mike');
showName1('Mike', 'Tom');
showName1();

/**
 * 1-2. 인수 전달(arguments)
 * 함수로 넘어 온 모든 인수에 접근
 * 함수내에서 이용 가능한 지역 변수
 * length / index 사용 가능
 * 배열의 내장 메서드 없음(forEach, map)
 * 
  */
function showName2(name){
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}
showName2('Mike', 'Tom');

/**
 * 1-3. 나머지 매개변수(Rest parameters)
  */
function showName(...names){
  console.log(names);
}
showName('Mike', 'Tom');

/**
 * 1-4. 나머지 매개변수(Rest parameters) 예제
  */
function add(...nums){
  let result = 0;
  //nums.forEach((num) => (result += num));
  result = nums.reduce((prev, cur) => prev + cur);
  console.log(result);
}

add(1,2,3);
add(1,2,3,4,5,6,7,8,9);

/**
 * 1-5. 나머지 매개변수(Rest parameters) 예제2
 * user 객체를 만들어 주는 생성자 함수
  */
function User(name, age, ...skills){
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Tom', 20, 'JS', 'React');
const user3 = new User('Janem', 10, 'English');

console.log(user1);
console.log(user2);
console.log(user3);


/**
 * 2-1. 전개 구문(Spread syntax) : 배열
  */
let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log("2-1. 전개 구문(Spread syntax)>>>", [...arr1, ...arr2]);
console.log("2-1. 전개 구문(Spread syntax)>>>", [0, ...arr1, ...arr2, 7,8,9]);

/**
 * 2-2. 전개 구문(Spread syntax) : 객체
  */ 
let user = {name : 'Mike'}; 
 console.log("2-2. 전개 구문(Spread syntax)>>>", {...user, age: 30});


 /**
 * 2-3. 전개 구문(Spread syntax) : 복제
  */ 
 let arr = [1,2,3];
 let arr23 = [...arr];
 user = {name : 'Mike', age:30}; 
 let user23 = {...user};
user23.name = 'Tom';
console.log("2-3. 전개 구문(Spread syntax):복제>>>", user.name);
console.log("2-3. 전개 구문(Spread syntax):복제>>>", user23.name);

 /**
 * 2-4. 전개 구문(Spread syntax) : 예제
 * arr1을 [4,5,6,1,2,3] 으로
  */ 
arr1 = [1,2,3];
arr2 = [4,5,6];
arr1 = [...arr2, ...arr1];
console.log("2-4. 전개 구문(Spread syntax):예제>>>", arr1);

 /**
 * 2-5. 전개 구문(Spread syntax) : 예제2
  */ 
 user = {name : 'Mike'}; 
 let info = {age:30}; 
 let fe = ["JS", "React"];
 let lang = ["Korean", "English"];

 user = {
  ...user,
  ...info,
  skills: [...fe, ...lang]
 }
 console.log("2-5. 전개 구문(Spread syntax):예제2>>>", user);
