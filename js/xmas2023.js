// for 『NEORT』×『Pop Up! YohaS』 Digital Art Show
// https://neort.io/challenge/cl0tss4n70rtc72b48v0

let circles = [];
let numCircles = 700;
// 白, 赤, 金、銀、緑, 金
let colorPalette = ["#ffffff", "#CC0000", "#C99C33", "#A6AAAE", "#006622", "#C99C33"];
function setup() {
    createCanvas(1920, 970);

    for (let i = 0; i < numCircles; i++) {
        let circle = {
            x: random(width),
            y: random(height),
            color: colorPalette[floor(random(colorPalette.length))],
            diameter: 30,
            alphaValue: 0,
            speed: random(0.01, 0.03)
        };
        circles.push(circle);
    }
  }
  
function draw() {
    background("#000000");

    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        circle.alphaValue = 128 + 128 * sin(frameCount * circle.speed);
        noStroke();

        let c = color(circle.color);
        c.setAlpha(circle.alphaValue);
        fill(c);

        ellipse(circle.x, circle.y, circle.diameter);
    }
}
