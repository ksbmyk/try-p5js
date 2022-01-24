function setup(){
  createCanvas(800, 800);
  colorMode(RGB, 256);
}

function draw(){
  noLoop();

  push();
  translate(500, 500);
  for (var i = 0; i < 6; i++) {
    rotate(PI/3); //180/90=30度 30度ゴト6回 -> 360度
    ellipse(30, 30, 45, 45); // 中心 200, 200, 横50, 縦50
  }
  ellipse(0, 0, 80, 80);
  pop();
}
