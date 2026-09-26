function iniciar_cesion(){
    let correoElectronico = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;

    if(campoNoVacio("r_email",correoElectronico)){
        if (validarCorreo(correoElectronico)) {
        entradaValida("r_email","correo");
    } else {
        entradaNo_valida("r_email","correo");
    }
    }

    if(campoNoVacio("r_contraseña",contraseña)){
        if (validarPassword(contraseña)) {
        entradaValida("r_contraseña","la contraseña tiene el formato: ");
    } else {
        entradaNo_valida("r_contraseña","la contraseña tiene no tiene el formato : ");
    }
    }

}
