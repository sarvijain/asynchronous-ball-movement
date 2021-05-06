var ball;
var database;
var pos
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
    var ballposition = database.ref("ball/position");
    ballposition.on("value",readposition,showerror);
}

function draw(){
    background("white");
    if(pos!== undefined){
        if(keyDown(LEFT_ARROW)){
            changePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            changePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            changePosition(0,+1);
        }
        drawSprites();
    }
    
}

function changePosition(x,y){
database.ref("ball/position").set({
    x :pos.x + x,
    y :pos.y + y,
})
    // ball.x = ball.x + x;
    // ball.y = ball.y + y;
}
function readposition(data){
    pos = data.val();
    ball.x=pos.x
    ball.y=pos.y
    }
function showerror(){
console.log("there is an error,please check")
}
