/**
 * Created by LAN on 13/06/2016.
 */
$(document).on("ready",function(){

    fulcro();
    $("#Vo").keyup(function()
    {
        var vo=document.getElementById("Vo").value;
        if(isNaN(vo)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#Vo").addClass("red"); //borde rojo si pone letra
        }
        else
        {
            //document.getElementById("range-potencia-uno").value= document.getElementById("input-potencia-uno").value;
            $("#Vo").removeClass("red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

    $("#Titao").keyup(function()
    {
        var titao=document.getElementById("Titao").value;
        if(isNaN(titao)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#Titao").addClass("red"); //borde rojo si pone letra
        }
        else
        {
            //document.getElementById("range-potencia-uno").value= document.getElementById("input-potencia-uno").value;
            $("#Titao").removeClass("red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

    $("#Ho").keyup(function()
    {
        var ho=document.getElementById("Ho").value;
        if(isNaN(ho)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#Ho").addClass("red"); //borde rojo si pone letra
        }
        else
        {
            //document.getElementById("range-potencia-uno").value= document.getElementById("input-potencia-uno").value;
            $("#Ho").removeClass("red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

    $("#Hf").keyup(function()
    {
        var hf=document.getElementById("Hf").value;
        if(isNaN(hf)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#Hf").addClass("red"); //borde rojo si pone letra
        }
        else
        {
            //document.getElementById("range-potencia-uno").value= document.getElementById("input-potencia-uno").value;
            $("#Hf").removeClass("red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

    $("#Tiempo").keyup(function()
    {
        var tiempo=document.getElementById("Tiempo").value;
        if(isNaN(tiempo)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#Tiempo").addClass("red"); //borde rojo si pone letra
        }
        else
        {
            //document.getElementById("range-potencia-uno").value= document.getElementById("input-potencia-uno").value;
            $("#Tiempo").removeClass("red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

    $("#Dist").keyup(function()
    {
        var dist=document.getElementById("Dist").value;
        if(isNaN(dist)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#Dist").addClass("red"); //borde rojo si pone letra
        }
        else
        {
            //document.getElementById("range-potencia-uno").value= document.getElementById("input-potencia-uno").value;
            $("#Dist").removeClass("red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

    $("#Gravedad").keyup(function()
    {
        var gravedad=document.getElementById("Gravedad").value;
        if(isNaN(gravedad)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#Gravedad").addClass("red"); //borde rojo si pone letra
        }
        else
        {
            //document.getElementById("range-potencia-uno").value= document.getElementById("input-potencia-uno").value;
            $("#Gravedad").removeClass("red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

    $('#Calculo-Mas-Datos').on("click", function(){
        alert("Esta parte de la pagina se deja planteada pero no se realizara el calculo ya que es demasiado complejo.");
    });

    
});

function cargarResultado(){
    var g= 9.8;
    var myArr = window.location.hash.split('#');
    var vo=(myArr[2]); //masa
    var uvo=(myArr[3]); //unidadesMasa
    var titao=(myArr[4]); //altura
    var utitao= (myArr[5]); // unidadesAltura
    var ho = (myArr[6]); //Distancia
    var uho = (myArr[7]); // Unidades distancia
    var hf = (myArr[8]); // Coeficiente de rozamiento
    var uhf = (myArr[9]); // Coeficiente de elasticidad

    if(ho==""){
        ho = 0;
    }
    if(hf==""){
        hf = 0;
    }
    if(uvo=="km/h") {
        vo = vo/3.6;
    }
    if(uho=="km"){
        ho = ho*1000;
    }
    if(uhf=="km"){
        hf = hf*1000;
    }
    if(utitao=="grados") {
        titao = (titao * Math.PI) / 180;
    }
    
}

function calculo(){
    var vo = document.getElementById("Vo").value;
    var titao = document.getElementById("Titao").value;
    var ho = document.getElementById("Ho").value;
    var hf = document.getElementById("Hf").value;
    var uvo = document.getElementById("Uvo").value;
    var utitao = document.getElementById("Utitao").value;
    var uho = document.getElementById("Uho").value;
    var uhf = document.getElementById("Uhf").value;
    var url = 'Resultado.html#'+1+"#"+vo+"#"+uvo+"#"+titao+"#"+utitao+"#"+ho+"#"+uho+"#"+hf+"#"+uhf;
    window.location.replace(url);
    /* if(ho==""){
     ho = 0;
     }
     if(hf==""){
     hf = 0;
     }
     if(uvo=="km/h") {
     vo = vo/3.6;
     }
     if(uho=="km"){
     ho = ho*1000;
     }
     if(uhf=="km"){
     hf = hf*1000;
     }
     if(utitao=="grados"){
     titao = (titao*Math.PI)/180;
     }
     /*Falta despejar T en Y  y luego despejar distancia  en X*/
    /* var voy = vo * Math.sin(titao);
     var vox = vo * Math.cos(titao);
     alert(hf);
     var url = 'Resultado.html#'+1+"#"+vo+"#"+uvo+"#"+titao+"#"+utitao+"#"+ho+"#"+uho+"#"+hf+"#"+uhf;
     window.location.replace(url);*/
}

function draw() {
    var canvas = document.getElementById('lienzo');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillRect(25,25,100,100);
        ctx.clearRect(45,45,60,60);
        ctx.strokeRect(50,50,50,50);
    }
}