//Create variables here
var dog, happyDog, foodS, foodStock, database;
function preload()
{
  dogImage = loadImage("images/dogImg.png");
  dogImage1 = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();

	createCanvas(500, 500);
  dog = createSprite(400,400,50,60);
  dog.addImage("dog",dogImage);
  dog.scale = 0.20;

  foodStock = database.ref("food");
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("dog", dogImage1);
  }

  drawSprites();
 

}
function readStock(data){
 foodS = data.val();
}
function writeStock(x){
 if (x <= 0){
   x = 0;
 }
 else{
   x = x-1;
 }
 database.ref('/').update({
   food : x
 })
}









