function setup(){
  createCanvas(500, 500);
  colorMode(HSB, 1);
}

function draw(){
  for(i = 1; i < 10; i++){
    x = random(0, 100)
    y = random(100, 200)
    rect(x, y, 20, 20); 
  }
}
