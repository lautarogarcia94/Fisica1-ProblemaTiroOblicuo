/**
 * Created by LAN on 13/06/2016.
 */


function fulcro()
{
    /* Aca dibujo la parabola */
    var myCanvas = document.getElementById("lienzo");
    var context = myCanvas.getContext("2d");
    context.fillStyle="black";
    context.beginPath();

    context.moveTo(155,240);
    context.moveTo(355,210);
    context.lineTo(350,200);
    context.lineTo(150,230);

    context.closePath();

    //context.fill();
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