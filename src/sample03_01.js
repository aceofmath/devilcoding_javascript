/**
 * 03_01. 객체 메소드(Object methods), 계산된 프로퍼티(Computed property)
 */

// 계산된 프로퍼티(Computed property)
let a = 'age';
const user1 = {
    name : 'Mike',
    [a] : 30 // age : 30 
    // [a] ==> computed property(계산된 프로퍼티)    
}

const user2 = {
    [1+4] : 5,
    ["안녕"+"하세요"] : "hello"
}

console.log(user1);
console.log(user2);

// 객체 메소드(Object methods)
/**
 * 1.Object.assign()
 * 2.Object.keys()
 * 3.Object.values()
 * 4.Object.entries()
 * 5.Object.fromEntries()
 */

// 1.Object.assign() : 객체 복제
const user_1 = {
    name : 'Mike',
    age : 30
}

// const cloneUser = user; 주소만 복사
const newUser1 = Object.assign({}, user_1);
console.log('1.Object.assign() :::::', newUser1);

// 2.Object.keys()
// 3.Object.values()
// 4.Object.entries() ===> 키/값 배열 반환
const user_2 = {
    name : 'Mike',
    age : 30,
    gender : 'male'
}

console.log("2.Object.keys() ::::::", Object.keys(user_2));
console.log("3.Object.values() ::::::", Object.values(user_2));
console.log("4.Object.entries() ::::::", Object.entries(user_2));

// 5.Object.fromEntries() : 키/값 배열을 객체로
const arr = 
[
    ["name", "Mike"],
    ["age", 30],
    ["gender", "male"]
]

console.log("5.Object.fromEntries() ::::::", Object.fromEntries(arr));