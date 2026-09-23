function validarCorreo(c) {
    let correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correo.test(c);
}

function solo_letras(palabra){
    let soloLetras =  /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return soloLetras.test(palabra);
}

function validarLongitud(entrada,longitud){
    return n.toString().length === longitud;
}

function calcularEdad(fechaNacimiento_e){
    let fechaNacimiento = new Date(fechaNacimiento_e);
    let fechaActual = new Date();

    let edad= fechaActual.getFullYear()- fechaNacimiento.getFullYear();
    let mes= fechaActual.getMonth() -fechaNacimiento.getMonth();

    if(mes < 0 || (mes === 0 && fechaActual.getDate()< fechaNacimiento.getDate())){
        edad--;
    }
    return edad;
}

function esMayorEdad(edad){
    return calcularEdad(edad)>=18;
}

function validarPassword(e_password){
    let password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/;
    return password.test(e_password);
}

function validarCodigoPostal(e_cd_postal){
    let codigo_Postal = /^\d{5}$/;
}

function contarCaracteres(e_texto){
    return e_texto.length;
}

