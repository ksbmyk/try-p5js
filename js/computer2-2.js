function setup(){
  createCanvas(800, 800);
  colorMode(RGB, 256);
  background(0);
  angleMode(DEGREES);
}

function draw(){
  noLoop();

  push();
  translate(400, 400);
  stroke(1);
  // 扇
  for (var i = 0; i < 24; i++) {
    n = 15 * i
    //arc(x, y, w, h, start, stop)
    arc(0, 0, 350, 350, 0 + n, 10 + n);
  }

  // 扇の上の円
  noStroke();
  for (var i = 0; i < 24; i++) {
    rotate(15);
    ellipse(175, 15, 31, 31);
    ellipse(190, 15, 10, 10);
  }

  stroke(1);
  // 黒円
  fill(0);
  ellipse(0, 0, 150, 150);

  fill(255);
  //花びら
  for (var i = 0; i < 6; i++) {
    rotate(60);
    ellipse(30, 30, 50, 50); // 中心 30, 30, 横50, 縦50
    ellipse(30, 30, 45, 45);
  }
  ellipse(0, 0, 80, 80);

  // 外周の円
  for (var i = 0; i < 36; i++) {
    rotate(10);
    ellipse(155, 155, 25, 25)
    ellipse(155, 155, 20, 20);
  }
  pop();
}
