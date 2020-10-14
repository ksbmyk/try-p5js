function setup(){
  createCanvas(500, 500);
  colorMode(HSB, 1);
}

function draw(){
  for(i = 1; i < 10; i++){
    x = random(0, 500);
    y = random(0, 500);
    rect(x, y, 20, 20); 
  }
  exit();
}
