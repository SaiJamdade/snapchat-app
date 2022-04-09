noseX=0;
noseY=0;

function preload(){
    hat = loadImage("https://i.postimg.cc/L6K34SRC/hat-removebg-preview.png")
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x ="+noseX);
        console.log("nose y ="+noseY);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(hat,noseX-90,noseY-130,150,100);
}

function take_snapshot(){
    save('SnapshotImage.png');
}