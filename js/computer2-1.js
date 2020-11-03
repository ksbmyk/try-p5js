//var colors = [100, 200, 255];

function setup(){
  createCanvas(800, 800);
  colorMode(RGB, 256);
  noStroke();
}

function draw(){
  noLoop();
  for(i = 1; i < 3000; i++){
    x = random(0, 900);
    y = random(0, 900);

    if (i % 2 == 1){
      c = random(0, 128);
      fill(256, c, 256);
    } else {
      c = random(128, 256)
      fill(256, c, 256);
    }
    ellipse(x, y, 30);
    //rect(x, y, 30, 30);
  }
}
