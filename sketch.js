//未来のファッションショー


let x = 120;
  let y = 190;
  let x1 = 380;
  let y1 = 190;
  let x2 = 250;
  let y2 = 0;
  let scene = 0;
  let stop = 0;
　
  

function preload() {
  //haikei
  haikei = loadImage("haikei.png");
  haikei1 = loadImage("haikei1.png");
  haikei2 = loadImage("haikei2.png");
  haikei3 = loadImage("haikei3.png");
  haikei4 = loadImage("haikei4.png");
  haikei5 = loadImage("haikei5.png");
  //neko
  neko = loadImage("neko.png");
  //ningen
  ningen = loadImage("ningen.png");
  ningen1 = loadImage("ningen1.png");
  //kami
  kami = loadImage("kami.png");
  kami1 = loadImage("kami1.png");
  //huku
  huku = loadImage("huku.png");
  huku1 = loadImage("huku1.png");
  //hime
  hime = loadImage("hime.png");
  hime1 = loadImage("hime1.png");
  //daia
  daia = loadImage("daia.png");
  daia1 = loadImage("daia1.png");
  daia2 = loadImage("daia2.png");
  //kuro
  kuro = loadImage("kuro.png");
  kuro1 = loadImage("kuro1.png");
  kuro2 = loadImage("kuro2.png");
  //siro
  siro = loadImage("siro.png");
  siro1 = loadImage("siro1.png");
  siro2 = loadImage("siro2.png");
  
  //bgm
  kira = loadSound("kira.mp3");
  kira1 = loadSound("kira1.mp3");
  bgm = loadSound("bgm.mp3");
  bgm1 = loadSound("bgm1.mp3");
}


function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  imageMode(CENTER);
  noStroke();
  textAlign(CENTER);
  textFont("Mochiy Pop One");
  outputVolume(0.2)
    bgm.loop();
}

function draw() {

  if(scene == 0) {
    scene0();
  }else if (scene == 1) {
    scene1();
  }else if (scene == 2) {
    scene2();
  }else if (scene == 3) {
    scene3();
  }else if (scene == 4) {
    scene4();
  }else if (scene == 5) {
    scene5();
  }else if (scene == 6 ) {
    scene6();
  }else if (scene == 7) {
    scene7();
  }else if (scene == 8) {
    scene8();
  }else if (scene == 9) {
    scene9();
  }else if (scene == 10) {
    scene10();
  }else if (scene == 11) {
    scene11();
  }else if (scene == 12) {
    scene12();
  }else if (scene == 13) {
    scene13();
  }else if (scene == 14) {
    scene14();
  }else if (scene == 15) {
    scene15();
  }else if (scene == 16) {
    scene16();
  }else if (scene == 17) {
    scene17();
  }else if (scene == 18) {
    scene18();
  }else if (scene == 19) {
    scene19();
  }else if (scene == 20) {
    scene20();
  }else if (scene == 21) {
    scene21();
  }else if (scene == 22) {
    scene22(); 
    image(kuro,250,250,150,250);
    
      y2 = y2 + 3;
    
    if(y2 > 500) {
      y2 = 0;
    }
    image(siro,x2,y2,150,250);
  } else if (scene == 23) {
      scene23();
  }else if (scene == 24) {
    scene24();
    image(kuro1,250,250,150,250);
    
      y2 = y2 + 7;
    
    if(y2 > 500) {
      y2 = 0;
    }
    image(siro1,x2,y2,150,250);
  }else if (scene == 25) {
    scene25();
  }else if (scene == 26) {
    scene26();
    image(kuro2,250,250,150,250);
    
      y2 = y2 + 14;
    
    if(y2 > 500) {
      y2 = 0;
    }
    image(siro2,x2,y2,150,250);
  }else if (scene == 27) {
    scene27();
  } else if (scene == 28) {
    scene28();
  }else if (scene == 29) {
    scene29();
  }else if (scene == 30) {
    scene30();
  }
  
  fill(255,191,193);
  strokeWeight(4);
  stroke(114,69,78);
  textSize(16);
  circle(mouseX,mouseY,20);
}

function scene0 () {
  image(haikei,250,250,500,500);  
}

function scene1 () {
  image(haikei1,250,250,500,505);
  text("????",100,345);
  text("ようこそ、バーチャルファッションショーへ。",width/2,height/1.2);
}

function scene2 () {
  image(haikei1,250,250,500,500);
  image(neko,250,200,200,200);
  text("私の名前は、ねこロボット　\nバーチャルファッションショーの運営をしているわ。",width/2,height/1.2);
　textSize(12);
  text("ねこロボット",100,345);
  
}

function scene3 () {　
  image(haikei1,250,250,500,500);
  image(neko,250,200,200,200);
  text("今日はあなたに\nバーチャルファッションショーのモデルをお願いしたいの。",width/2,height/1.2);
  textSize(12);
  text("ねこロボット",100,345);
}

function scene4 () {
  image(haikei1,250,250,500,500);
  image(neko,250,200,200,200);
  text("早速着替えに行きましょう。\n今日のファッションショーのテーマは  プリンセス  よ。\nテーマにあったアイテムを選ぶようにね。",width/2,height/1.2);
  textSize(12);
  text("ねこロボット",100,345);
}

function scene5 () {
  image(haikei1,250,250,500,500);
  image(neko,60,430,90,90);
  image(ningen1,x,y,200,250);
  image(ningen,x1,y1,200,250);
  text("まずはアバターからよ。\n選びたいアイテムにカーソルを近づけて\nクリックしてね。",width/1.7,height/1.2); 
  textSize(12);
  text("ねこロボット",100,345);
}

function scene6 () {
  image(haikei1,250,250,500,500);
  image(neko,60,430,90,90); 
  image(kami,x,y,200,250);
  image(kami1,x1,y1,200,250);
  text("次は髪形よ。\n選びたいアイテムにカーソルを近づけて\nクリックしてね。",width/1.7,height/1.2); 
  textSize(12);
  text("ねこロボット",100,345);
}

function scene7 () {
  image(haikei1,250,250,500,500);
  image(neko,60,430,90,90); 
  image(kami,x,y,200,250);
  image(kami1,x1,y1,200,250);
  text("次は髪形よ。\n選びたいアイテムにカーソルを近づけて\nクリックしてね。",width/1.7,height/1.2); 
  textSize(12);
  text("ねこロボット",100,345);
}

function scene8 () {
  image(haikei1,250,250,500,500);
  image(neko,60,430,90,90); 
  image(huku,x,y,200,250);
  image(huku1,x1,y1,200,250);
  text("最後は洋服よ。\n選びたいアイテムにカーソルを近づけて\nクリックしてね。",width/1.7,height/1.2); 
  textSize(12);
  text("ねこロボット",100,345);
}

function scene9 () {
  image(haikei1,250,250,500,500);
  image(neko,60,430,90,90); 
  image(huku,x,y,200,250);
  image(huku1,x1,y1,200,250);
  text("最後は洋服よ。\n選びたいアイテムにカーソルを近づけて\nクリックしてね。",width/1.7,height/1.2); 
  textSize(12);
  text("ねこロボット",100,345);
}

function scene10 () {
  image(haikei1,250,250,500,500);
  image(neko,60,430,90,90); 
  image(huku,x,y,200,250);
  image(huku1,x1,y1,200,250);
  text("最後は洋服よ。\n選びたいアイテムにカーソルを近づけて\nクリックしてね。",width/1.7,height/1.2); 
  textSize(12);
  text("ねこロボット",100,345);
}

function scene11 () {
  image(haikei1,250,250,500,500);
  image(neko,60,430,90,90); 
  image(huku,x,y,200,250);
  image(huku1,x1,y1,200,250);
  text("最後は洋服よ。\n選びたいアイテムにカーソルを近づけて\nクリックしてね。",width/1.7,height/1.2); 
  textSize(12);
  text("ねこロボット",100,345);
}

function scene12 () {
  image(haikei1,250,250,500,500);
  image(neko,60,430,90,90); 
  text("この衣装だと\nテーマの’プリンセス’に添えてないわ。。。",width/1.7,height/1.2); 
  textSize(12);
  text("ねこロボット",100,345);
}

//akuma
function scene13 () {
  image(haikei1,250,250,500,500);
  image(neko,60,430,90,90); 
  image(hime1,250,175,200,280);
  text("この衣装もとてもかわいいけれど,\nテーマの’プリンセス’に添えてないわ。。。",width/1.7,height/1.2); 
  textSize(12);
  text("ねこロボット",100,345);
}

//seikai
function scene14 () {
  image(haikei1,250,250,500,500);
  image(neko,60,430,90,90); 
  image(hime,250,175,150,270);
  text("さすが！テーマにぴったりの衣装ね。",width/1.7,height/1.2); 
  textSize(12);
  text("ねこロボット",100,345);
}

//seikai2
function scene15 () {
  image(haikei1,250,250,500,500);
  image(neko,60,430,90,90); 
  image(hime,250,175,150,270);
  text("それじゃあさっそく\nファッションショーに行きましょう。",width/1.7,height/1.2); 
  textSize(12);
  text("ねこロボット",100,345);
}

//yarinaosi
function scene16 () {
  image(haikei1,250,250,500,500);
  image(neko,60,430,90,90); 
  image(haikei2,x,y,200,250);
  image(haikei2,x1,y1,200,250);
  text("もう一度初めから選びなおす？",width/1.7,height/1.2); 
  textSize(12);
  text("ねこロボット",100,345);
  textSize(20);
  text("選びなおす",x,y+15);
  text("あきらめる",x1,y1+15);
}

function scene17 () {
  image(haikei1,250,250,500,500);
  image(neko,60,430,90,90);
  image(ningen1,x,y,200,250);
  image(ningen,x1,y1,200,250);
  text("もう一度アバターからよ。\n選びたいアイテムにカーソルを近づけて\nクリックしてね。",width/1.7,height/1.2); 
  textSize(12);
  text("ねこロボット",100,345);
}

function scene18 () {
  image(haikei1,250,250,500,500);
  image(neko,60,430,90,90); 
  text("それは残念だわ。\nまたいつでもバーチャルファッションショーに\n参加しに来てね。",width/1.7,height/1.2); 
  textSize(12);
  text("ねこロボット",100,345);
}

function scene19 () {   
  if(bgm.isLooping()) {
    outputVolume(0.2)
    bgm.pause();
  }
  image(haikei3,250,250,500,500);
}


//fashon show
function scene20 () {
  image(haikei4,250,250,500,500);
  image(neko,60,430,90,90); 
  text("ファッションショーの部屋に到着よ。\n本番がはじまったらキャラクターが\n上から下に流れてくるから",width/1.7,height/1.2); 
  textSize(12);
  text("ねこロボット",100,352);
}

function scene21 () {
  image(haikei4,250,250,500,500);
  image(neko,60,430,90,90); 
  text("白と黒のキャラクターが\n重なるタイミングでマウスをクリックして\nポーズをキメてねっ。",width/1.7,height/1.2); 
  textSize(12);
  text("ねこロボット",100,352);
}

function scene22 () {
    if(bgm1.isLooping() == false) {
    outputVolume(0.2)
    bgm1.loop();
  }
  image(haikei5,250,250,500,500);  
}

function scene23 () {
  image(haikei5,250,250,500,500);
  image(daia,250,250,500,500);
  textSize(30);
  text("1/3回 CLEAR!",width/2,300);
　textSize(10);
  text("CLICK",width/2,325);
}

function scene24 () {
  image(haikei5,250,250,500,500); 
      if(kira1.isPlaying()) {
      kira1.pause();
    }
}

function scene25 () {
  image(haikei5,250,250,500,500);
  image(daia1,250,250,500,500);
  textSize(30);
  text("2/3回 CLEAR!",width/2,300);
  textSize(10);
  text("CLICK",width/2,325);
}

function scene26 () {
  image(haikei5,250,250,500,500); 
      if(kira1.isPlaying()) {
      kira1.pause();
    }
}

function scene27 () {
  image(haikei5,250,250,500,500);
  image(daia2,250,250,500,500);
  textSize(30);
  text("3/3回 CLEAR!",width/2,300);
  textSize(10);
  text("CLICK",width/2,325);
}

function scene28 () {
    if(bgm1.isLooping()) {
    outputVolume(0.2)
    bgm1.pause();
  }
   if(kira1.isPlaying()) {
   kira1.pause();
  }
    image(haikei5,250,250,500,500);
}

function scene29 () {
    if(bgm.isLooping() == false) {
    outputVolume(0.2)
    bgm.loop();
  }
  image(haikei4,250,250,500,500);
  image(neko,60,430,90,90); 
  text("お疲れ様。とっても素敵だったわ。\n今日はバーチャルファッションショーに\n参加してくれてありがとう。",width/1.7,height/1.2); 
  textSize(12);
  text("ねこロボット",100,352);  
}

function scene30 () {
  image(haikei4,250,250,500,500);
  image(neko,60,430,90,90); 
  text("また参加したくなったら\nいつでも待ってるからね。\nまた会いましょう。",width/1.7,height/1.2); 
  textSize(12);
  text("ねこロボット",100,352);  
}




function mousePressed () {
   
  
  if(scene != 22 || scene != 24 || scene != 26 ) {
    outputVolume(0.1)
    kira.play();
  }
  

  

    if(scene < 5)  { 
  scene = scene + 1; }
  
  //ningen
  if(scene == 5) {
    if(mouseX > x - 80 && mouseX < x + 120) {
      if(mouseY > y - 115 && mouseY < y + 125) {
        scene = 6;
        return  false;
      }
    }
  }
  
   if(scene == 5) {
    if(mouseX > x1 - 100 && mouseX < x1 + 100) {
      if(mouseY > y1 - 115 && mouseY < y1 + 125) {
        scene = 7;
        return  false;
      }
    }
  }
  
  
  //kami
  if(scene == 6) {
    if(mouseX > x - 80 && mouseX < x + 120) {
      if(mouseY > y - 115 && mouseY < y + 125) {
        scene = 8;
         return  false;
      }
    }
  }
  
   if(scene == 6) {
    if(mouseX > x1 - 100 && mouseX < x1 + 100) {
      if(mouseY > y1 - 115 && mouseY < y1 + 125) {
        scene = 9;
        return  false;
      }
    }
  }
  
   if(scene == 7) {
    if(mouseX > x - 80 && mouseX < x + 120) {
      if(mouseY > y - 115 && mouseY < y + 125) {
        scene = 10;
         return  false;
      }
    }
  }
  
   if(scene == 7) {
    if(mouseX > x1 - 100 && mouseX < x1 + 100) {
      if(mouseY > y1 - 115 && mouseY < y1 + 125) {
        scene = 11;
        return  false;
      }
    }
  }
  
  
  //result
     if(scene == 8 || scene == 11) {
    if(mouseX > x - 80 && mouseX < x + 120) {
      if(mouseY > y - 115 && mouseY < y + 125) {
        scene = 12;
         return  false;
      }
    }
  }
  
   if(scene == 8 || scene == 11) {
    if(mouseX > x1 - 100 && mouseX < x1 + 100) {
      if(mouseY > y1 - 115 && mouseY < y1 + 125) {
        scene = 12;
        return  false;
      }
    }
  }
  
       if(scene == 9) {
    if(mouseX > x - 80 && mouseX < x + 120) {
      if(mouseY > y - 115 && mouseY < y + 125) {
        scene = 12;
         return  false;
      }
    }
  }
  
   if(scene == 9) {
    if(mouseX > x1 - 100 && mouseX < x1 + 100) {
      if(mouseY > y1 - 115 && mouseY < y1 + 125) {
        scene = 13;
        return  false;
      }
    }
  }
     
         if(scene == 10) {
    if(mouseX > x - 80 && mouseX < x + 120) {
      if(mouseY > y - 115 && mouseY < y + 125) {
        scene = 14;
         return  false;
      }
    }
  }
  
   if(scene == 10) {
    if(mouseX > x1 - 100 && mouseX < x1 + 100) {
      if(mouseY > y1 - 115 && mouseY < y1 + 125) {
        scene = 12;
        return  false;
      }
    }
  }
  
  if(scene == 12 || scene == 13) {
    scene = 16;
    return false;
  }
  
  
  //seikai
  if(scene == 14) {
    scene = 15;
    return false;
  }
  
  
  if(scene == 16) {
    if(mouseX > x - 80 && mouseX < x + 120) {
      if(mouseY > y - 115 && mouseY < y + 125) {
        scene = 17;
         return  false;
      }
    }
  }
  
   if(scene == 16) {
    if(mouseX > x1 - 100 && mouseX < x1 + 100) {
      if(mouseY > y1 - 115 && mouseY < y1 + 125) {
        scene = 18;
        return  false;
      }
    }
  }
  
  
    //mouitidoerabu
    if(scene == 17) {
    if(mouseX > x - 80 && mouseX < x + 120) {
      if(mouseY > y - 115 && mouseY < y + 125) {
        scene = 6;
        return  false;
      }
    }
  }
  
   if(scene == 17) {
    if(mouseX > x1 - 100 && mouseX < x1 + 100) {
      if(mouseY > y1 - 115 && mouseY < y1 + 125) {
        scene = 7;
        return  false;
      }
    }
  }
  
  
  //akirameru
  if(scene == 18) {
    scene = 0;
    return false;
  }
  
  if(scene == 15) {
    scene = 19;
    return false;
  }
  
  if(scene == 19　|| scene == 20 || scene == 21 || scene == 23 || scene == 25) {
    scene++;
    return false;
  }
 

  if(scene == 22 && y2 > 235 && y2 < 265) {
    outputVolume(0.2)
　　kira1.play();
    kira1.jump(1);
    scene = 23;
    return false;
  }
    
   
   if(scene == 24 && y2 > 235 && y2 < 265) {
    outputVolume(0.2)
　　kira1.play();
    kira1.jump(1);
    scene = 25;
     return false;
  }
  
   if(scene == 26 && y2 > 235 && y2 < 265) {
  　outputVolume(0.2)
　　kira1.play();
    kira1.jump(1);
    scene = 27;
     return false;
  }

  
 if(scene > 26 && scene < 30) {
   scene++;
   return false;
 }

if(scene == 30) {
  scene = 0;
  return false;
}
  

}