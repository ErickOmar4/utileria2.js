function iniciar_cesion(){
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;

    if(validarCorreo(correo)){
                document.getElementById("email-r").textContent = "Correo válido";
                document.getElementById("email-r").style.color = "green";
            }else{
                document.getElementById("email-r").textContent = "Correo inválido";
                document.getElementById("email-r").style.color = "red";
            }

            if(validarPassword(contraseña)){
                document.getElementById("contraseña-r").textContent = "Contraseña válida";
                document.getElementById("contraseña-r").style.color = "green";
            }else{
                document.getElementById("contraseña-r").textContent = "mínimo 8 caracteres, mayúscula, minúscula,  número y  carácter especial.";
                document.getElementById("contraseña-r").style.color = "red";
            }
}
