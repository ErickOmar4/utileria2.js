

function validarFormulario() {

    let correoElectronico = document.getElementById("e_email_f").value;
    let texto = document.getElementById("e_texto_f").value;
    let numero = document.getElementById("e_numero_f").value;
    let longitud = document.getElementById("e_max_longitud_f").value;
    let fechaNacimiento = document.getElementById("e_fecha_nacimiento_f").value;
    let contraseña = document.getElementById("e_contraseña").value;
    let texto_completo = document.getElementById("textooo").value;
    let palabra_buscada = document.getElementById("e_palabra_b").value;
    let telefono = document.getElementById("e_telefono").value;
    let mensaje_Vacio = "el campo esta vacio, ingrese lo que se pide";

    function campoNoVacio(elemento,campoValido){
        if(campoValido !==""){
            return true;
        }else{
            document.getElementById(elemento).style.color = "red";
            document.getElementById(elemento).textContent = mensaje_Vacio;
            return false;
        }
        
    }

    function entradaValida(elemento,campoValido){
        document.getElementById(elemento).textContent = campoValido+" válido ";
        document.getElementById(elemento).style.color = "green";
    }
    function entradaNo_valida(elemento,campoValido){
        document.getElementById(elemento).textContent = campoValido+" no valido ";
        document.getElementById(elemento).style.color = "red";
    }

    if(campoNoVacio("r_email",correoElectronico)){
        if (validarCorreo(correoElectronico)) {
        entradaValida("r_email","correo");
    } else {
        entradaNo_valida("r_email","correo")
    }
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

    if(fechaNacimiento !== ""){
            document.getElementById("r_FNacimiento").textContent =calcularEdad(fechaNacimiento);
    }else{
        document.getElementById("r_FNacimiento").textContent= "seleccione su fecha de nacimiento";
    }

    if(contraseña !== ""){
        if(validarPassword(contraseña)){
            document.getElementById("r_contraseña").textContent = "la contraseña tiene formato valido";
        }else{
            document.getElementById("r_contraseña").textContent = "la contraseña tiene no formato valido ";
        }
        
    }


    if(texto_completo !== "" && palabra_buscada !==""){
        if(contieneTexto(texto_completo,palabra_buscada)){
            document.getElementById("r_palabra_b").textContent = "la palabra " + palabra_buscada +" si se encunetra en el texto";
        }else{
             document.getElementById("r_palabra_b").textContent = "la palabra " + palabra_buscada +" no se encunetra en el texto";            
        }

    }

    if(telefono !== ""){
        if(validarLongitud(telefono,10)){
            if(solo_numeros(telefono)){
                document.getElementById("r_telefono").textContent = validarTelefono(telefono);
            }else{
                document.getElementById("r_telefono").textContent = "solo números";
            }
        }else{
            document.getElementById("r_telefono").textContent = "el telefono debe tener 10 numeros";
        }
    }else{
            document.getElementById("r_telefono").textContent = "ingrese un numero telefonico";
    }




}


function abrirModal(){
            let fecha=document.getElementById("e_fecha_nacimiento_f").value;
            if(fecha === ""){
                document.getElementById("edadCalculada").textContent =
                " ingrese una fecha de nacimiento para calcular.";
            }else{

                let edad = calcularEdad(fecha);

                document.getElementById("edadCalculada").textContent =
                "tienes" + edad + " años";

            }
            document.getElementById("modal").style.display="block";
        }

        function cerrarModal(){
            document.getElementById("modal").style.display="none";
        }