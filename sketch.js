
var ball;
var database;
function setup(){
    createCanvas(500,500);
// snake case and camel case has no difference on working 
    ball = createSprite(10,10,10,10);
    ball.shapeColor = "red";
    //database
    database = firebase.database();
    var ref = database.ref("ball/position");
    ref.on("value",read_position,show_error)//snake case for trying i can use camel case also
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        write_position(-2,0);
        //////////////(x,y);
    }
    else if(keyDown(RIGHT_ARROW)){
        write_position(2,0);
    }
    else if(keyDown(UP_ARROW)){
        write_position(0,-2);
    }
    else if(keyDown(DOWN_ARROW)){
        write_position(0,+2);
    }//if u started with snake case it should working only WITH SNAKE CASE!!! SAME FOR CAMEL CASE.
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
//new function for database
function show_error(){
    console.log("KUCH GALAT HUA HAI/SOMETHING WENT WRONG");
}
//FOR READING DATA ON DATABASE
//THE DEFAULT VALUES OF THE BALL IS (10,10,10,10) BUT THE SERVER HAS UPDATED THE POSITIONS TO (200,200)//
function read_position(data){
   position = data.val();
   //the values
   ball.x = position.x;
   ball.y = position.y;
}
function write_position(x,y){
//REFERING THE BALL IN THE DATABASE AND VALUES ARE BEING UPDATE CONSTANTLY
database.ref("ball/position").set({
    x:ball.x+x,
    y:ball.y+y,
});


}
///////// ...... ////////////>>>>>>>>>>>>>   
//...////////////////////////   .   .. >
//...///////....../////////>>>>>>>>>>>>>>>
