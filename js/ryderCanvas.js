var canvas;
var myAudio
var context;
var bgImage;
var bgRange;
var bgReady;
var bgCloud;
var canvasReady;
var keysDown;


window.onload = function () {


    canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = 200;
    console.log(context);

    //document.body.appendChild(canvas);
    document.getElementById("header").appendChild(canvas);

    bgImage = new Image();
    bgImage.onload = function () {
        bgReady = true;

    };
    bgImage.src = "sprites/canvas_4.png";


    var SpaceShip = function (x, y, speed, src, gameMove) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.src = src;
        //this.src = valueAtIndexOf(i)
        this.gameMove = gameMove;
        this.image = new Image();
        this.image.src = src;
        this.image.onload = function () {
            canvasReady = true;
            console.log("red ready");
        };

    };



    //use speed * modifier


    var bgKillers = new SpaceShip(0, -20, 0, "sprites/ryder_stylewrite_purp.png", 10);
    var bgKillersTwo = new SpaceShip(-160, 10, 0, "sprites/ryder_wild.png", 10);
    var bgKillersThree = new SpaceShip(-184,3, 0, "sprites/ryder_stylewrite_purp.png", 10);
    var bgKillersFour = new SpaceShip(-144, -51, 0, "sprites/ryder_white_neon.png", 10);
    var bgNebula = new SpaceShip(600, 30, 0, "sprites/cloud_gas.png", 10);
    var bgNebulaOne = new SpaceShip(1600, 42, 0, "sprites/cloud_gas.png", 10);
    var bgNebulaTwo = new SpaceShip(0, 24, 0, "sprites/cloud_gas.png", 10);
     var bgNebulaThree = new SpaceShip(-200, 34, 0, "sprites/cloud_gas.png", 10);
    var flashOne = new SpaceShip(0, 0, 0, "sprites/flash.png", 10);
    var flashTwo = new SpaceShip(-1200, 0, 0, "sprites/nebulous_gas.png", 10);
    var cashFan = new SpaceShip(-1055, 0, 0, "sprites/cash_wreath_ghost.png", 10);
    var cashFanTwo = new SpaceShip(510, 0, 0, "sprites/cash_wreath_ghost.png", 10);
    var cashFanThree = new SpaceShip(-300, -200, 0, "sprites/cash_wreath_ghostOne.png", 10);
    var cashFanFour = new SpaceShip(1300, -200, 0, "sprites/cash_wreath_ghostOne.png", 10);
    var lightning = function () {
        if (cashFan.x % 6) {
            bgRange = true;
        }
        if (cashFan.x % 1) {
            bgRange = false;
        }
    }


    keysDown = {}

    document.addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true

    }, false);

    document.addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];

    }, false);


    var update = function (modifier) {

        if (bgKillers.gameMove === 10) {

            bgKillers.x -= 1;
            bgNebulaTwo.x -= 3;
            bgNebulaOne.x -= 2;
            bgNebula.x -= 2;
            bgNebulaThree.x += 2.4;
            cashFan.x += .5;
            cashFanTwo.x += .5;
            cashFanThree.x += .5;
            cashFanFour.x += .5;
            canvas.width = window.innerWidth;
        }

        if (bgKillers.x < -3485) {
            bgKillers.x = 3450;
        }
        if (bgKillersTwo.x < -3485) {
            bgKillersTwo.x = 3450;
        }
        if (bgNebulaOne.x < -2002) {
            bgNebulaOne.x = 2000;
        }
        if (bgNebula.x < -2002) {
            bgNebula.x = 2000;
        }
        if (bgNebulaTwo.x < -2002) {
            bgNebulaTwo.x = 2000;
        }
        if (bgNebulaThree.x > 2002) {
            bgNebulaThree.x = -2000;
        }
        if (cashFan.x > 2020) {
            cashFan.x = -1060;
        }
        if (cashFanTwo.x > 2020) {
            cashFanTwo.x = -1060
        }
        if (cashFanThree.x > 2020) {
            cashFanThree.x = -1060
        }
        if (cashFanFour.x > 2020) {
            cashFanFour.x = -1060
        }
        if (bgKillers.x % 300) {
            lightning();
        }
    };


    var drawGame = function () {

        if (bgReady) {
            context.drawImage(bgImage, 0, 0);


        }
        if (bgRange) {

            context.drawImage(bgKillersThree.image, bgKillersThree.x+6, bgKillersThree.y - 8);
            context.drawImage(bgKillersThree.image, bgKillersThree.x-6, bgKillersThree.y - 8);
            context.drawImage(bgKillersThree.image, bgKillersThree.x, bgKillersThree.y - 10);
            context.drawImage(bgKillersFour.image, bgKillersFour.x, bgKillersFour.y+10);
            context.drawImage(bgKillersFour.image, bgKillersFour.x+3, bgKillersFour.y-3);
            context.drawImage(bgKillersFour.image, bgKillersFour.x-3, bgKillersFour.y-3);
            context.drawImage(bgKillersFour.image, bgKillersFour.x, bgKillersFour.y+10);
            context.drawImage(flashOne.image, flashOne.x, flashOne.y);


        }
        if (canvasReady) {
            //context.drawImage(bgKillers.image, bgKillers.x, bgKillers.y);
            context.drawImage(cashFan.image, cashFan.x, cashFan.y);
            context.drawImage(cashFanTwo.image, cashFanTwo.x, cashFanTwo.y);
            context.drawImage(cashFanThree.image, cashFanThree.x, cashFanThree.y);
            context.drawImage(cashFanFour.image, cashFanFour.x, cashFanFour.y);
            context.drawImage(bgNebula.image, bgNebula.x, bgNebula.y);
            context.drawImage(bgNebulaOne.image, bgNebulaOne.x, bgNebulaOne.y);
            context.drawImage(bgNebulaTwo.image, bgNebulaTwo.x, bgNebulaTwo.y);
            context.drawImage(bgNebulaThree.image, bgNebulaThree.x, bgNebulaThree.y);
            context.drawImage(bgKillersFour.image, bgKillersFour.x, bgKillersFour.y);
            context.drawImage(bgKillersTwo.image, bgKillersTwo.x, bgKillersTwo.y);

        }



    }
    var tickTock = function () {
        var now = Date.now();
        var delta = now - then;

        update(delta / 1600);
        drawGame();
        then = now;
        requestAnimationFrame(tickTock);
    };

    var w = window;
    requestAnimationFrame =
        w.requestAnimationFrame ||
        w.webkitRequestAnimationFrame ||
        w.msRequestAnimationFrame ||
        w.mozRequestAnimationFrame;

    var then = Date.now();
    update();
    tickTock();


};