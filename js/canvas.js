/**
 * Created by LAN on 13/06/2016.
 */
var myCanvas = document.getElementById("lienzo");
var context = myCanvas.getContext("2d");


function fulcro()
{
    /* Aca dibujo la parabola */
    context.beginPath();

    context.moveTo(255,250);
    context.lineTo(285,250);
    context.lineTo(270,220);
    context.lineTo(255,250);
    context.closePath();

    context.lineWidth=2;
    context.fillStyle="black";
    context.fill();
    context.strokeStyle="black";
    context.stroke();


}

/*
 haria algo asi para dibujarlo


 context.beginPath();
 var paso;
 var x;
 var y;
 x= 250;
 y = 250;
 context.moveTo(x,y);
 for (paso = 0; paso < 5; paso++) { //con otro paso
    x = x+ 1;
    y = x*x;
    context.lineTo(x, y);
 }
 context.closePath();
 // me faltaria hacer visible la linea
 */