var car, wall;
var speed, weight;
var math;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  
  
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    math = 0.5*weight*speed*speed/22500;
    console.log(math);
    if(math < 100){
      car.shapeColor = "green";
    }
    if(math > 99 && math < 180){
      car.shapeColor = 	"yellow";
    }
    if(math > 180){
      car.shapeColor = "red";
    }
  }
 
  drawSprites();
}