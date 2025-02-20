/**
 * 15_01. 클래스(Class)
 *
 * 객체 생성 방법 : 생성자함수, 클래스(ES6에 추가된 스펙)
 */

/**
 * 1-1. 생성자함수, 클래스
 * 생성자함수
 * 1.객체 내부에 함수 존재
 * 2.constructor : 함수
 * 클래스
 * 1.프로토타입에 함수 존재
 * 2.constructor : constructor
 */

const User = function (name, age) {
    this.name = name;
    this.age = age;
    // this.showName = function(){
    // 	console.log(this.name);
    // }
};

// 생성자 함수 내부에 함수를 선언하지 않고 아래와 같이 생성하면 클래스와 동일하게 사용 가능
User.prototype.showName = function () {
    console.log(this.name);
};

const mike = new User("Mike", 30);

class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name);
    }
}

const tom = new User("Tom", 19);
tom.showName();

// 클래스의 함수는 안 보인다고 했는디... 보이네... ㅠㅠ
for (const p in mike) {
    console.log("생성자함수", p);
}

for (const p in tom) {
    console.log("클래스", p);
}

/**
 * 1-2. 클래스 상속
 */

class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    dirve() {
        console.log("drive...");
    }
    stop() {
        console.log("STOP!");
    }
}

class Bmw extends Car {
    //1.2.2.클래스 오버라이딩(overriding)
    constructor(color) {
        super(color);
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    }
    // 1.2.1.메소드 오버라이딩(method overriding)
    stop() {
        super.stop();
        console.log("OFF!");
    }
}

const z4 = new Bmw("blue");
z4.stop();
