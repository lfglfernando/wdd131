const PI = 3.1416
let area = 0
function circleArea(radius) {
    const area = radius * radius * PI;
    return area;
}
area = circleArea(3);
console.log("Area1: ",area);

