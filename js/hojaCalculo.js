function pruebaVo() {
    var vo = document.getElementById("Vo").value;
    if(isNaN(vo)) //controlo que este metiendo un numero y no otra cosa
    {
        $("#Vo").addClass("red");//pongo fondo rojo si escribe letra
    }
    else
    {
        $("#Vo").removeClass("red"); //saco fondo rojo si es que lo tenia sino no hace nada
    }
}

function pruebaTitao(){
    var titao = document.getElementById("Titao").value;
    if(isNaN(titao)) //controlo que este metiendo un numero y no otra cosa
    {
        $("#Titao").addClass("red"); //pongo fondo rojo si escribe letra
    }
    else
    {
        $("#Titao").removeClass("red"); //saco fondo rojo si es que lo tenia sino no hace nada
    }
}

function pruebaHo() {
    var ho = document.getElementById("Ho").value;
    if(isNaN(ho)) //controlo que este metiendo un numero y no otra cosa
    {
        $("#Ho").addClass("red"); //pongo fondo rojo si escribe letra
    }
    else
    {
        $("#Ho").removeClass("red"); //saco fondo rojo si es que lo tenia sino no hace nada
    }
}

function pruebaHf() {
    var hf = document.getElementById("Hf").value;
    if(isNaN(hf)) //controlo que este metiendo un numero y no otra cosa
    {
        $("#Hf").addClass("red"); //pongo fondo rojo si escribe letra
    }
    else
    {
        $("#Hf").removeClass("red"); //saco fondo rojo si es que lo tenia sino no hace nada
    }
}

function pruebaTiempo() {
    var tiempo = document.getElementById("Tiempo").value;
    if(isNaN(tiempo)) //controlo que este metiendo un numero y no otra cosa
    {
        $("#Tiempo").addClass("red"); //pongo fondo rojo si escribe letra
    }
    else
    {
        $("#Tiempo").removeClass("red"); //saco fondo rojo si es que lo tenia sino no hace nada
    }
}

function pruebaDistancia(){
    var dist = document.getElementById("Dist").value;
    if(isNaN(dist)) //controlo que este metiendo un numero y no otra cosa
    {
        $("#Dist").addClass("red"); //pongo fondo rojo si escribe letra
    }
    else
    {
        $("#Dist").removeClass("red"); //saco fondo rojo si es que lo tenia sino no hace nada
    }
}

function pruebaGravedad(){
    var gravedad = document.getElementById("Gravedad").value;
    if(isNaN(gravedad)) //controlo que este metiendo un numero y no otra cosa
    {
        $("#Gravedad").addClass("red"); //pongo fondo rojo si escribe letra
    }
    else
    {
        $("#Gravedad").removeClass("red"); //saco fondo rojo si es que lo tenia sino no hace nada
    }
}

function calculoOtroDatos(){
    var vo = document.getElementById("Vo").value;
    var titao = document.getElementById("Titao").value;
    var ho = document.getElementById("Ho").value;
    var hf = document.getElementById("Hf").value;
    var tiempo = document.getElementById("Tiempo").value;
    var dist = document.getElementById("Dist").value;
    var gravedad = document.getElementById("Gravedad").value;

    //Prueba de datos ingresados,
    if(isNaN(vo) && vo!=""){
        alertaCaracterInvalido("velocidad incial");
        return;
    }
    if(isNaN(titao) && titao!=""){
        alertaCaracterInvalido("angulo inicial");
        return;
    }
    if(isNaN(ho) && ho!=""){
        alertaCaracterInvalido("altura inicial");
        return;
    }
    if(isNaN(hf) && hf!=""){
        alertaCaracterInvalido("altura final");
        return;
    }
    if(isNaN(tiempo) && tiempo!=""){
        alertaCaracterInvalido("tiempo");
        return;
    }
    if(isNaN(dist) && dist!=""){
        alertaCaracterInvalido("distancia");
        return;
    }
    if(isNaN(gravedad) && gravedad!=""){
        alertaCaracterInvalido("gravedad");
        return;
    }

    alertaOtroDatos();
    var url = 'Resultado.html';
    window.location.replace(url)
}

function cargarResultado(){
    var g= 9.8;
    var myArr = window.location.hash.split('#');
    var t=(myArr[1]); //tiempo total del movimiento
    var ut=(myArr[2]); //unidad del tiempo
    var dx=(myArr[3]); // distancia en x del proyectil
    var udx= (myArr[4]); // unidad de la distancia
    var ho = (myArr[5]); // altura inicial
    var uho = (myArr[6]); // unidad altura
    var hf = (myArr[7]); // altura final
    var uhf = (myArr[8]); // unidad altura
    var hmax = (myArr[9]); // altura maxima
    var uhmax = (myArr[10]); // unidad altura

    //Escribo los resultados en los "input dissabled"
    document.getElementById("Tiempo").value = t;
    document.getElementById("Distancia").value = dx;

    //Ajusto los valores de la distancia en X y la altura para poder dibujarlo
    ajusteGrafico(hmax, dx,0,ho,hf);
}

/* Esta funcion se llama a si misma hasta que dx "entre" en el canvas, se realiza de esta forma para estar seguros
** que siempre lograremos graficar la trayectoria del proyectil
*/
function ajusteGrafico(hmax, dx, cuenta, ho, hf){
    if(dx<480 && dx>200){
        dibujar(hmax, dx, ho, hf, cuenta);
        alertaCanvas(cuenta);
    }
    else
    {
       if(dx<200) {
           dibujar(hmax, dx, ho, hf, cuenta);
           alertaCanvas(cuenta);
       }
        else{
           dx = dx/2;
           hmax = hmax/2;
           ho = ho/2;
           hf = hf/2;
           cuenta++;
           ajusteGrafico(hmax,dx,cuenta, ho, hf);
       }
    }
}

function calculo(){
    var g=9.8;
    //Lectura de valores de las variables
    var vo = document.getElementById("Vo").value;
    var titao = document.getElementById("Titao").value;
    var ho = document.getElementById("Ho").value;
    var hf = document.getElementById("Hf").value;

    //Prueba de datos ingresados,
    if(isNaN(vo) && vo!=""){
        alertaCaracterInvalido("velocidad inicial");
        return;
    }
    if(isNaN(titao) && titao!=""){
        alertaCaracterInvalido("angulo inicial");
        return;
    }
    if(isNaN(ho) && ho!=""){
        alertaCaracterInvalido("altura inicial");
        return;
    }
    if(isNaN(hf) && hf!=""){
        alertaCaracterInvalido("altura final");
        return;
    }

    //Lectura de las unidades de las variables
    var uvo = document.getElementById("Uvo").value;
    var utitao = document.getElementById("Utitao").value;
    var uho = document.getElementById("Uho").value;
    var uhf = document.getElementById("Uhf").value;

    // Seteo de los datos a valores "estandares"
    if(ho == ""){
        ho = 0;
    }
    if(hf == ""){
        hf = 0;
    }
    if(vo == ""){
        vo = 0;
    }
    if(titao == ""){
        titao = 0;
    }
    if(uvo == "km/h") {
        vo = vo/3.6;
        uvo = "m/s";
    }
    if(uho == "km"){
        ho = ho*1000;
        uho = "m";
    }
    if(uhf == "km"){
        hf = hf*1000;
        uhf = "m";
    }
    if(utitao == "grados") {
        titao = (titao * Math.PI) / 180;
        utitao = "radianes";
    }

    //Calculo para el tramo de subida.
    var hmax = Math.pow(vo*Math.sin(titao), 2)/(2*g) + ho;
    var uhmax = "m";
    var t1 = (vo*Math.sin(titao))/g;

    //Calculo para el tramo de bajada.
    if((Math.pow(2*g*(hmax-hf), 0.5))>0){
        var vf = Math.pow(2*g*(hmax-hf), 0.5);
        var t2 = vf/g;
    }    else{
        alertaDatoIngresado();
    }


    //Calculo para movimeinto en el eje X.
    var ttotal = t1 + t2;
    var uttotal = "s";
    var dx = ttotal* vo*Math.cos(titao);
    var udx = "m";

    ttotal = ttotal.toFixed(3);
    dx = dx.toFixed(3);

    var url = 'Resultado.html#'+ttotal+"#"+uttotal+"#"+dx+"#"+udx+"#"+ho+"#"+uho+"#"+hf+"#"+uhf+"#"+hmax+"#"+uhmax;
    window.location.replace(url);
}