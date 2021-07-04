const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    setBackground();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    background("white");
    image(backgroundImg,0,0,1200,700);


    Engine.update(engine);

    // write code to display time in correct format here


}

function setBackground(){
    var d = new Date();
    var n = d.getHours();
    if(n > 4 && n < 6){
        backgroundImg = loadImage("sunrise1.png");

    }
    else if(n > 5 && n < 7){
        backgroundImg = loadImage("sunrise2.png");

    }
    else if(n > 6 && n < 8){
        backgroundImg = loadImage("sunrise3.png");

    }else if(n > 7 && n < 9){
        backgroundImg = loadImage("sunrise4.png");

    }else if(n > 17 && n < 19){
        backgroundImg = loadImage("sunrise2.png");

    }else if(n > 18 && n < 20){
        backgroundImg = loadImage("sunrise2.png");

    }
    else{
        backgroundImg = loadImage("sunrise5.png");
    }
    
}