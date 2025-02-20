/**
 * 16_01. 프로미스(Promise)
 *
 * const pr = new Promise((resolve, reject) => {
 * })
 *
 * 콜백함수 : resolve(성공), reject(실패)
 *
 *  프로세스
 * 1. new Promise
 * state : pending(대기), result : undefined
 *
 * 1-1. resolve(value)
 * state : fulfilled(이행됨), result : value
 *
 * 1-2. reject(error)
 * state : rejected(거부됨), result : error
 */

/**
 * 1-1. 서버응답 프로세스
 * 1. new Promise
 * state : pending(대기), result : undefined
 *
 * 1-1. resolve(value)
 * state : fulfilled(이행됨), result : value
 */
let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("OK");
    }, 3000);
});

/**
 * 1-1. resolve 프로세스
 * 1. new Promise
 * state : pending(대기), result : undefined
 *
 * 1-2. reject(error)
 * state : rejected(거부됨), result : error
 */
/*
pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("OK");
        reject(new Error("err...."));
    }, 1000);
});
/*

/**
 * 1-2. 스크립트응답 프로세스
 * 1. function(result){} : 이행 되었을때 실행
 * 2. function(err){} : 거부 되었을때 실행
 */
/*
pr.then(
    function (result) {
        console.log(result + " 가지러 가자.");
    },
    function (err) {
        console.log("다시 주문해주세요...");
    }
);
console.log("시작");
pr.then(function (result) {
    console.log(result + " 가지러 가자.");
})
    .catch(function (err) {
        console.log("다시 주문해주세요...");
    })
    .finally(function () {
        console.log("끝");
    });
*/

/*
// callback 지옥 ===> 이렇게 사용하지 않으려고 promise를 씀.
let f1 = (callback) => {
    setTimeout(function () {
        console.log("1번 주문 완료");
        callback();
    }, 1000);
};

let f2 = (callback) => {
    setTimeout(function () {
        console.log("2번 주문 완료");
        callback();
    }, 3000);
};

let f3 = (callback) => {
    setTimeout(function () {
        console.log("3번 주문 완료");
        callback();
    }, 2000);
};

console.log("시작");
f1(function () {
    f2(function () {
        f3(function () {
            console.log("끝");
        });
    });
});
*/

f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문 완료");
            // rej("xxx");
        }, 3000);
    });
};

f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

console.log("시작");
// 프로미스 체이닝(Promises chaining)
/*
f1()
    .then((res) => f2(res))
    .then((res) => f3(res))
    .then((res) => console.log(res))
    .catch(console.log())
    .finally(() => {
        console.log("끝");
    });
*/

/**
 * 1-2. Promise.all
 *
 * */
console.time("x");
Promise.all([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd("x");
});

/**
 * 1-3. Promise.race
 *
 * */
console.time("y");
Promise.race([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd("y");
});
