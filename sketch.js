var peso=[40,50.55,70];

var soma, media;

function calculo(){
  soma=peso[0]+peso[1]+peso[2]+peso[3];
  media=soma/peso.length;
  console.log(media);
}

function setup() 
{
  createCanvas(400,400);
  calculo();
}

function draw() 
{
background(51);

}

