let angle;
let multiplier;
let t;
let canvas;
let random1;
let text1;

function setup() {
    //noLoop();
    frameRate(0.5);
    canvas = createCanvas(800, 600);
    canvas.position(10,10);
    angleMode(DEGREES);
    text1 = createP('Happy Birthday');
    text1.position(width/2 - 100, height);
    text1.style('font-size', '35px');

}

function draw() {
    background(80);
    stroke(200);
    strokeWeight(2);
    translate(width / 2, height);
    branch(150);


}

function randomText(){
}

function branch(length) {
    stroke(randomStrokeCol());
    line(0, 0, 0, -length);
    stroke(randomStrokeCol());
    push();
    translate(0, -length);
    rotate(floor(random(20, 45)));
    if (length > 4) {
        multiplier = randomFromTwo() ? 0.8 : 0.6;
        branch(multiplier * length);
    }
    pop();
    stroke(randomStrokeCol());
    push();
    translate(0, -length);
    rotate(-1 * floor(random(20, 45)));
    if (length > 4) {
        multiplier = randomFromTwo() ? 0.8 : 0.6;
        branch(multiplier * length);
    }
    pop();

}

function randomFromTwo() {
    rando1 = (random(0, 1));
    if (rando1 <= 0.5) {
        return true;
    } else {
        return false;
    }
}

function asymmRandomFromTwo() {
    rando1 = (random(0, 1));
    if (rando1 <= 0.7) {
        return true;
    } else {
        return false;
    }
}

function randomStrokeCol() {
    if (randomFromTwo()) {
        return 'cyan';
    } else {
        return 'pink';
    }
}