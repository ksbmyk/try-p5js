var colors = [100, 200, 255];

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
    c = random(colors);
    if (i % 2 == 1){
      fill(0, 0, Number(c));
    } else {
      fill(0, Number(c), 0);
    }
    ellipse(x, y, 30);
    //rect(x, y, 30, 30);
  }
}
