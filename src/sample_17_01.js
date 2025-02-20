/**
 * 17_01. async, await
 * 함수 앞에 async를 두면 promise를 반환
 *
 */

/**
 * 1-1. async
 */
/*
async function getName() {
    // return "Mike";
    // return Promise.resolve("Tom");
    throw new Error("err...");
}

console.log(getName()); // return Promise

getName()
    .then((name) => {
        console.log(name);
    })
    .catch((err) => {
        console.log(err);
    });
*/

// ===========================================

/**
 * 1-2. await
 * async 내부에서만 사용가능
 */
/*
function getName(name) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(name);
        }, 1000);
    });
}

async function showName() {
    const result = await getName("Mike");
    console.log(result);
}

console.log("시작");
showName();
*/
// ===========================================

const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문 완료");
            // rej("xxx");
        }, 3000);
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

// 주로 이렇게 많이 사용함...
console.log("시작");
async function order() {
    try {
        // const result1 = await f1();
        // const result2 = await f2(result1);
        // const result3 = await f3(result2);
        // console.log(result3);
        const result = await Promise.all([f1(), f2(), f3()]);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
    console.log("종료");
}

// promise에서는 catch로 에러를 처리했지만 async, await는 try~ catch로 처리
order();
