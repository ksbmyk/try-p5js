function setup(){
  createCanvas(800, 800);
  colorMode(RGB, 256);
  background(0);
  angleMode(DEGREES);
}

function draw(){
  noLoop();
  // 光らせる
  blendMode(SCREEN);

  push();
  translate(400, 400);
  //stroke(1);
  // 扇
  fill("red");
  for (var i = 0; i < 24; i++) {
    n = 15 * i
    for (var j = 0; j < 15; j++){
      strokeWeight(j * 0.2);
      stroke(200 - j, 15, 15, 100);
      //arc(x, y, w, h, start, stop)
      arc(0, 0, 350, 350, 0 + n, 10 + n, PIE);
    }
  }
  stroke(1);
  strokeWeight(1);
  // 扇の上の円
  noStroke();
  fill("blue");
  for (var i = 0; i < 24; i++) {
    rotate(15);
    for (var j = 0; j < 15; j++){
      strokeWeight(j * 0.2);
      stroke(0, 15, 255 - j, 100);
      ellipse(175, 15, 31, 31);
      ellipse(190, 15, 10, 10);
    }
  }


  stroke(1);
  blendMode(BLEND);
  // 黒円
  fill(0);
  ellipse(0, 0, 150, 150);

  fill("yellow");
  //花びら
  for (var i = 0; i < 6; i++) {
    rotate(60);
    for (var j = 0; j < 15; j++){
      strokeWeight(j * 0.2);
      stroke(100, 100, 25 - j, 100); //stroke(v1, v2, v3, [alpha])
      //ellipse(30, 30, 50, 50); // 中心 30, 30, 横50, 縦50
      ellipse(30, 30, 45, 45);
    }
  }
  ellipse(0, 0, 80, 80);

  // 外周の円
  for (var i = 0; i < 36; i++) {
    rotate(10);
    for (var j = 0; j < 15; j++){
      strokeWeight(j * 0.2);
      stroke(100, 100, 100 - j, 100);
      ellipse(155, 155, 25, 25)
    }
    //ellipse(155, 155, 20, 20);
  }

// 習作エリア
// 参考: https://note.com/deconbatch/n/nadd699e04580

    for (var i = 1; i < 15; ++i) {
       strokeWeight(i * 0.2); //線の太さ
       stroke(100, 100, 100, 100); //stroke(v1, v2, v3, [alpha])
       ellipse(150, 200, 25, 25);
    }

    for (var i = 1; i < 15; ++i) {
       strokeWeight(i * 0.2); //線の太さ
       stroke(100, 100, 100 - i, 100); //stroke(色相, 彩度, 明るさ, [alpha])
       ellipse(200, 200, 25, 25);
    }

    for (var i = 1; i < 15; ++i) {
       strokeWeight(i * 0.2); //線の太さ
       stroke(100, 100, 25-i, 100); //stroke(v1, v2, v3, [alpha])
       ellipse(250, 200, 25, 25);
    }

fill("red");
    // 扇を囲むような線ではなく扇のこの部分にだけしか線が引けていないから発光にならない
    strokeWeight(i * 0.2); //線の太さ
    //stroke(100, 100, 25, 100); //stroke(v1, v2, v3, [alpha])
    stroke(15, 15, 255, 100);
    arc(100, 350, 350, 350, 0 + n, 10 + n, PIE); // arc(中心x, 中心y, 円のw, 円のh, 確度start, 確度stop, [mode], [detail])
    // mode: 定数：弧の描画方法を決定するパラメータ。 CHORD、PIE または OPEN(オプション)
  pop();
}
