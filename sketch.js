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


var x = 284;
var speed = 0.5;
var speed2 = 1;
var opacity = 190;
var opacity2 = 0;
var y = 200;

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
    workWorks();
    runHBD();
    }
    noStroke();
    if(timer > 350&&clicked){
      commence = true;
    }
  //  drawCupCake();
    if(commence){
      //the letter


     
    }
   
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
