
    var posX = [];
    var posY = [];
    var speedX = [];
    var speedY = [];
    var diameter = []; //円の直径
    var colors = []; //色
    var NUM = 100; //配列の数
    var img; //画像を保存する変数
    var defaultImgW = 1284; //元画像の幅、高さ
    var defaultImgH = 600;
    var defaultRatio = defaultImgW / defaultImgH; //元画像の比率

    //拡大縮小あとの幅と高さ
    //初期値として最初の値を入れる
    var scaleImgW = defaultImgW;
    var scaleImgH = defaultImgH;

    function preload(){
        img = loadImage("img/main.jpg");
    }

    function setup(){
        // size
        var canvas = createCanvas(windowWidth,600);
        // header#headerの中にcanvasを入れた
        canvas.parent('header');

        colorMode(HSB,360,100,100,100);

        for(var i = 0; i < NUM; i++){
            diameter[i] = random(15,60);
            colors[i] = color(random(360),100,100,30);
            posX[i] = random(width);
            speedX[i] = random(-4,4);
            posY[i] = random(height);
            speedY[i] = random(-4,4);
        }

    }

    function draw(){
        background(0);
        image(img,0,0,scaleImgW,scaleImgH);
        noStroke();

        for(var i=0; i <NUM; i++){
            fill(colors[i]);
            ellipse(posX[i],posY[i],diameter[i],diameter[i]);
            posX[i] += speedX[i];

            if (posX[i] > width || posX[i] < 0){
                speedX[i] = -1 * speedX[i];
            }

            posY[i] += speedY[i];
            if (posY[i] > height || posY[i] < 0){
                speedY[i] = -1 * speedY[i];
            }
        }

    }

    function windowResized(){
        console.log('拡大縮小')
        resizeCanvas(windowWidth,600);
        scaleImgW = windowWidth; //画像の幅をウィンドウ幅と同じにする



    }
