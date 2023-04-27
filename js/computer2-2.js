function setup(){
  createCanvas(800, 800);
  colorMode(RGB, 256);
  background(0);
  angleMode(DEGREES); // 円を0度〜360度で扱う
}

function draw(){
  noLoop();

  // 800*800の中心400,400を原点にする
  push();
  translate(400, 400);

  // 光らせる
  blendMode(SCREEN); // 重ねると色が明るくなる

  // 扇
  fill(0, 150 , 255); // シアン
  for (var i = 0; i < 24; i++) {
    n = 15 * i
    for (var j = 0; j < 15; j++){
      strokeWeight(j * 0.8);
      stroke(0, 150 - j, 255, 100);
      arc(0, 0, 350, 350, 0 + n, 10 + n, PIE);
    }
  }

  // 扇の上の円
  noStroke();
  fill(0, 0, 255); //青
  for (var i = 0; i < 24; i++) {
    rotate(15);
    for (var j = 0; j < 15; j++){
      strokeWeight(j * 0.2);
      stroke(0, 15, 255 - j, 100);
      ellipse(175, 15, 31, 31);
    }
    for (var j = 0; j < 15; j++){
      strokeWeight(j * 1);
      stroke(0, 15, 100 - j, 150);
      ellipse(190, 15, 10, 10);
    }
  }

  // 外周の円
  fill(255, 0, 0); // 赤
  for (var i = 0; i < 12; i++) {
    rotate(30);
    for (var j = 0; j < 15; j++){
      strokeWeight(j * 1);
      stroke(100, 25 - j, 0, 100);
      ellipse(110, 190, 25, 25);
    }
  }

  // 外周の大円
  fill(10, 0 , 128); //紫
  for (var i = 0; i < 12; i++) {
    rotate(30);
    for (var j = 0; j < 15; j++){
      strokeWeight(j * 1);
      stroke(100, 50, 128 - j, 100);
      ellipse(200, 200, 100, 100);
    }
  }

  blendMode(BLEND); //色を重ねたとき上書きする

  // 中心黒小円
  fill(0);
  ellipse(0, 0, 150, 150);

  blendMode(SCREEN);

  //花びら
  for (var i = 0; i < 6; i++) {
    rotate(60);
    fill(255, 255, 0); // 黄
    for (var j = 0; j < 15; j++){
      strokeWeight(j * 1);
      stroke(100, 100, 25 - j, 100);
      ellipse(30, 30, 45, 45); //中心まわりの円
    }
  }
  
  // 中心円
  fill(0, 150 , 255); 
  blendMode(BLEND);
  ellipse(0, 0, 80, 80);

  // 中心発光
  blendMode(SCREEN);
  for (var j = 0; j < 15; j++){
    strokeWeight(j * 1);
    stroke(0, 20 - j, 255, 100);
    ellipse(0, 0, 100, 100);
  }

  blendMode(BLEND);

  // 外側に黒い太い円を描を置き半円にする
  noFill();
  strokeWeight(80);
  stroke(0, 0, 0);
  ellipse(0, 0, 650, 650);

}
