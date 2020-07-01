interface Person {
    name: string;
    age?: number; // 물음표는 설정을 해도 되고 안해도 되고
}

interface Developer {
    name: string;
    age?: number;
    skills: string[];
}

const person: Person = {
    name: '김사람',
    age: 20
};

const expert: Developer = {
    name: '김개발',
    skills: ['javascript', 'react']
};

const people: Person[] = [person, expert];