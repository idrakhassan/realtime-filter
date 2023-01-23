noseX=0;
noseY=0;

function preload(){ 
mustache = loadImage('mustache.png');
}


function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Intialized')
}

function gotPoses(results)
{
    if(results.length>0)
    {
    console.log(results);
noseX = results[0].pose.nose.x-80;
noseY = results[0].pose.nose.y-60;

    }
}
function draw(){
    image(video,0,0,300,300);
    image(mustache,noseX,noseY,30,30);

}

function take_snapshot(){
    save('myFilterImage.png');
}

