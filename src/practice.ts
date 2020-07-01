type Person = {
    name: string;
    age?: number;
};

// & 는 Intersection 으로써 두 개 이상의 타입들을 합쳐줍니다.
type Developer = Person & {
    skills: string[];
};

const person: Person = {
    name: '김사람'
};

const expert: Developer = {
    name: '김개발',
    skills: ['javascript', 'react']
};

type People = Person[];
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];