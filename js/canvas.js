var hmax;
var dx;
var ho;
var hf;
var cuenta;
var position = 0.0;
var startPt = {x: 120, y: 10};
var controlPt = {x: 410, y: 250};
var endPt = {x: 10, y: 450};

function dibujar(hmax1, dx1, ho1, hf1, cuenta1)
{
    var myCanvas = document.getElementById("lienzo");
    var context = myCanvas.getContext("2d");
    hmax = hmax1;
    dx = dx1;
    ho= ho1;
    hf = hf1;
    cuenta = cuenta1;
    startPt = {x: 20, y: (280 - ho*2)};
    controlPt = {x: ((dx / 2)+20), y: ((dx / 2)+20)};
    endPt = {x: (dx +20), y: (280 - hf*2)};
    piso();
    cielo();
    escribirEje();
}


setInterval(function() {
    var myCanvas = document.getElementById("lienzo");
    var context = myCanvas.getContext("2d");
    var pt = getQuadraticCurvePoint(startPt.x, startPt.y, controlPt.x, controlPt.y, endPt.x, endPt.y, position);
    position = (position + 0.006) % 1.0;
    context.clearRect(0,0,500,280);
    cielo();
    if(ho!=0)
        dibujarHo(ho);
    if(hf!=0)
        dibujarHf(hf, dx);

    context.fillStyle = "black";
    context.fillRect(pt.x - 1, pt.y - 1, 3, 3);

},1000/48);

function _getQBezierValue(t, p1, p2, p3) {
    var iT = 1 - t;
    return iT * iT * p1 + 2 * iT * t * p2 + t * t * p3;
}

function getQuadraticCurvePoint(startX, startY, cpX, cpY, endX, endY, position) {
    return {
        x:    _getQBezierValue(position, startX, cpX, endX),
        y:    _getQBezierValue(position, startY, cpY, endY)
    };
}

function escribirEje(){
    var myCanvas = document.getElementById("lienzo");
    var context = myCanvas.getContext("2d");
    var x1=dx;
    for(var n=0; n<cuenta; n++){
        x1 = x1*2;
    }
    var x2= x1;
    x1  = x1/2;
    x1 = x1.toFixed(3);
    x2 = x2.toFixed(3);
    context.font = "bold 12px sans-serif";
    context.fillStyle = "black";
    context.fillText("0",1,290);
    context.fillText(x1.toString(),dx/2,295);
    context.fillText(x2.toString(),dx,295);
    context.fillText("metros",460,295);
}


function dibujarHf() {
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

function dibujarHo(){
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
    context.fillStyle = "rgba(53, 207, 194, 0.5)";
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(0,280);
    context.lineTo(500,280);
    context.lineTo(500,0);
    context.closePath();
    context.fill();
}
