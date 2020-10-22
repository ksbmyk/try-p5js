function setup(){
  createCanvas(800, 800);
  colorMode(RGB, 256);
  noStroke();
}

function draw(){
  for(i = 1; i < 2000; i++){
    x = random(0, 900);
    y = random(0, 900);
    c = random(0, 3);
    if (i % 2 == 1){
      fill(0, 0, c * 10 - 50);
    } else {
      fill(0, c, 0);
    }
    rect(x, y, 30, 30);
  }
  exit();
}
