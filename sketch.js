var motion=5
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

function draw() {
  background(0); 
  //this a flashlight
    fill(255, 255, 0, 100);
   ellipse(mouseX,mouseY,50,50);
    fill(255, 255, 0, 60);
  ellipse(mouseX,mouseY,100,100);
    fill(255, 255, 0, 100);
  ellipse(mouseX,mouseY,150,150);
    //body 
    fill(mouseX,mouseY);
  rect(motion,100,150,175);
  circle(motion+85,100,100);
  if (motion>300){
    motion=0
  }else{
    motion=motion+1;
  }
  
}
