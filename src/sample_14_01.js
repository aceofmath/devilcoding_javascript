/**
 * 14_01. 상속, 프로토타입(Prototype)
*/

/**
 * 1-1. 프로토 타입
 * 객체를 만들면 생성되는 __proto__
*/

const user = {
	name : 'Mike'
};

console.log("1-1. 프로토 타입>>>", user.hasOwnProperty('name'));
console.log("1-1. 프로토 타입>>>", user.hasOwnProperty('age'));

/**
 * 1-2. 상속
*/
const car = {
	wheels : 4,
	drive() {
		console.log('drive...');
	},	
}

const bmw = {
	color : 'red',
	navigation : 1,
};
const benz = {
	color : 'black',
};
const audi = {
	color : 'blue',
};

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

console.log("1-2. 상속>>>", bmw);
console.log("1-2. 상속>>>", bmw.color);
console.log("1-2. 상속>>>", bmw.navigation);
console.log("1-2. 상속>>>", bmw.wheels);
bmw.drive();

/** 
 * Prototype Chain
 * car : wheel, drive()
 * bmw : color, navigation
 * x5 : color, name
 * */ 
const x5 = {
	color : "white",
	name : "x5"
}
x5.__proto__ = bmw;

console.log("1-2. 상속>>>", x5);
console.log("1-2. 상속>>>", x5.color);
console.log("1-2. 상속>>>", x5.name);
console.log("1-2. 상속>>>", x5.navigation);
console.log("1-2. 상속>>>", x5.wheels);
x5.drive();

// 속성 조사
for(p in x5){
	if(x5.hasOwnProperty(p)){
		console.log("1-2. 상속>>>속성", 'o', p);
	}else{
		console.log("1-2. 상속>>>속성", 'x', p);
	}
	
}
console.log("1-2. 상속>>>keys", Object.keys(x5));
console.log("1-2. 상속>>>values", Object.values(x5));


/**
 * 1-3. 상속(생성자함수)
*/
let car1 = {
	wheels : 4,
	drive() {
		console.log('drive...');
	},	
}

let bmw1 = function(color) {
	this.color = color;
};
let x5_1 = new bmw1('red');
let z4_1 = new bmw1('blue');

x5_1.__proto__ = car1;
z4_1.__proto__ = car1;

console.log("1-3. 상속(생성자함수)>>>", x5_1);
console.log("1-3. 상속(생성자함수)>>>", x5_1.wheels);
console.log("1-3. 상속(생성자함수)>>>", z4_1);
console.log("1-3. 상속(생성자함수)>>>", z4_1.wheels);

/**
 * 1-4. 상속(생성자함수)
 * x5_1.__proto__ = car1 <====== 이와 같이 사용하는 것은 별루
*/

bmw1 = function(color) {
	this.color = color;
};
bmw1.prototype.wheels = 4;
bmw1.prototype.drive = function (){
	console.log('drive...');
}

// prototype 추가
bmw1.prototype.navigation = 1;
bmw1.prototype.stop = function (){
	console.log('stop...');
}

// ====> bmw1.prototype.wheels ~ stop까지를 아래처럼 변경 가능
// 하지만 constructor가 존재하지 않음.. 아니면 수동으로 생성하면 됨.
/*
bmw1.prototype = {
	constructor: bmw1
	wheels = 4,
	drive(){
		console.log('drive...');
	},
	navigation = 1,
	stop(){
		console.log('stop...');
	}
}
*/

x5_1 = new bmw1('red');
z4_1 = new bmw1('blue');

console.log("1-4. 상속(생성자함수)>>>x5_1", x5_1);
console.log("1-4. 상속(생성자함수)>>>x5_1", x5_1.wheels);
console.log("1-4. 상속(생성자함수)>>>x5_1", x5_1.navigation);
x5_1.stop();
console.log("1-4. 상속(생성자함수)>>>z4_1", z4_1);
console.log("1-4. 상속(생성자함수)>>>z4_1", z4_1.wheels);

/**
 * 1.5. instanceof 함수(constructor)
 * 
 */
console.log("1-5. instanceof 함수>>>", x5_1 instanceof bmw1);
console.log("1-5. instanceof 함수>>>", z4_1 instanceof bmw1);
console.log("1-5. constructor 함수>>>", z4_1.constructor === bmw1);


// 위와 같이 작성하면 color를 변경가능하게 됨. 그래서, 클로저를 사용하면 됨.

bmw1 = function (color){
	const c = color;
	this.getColor = function(){
		console.log(c);
	}
}
x5_1 = new bmw1("red");
console.log("1-5. >>>", x5_1.color);
x5_1.getColor();