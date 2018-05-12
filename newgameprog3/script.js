function genMatrix(w, h) {
    var matrix = [];
    for(var y = 0; y < h; y++) {
        matrix[y] = [];
        for(var x = 0; x < w; x++) {
            var r = random(100);
            if     (r < 20) r = 0;
            else if(r < 65) r = 1;
            else if(r < 90) r = 2;
            else if(r < 100)r = 3;
            matrix[y][x] = r;
        }
    }
    return matrix;
}
var imgold;
var matrix;
var w = 32;
var h = 32;
var side = 32;

function preload() {
    img = loadImage("gold.png");
}

function setup() {
    matrix = genMatrix(w,h);
    createCanvas(side * w, side * h);
     console.log(matrix);
    background("green");
    frameRate(5);
}
function draw() {
    for(var y in matrix) {
        for(var x in matrix[y]) {
            if(matrix[y][x] == 0) {
                 image(img, x * side, y * side)
            }
        }
    }
}
/*
function draw() {
    for(var y in matrix) {
        for(var x in matrix[y]) {
            if(matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if(matrix[y][x] == 1) {
                fill("green");
            }
            else if(matrix[y][x] == 2) {
                fill("yellow");
            }
            else if(matrix[y][x] == 3) {
                fill("red");
            }
            rect(x * side, y * side, side, side);
        }
    }

    for(var i in grassArr) {
        grassArr[i].mul();
    }

    for(var i in xotakerArr) {
        xotakerArr[i].bazmanal();
        xotakerArr[i].utel();
        xotakerArr[i].mahanal();
    }

    for(var i in gishatichArr) {
        gishatichArr[i].bazmanal();
        gishatichArr[i].utel();
        gishatichArr[i].mahanal();
    }

}
*/