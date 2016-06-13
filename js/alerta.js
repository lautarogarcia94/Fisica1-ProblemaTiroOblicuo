/**
 * Created by LAN on 13/06/2016.
 */
$(document).on("ready",function(){
    fulcro();

    $("#Vo").keyup(function()
    {
        vo=document.getElementById("Vo").value;
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
        titao=document.getElementById("Titao").value;
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
        ho=document.getElementById("Ho").value;
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
        hf=document.getElementById("Hf").value;
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
        tiempo=document.getElementById("Tiempo").value;
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
        dist=document.getElementById("Dist").value;
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
        gravedad=document.getElementById("Gravedad").value;
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