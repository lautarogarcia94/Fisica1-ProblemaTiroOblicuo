function dibujar(hmax, dx)
{
    piso();
    cielo();
    
    var myCanvas = document.getElementById("lienzo");
    var context = myCanvas.getContext("2d");
    context.fillStyle="black";
    context.beginPath();
    context.moveTo(0,280);
    context.quadraticCurveTo(dx/2,280- hmax,dx,280);
    context.lineWidth = 3;
    context.stroke();


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
