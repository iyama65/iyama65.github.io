// グローバル変数
var posX = [];
var posY = [];
var speedX = [];
var speedY = [];
var diameter = []; //円の直径
var colors = []; //色
var NUM = 100; // 配列の数

// シーンの切り替え
var scene;
var angle=0;
// ボタン用の変数
var btnA;
var btnB;
var btnC;

var blocks = [];
var blockNum = 46;






function setup(){
    // size
    var canvas = createCanvas(windowWidth,windowHeight);
    // header#headerの中にcanvasを入れた
    canvas.parent('page-header');
    colorMode(RGB,256);



    // 最初のシーン
    scene = 0;

    // ボタンをクリックしたら
    btnA = select('.btnA').mousePressed(function(){
        scene = 0;
    });
    btnB = select('.btnB').mousePressed(function(){
        scene = 1;
    });
    btnC = select('.btnC').mousePressed(function(){
        scene = 2;
    });


    if(scene == 0){
        //1つ目の絵
        for (var i = 0; i < blockNum; i++) {
            blocks[i] = new Block(47.14*i,i);
        }
    } else if(scene == 1){


    } else if(scene == 2){
        //3つ目の絵
        image(img, 0, 0);


    }
}

function drawVertex(vertexNum,r,color,centerX,centerY,startAngle){
    var x;
    var y;
    fill(color);
    push();
    translate(centerX,centerY);
    rotate(radians(startAngle + (angle/vertexNum)));
    beginShape();
    for(var i = 0; i < vertexNum; i++){
        x = r * cos(radians(360/vertexNum * i ))
        y = r * sin(radians(360/vertexNum * i ))
        vertex(x,y);
    }
    endShape(CLOSE);
    pop();
    angle += 0.1;
}


function draw(){
    console.log(scene);
    background(255);
    noStroke();
    if(scene == 0){
        for (var i = 0; i < blockNum; i++) {
            blocks[i].draw();
        }
    } else if(scene == 1){
        drawVertex(8,200,'#7F2956',800,300,22);
        drawVertex(7,170,'#D36415',800,300,61);
        drawVertex(6,140,'#41437C',800,300,50);
        drawVertex(5,110,'#43903E',800,300,70);
        drawVertex(4,80,'#D3141C',800,300,90);
        drawVertex(3,55,'#E19C11',800,300,110);

    } else if(scene == 2){
        background(255);
        noStroke();

        //1つ目
        fill("#7699C9");
        rect(925.27,221.82,33,33);
        fill("#67CF3F");
        rect(957.95,221.82,33,33);
        fill("#F6BC00");
        rect(990.63,221.82,33,33);

        fill("#F2718D");
        rect(1023.32,254.47,33,33);
        fill("#7699C9");
        rect(1023.32,287.12,33,33);
        fill("#67CF3F");
        rect(1023.32,319.77,33,33);

        fill("#F6BC00");
        rect(990.63,352.42,33,33);
        fill("#F2718D");
        rect(957.95,352.42,33,33);
        fill("#7699C9");
        rect(925.27,352.42,33,33);

        fill("#67CF3F");
        rect(892.59,319.77,33,33);
        fill("#F6BC00");
        rect(892.59,287.12,33,33);
        fill("#F2718D");
        rect(892.59,254.47,33,33);

        //2つ目
        fill("#67CF3F");
        rect(761.86,355.53,33,33);
        fill("#F6BC00");
        rect(794.54,355.53,33,33);
        fill("#F2718D");
        rect(827.22,355.53,33,33);
        fill("#7699C9");
        rect(859.9,355.53,33,33);

        fill("#67CF3F");
        rect(892.59,388.18,33,33);
        fill("#F6BC00");
        rect(892.59,420.84,33,33);
        fill("#F2718D");
        rect(892.59,453.49,33,33);
        fill("#7699C9");
        rect(892.59,486.14,33,33);

        fill("#67CF3F");
        rect(859.9,520.35,33,33);
        fill("#F6BC00");
        rect(827.22,520.35,33,33);
        fill("#F2718D");
        rect(794.54,520.35,33,33);
        fill("#7699C9");
        rect(761.86,520.35,33,33);

        fill("#7699C9");
        rect(729.17,388.18,33,33);
        fill("#F2718D");
        rect(729.17,420.84,33,33);
        fill("#F6BC00");
        rect(729.17,453.49,33,33);
        fill("#67CF3F");
        rect(729.17,486.14,33,33);

        // ３つ目

    }

}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


class Block{
    constructor(posY,count){
        this.posY = posY;
        this.count = count;
        this.width;
        this.r;
        this.g;
        this.b;
        if(count % 6 == 0){
            this.width = 47.48;
            this.r = 235;
            this.g = 57;
            this.b = 151;
        } else if(count % 6 == 1){
            this.width = 138.84;
            this.r = 182;
            this.g = 61;
            this.b = 164;
        } else if(count % 6 == 2){
            this.width = 231;
            this.r = 47;
            this.g = 159;
            this.b = 223;
        } else if(count % 6 == 3){
           this.width = 231;
           this.r = 74;
           this.g = 215;
           this.b = 58;
        } else if(count % 6 == 4){
           this.width = 231;
           this.r = 246;
           this.g = 200;
           this.b = 0;
        } else if(count % 6 == 5){
           this.width = 138.84;
           this.r = 250;
           this.g = 112;
           this.b = 1;
        }
    }
    draw(){
        push();
        translate(400-this.width/2,posY);
        fill(this.r,this.g,this.b);
        rect(500,this.posY,this.width,47.14);
        pop();
        this.posY+=1;
        if(this.posY > height){
            this.posY = -20;
        }
    }
}
