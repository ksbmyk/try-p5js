function setup(){
  createCanvas(800, 800);
  colorMode(RGB, 256);
  background(0);
  angleMode(DEGREES);
}

function draw(){
  noLoop();

  push();
  translate(500, 500);
  for (var i = 0; i < 6; i++) {
    rotate(60); //180/90=30度 30度ゴト6回 -> 360度
    ellipse(30, 30, 45, 45); // 中心 200, 200, 横50, 縦50
  }
  ellipse(0, 0, 80, 80);

  // 外周の円
  for (var i = 0; i < 36; i++) {
    rotate(10); //180/90=30度 30度ゴト6回 -> 360度
    ellipse(150, 150, 20, 20); // 中心 200, 200, 横50, 縦50
  }
  pop();

  // 楕円
  // push();
  // translate(500, 500);
  // for (var i = 0; i < 12; i++) {
  //   rotate(30);
  //   ellipse(10, 130, 10, 100);
  // }
  // pop();

  // 扇
  push();
  translate(500, 500);
  for (var i = 0; i < 12; i++) {
    rotate(30);
    arc(90, 130, 80, 80, 0, 90);
  }
  pop();

}
