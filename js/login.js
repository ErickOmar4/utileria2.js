function iniciar_cesion(){
    let correoElectronico = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;
    let mensaje_Vacio = "el campo esta vacio, ingrese lo que se pide";

    if(campoNoVacio("r_email",correoElectronico,mensaje_Vacio)){
        if (validarCorreo(correoElectronico)) {
        entradaValida("r_email","correo");
    } else {
        entradaNo_valida("r_email","correo");
    }
    }

    if(campoNoVacio("r_contraseña",contraseña,mensaje_Vacio)){
        if (validarPassword(contraseña)) {
        entradaValida("r_contraseña","la contraseña tiene el formato: ");
    } else {
        entradaNo_valida("r_contraseña","la contraseña tiene no tiene el formato : ");
    }
    }

}
