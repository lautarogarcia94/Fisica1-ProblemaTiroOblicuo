function dibujar(hmax, dx, ho, hf)
{
    var myCanvas = document.getElementById("lienzo");
    var context = myCanvas.getContext("2d");
    piso();
    cielo();
    if(ho!=0)
        dibujarHo(ho);
    if(hf!=0)
        dibujarHf(hf, dx);
    context.fillStyle = "black";
    context.beginPath();
    context.moveTo(20, 280 - ho*2);
    context.quadraticCurveTo((dx / 2)+20, 280 - hmax*2, dx +20, 280 - hf*2);
    context.lineWidth = 3;
    context.stroke();
    
}

function dibujarHf(hf, dx) {
    var myCanvas = document.getElementById("lienzo");
    var context = myCanvas.getContext("2d");
    context.fillStyle = "black";
    context.beginPath();
    context.moveTo(dx +20,280 - hf*2);
    context.lineTo(dx+20,280);
    context.lineTo(dx+40,280);
    context.lineTo(dx+40,280 - hf*2);
    context.closePath();
    context.fill();
}

function dibujarHo(ho){
    var myCanvas = document.getElementById("lienzo");
    var context = myCanvas.getContext("2d");
    context.fillStyle = "black";
    context.beginPath();
    context.moveTo(20, 280 - ho*2);
    context.lineTo(20,280);
    context.lineTo(0,280);
    context.lineTo(0,280 - ho*2);
    context.closePath();
    context.fill();
}

function piso(){
    var myCanvas = document.getElementById("lienzo");
    var context = myCanvas.getContext("2d");
    context.fillStyle = "rgba(122, 124, 60, 0.75)"
    context.beginPath();
    context.moveTo(0,280);
    context.lineTo(0,300);
    context.lineTo(500,300);
    context.lineTo(500,280);
    context.closePath();
    context.fill();
}

function cielo(){
    var myCanvas = document.getElementById("lienzo");
    var context = myCanvas.getContext("2d");
    context.fillStyle = "rgba(53, 207, 194, 0.5)"
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(0,280);
    context.lineTo(500,280);
    context.lineTo(500,0);
    context.closePath();
    context.fill();
}
