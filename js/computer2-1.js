function setup(){
  createCanvas(800, 800);
  colorMode(HSB, 1);
}

function draw(){
  for(i = 1; i < 2000; i++){
    x = random(0, 900);
    y = random(0, 900);
    rect(x, y, 30, 30); 
  }
  exit();
}
