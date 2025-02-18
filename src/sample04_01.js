/**
 * 04_01. 심볼(Symbol) : 유일한 식별자 생성시 사용
 * ==> new를 붙이지 않음
 */

/**
 * 1.property key : 심볼형
 */ 
const id = Symbol('id');
const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid'
}

console.log("1.property key : 심볼형>>>", user);
console.log("1.property key : 심볼형>>>", user[id]);
console.log("1.property key : 심볼형>>>", Object.keys(user));

/**
 * 2.Symbol.for() : 전역 심볼
 * 하나의 심볼만 보장받을 수 있음
 * 없으면 만들고, 있으면 가져오기 때문
 * Symbol함수는 매번 다른 Symbol 값을 생성히자만,
 * Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
 */
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');
console.log("2.Symbol.for()>>>", id1 === id2);
console.log("2.Symbol.for()>>>", Symbol.keyFor(id1));
console.log("2.Symbol.for()>>>", Symbol.keyFor(id2));

/**
 * 3.description
 */ 
const id3 = Symbol('id 입니다.');
console.log("3.description>>>", id3.description);

//숨겨진 Symbol key 보는 법
const user3 = {
    name : 'Mike',
    age : 30,
    [id] : 'myid'
}
console.log("3.description>>>", Object.getOwnPropertySymbols(user3));
console.log("3.description>>>", Reflect.ownKeys(user3));

/**
 * 4. 사용 예제
 */ 

// 다른 개발자가 만들어 놓은 객체
const user4 = {
    name : 'Mike4',
    age : 34
};

// 내 작업
// user4.showName = function (){
//     console.log("내 작업")
// };

const showName = Symbol("show name");
user4[showName] = function (){
    console.log("4. 사용 예제>>>>",this.name)
};

// 사용자가 접속하면 보는 메세지
for (let key in user4){
    console.log(`4. 사용 예제>>>> His ${key} is ${user4[key]}.`);
}
// 내 작업만 보기
user4[showName]();