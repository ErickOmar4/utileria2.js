

function validarFormulario() {

    let correoElectronico = document.getElementById("e_email_f").value;
    let texto = document.getElementById("e_texto_f").value;
    let numero = document.getElementById("e_numero_f").value;
    let longitud = document.getElementById("e_max_longitud_f").value;

    if (validarCorreo(correoElectronico)) {
        document.getElementById("r_email").textContent = "Correo válido";
        document.getElementById("r_email").style.color = "green";
    } else {
        document.getElementById("r_email").textContent = "Correo inválido";
        document.getElementById("r_email").style.color = "red";
    }

    if (texto !== "") {
        if (solo_letras(texto)) {
            document.getElementById("r_texto").textContent = "solo tiene letras";
            document.getElementById("r_texto").style.color = "green";
        } else {
            document.getElementById("r_texto").textContent = "el no debe ingresar numeros";
            document.getElementById("r_texto").style.color = "green";
        }
    }

    if (numero !== "" && longitud !== "") {
        if (validarLongitud(numero, longitud)) {
            document.getElementById("r_logitud").textContent = "si corresponde a la longitud";
            document.getElementById("r_logitud").style.color = "green";
        } else {
            document.getElementById("r_logitud").textContent = "el número es diferente de la longitud esperada";
            document.getElementById("r_logitud").style.color = "red";
        }
    }
}