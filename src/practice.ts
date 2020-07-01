interface Shape {
    getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

// 상속받아 해당 클래스가 Shape interface 의 조건을 충족시킨다.
class Circle implements Shape {
    /* 생성자 */
    constructor(public radius: number) {
        this.radius = radius;
    }

    /* 오버라이드 함수 */
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);
console.log(rectangle.width); // private 이기에 에러 발생

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
});