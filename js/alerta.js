function alertaCaracterInvalido(campo)
{
    var errormsg = "Por favor ingrese un valor correcto en el campo de "+ campo+".";
    var alerta = alertify.alert('ATENCION','alerta');
    alertify.alert()
        .setting({
            'label':'Aceptar',
            'message': errormsg ,
            'onok': function(){  //funcion que se ejecuta al precionar aceptar para mostrar al usuario que hay que corregir.
                alertify.error('Corregir campo marcado en rojo ('+campo+')',2);
            }
        }).show();
}

function alertaOtroDatos (){
    var alerta = alertify.alert('ATENCION',"Esta parte de la pagina se deja planteada de forma tal que solo reste realizar " +
    "los calculos matematicos, no se realizan ya que son demasiado complejos.");
    alertify.alert().setting({
            'label':'Aceptar',
            'message': errormsg ,
            'onok': function(){  //funcion que se ejecuta al precionar aceptar para mostrar al usuario que hay que corregir.
                alertify.error('Corregir campo marcado en rojo ('+campo+')',2);
            }
        }).show();
}

function alertaCanvas(n){
    var msg = "Se realizaron "+ n +" modificaciones a la altura y la distancia en X para poder graficarla.";
    alertify.set('notifier','position', 'bottom-left');
    alertify.success(msg,6);
}
