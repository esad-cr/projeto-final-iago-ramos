let img, grossura_stroke_quadrantes;
let mostra_quadrante_RT, mostra_quadrante_LB;
let font, phrase;


function preload()
{
  font = loadFont ("Orbitron-Medium.ttf");
}


function preload() 
{
  img = loadImage("vampiru.jpg");
}

function setup() 
{
  var myCanvas = createCanvas(450, 450);
  myCanvas.parent("p5Canvas");
  mostra_quadrante_RT = true;
  mostra_quadrante_LB = true;
}

function draw() 
{
  background(0);
  
  grossura_stroke_quadrantes = 3;
  
  let pg = createGraphics(width, height);
  pg.background(0, 0);
  pg.rect (
    grossura_stroke_quadrantes/2, 
    grossura_stroke_quadrantes/2, 
    width-grossura_stroke_quadrantes, 
    height-grossura_stroke_quadrantes, 64);

  img.mask(pg);
  image(img, 0, 0, width, height);
  
  
  if (mostra_quadrante_RT === true || mostra_quadrante_LB === true) quadrante_LT();
  
  if (mostra_quadrante_RT === true) quadrante_RT();
  if (mostra_quadrante_LB === true) quadrante_LB();
  
  if (mostra_quadrante_RT === true || mostra_quadrante_LB === true)quadrante_RB();
  
  stroke(30);
  strokeWeight(grossura_stroke_quadrantes);
  noFill();
  rect (
    grossura_stroke_quadrantes/2, 
    grossura_stroke_quadrantes/2, 
    width-grossura_stroke_quadrantes, 
    height-grossura_stroke_quadrantes, 64);
}
  

function quadrante_LT() 
{
  stroke(30);
  strokeWeight(grossura_stroke_quadrantes);
  fill(255);
  rect (
    grossura_stroke_quadrantes/2, 
    grossura_stroke_quadrantes/2, 
    width/2-grossura_stroke_quadrantes/2, 
    height/2-grossura_stroke_quadrantes/2, 64, 0, 0, 0);
  
  noStroke();
  textSize (74);
  textAlign (CENTER, CENTER);
  fill(0);
  text (hour(), 0, 15, width/2, height/4);
  text (minute(), 0, height/4-15, width/2, height/4);
}
  

function quadrante_RT() 
{
  stroke(30);
  strokeWeight(grossura_stroke_quadrantes);
  fill(90, 150);
  rect (
    width/2, 
    grossura_stroke_quadrantes/2, 
    width/2-grossura_stroke_quadrantes/2, 
    height/2-grossura_stroke_quadrantes/2, 0, 64, 0, 0);
  
  noStroke();
  textSize (40);
  textAlign (CENTER, CENTER);
  fill(255);
  text ("Manifesto \n - \n PEP", width/2, 0, width/2, height/2);
}
  

function quadrante_LB() 
{
  stroke(30);
  strokeWeight(grossura_stroke_quadrantes);
  fill(50, 150);
  rect (
    grossura_stroke_quadrantes/2, 
    height/2, 
    width/2-grossura_stroke_quadrantes/2, 
    height/2-grossura_stroke_quadrantes/2, 0, 0, 0, 64);
  
  noStroke();
  textSize (40);
  textAlign (CENTER, CENTER);
  fill(255);
  text ("Other clocks \n - \n Lab", 0, height/2, width/2, height/2);
}
  

function quadrante_RB() 
{
  stroke(30);
  strokeWeight(grossura_stroke_quadrantes);
  fill(30);
  rect (
    width/2, 
    height/2, 
    width/2-grossura_stroke_quadrantes/2, 
    height/2-grossura_stroke_quadrantes/2, 0, 0, 64, 0);
  
  noStroke();
  textSize (74);
  textAlign (CENTER, CENTER);
  fill(255);
  text (day(), width/2, height/4*2+15, width/2, height/4);
  text (month(), width/2, height/4*3-15, width/2, height/4);
}
  

function doubleClicked() 
{
  if (mouseX > width/2 && mouseX < width 
      &&
      mouseY > 0 && mouseY < height/2) 
  {
    mostra_quadrante_RT = false;
  }
  
  
  if (mouseX > 0 && mouseX < width/2 
      &&
      mouseY > height/2 && mouseY < height) 
  {
    mostra_quadrante_LB = false;
  }
}