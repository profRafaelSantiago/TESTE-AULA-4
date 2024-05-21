function setup(){
createCanvas(600, 600);
background("black");
}
function draw(){
  
  stroke("red");
  fill("magenta");
  
  if (mouseIsPressed){
  rect(mouseX, mouseY, 20, 35);
}
}