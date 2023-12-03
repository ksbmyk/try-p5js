// for 『NEORT』×『Pop Up! YohaS』 Digital Art Show
// https://neort.io/challenge/cl0tss4n70rtc72b48v0

let circles = [];
let numCircles = 800;

function setup() {
    createCanvas(1920, 970);

    for (let i = 0; i < numCircles; i++) {
      let circle = {
        x: random(width),
        y: random(height),
        diameter: 30,
        alphaValue: 0,
        speed: random(0.01, 0.03)
      };
      circles.push(circle);
    }
  }
  
  function draw() {
    background(0, 30, 70);
  
    for (let i = 0; i < circles.length; i++) {
      let circle = circles[i];
      circle.alphaValue = 128 + 128 * sin(frameCount * circle.speed);
      noStroke();
      fill(255, 255, 255, circle.alphaValue);
      ellipse(circle.x, circle.y, circle.diameter);
    }
  }