function setup() {
createCanvas(windowWidth,windowHeight);
}
var clicked = false;
mousePressed = function(){
  clicked = true;
}
mouseReleased = function(){
  clicked = false;
}
var chance = 0.05;
var type = Math.round(Math.random(-0.5, 3.49));
var timer = 0;
var fireWorks = [];
var explosion = [];
var state = "firstFW";



//background(255, 255, 255);
var workWorks = function(){

  //create a firework 
  if (random() < chance) {
    fireWorks.push({
      x: random(0, windowWidth),
      y: windowHeight,
      yVel: random(1, 15),
      R: random(100, 255),
      G: random(100, 255),
      B: random(100, 255),
      RR: random(100, 255),
      GG: random(100, 255),
      BB: random(100, 255),
      explode: round(random(-0.5, 3.49)),
      p: [],
    });
  }
  for (var i = 0; i < fireWorks.length; i++) {
    noStroke();
    stroke(fireWorks[i].R, fireWorks[i].B, fireWorks[i].G);
    strokeWeight(5);
    fireWorks[i].x += random(-fireWorks[i].yVel / 2, fireWorks[i].yVel / 2);
    point(fireWorks[i].x, fireWorks[i].y);
    fireWorks[i].y -= fireWorks[i].yVel;
    fireWorks[i].yVel *= 0.98;
    //explosion of the firework
    if (fireWorks[i].explode === 3 && fireWorks[i].yVel < 0.1) {
      for (var j = 0; j < 100; j++) {
        var angle = random(0, 360);
        var velocity = random(1.5, 4);
        explosion.push({
          x: fireWorks[i].x,
          y: fireWorks[i].y,
          xVel: cos(angle) * velocity,
          yVel: sin(angle) * velocity,
          r: fireWorks[i].R,
          g: fireWorks[i].G,
          b: fireWorks[i].B,
          time: frameCount,
          dx: random(-2, 2),
          dy: random(-3, 1),
          p: [],
        });
      }
      fireWorks.splice(i, 1);
    } else if (fireWorks[i].yVel < 0.1) {
      for (var j = 0; j < 60; j++) {
        var angle = random(0, 360);
        var velocity = random(1, 5);
        explosion.push({
          x: fireWorks[i].x,
          y: fireWorks[i].y,
          xVel: cos(angle) * velocity,
          yVel: sin(angle) * velocity,
          r: fireWorks[i].R,
          g: fireWorks[i].G,
          b: fireWorks[i].B,
          time: frameCount,
          dx: random(-2, 2),
          dy: random(-3, 1),
          p: [],
        });
      }
      fireWorks.splice(i, 1);
    }
  }

  
  for (var i = 0; i < explosion.length; i++) {
    stroke(explosion[i].r, explosion[i].g, explosion[i].b); //color of the explosion
    point(explosion[i].x, explosion[i].y); //explosion
    explosion[i].x += explosion[i].xVel;
    explosion[i].y += explosion[i].yVel;
    explosion[i].xVel *= 0.98; //makes the dots slower
    explosion[i].yVel *= 0.98;
    explosion[i].yVel += 0.01; //"gravity"
    //cleanup
    if (explosion[i].time + 200 + random(-80, 130) < frameCount) {
      explosion.splice(i, 1);
    }
  }

  if (timer + 5 < frameCount) {
    if (mouseIsPressed && timer + 5 < frameCount) {
      timer = frameCount;
      fireWorks.push({
        x: mouseX,
        y: windowHeight,
        yVel: abs(mouseY - windowHeight) / 50,
        R: random(100, 255),
        G: random(100, 255),
        B: random(100, 255),
        RR: random(100, 255),
        GG: random(100, 255),
        BB: random(100, 255),
        explode: type,
      });
    }
  }
};
var contain = 1;
var time = 0;
var opa = 0;

var flyInRight = -50
var rotRight = 0

var flyInLeft = 1500;
var rotLeft = 0;

var first = function(){
  if(frameCount%contain==0){
    //5 base ones
    {
  fireWorks.push({
    x: windowWidth-50,
    y: windowHeight,
    yVel: 10,
    R: random(100, 255),
    G: random(100, 255),
    B: random(100, 255),
    RR: random(100, 255),
    GG: random(100, 255),
    BB: random(100, 255),
    explode: round(random(-0.5, 3.49)),
    p: [],
  });


  fireWorks.push({
    x: windowWidth/2+windowWidth/4,
    y: windowHeight,
    yVel: 10,
    R: random(100, 255),
    G: random(100, 255),
    B: random(100, 255),
    RR: random(100, 255),
    GG: random(100, 255),
    BB: random(100, 255),
    explode: round(random(-0.5, 3.49)),
    p: [],
  });


  fireWorks.push({
    x: windowWidth/4,
    y: windowHeight,
    yVel: 10,
    R: random(100, 255),
    G: random(100, 255),
    B: random(100, 255),
    RR: random(100, 255),
    GG: random(100, 255),
    BB: random(100, 255),
    explode: round(random(-0.5, 3.49)),
    p: [],
  });


  fireWorks.push({
    x: 50,
    y: windowHeight,
    yVel: 10,
    R: random(100, 255),
    G: random(100, 255),
    B: random(100, 255),
    RR: random(100, 255),
    GG: random(100, 255),
    BB: random(100, 255),
    explode: round(random(-0.5, 3.49)),
    p: [],
  });

  fireWorks.push({
    x: windowWidth/2,
    y: windowHeight,
    yVel: 10,
    R: random(100, 255),
    G: random(100, 255),
    B: random(100, 255),
    RR: random(100, 255),
    GG: random(100, 255),
    BB: random(100, 255),
    explode: round(random(-0.5, 3.49)),
    p: [],
  });
    }
    {
      fireWorks.push({
        x: windowWidth-50,
        y: windowHeight,
        yVel: 10,
        R: random(100, 255),
        G: random(100, 255),
        B: random(100, 255),
        RR: random(100, 255),
        GG: random(100, 255),
        BB: random(100, 255),
        explode: round(random(-0.5, 3.49)),
        p: [],
      });
    
    
      fireWorks.push({
        x: windowWidth/2+windowWidth/4,
        y: windowHeight,
        yVel: 10,
        R: random(100, 255),
        G: random(100, 255),
        B: random(100, 255),
        RR: random(100, 255),
        GG: random(100, 255),
        BB: random(100, 255),
        explode: round(random(-0.5, 3.49)),
        p: [],
      });
    
    
      fireWorks.push({
        x: windowWidth/4,
        y: windowHeight,
        yVel: 10,
        R: random(100, 255),
        G: random(100, 255),
        B: random(100, 255),
        RR: random(100, 255),
        GG: random(100, 255),
        BB: random(100, 255),
        explode: round(random(-0.5, 3.49)),
        p: [],
      });
    
    
      fireWorks.push({
        x: 50,
        y: windowHeight,
        yVel: 10,
        R: random(100, 255),
        G: random(100, 255),
        B: random(100, 255),
        RR: random(100, 255),
        GG: random(100, 255),
        BB: random(100, 255),
        explode: round(random(-0.5, 3.49)),
        p: [],
      });
    
      fireWorks.push({
        x: windowWidth/2,
        y: windowHeight,
        yVel: 10,
        R: random(100, 255),
        G: random(100, 255),
        B: random(100, 255),
        RR: random(100, 255),
        GG: random(100, 255),
        BB: random(100, 255),
        explode: round(random(-0.5, 3.49)),
        p: [],
      });
        }
    //the in between ones
    {
    fireWorks.push({
      x: windowWidth-200,
      y: windowHeight,
      yVel: 10,
      R: random(100, 255),
      G: random(100, 255),
      B: random(100, 255),
      RR: random(100, 255),
      GG: random(100, 255),
      BB: random(100, 255),
      explode: round(random(-0.5, 3.49)),
      p: [],
    });
  
  
    fireWorks.push({
      x: windowWidth/2+windowWidth/4-200,
      y: windowHeight,
      yVel: 10,
      R: random(100, 255),
      G: random(100, 255),
      B: random(100, 255),
      RR: random(100, 255),
      GG: random(100, 255),
      BB: random(100, 255),
      explode: round(random(-0.5, 3.49)),
      p: [],
    });
  
  
    fireWorks.push({
      x: windowWidth/4+170,
      y: windowHeight,
      yVel: 10,
      R: random(100, 255),
      G: random(100, 255),
      B: random(100, 255),
      RR: random(100, 255),
      GG: random(100, 255),
      BB: random(100, 255),
      explode: round(random(-0.5, 3.49)),
      p: [],
    });
  
  
    fireWorks.push({
      x: 220,
      y: windowHeight,
      yVel: 10,
      R: random(100, 255),
      G: random(100, 255),
      B: random(100, 255),
      RR: random(100, 255),
      GG: random(100, 255),
      BB: random(100, 255),
      explode: round(random(-0.5, 3.49)),
      p: [],
    });
  
    fireWorks.push({
      x: windowWidth/2,
      y: windowHeight,
      yVel: 10,
      R: random(100, 255),
      G: random(100, 255),
      B: random(100, 255),
      RR: random(100, 255),
      GG: random(100, 255),
      BB: random(100, 255),
      explode: round(random(-0.5, 3.49)),
      p: [],
    });
    }
}
  for (var i = 0; i < fireWorks.length; i++) {
    noStroke();
    stroke(fireWorks[i].R, fireWorks[i].B, fireWorks[i].G);
    strokeWeight(20);
    fireWorks[i].x += random(-fireWorks[i].yVel / 2, fireWorks[i].yVel / 2);
    point(fireWorks[i].x, fireWorks[i].y);
    fireWorks[i].y -= fireWorks[i].yVel;
    fireWorks[i].yVel *= 0.98;
    //explosion of the firework
    if (fireWorks[i].explode === 3 && fireWorks[i].yVel < 0.1) {
      for (var j = 0; j < 100; j++) {
        var angle = random(0, 360);
        var velocity = random(1.5,4);
        explosion.push({
          x: fireWorks[i].x,
          y: fireWorks[i].y,
          xVel: cos(angle) * velocity,
          yVel: sin(angle) * velocity,
          r: fireWorks[i].R,
          g: fireWorks[i].G,
          b: fireWorks[i].B,
          time: frameCount,
          dx: random(-2, 2),
          dy: random(-3, 1),
          p: [],
        });
      }
      fireWorks.splice(i, 1);
     
    } else if (fireWorks[i].yVel < 0.1) {
      for (var j = 0; j < 60; j++) {
        var angle = random(0, 360);
        var velocity = random(1, 5);
        explosion.push({
          x: fireWorks[i].x,
          y: fireWorks[i].y,
          xVel: cos(angle) * velocity,
          yVel: sin(angle) * velocity,
          r: fireWorks[i].R,
          g: fireWorks[i].G,
          b: fireWorks[i].B,
          time: frameCount,
          dx: random(-2, 2),
          dy: random(-3, 1),
          p: [],
        });
      }
      fireWorks.splice(i, 1);
    
    }
  }

  
  for (var i = 0; i < explosion.length; i++) {
    strokeWeight(20);
    stroke(explosion[i].r, explosion[i].g, explosion[i].b); //color of the explosion
    point(explosion[i].x, explosion[i].y); //explosion
    explosion[i].x += explosion[i].xVel;
    explosion[i].y += explosion[i].yVel;
    explosion[i].xVel *= 0.98; //makes the dots slower
    explosion[i].yVel *= 0.98;
    explosion[i].yVel += 0.01; //"gravity"
    //cleanup
    if (explosion[i].time + 200 + random(-80, 130) < frameCount) {
      explosion.splice(i, 1);
     
    }
    if(explosion.length === 0){
    state = "hbd";
    }
  }

};
var runHBD = function(){
  time++
  if(time>50){
    opa+=0.5;
    fill(255,255,255,opa)
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(70)
  
    if(opa>255){opa=255;}
    push();
      fill(255, 255, 255,opa);
      textSize(70);
      textAlign(CENTER);
      noStroke();
      
      translate(windowWidth/2,160);
      rotate(Math.sin(frameCount/35)/8);
      text("Happy \n\n",0,0);
      text("\n\nBirthday Lei!!",0,0);
    pop();

    //add 16 - spinning "1" from the left, spinning "6th" from the right
    //then make it like the rest of the text
    push();
    if(time>100){
      flyInRight+=5;
      rotRight+=2;
    }
    if(flyInRight >windowWidth/2-30){
      flyInRight = windowWidth/2-30;
      rotRight=0;
    }
      translate(flyInRight,170);
      
      rotate(rotRight);
      fill(255, 0, 200);
      text("1",0,0);

    pop();
    push();
    if(time>100){
      flyInLeft-=5;
      rotLeft+=2;
    }
    if(flyInLeft <windowWidth/2+30){
      flyInLeft = windowWidth/2+30;
      rotLeft=0;
    }
      translate(flyInLeft,170);
      
      rotate(rotLeft);
      fill(255, 0, 200)
      text("6th",0,0);

    pop();

  }
  /*

*/
}
var commence = false;
var opac = 0;

var x = 284;
var speed = 0.5;
var speed2 = 1;
var opacity = 190;
var opacity2 = 0;
var y = 200;

draw = function () {
  fill(0,0,0,7);//makes the background translucent
  noStroke();
  rect(0,0,windowWidth,windowHeight);//background
  if(state === "firstFW"){
    first();
    contain = null;
    //workWorks();
  }
  if(state === "hbd"){  
    if(!commence){ 
      push();
    workWorks();
    runHBD();

    pop();
    }
    noStroke();
    /*
    if(timer > 400){
        commence = true;
    
      
    }
  //  drawCupCake();
    if(commence){
     // background(166, 63, 166);


      fill(166,63,166);
      rect(0,0,2000,2000);
      //the letter
      fill(255,255,255);
      textSize(30);
      text("Leilanie,",0,50)
      text("It’s crazy thinking about how we met only 2 months ago. It feels like I’ve known you all my childhood.\n I can’t imagine a better friend. You are truly amazing. I came to HYSA scared about making friends,\n but you made that go away, because you were actually normal and easy to talk to, easy to be with.\n You are always there, always there to talk to and just to be around when someone is feeling down.\n Today is YOUR day. You deserve to be at your happiest and to never stop smiling and laughing.\n I hope today is the best day you could ever imagine.",70,90)


          
    //candle shadow
    push();
    scale(0.7)
    translate(200,400)
   {
    noStroke();
    fill(212, 159, 212, opacity);
    ellipse(x - 3, 551, 299, 84);
    
    
    //icing shadow
    noStroke();
    fill(168, 88, 168, 150);
    ellipse(288, 308, 235, 81);
    
    
    //cupcake shadow
    ellipse(287, 338, 235, 60);
    
    
    //cupcake
    fill(230, 178, 154);
    arc(242, 346, 313, 100, -54, 345);
    
    
    push();
    translate(0,7)
    //shadow
    rotate(5);
    fill(224, 163, 137);
  //  arc(278, 310, 297, 87, -54, 345);
    
    rotate(-5);
    fill(230, 178, 154);
    arc(292, 344, 214, 73, 149, 512);
    
    rotate(2);
    fill(224, 150, 119, 150);
    arc(321, 331, 175, 73, 149, 512);
    
    fill(219, 147, 129);
    arc(346, 337, 131, 83, 238, 526);
    
    fill(207, 139, 122, 200);
    arc(368, 333, 87, 58, -84, 312);
    
    noFill();
    strokeWeight(5);
    stroke(181, 120, 106, 200);
    arc(360, 329, 100, 53, 202, 394);
    
    //highlight
    rotate(14);
    stroke(240, 197, 178, 210);
    strokeWeight(10);
  //  arc(234, 300, 106, 24, 73, 168);
    
    strokeWeight(7);
    stroke(235, 220, 214, 200);
  //  arc(234, 300, 106, 24, 116, 159);
    
    pop();
    
    noStroke();
    fill(230, 167, 143, 200);
    triangle(392, 362, 397, 341, 366, 365);
    triangle(366, 354, 340, 392, 323, 370);
    triangle(261, 372, 312, 360, 323, 370);
    
    fill(245, 181, 159, 150);
    triangle(385, 362, 397, 345, 373, 368);
    triangle(362, 357, 312, 392, 335, 370);
    triangle(261, 372, 311, 370, 309, 365);
    
    
    //icing shadow
    fill(166, 93, 166, 150);
    ellipse(269, 260, 227, 79);
    
    
    //first tier of icing
    fill(237, 230, 237);
    ellipse(242, 308, 293, 95 );
    
    //highlight
    noStroke();
    fill(250, 250, 250, 150);
    arc(182, 301, 171, 54, 19, 240);
    
    fill(255, 255, 255, 150);
    arc(171, 300, 142, 38, -91, 283);
    
    //shadow
    push();
    rotate(3);
    fill(222, 222, 222, 150);
    ellipse(270, 270, 216, 52);
    pop();
    
    noFill();
    stroke(181, 174, 181);
    strokeWeight(1.2);
    arc(245, 308, 290, 96, -27, 136);
    
    
    //second tier of icing
    noStroke();
    fill(237, 230, 237);
    ellipse(242, 260, 253, 79);
    
    //highlight
    fill(250, 255, 250, 150);
   arc(209, 257, 184, 61, 13, 240);
    
    fill(255, 255, 255, 150);
    arc(170, 258, 107, 40, -108, 250);
    
    //shadow
    push();
    rotate(3);
    fill(214, 211, 214, 150);
    ellipse(280, 225, 154, 38);
    pop();
    
    noFill();
    stroke(204, 202, 204);
    strokeWeight(1);
    arc(253, 260, 233, 75, -84, 122);
    
    
    //cupcake shadow
    noStroke();
    fill(184, 120, 184);
    ellipse(296, 216, 125, 40);
    
    
    //third tier of icing
    fill(237, 230, 237);
    ellipse(242, 220, 203, 62);
    
    //highlight
    fill(247, 247, 247, 150);
    arc(223, 217, 158, 52, -88, 277);
    
    fill(255, 255, 255, 170);
    arc(193, 216, 99, 39, -4, 355);
    
    //shadow
    noFill();
    stroke(181, 174, 181);
    strokeWeight(0.5);
    arc(261, 220, 166, 56, -76, 82);
    
    noStroke();
    fill(222, 222, 222, opacity);
    arc(x, 198, 59, 17, -218, 147);
    
    
    //cupcake liner shadow
    fill(171, 101, 171, 150);
    quad(405, 351, 426, 329, 382, 535, 381, 529);
    
    //liner highlights
    fill(35, 189, 209);
    quad(81, 346, 114, 373, 147, 562, 130, 547);
    
    quad(120, 355, 144, 373, 181, 563, 162, 555);
    
    quad(169, 360, 202, 373, 221, 565, 200, 553);
    
    quad(242, 361, 284, 371, 282, 564, 249, 554);
    
    quad(314, 360, 344, 374, 331, 562, 298, 552);
    
    quad(366, 355, 386, 362, 368, 548, 347, 547);
    
    //shadows
    fill(0, 178, 194);
    quad(107, 366, 120, 355, 164, 555, 147, 561);
    
    quad(144, 372, 170, 360, 201, 552, 180, 564);
    
    quad(203, 372, 243, 361, 250, 553, 220, 564);
    
    quad(284, 371, 314, 360, 307, 554, 281, 563);
    
    quad(343, 372, 366, 356, 349, 546, 330, 562);
    
    quad(385, 364, 405, 331, 380, 526, 368, 547);
    
    //highlight lines
    stroke(86, 193, 199);
    strokeWeight(2);
    line(108, 373, 141, 542);
    line(385, 366, 368, 534);
    
    strokeWeight(3);
    line(144, 374, 174, 534);
    line(339, 396, 331, 537);
    
    strokeWeight(3.7);
    line(202, 374, 216, 550);
    line(282, 385, 281, 537);
    
    //shadow lines
    stroke(4, 170, 189);
    strokeWeight(2);
    line(123, 373, 159, 542);
    
    strokeWeight(3);
    line(171, 364, 197, 549);
    line(365, 368, 350, 544);
    
    strokeWeight(3.7);
    line(242, 365, 250, 550);
    line(313, 373, 306, 552);
    
    
    //smoke
    
    
    //candle shadow
    stroke(168, 116, 168);
    strokeWeight(13);
    line(269, 184, 268, 97);
    
    
    //wick
    stroke(54, 48, 48);
    strokeWeight(3);
    line(249, 100, 249, 80);
    
    
    //wick shadow
    stroke(168, 116, 168);
    line(268, 90, 268, 85);
    
    
    //candle
    noStroke();
    fill(56, 204, 224);
    rect(238, 89, 22, 116, 10);
    
    //shadows
    fill(55, 194, 204);
    rect(252, 92, 8, 111, 10);
    
    stroke(0, 183, 196);
    line(258, 98, 258, 199);
    
    stroke(0, 183, 196);
    arc(235, 90, 69, 7, 48, 57);
    
    //highlights
    stroke(100, 221, 227);
    line(241, 96, 241, 199);
    
    strokeWeight(1);
    stroke(122, 236, 240);
    line(241, 121, 241, 177);
    
    noFill();
    stroke(100, 221, 227);
    arc(222, 91, 69, 5, 45, 58);
    
    stroke(122, 236, 240);
    arc(222, 91, 69, 6, 45, 52);
   
    
    //candle flame shadow
    noStroke();
    fill(207, 157, 207, opacity);
    bezier(x + 18, 36, 193, 61, x + 31, 121, x + 4, 52);
    
    
    //candle flame
    fill(245, 153, 35, opacity);
    bezier(x + 3, 36, 166, 61, x + 13, 121, x + -10, 49);
    
    fill(255, 186, 10, opacity);
    bezier(x - 6, 40,  199, 75, x + -2, 108, x + -17, 55);
    
    fill(255, 216, 59, opacity);
    bezier(x - 22, 59, 262, 105, x + -58, 63,  x + -10, 46);
    
    fill(255, 113, 56, opacity);
    bezier(x + -18, 76, 222, 81, x + -12, 51, x + -20, 54);
    
    fill(250, 75, 75, opacity);
    bezier(x - 26, 67, 235, 75, x + -13, 82, x - 21, 59);
   }
   pop();
 
    if(x > 284){
        speed = -0.2;
        
    }
    
    if(x < 268){
        speed = 0.2;
       
    }
    
    
    x = x + speed;
    y = y + speed2;


     
    }
*/
   
  }

  {
  push();
  fill(0, 145, 255);
  textSize(30);
  textAlign(CENTER);
  noStroke();
  
  translate(windowWidth/2,70);
  rotate(Math.sin(frameCount/35)/4);

  //text("Happy Father's day!!",0,0);
  pop();
  }

  clicked = false;
};
