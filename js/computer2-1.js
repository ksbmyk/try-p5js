function setup(){
  createCanvas(800, 800);
  colorMode(HSB, 1);
  noStroke();
}

function draw(){
  for(i = 1; i < 2000; i++){
    x = random(0, 900);
    y = random(0, 900);
    c = random(0, 255);
    fill(0, 0, c);
    rect(x, y, 30, 30); 
  }
  exit();
}
