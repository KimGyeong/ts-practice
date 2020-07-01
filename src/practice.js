"use strict";
var count = 0; // 숫자
count += 1;
count = '갑자기 분위기 문자열'; // 이러면 에러납니다.
var message = 'hello world'; // 문자열
var done = true; // 불리언 값
var numbers = [1, 2, 3]; // 숫자 배열
var messages = ['hello', 'world']; // 문자열 배열
messages.push(1); // 안됨
var mightBeUndefined = undefined; // string일 수도 undefined일수도
var nullableNumber = null; // number 일수도 null 일수도
var color = 'red'; // 셋중에 하나일수도
color = 'yellow';
color = 'green'; // 에러남
