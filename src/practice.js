"use strict";
// 상속받아 해당 클래스가 Shape interface 의 조건을 충족시킨다.
var Circle = /** @class */ (function () {
    /* 생성자 */
    function Circle(radius) {
        this.radius = radius;
    }
    /* 오버라이드 함수 */
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
