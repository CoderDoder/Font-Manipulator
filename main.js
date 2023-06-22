var noseX=0;
var noseY=0;
var lwristX=0;
var lwristY=0;
var rwristX=0;
var rwristY=0;
var length=0;

function draw(){
    background("white");
    textSize(size);
    fill("black");
    text('Ansuman',noseX,noseY);

}

function setup(){
    canvas=createCanvas(400,400);
    canvas.position(800,250);
    video=createCapture(VIDEO);
    video.size(450,500);
    video.position(250,200);

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}

function preload(){

}

function modelLoaded(){
    console.log("posenet modelLoaded :D");

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+noseX+" ,noseY= "+noseY);
        lwristX=results[0].pose.leftWrist.x;
        rwristX=results[0].pose.rightWrist.x;
        lwristY=results[0].pose.leftWrist.y;
        rwristY=results[0].pose.rightWrist.y;
        console.log("lwristX= "+lwristX+" ,lwristY= "+lwristY);
        console.log("rwristX= "+rwristX+" ,rwristY= "+rwristY);
        size=floor(lwristX-rwristX);
        console.log("font size= "+size);

    }

}