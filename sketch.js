var motion=5
function setup() {
	createCanvas(500, 500);
}


function draw() {
  background(0);
//character moving and blending 
  fill(mouseX,mouseY)
    if (motion>300){
    motion=0
  }else{
    motion=motion+1;
  }
  //flashlight
  rect(motion+150,200,40,100)
  ellipse(motion+175,200,50,50)
 fill(255, 255, 0, 100);
   ellipse(mouseX,mouseY,50,50);
    fill(255, 255, 0, 60);
  ellipse(mouseX,mouseY,100,100);
    fill(255, 255, 0, 100);
  ellipse(mouseX,mouseY,150,150);

}
