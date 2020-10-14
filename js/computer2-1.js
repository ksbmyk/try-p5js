function setup(){
  createCanvas(500, 500);
  colorMode(HSB, 1);
}

function draw(){
  for(i = 1; i < 10; i++){
    c = random(0, 500)
    rect(c, c*i, 20, 20); 
  }
}
