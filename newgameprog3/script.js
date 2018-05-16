function genMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = random(100);
            if (r < 2) r = 0;
            else if (r < 4) r = 1;
            else if (r < 90) r = 2;
            else if (r < 100) r = 3;
            matrix[y][x] = r;
        }
    }
    return matrix;
}
class player {
    constructor(x, y, nkar) {
        this.x = x;
        this.y = y;
        this.nkar = nkar;
    }
}
var matrix;
var w = 32;
var h = 32;
var side = 32;


function preload() {
    img = loadImage("gold.png");
    img1 = loadImage("obstacle_1.png");
    blue = new player(2, 990, loadImage("player_blue_2.png"));
}

function setup() {
    matrix = genMatrix(w, h);
    createCanvas(side * w, side * h);
    console.log(matrix);
    frameRate(60);
}
function draw() {
    background("green");
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 0) {
                image(img, x * side, y * side);
            }
        }
    }
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 1) {
                image(img1, x * side, y * side);
            }
        }
    }
    image(blue.nkar, blue.x, blue.y);
        if (keyIsDown(UP_ARROW)) {
        blue.y = blue.y - side / 8;
    } else if (keyIsDown(DOWN_ARROW)) {
        blue.y = blue.y + side / 8;
    }
    if (keyIsDown(LEFT_ARROW)) {
        blue.x = blue.x - side / 8;
    } else if (keyIsDown(RIGHT_ARROW)) {
        blue.x = blue.x + side / 8;
    }
}


var playerX, playerY => fixvac
for(var i in obstacles) {
    var objectX = obstacles[i].x;

    if(collision) return;
}

for(var i in gold) {
    var objectX = obstacles[i].x;

    if(collision) nkary hanel u vercnel voski;
}

for(var i in energy) {

}