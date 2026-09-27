

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
    
    if(campoNoVacio("r_email",correoElectronico,mensaje_Vacio)){
        if (validarCorreo(correoElectronico)) {
        entradaValida("r_email","correo");
    } else {
        entradaNo_valida("r_email","correo");
    }
    }

    if(campoNoVacio("r_texto",texto,mensaje_Vacio)){
        if (solo_letras(texto)) {
        entradaValida("r_texto","texto");
    } else {
        entradaNo_valida("r_texto","texto");
    }
    }

    if(campoNoVacio("r_logitud",numero,mensaje_Vacio)&&campoNoVacio("r_logitud",longitud,mensaje_Vacio) ){
        if (validarLongitud(numero, longitud)) {
        entradaValida("r_logitud","el numero y la longitud si corresponden :");
    } else {
        entradaNo_valida("r_logitud","el numero tiene una longitud diferente :");
    }
    }


    if(campoNoVacio("r_FNacimiento",fechaNacimiento,mensaje_Vacio)){
         document.getElementById("r_FNacimiento").textContent = "su edad es "+calcularEdad(fechaNacimiento) +" años";
    }else{
        document.getElementById("r_FNacimiento").textContent= "seleccione su fecha de nacimiento";
    }


    if(campoNoVacio("r_contraseña",contraseña,mensaje_Vacio)){
        if (validarPassword(contraseña)) {
        entradaValida("r_contraseña","la contraseña tiene el formato: ");
    } else {
        entradaNo_valida("r_contraseña","la contraseña tiene no tiene el formato : ");
    }
    }


    if(campoNoVacio("r_palabra_b",texto_completo,mensaje_Vacio)&&campoNoVacio("r_palabra_b",palabra_buscada,mensaje_Vacio) ){
        if (contieneTexto(texto_completo,palabra_buscada)) {
        entradaValida("r_palabra_b","la palabra " + palabra_buscada +" si se encunetra en el texto");
    } else {
        entradaNo_valida("r_palabra_b","la palabra " + palabra_buscada +" no se encunetra en el texto");
    }
    }

    if(campoNoVacio("r_telefono",telefono,mensaje_Vacio)){
        if(validarLongitud(telefono,10)){
            if(solo_numeros(telefono)){
                entradaValida("r_telefono",validarTelefono(telefono));
            }else{
                entradaNo_valida("r_telefono","solo números");
            }
        }else{
            entradaNo_valida("r_telefono","el telefono debe tener 10 numeros :");
        }
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