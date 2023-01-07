leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(100,150);

    canvas = createCanvas(800,400);
    canvas.position(830,200);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("#5196e3");
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("#00ff0a");
    text('Vyan',100,300);
}

function modelDone(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("Right Wrist X = "+results[0].pose.rightWrist.x);
        console.log("Left Wrist X = "+results[0].pose.leftWrist.x);
    }
}