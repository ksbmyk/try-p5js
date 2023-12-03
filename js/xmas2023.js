function setup() {
    createCanvas(1920, 970);
    colorMode(RGB);
    background(0, 30, 70);
    blendMode(OVERLAY);
    noLoop();
  }
  
  function draw() {
    for (let i = 1; i <= 1500; i++) {
      if (i % 2 === 0) {
        noStroke();
        fill(170, 200, 255);
      } else {
        stroke(170, 200, 255);
        fill(255, 255, 255, 100);
      }
      ellipse(random(0, 1920), random(0, 970), 30);
    }
  }
 