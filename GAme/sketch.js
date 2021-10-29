//Making Variabes
var canvas
var player
var boundary1, boundary2, boundary3, boundary4
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10
var wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19
var wall20
var police1, police2, police3, police4
var walls

function setup(){
  //Creating the canvas
  createCanvas(windowWidth - 5, windowHeight - 10);
  //Making the Player & giving the position for it
  player = createSprite(windowWidth/2, windowHeight - 200, 25, 25)
  //Giving the player a colour
  player.shapeColor = "yellow";
  //Making the boundary's
  boundary1 = createSprite(760, 20, windowWidth - 50, 10);
  boundary2 = createSprite(760, windowHeight - 20, windowWidth - 50, 10);
  boundary3 = createSprite(20, 377, 10, windowHeight - 30);
  boundary4 = createSprite(windowWidth - 30, 377, 10, windowHeight - 30);
  //Giving the boundar's their colours
  boundary1.shapeColor = "brown";
  boundary2.shapeColor = "brown";
  boundary3.shapeColor = "brown";
  boundary4.shapeColor = "brown";
  //Making the walls
  wall1 = createSprite(windowWidth/2, windowHeight - 225, 100, 10);
  wall2 = createSprite(windowWidth/2, windowHeight - 175, 100, 10);
  wall3 = createSprite(670, 550, 10, 200);
  wall4 = createSprite(670, 470, 100, 10);
  wall5 = createSprite(875, 550, 10, 200);
  wall6 = createSprite(875, 470, 100, 10);
  wall7 = createSprite(925, 300, 200, 10);
  wall8 = createSprite(625, 300, 200, 10);
  wall9 = createSprite(500, 500, 100, 10);
  wall10 = createSprite(1025, 500, 100, 10);  
  wall11 = createSprite(450, 500, 10, 150);
  wall12 = createSprite(1075, 500, 10, 150);
  wall13 = createSprite(200, 300, 10, 100);
  wall14 = createSprite(1250, 300, 10, 100);
  wall15 = createSprite(200, 250, 300, 10);
  wall16 = createSprite(1250, 250, 300, 10);
  wall17 = createSprite(200, 500, 150, 10);
  wall18 = createSprite(270, 550, 10, 100);
  wall19 = createSprite(1300, 500, 150, 10);
  wall20 = createSprite(1230, 550, 10, 100);

  //Giving the wall's their colours
  wall1.shapeColor = "blue";
  wall2.shapeColor = "blue";
  wall3.shapeColor = "blue";
  wall4.shapeColor = "blue";
  wall5.shapeColor = "blue";
  wall6.shapeColor = "blue";
  wall7.shapeColor = "blue";
  wall8.shapeColor = "blue";
  wall9.shapeColor = "blue";
  wall10.shapeColor = "blue";
  wall11.shapeColor = "blue";
  wall12.shapeColor = "blue";
  wall13.shapeColor = "blue";
  wall14.shapeColor = "blue";
  wall15.shapeColor = "blue";
  wall16.shapeColor = "blue";
  wall17.shapeColor = "blue";
  wall18.shapeColor = "blue";
  wall19.shapeColor = "blue";
  wall20.shapeColor = "blue";

  //Making the Police
  police1 = createSprite(50, 50, 25, 25);
  police2 = createSprite(windowWidth - 60, 50, 25, 25);
  police3 = createSprite(50, windowHeight - 50, 25, 25);
  police4 = createSprite(windowWidth - 60, windowHeight - 50, 25, 25);
  //Giving the Police their colours
  police1.shapeColor = "green";
  police2.shapeColor = "lime";
  police3.shapeColor = "purple";
  police4.shapeColor = "cyan";
  //Making the Groups
  walls = createGroup();
  walls.add(wall1);
  walls.add(wall2);
  walls.add(wall3);
  walls.add(wall4);
  walls.add(wall5);
  walls.add(wall6);
  walls.add(wall7);
  walls.add(wall8);
  walls.add(wall9);
  walls.add(wall10);
  walls.add(wall11);
  walls.add(wall12);
  walls.add(wall13);
  walls.add(wall14);
  walls.add(wall15);
  walls.add(wall16);
  walls.add(wall17);
  walls.add(wall18);
  walls.add(wall19);
  walls.add(wall20);
 
  //To see the collider
  police1.debug = true
  police2.debug = true
  police3.debug = true
  police4.debug = true
  //To make the collider
  police1.setCollider("rectangle", 0, 0, 50, 50)
  police2.setCollider("rectangle", 0, 0, 50, 50)
  police3.setCollider("rectangle", 0, 0, 50, 50)
  police4.setCollider("rectangle", 0, 0, 50, 50)
  //Giving the Police Velocity
  //police1.velocityX = 2;
  police1.velocityY = 2;

}
  
function draw(){
  //Giving the beackground a colour
  background("black");
  //Making the player move up
  if(keyDown("w")){
    player.y = player.y - 10;
  }
  //Making the player move down
  if(keyDown("s")){
    player.y = player.y + 10;
  }
  //Making the player move to the left
  if(keyDown("a")){
    player.x = player.x - 10;
  }
  //Making the player move to the right
  if(keyDown("d")){
    player.x = player.x + 10;
  }
  
  //Moving of Police 1
  if(police1.isTouching(walls)){
    var rand = Math.round(random(1, 4))

    police1.velocityY = 0;

    console.log(rand);

  if(rand == 1){
    moveUp(police1)
  }
  else if(rand == 2){
    moveDown(police1)
  }
  else if(rand == 3){
    moveRight(police1)
  }
  else{
    moveLeft(police1)
  }
  }

  //Making the player not go outside the boundary
  player.bounceOff(boundary1);
  player.bounceOff(boundary2);
  player.bounceOff(boundary3);
  player.bounceOff(boundary4);
  //Making the player not go through the walls
  player.bounceOff(wall1);
  player.bounceOff(wall2);
  player.bounceOff(wall3);
  player.bounceOff(wall4);
  player.bounceOff(wall5);
  player.bounceOff(wall6);
  player.bounceOff(wall7);
  player.bounceOff(wall8);
  player.bounceOff(wall9);
  player.bounceOff(wall10);
  player.bounceOff(wall11);
  player.bounceOff(wall12);
  player.bounceOff(wall13);
  player.bounceOff(wall14);
  player.bounceOff(wall15);
  player.bounceOff(wall16);
  player.bounceOff(wall17);
  player.bounceOff(wall18);
  player.bounceOff(wall19);
  player.bounceOff(wall20);

  //Making the police bounce off the walls
  police1.bounceOff(walls);


  //Making the Police1 not go through the boundary 
  police1.bounceOff(boundary1);
  police1.bounceOff(boundary2);
  police1.bounceOff(boundary3);
  police1.bounceOff(boundary4);
  //Making the Police2 not go through the boundary
  police2.bounceOff(boundary1);
  police2.bounceOff(boundary2);
  police2.bounceOff(boundary3);
  police2.bounceOff(boundary4);
  //Making the Police3 not go through the boundary
  police3.bounceOff(boundary1);
  police3.bounceOff(boundary2);
  police3.bounceOff(boundary3);
  police3.bounceOff(boundary4);
  //Making the Police4 not go through the boundary
  police4.bounceOff(boundary1);
  police4.bounceOff(boundary2);
  police4.bounceOff(boundary3);
  police4.bounceOff(boundary4);
  
  /*if(police1.isTouching(walls)){
    police1.velocityX = -2
    police1.velocityY = -2
  }
  */

  //For Drawing the Sprites
  drawSprites()
}

function moveUp(moveBody){
  moveBody.y += 5;
  moveBody.x += 0;
  console.log("moveUp")
}

function moveDown(downBody){
  downBody.y += -5;
  downBody.x += 0;
  console.log("moveDown")
}

function moveRight(rightBody){
  rightBody.y += 0;
  rightBody.x += 5;
  console.log("moveRight")
}

function moveLeft(leftBody){
  leftBody.y += 0;
  leftBody.x += -5;
  console.log("moveLeft")
}
