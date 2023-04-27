function setup(){
  createCanvas(800, 800);
  colorMode(RGB, 256);
}

function draw(){
  noLoop();
  colore_text(10, 10, 10, 10, 255);

  // #34485e R52 G72 B94, #3c7d9b B60 G125 B155, #5b9f8a R91 G159 B138
  colore_text(10, 30, 52, 72, 94);
  colore_text(200, 30, 60, 125, 155);
  colore_text(400, 30, 91, 159, 138);

  // #fdd000 R253 G208 B0, #0068b7 R0 G104 B183, #9fd9f6 R159 G217 B246
  colore_text(10, 50, 253, 208, 0);
  colore_text(200, 50, 0, 104, 183);
  colore_text(400, 50, 159, 217, 246);

  // #aa998a R170 G153 B138, #eadfca R234 G223 B202, #9ec3bc R158 G195 B188
  colore_text(10, 70, 170, 153, 138);
  colore_text(200, 70, 234, 223, 202);
  colore_text(400, 70, 158, 195, 188);

  // #a2997f R162 G153 B127, #6e6457 R110 G100 B87, #cfdedf R207 G222 B223
  colore_text(10, 90, 162, 153, 127);
  colore_text(200, 90, 110, 100, 87);
  colore_text(400, 90, 207, 222, 223);
}

function colore_text(x, y, r, g, b){
  fill(r, g, b);
  text(`■ R:${r} G:${g} B:${b}`,x,y);
}
