function validar_correo(correo){
    let correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correo.test(correo);
}

function solo_letras(palabra){
    let soloLetras =  /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return soloLetras.test(palabra);
}

function validarLongitud(entrada,longitud){
    return n.toString().length === longitud;
}

function calcularEdad(fechaNacimiento){
    let fechaNacimiento = new Date(fechaNacimiento);
    let fechaActual = new Date();

    let edad= fechaActual.getFullYear()- fechaNacimiento.getFullYear();
    let mes= fechaActual.getMonth() -fechaNacimiento.getMonth();

    if(mes < 0 || (mes === 0 && fechaActual.getDate()< fechaNacimiento.getDate())){
        edad--;
    }
    return edad;
}


