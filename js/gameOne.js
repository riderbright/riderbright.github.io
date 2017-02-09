var canvas,
    myAudio,
    context,
    bgImage,
    bgImageBlue,
    bgReady,
    bgRange,
    bgCloud,
    bgWaterBling,
    drawCannonHit,
    redShipReady,
    redShipReg,
    drawRed,
    drawPurp,
    drawRedCheck,
    drawPurpCheck,
    goldStep,
    shotMove,
    drawSmash,
    drawSmashOne,
    drawSmashRock,
    drawSmashStone,
    smashBox,
    stoneHit,
    rockHit,
    goldSmash,
    getGold,
    boxReady,
    gameOverRed,
    redVictory,
    levelOne,
    levelTwo,
    levelThree,
    redVictoryOne,
    redVictoryTwo,
    redVictoryThree,
    gameOver,
    afterBurn,
    keysDown,
    bizCanX,
    bizCanY,
    bizTwoX,
    bixTwoY,
    bizHit,
    bizHitTwo,
    bizCanHit,
    bizarroDeath,
    bizarroDeathTwo,
    rockTap,
    goldAnimate,
    bizHitCallBack,
    bizHitCallBackTwo,
    bizCanDeath,
    drawBlast,
    goldPlus,
    bizGenPlus,
    bizCanPlus,
    goldPlus,
    stonePlus,
    brickPlus,
    levTwo,
    levTwoX,
    boxPlus;


window.onload = function () {
    console.log("WELCOME TO SPACEY");
    canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    canvas.width = 1200;
    canvas.height = 600;
    console.log(context);
    document.gameView.appendChild(canvas);
   

   


    var omega = document.getElementById('omega');
    var mc = new Hammer(omega);


   



    mc.get('pan').set({
        direction: Hammer.DIRECTION_ALL
    })
    mc.on("panleft", function (e) {
        redShip.x += openScreen.gameMove;
    });
    mc.on("panright", function (e) {
        redShip.x -= openScreen.gameMove;
    });
    mc.on("panup", function (e) {
        redShip.y += openScreen.speed;
    });
    mc.on("pandown", function (e) {
        redShip.y -= openScreen.speed;
    });

    keysDown = {}

    document.addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true

    }, false);

    document.addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];

    }, false);

    var update = function (modifier) {


        mc.on("tap press", function (e) {
            if (redShip.x > redShot.x) {
                drawRedCheck = true;
                redShip.y = redShip.y;
                redShot.y = redShip.y + 3;
                redShot.x = redShip.x - 22;
                redShot.y = redShot.y;
                drawRed = true;
            }
        });


        
        //key listeners
        if (37 in keysDown) {
       
        }
        if (39 in keysDown) {
          
        }
        if (38 in keysDown) {
            

        }
        if (40 in keysDown) {
      
        }

       
        if (32 in keysDown) {
            
        }

       


    };




    setInterval(function () {
      
    }, 2100);



    var drawGame = function () {

        if (bgReady) {
            context.drawImage(bgImage, 0, 0);
            context.drawImage(bgWater, 0, 418);
           }
    };
    var tickTock = function () {
        var now = Date.now();
        var delta = now - then;

        update(delta / 1000);
        drawGame();
        then = now;

        ++tick;
        requestAnimationFrame(tickTock);
    };

    var w = window;
    requestAnimationFrame =
        w.requestAnimationFrame ||
        w.webkitRequestAnimationFrame ||
        w.msRequestAnimationFrame ||
        w.mozRequestAnimationFrame;

    var then = Date.now();

    tickTock();
};