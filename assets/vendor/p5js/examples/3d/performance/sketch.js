var theta = 0;

function setup(){
  createCanvas(windowWidth, windowHeight, 'webgl');
}

function draw(){
  background(250, 250, 250, 255);
 
  translate(0, 0, -1500);
  normalMaterial();
  rotateY(frameCount * 0.01);

  for(var j = 0; j < 5; j++){
    push();
    for(var i = 0; i < 200; i++){
      translate(sin(theta + j) * 100, sin(theta + j) * 100, i * 0.1);
      rotateZ(theta * 0.2);
      push();
      sphere(8); 
      pop();
    }
    pop();
  }

  theta += 0.03;

}