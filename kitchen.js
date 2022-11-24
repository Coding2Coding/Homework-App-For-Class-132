var status = "";
var image = "";

function preload() {
    image = loadImage("kitchenFruit.jpg");
}



function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting the objects..";
}

function modelLoaded() {
    console.log("The model is loaded")
    status = true;
    objectDetector.detect(image, gotResult);
}

function gotResult(error, result) {
    if(error) {
        console.log(error);
    }
    console.log(result);
}