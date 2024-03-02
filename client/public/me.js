let tilecolors = [160,80,112,48,160,80,112,48,160,80,160,80,112,48,160,80,112,48,112,48,160,80,112,48,160,80,160,80,112,48,160,80,160,80,0,0];
let myResults = [];
let darktile = [96,48];
let lighttile = [176,96];
let direction = -1;
let numberOfTiles = 16; // Number of Tiles to come out
let balls = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let tileArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
let tilepos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let myBlankPos = 16;

let tilevalue = 15;
let tilepressed = 15;
let blankpos = 16;
let tilescorrect = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];

 

 
$(".t1").click(function(){
 //check for blank pos and move tile into it, change the array, refresh amd reset css
 tilepressed = 1;
 for (var i = 0; i < 15; i++) {
 if (tileArray[i] == 0) {blankpos = i+1;}

 }
 
 if (blankpos - tilepressed == 1) {movetileright();}

 if (blankpos - tilepressed == 4) {movetiledown();}
 if (blankpos - tilepressed == - 4) {movetileup();}
  //moves tile
   });

$(".t2").click(function(){
 //check for blank pos and move tile into it, change the array, refresh amd reset css
 tilepressed = 2;
 for (var i = 0; i < 15; i++) {
 if (tileArray[i] == 0) {blankpos = i+1;}

 }
 
 if (blankpos - tilepressed == 1) {movetileright();}
 if (blankpos - tilepressed == - 1) {movetileleft();}
 if (blankpos - tilepressed == 4) {movetiledown();}
 if (blankpos - tilepressed == - 4) {movetileup();}
  //moves tile
   });

$(".t3").click(function(){
 //check for blank pos and move tile into it, change the array, refresh amd reset css
 tilepressed = 3;
 for (var i = 0; i < 15; i++) {
 if (tileArray[i] == 0) {blankpos = i+1;}

 }
 
 if (blankpos - tilepressed == 1) {movetileright();}
 if (blankpos - tilepressed == - 1) {movetileleft();}
 if (blankpos - tilepressed == 4) {movetiledown();}
 if (blankpos - tilepressed == - 4) {movetileup();}
  //moves tile
   });



$(".t4").click(function(){
 //check for blank pos and move tile into it, change the array, refresh amd reset css
 tilepressed = 4;
 for (var i = 0; i < 15; i++) {
 if (tileArray[i] == 0) {blankpos = i+1;}

 }
 

 if (blankpos - tilepressed == - 1) {movetileleft();}
 if (blankpos - tilepressed == 4) {movetiledown();}
 if (blankpos - tilepressed == - 4) {movetileup();}
  //moves tile
   });

$(".t5").click(function(){
 //check for blank pos and move tile into it, change the array, refresh amd reset css
 tilepressed = 5;
 for (var i = 0; i < 15; i++) {
 if (tileArray[i] == 0) {blankpos = i+1;}

 }
 
 if (blankpos - tilepressed == 1) {movetileright();}

 if (blankpos - tilepressed == 4) {movetiledown();}
 if (blankpos - tilepressed == - 4) {movetileup();}
  //moves tile
   });

$(".t6").click(function(){
 //check for blank pos and move tile into it, change the array, refresh amd reset css
 tilepressed = 6;
 for (var i = 0; i < 15; i++) {
 if (tileArray[i] == 0) {blankpos = i+1;}

 }
 
 if (blankpos - tilepressed == 1) {movetileright();}
 if (blankpos - tilepressed == - 1) {movetileleft();}
 if (blankpos - tilepressed == 4) {movetiledown();}
 if (blankpos - tilepressed == - 4) {movetileup();}
  //moves tile
   });

$(".t7").click(function(){
 //check for blank pos and move tile into it, change the array, refresh amd reset css
 tilepressed = 7;
 for (var i = 0; i < 15; i++) {
 if (tileArray[i] == 0) {blankpos = i+1;}

 }
 
 if (blankpos - tilepressed == 1) {movetileright();}
 if (blankpos - tilepressed == - 1) {movetileleft();}
 if (blankpos - tilepressed == 4) {movetiledown();}
 if (blankpos - tilepressed == - 4) {movetileup();}
  //moves tile
   });




$(".t8").click(function(){
 //check for blank pos and move tile into it, change the array, refresh amd reset css
 tilepressed = 8;
 for (var i = 0; i < 15; i++) {
 if (tileArray[i] == 0) {blankpos = i+1;}

 }
 

 if (blankpos - tilepressed == - 1) {movetileleft();}
 if (blankpos - tilepressed == 4) {movetiledown();}
 if (blankpos - tilepressed == - 4) {movetileup();}
  //moves tile
   });

$(".t9").click(function(){
 //check for blank pos and move tile into it, change the array, refresh amd reset css
 tilepressed = 9;
 for (var i = 0; i < 15; i++) {
 if (tileArray[i] == 0) {blankpos = i+1;}

 }
 
 if (blankpos - tilepressed == 1) {movetileright();}

 if (blankpos - tilepressed == 4) {movetiledown();}
 if (blankpos - tilepressed == - 4) {movetileup();}
  //moves tile
   });



$(".t10").click(function(){
 //check for blank pos and move tile into it, change the array, refresh amd reset css
 tilepressed = 10;
 for (var i = 0; i < 15; i++) {
 if (tileArray[i] == 0) {blankpos = i+1;}

 }
 
 if (blankpos - tilepressed == 1) {movetileright();}
 if (blankpos - tilepressed == - 1) {movetileleft();}
 if (blankpos - tilepressed == 4) {movetiledown();}
 if (blankpos - tilepressed == - 4) {movetileup();}
  //moves tile
   });


$(".t11").click(function(){
 //check for blank pos and move tile into it, change the array, refresh amd reset css
 tilepressed = 11;
 for (var i = 0; i < 15; i++) {
 if (tileArray[i] == 0) {blankpos = i+1;}

 }
 
 if (blankpos - tilepressed == 1) {movetileright();}
 if (blankpos - tilepressed == - 1) {movetileleft();}
 if (blankpos - tilepressed == 4) {movetiledown();}
 if (blankpos - tilepressed == - 4) {movetileup();}
  //moves tile
   });




$(".moveone").click(function(){
 myBlankPos = 16;
 blankpos = 16;
 tileArray=[1,2,3,4,5,6,7,8,13,9,10,12,14,11,15,0];
 for (var i = 0; i <15; i++) {
  
 }
 
 displaytiles();
  $(".mycontainer").removeClass("winner");
});

$(".movetwo").click(function(){
  myBlankPos = 16;
 blankpos = 16;
tileArray=[1,2,6,3,5,10,4,7,13,9,8,15,14,11,12,0];
 displaytiles();
 $(".mycontainer").removeClass("winner");
});

$(".movethree").click(function(){
  myBlankPos = 16;
 blankpos = 16;
 tileArray=[2,12,4,15,10,13,7,14,5,11,3,8,6,9,1,0];
 displaytiles();
  $(".mycontainer").removeClass("winner");
});

/*function move(x) {
 var myx = x;
 console.log(myx);
  tilepressed = myx;
 for (var i = 0; i < 15; i++) {
 if (tileArray[i] == 0) {blankpos = i+1;}};
 if (blankpos - myx == + 1) {movetileright();};
 if (blankpos - myx == - 1) {movetileleft();};
 if (blankpos - myx == 4) {movetiledown();};
 if (blankpos - myx == - 4) {movetileup();};
};
*/
$(".t12").click(function(){
 //check for blank pos and move tile into it, change the array, refresh amd reset css
 tilepressed = 12;
 for (var i = 0; i < 15; i++) {
 if (tileArray[i] == 0) {blankpos = i+1;};

 };
 

 if (blankpos - tilepressed == - 1) {movetileleft();};
 if (blankpos - tilepressed == 4) {movetiledown();};
 if (blankpos - tilepressed == - 4) {movetileup();};
 
 //moves tile


   });

$(".t13").click(function(){
 //check for blank pos and move tile into it, change the array, refresh amd reset css
 tilepressed = 13;
 for (var i = 0; i < 15; i++) {
 if (tileArray[i] == 0) {blankpos = i+1;};

 };
 
 if (blankpos - tilepressed == 1) {movetileright();};

 if (blankpos - tilepressed == 4) {movetiledown();};
 if (blankpos - tilepressed == - 4) {movetileup();};
 
 //moves tile


   });

$(".t14").click(function(){
 //check for blank pos and move tile into it, change the array, refresh amd reset css
 tilepressed = 14;
 for (var i = 0; i < 15; i++) {
 if (tileArray[i] == 0) {blankpos = i+1;};

 };

 if (blankpos - tilepressed == 1) {movetileright();};
 if (blankpos - tilepressed == - 1) {movetileleft();};
 if (blankpos - tilepressed == 4) {movetiledown();};
 if (blankpos - tilepressed == - 4) {movetileup();};
 
 //moves tile


   });


$(".t15").click(function(){
 //check for blank pos and move tile into it, change the array, refresh amd reset css
 tilepressed = 15;
 for (var i = 0; i < 15; i++) {
 if (tileArray[i] == 0) {blankpos = i+1;};

 };
 
 if (blankpos - tilepressed == 1) {movetileright();};
 if (blankpos - tilepressed == - 1) {movetileleft();};
 if (blankpos - tilepressed == 4) {movetiledown();};
 if (blankpos - tilepressed == - 4) {movetileup();};
 
 //moves tile


   });

$(".t16").click(function(){
 //check for blank pos and move tile into it, change the array, refresh amd reset css
 tilepressed = 16;
 for (var i = 0; i < 15; i++) {
 if (tileArray[i] == 0) {blankpos = i+1;}

 };
 

 if (blankpos - tilepressed == - 1) {movetileleft();};

 if (blankpos - tilepressed == - 4) {movetileup();};
 
 //moves tile


   });


function movetileright() {
 var mytemp = tileArray[(tilepressed-1)];
 tileArray[tilepressed] = mytemp;

 tileArray[tilepressed-1]=0;
 tileArray[tilepressed]=mytemp;
 blankpos = blankpos - 1;
 myBlankPos = blankpos;
console.log(tileArray,blankpos);
 displaytiles();
 checkwin();
};

function movetiledown() {
 var mytemp = tileArray[tilepressed-1];
 tileArray[tilepressed+3] = mytemp;

 tileArray[tilepressed-1]=0;
 tileArray[tilepressed+3]=mytemp;
 blankpos = blankpos - 4;
 myBlankPos = blankpos;
console.log(tileArray,blankpos);
 displaytiles();
 checkwin();
};

function movetileup() {
 var mytemp = tileArray[tilepressed-1];

 tileArray[tilepressed-5] = mytemp;
 tileArray[tilepressed-1]=0;
 blankpos = blankpos + 4;
 myBlankPos = blankpos;
console.log(tileArray,blankpos);
 displaytiles();
  checkwin();
};

function movetileleft() {
 
 //do the checking of moving rows here before...
 
 var mytemp = tileArray[(tilepressed-1)];
 tileArray[tilepressed-2] = mytemp;

 tileArray[tilepressed-1]=0;
 blankpos = blankpos + 1;
 myBlankPos = blankpos;
console.log(tileArray,blankpos);
 displaytiles();
 checkwin();
};

function checkwin() {

 for (var i = 0; i < 15; i++) {
  if (tileArray[i] !== tilescorrect[i]) {
   $(".mycontainer").removeClass("winner");
   return false; };

};
 //$(".mycontainer").addClass("winner");
 console.log("completed the puzzle");
 $("#container").css("display","block").delay(3000).fadeOut(5000);
};

function reset() {
 for (var i = 0; i < 16; i++) {
  $(".t" + (i)).removeClass("moveleft").removeClass("moveright").removeClass("moveup").removeClass("movedown");
   
   
   
 };
};

// here's where it all works out what can move



function displaytiles() {
 
   for (var i=0; i<16; i++) {
    $(".t" + (i+1)).text(tileArray[i]).css("color","#fff");
    
    const mycol = tileArray[i];
    const myshade = tilecolors[(mycol * 2)]; //tilecolors[(i*2)]
   
    const myshademid = tilecolors[((mycol * 2) + 1)]; //tilecolors[(i*2)+1]

  $(".t" + (i+1)).css("background-color","rgba(" + (myshade)+","+(myshademid)+","+(myshade)+",1");


     $(".t"+(i+1)).removeClass("moveleft").removeClass("moveright").removeClass("moveup").removeClass("movedown");
 };      
 

   $(".t" + (myBlankPos)).css("background-color","transparent").css("z-index","-5"); 
    $(".t" + (myBlankPos)).text(" "); 
};
 

function myrandomize() {

  balls=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  myBlankPos = 16;

	for (j = 0; j < 15; j++) {
		let selector = (Math.floor(Math.random() * balls.length));
		myResults[j] = balls[selector];
		balls.splice(selector, 1);
}; 
  tileArray = myResults;
  tileArray[15] = 0;
  balls = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  myBlankPos = 16;
  console.log(tileArray);
 
  for (var i = 0; i < 15; i++) {
    const mycol = tileArray[i];
    const myshade = tilecolors[(mycol * 2)]; //tilecolors[(i*2)]
   
    const myshademid = tilecolors[((mycol * 2) + 1)]; //tilecolors[(i*2)+1]

  $(".t" + (i+1)).css("background-color","rgba(" + (myshade)+","+(myshademid)+","+(myshade)+",1");
};
    for (var i = 0; i < 15; i++) {
     $(".t"+(i+1)).removeClass("moveleft").removeClass("moveright").removeClass("moveup").removeClass("movedown");
    
  };
};