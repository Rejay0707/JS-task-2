'use strict';
////////findind area and perimeter/////////////////////
class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }
}
const num = new Rectangle(3, 4);
const num1 = new Rectangle(6, 7);

console.log('Area of Rectangle is:' + num.length * num.breadth);
console.log('Area of Rectangle is:' + num1.length * num1.breadth);
const perimeter = new Rectangle(5, 4);
console.log(
  'Perimeter of Rectangle is:' + 2 * (perimeter.length + perimeter.breadth)
);

/////////////finding second maximum no in an array////////
const secMax1 = (num) => {
  num.sort((a, b) => b - a);
  console.log(num);
  const result = num[1];
  console.log(result);
};
secMax1([-8, -5, 6, 10, 7]);
