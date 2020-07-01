let count = 0; // 숫자
count += 1;
count = '갑자기 분위기 문자열'; // 이러면 에러납니다.

const message: string = 'hello world'; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

messages.push(1); // 안됨

let mightBeUndefined: string | undefined = undefined; // string일 수도 undefined일수도
let nullableNumber: number | null = null; // number 일수도 null 일수도

let color: 'red' | 'orange' | 'yellow' = 'red'; // 셋중에 하나일수도
color = 'yellow';
color = 'green'; // 에러남
