var canvas;
var context;
var bgImage;
var bgRange;
var bgReady;
var canvasReady;
var keysDown;


window.onload = function () {



    canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    canvas.width = 1234;
    canvas.height = 220;
    console.log(context);

    //document.body.appendChild(canvas);
    document.getElementById("header").appendChild(canvas);
    
    //var audioOne = new Audio("css/foxtrot_37.mp3");
    //audioOne.addEventListener('ended', function () {
    //    this.currentTime = 0;
    //    this.play();
    //}, false);
    //audioOne.play();


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


    var bgKillers = new SpaceShip(-210, -10, 0, "sprites/ryder_stylewrite_purp.png", 10);
    var bgKillersTwo = new SpaceShip(-190, 10, 0, "sprites/ryder_wild.png", 10);
    var bgKillersFour = new SpaceShip(-174, -51, 0, "sprites/ryder_white_neon.png", 10);
    var bgNebula = new SpaceShip(600, 30, 0, "sprites/cloud_gas.png", 10);
    var bgNebulaOne = new SpaceShip(1600, 42, 0, "sprites/cloud_gas.png", 10);
    var bgNebulaTwo = new SpaceShip(0, 24, 0, "sprites/cloud_gas.png", 10);
    var bgNebulaThree = new SpaceShip(-200, 34, 0, "sprites/cloud_gas.png", 10);
    var flashOne = new SpaceShip(-4, 0, 0, "sprites/flash.png", 10);
    var flashTwo = new SpaceShip(-1200, 0, 0, "sprites/cloud_gas.png", 10);
    //var horusOne = new SpaceShip(0, 0, 0, "sprites/horusGhost.png", 10);
    var cashFan = new SpaceShip(-1055, 0, 0, "sprites/cash_wreath_ghost.png", 10);
    var cashFanTwo = new SpaceShip(484, 0, 0, "sprites/cash_wreath_ghost.png", 10);
    var cashFanThree = new SpaceShip(-300, -200, 0, "sprites/cash_wreath_ghostOne.png", 10);
    var cashFanFour = new SpaceShip(1234, -200, 0, "sprites/cash_wreath_ghostOne.png", 10);
    var cashFanFive = new SpaceShip(-2600, 0, 0, "sprites/cash_wreath_ghost.png", 10);
    var cashFanSix = new SpaceShip(-1830, -200, 0, "sprites/cash_wreath_ghostOne.png", 10);
    var lightning = function () {
        if (bgKillers.x % 8) {
            bgRange = true;
        }
        if (bgKillers.x % 2) {
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
            bgNebulaOne.x -= 1;
            bgNebula.x -= 2;
            bgNebulaThree.x += 3;
            cashFan.x += 1;
            cashFanTwo.x += 1;
            cashFanThree.x += 1;
            cashFanFour.x += 1;
            cashFanFive.x += 1;
            cashFanSix.x += 1;

        }

        if (bgKillers.x <= -182) {
            bgKillers.x = -180;
        }
        if (bgNebulaOne.x <= -2400) {
            bgNebulaOne.x = 2810;
        }
        if (bgNebula.x < -2400) {
            bgNebula.x = 2810;
        }
        if (bgNebulaTwo.x <= -2400) {
            bgNebulaTwo.x = 2810;
        }
        if (bgNebulaThree.x >= 2810) {
            bgNebulaThree.x = -2400;
        }
        if (cashFan.x >= 3460) {
            cashFan.x = -1180;
        }
        if (cashFanTwo.x >= 3460) {
            cashFanTwo.x = -1180
        }
        if (cashFanThree.x >= 3460) {
            cashFanThree.x = -1180
        }
        if (cashFanFour.x >= 3460) {
            cashFanFour.x = -1180
        }
        if (cashFanFive.x >= 3460) {
            cashFanFive.x = -1180
        }
        if (cashFanSix.x >= 3460) {
            cashFanSix.x = -1180
        }
        if (cashFanSix.x % 300) {
            lightning();

        }
    }



    var drawGame = function () {

        if (bgReady) {
            context.drawImage(bgImage, -4, 0);


        }
        if (bgRange) {
            context.drawImage(bgKillers.image, bgKillers.x, bgKillers.y);
            context.drawImage(bgKillersFour.image, bgKillersFour.x + 4, bgKillersFour.y + 2);
            context.drawImage(flashOne.image, flashOne.x, flashOne.y);


        }
        if (canvasReady) {
            //context.drawImage(horusOne.image, horusOne.x, horusOne.y);
            context.drawImage(cashFan.image, cashFan.x, cashFan.y);
            context.drawImage(cashFanTwo.image, cashFanTwo.x, cashFanTwo.y);
            context.drawImage(cashFanThree.image, cashFanThree.x, cashFanThree.y);
            context.drawImage(cashFanFour.image, cashFanFour.x, cashFanFour.y);
            context.drawImage(cashFanFive.image, cashFanFive.x, cashFanFive.y);
            context.drawImage(cashFanSix.image, cashFanSix.x, cashFanSix.y);
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

        update(delta / 600);
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