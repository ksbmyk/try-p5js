function setup(){
  createCanvas(800, 800);
  colorMode(RGB, 256);
  noStroke();
}

function draw(){
  noLoop();
  for(i = 1; i < 1000; i++){

    if (i % 2 == 1){
      fill(random(127, 249), random(191, 252), 255);
    } else {
      //fill(random(191, 252), 255, random(127, 249));
    }
    x = random(0, 900);
    y = random(0, 900);

    ellipse(x, y, 30);
  }
}
