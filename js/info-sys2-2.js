let stats;
//H, L, Sの順
function setup(){
  createCanvas(1200, 800);
  colorMode(HSL, 360, 100, 100);
  //HSL、色相0〜360、彩度0〜100、輝度0〜100 、透明度（percentage） //“0%”は完全な透明、“100%”は不透明を表します。
  background(255);
  stats = loadTable("csv/painting_watercolor_color.csv");
  noStroke();
}

function draw(){
  noLoop();
  for(var i = 0; i < stats.getRowCount(); i++){
    var h = stats.getFloat(i, 0);
    var l = stats.getFloat(i, 1);
    var s = stats.getFloat(i, 2);
    var a = stats.getFloat(i, 3);
    a = float(floor(a*pow(10,3)))/pow(10,3);

    fill(h, s, l, a*100);

    var j = i/100;
    rect( i*10 - j*1000, j*10, 10, 10 );
  }
}
