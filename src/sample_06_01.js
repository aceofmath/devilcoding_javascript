/**
 * 06_01. 문자열 메소드(String methods)
  */

/**
 * 1. 백틱(`) 예제
  */
let desc = `오늘은 맑고 화창한
날씨가 계속 되겟습니다.
내일은 비소식이 있습니다.
`;
console.log("1. 백틱 예제>>>>>", desc);

/**
 * 2. length : 문자열 길이
  */
let desc2 = '안녕하세요.'; 
console.log("2. length>>>>>", desc2.length);
desc[2]="허";
console.log("2. length>>>>>", desc2[2]);

/**
 * 3. toUpperCase(), toLowerCase() : 대문자, 소문자 변환
  */
let desc3 = 'Hi guys. Nice to meet you.';
console.log("3. toUpperCase(), toLowerCase()>>>>>", desc3.toUpperCase());
console.log("3. toUpperCase(), toLowerCase()>>>>>", desc3.toLowerCase());

/**
 * 4. str.indexOf(text)
  */
let desc4 = 'Hi guys. Nice to meet you.';
console.log("4. str.indexOf(text)>>>>>", desc4.indexOf('to'));


