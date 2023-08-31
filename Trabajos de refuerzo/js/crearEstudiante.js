var formulario = document.getElementById('formulario');
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'));

var apiBase = "https://paginas-web-cr.com/ApiPHP/apis/"
var apiCrear = "InsertarEstudiantes.php"

formulario.addEventListener("submit", function(e)
{
    e.preventDefault(); 

    //alert("guardando");  //modalSuccess.show();
    
    var datosEnviar = {
        //"idEstudiante" : document.getElementById("idEstudiante").value ,
        "cedula" : document.getElementById("cedula").value ,
        "email" : document.getElementById("email").value ,
        "telefono" : document.getElementById("telefono").value ,
        "telefonocelular" : document.getElementById("telefonocelular").value ,
        "fechanacimiento" : document.getElementById("fechanacimiento").value ,
        "sexo" : document.getElementById("sexo").value , 
        "direccion" : document.getElementById("direccion").value ,
        "nombre" : document.getElementById("nombre").value ,
        "primerapellido" : document.getElementById("primerapellido").value ,
        "segundoapellido" : document.getElementById("segundoapellido").value ,
        "nacionalidad" : document.getElementById("nacionalidad").value ,
        "idCarreras" : document.getElementById("idCarreras").value ,
        "usuario" : "German"
        }

    //aqui se hara el fetch para enviar la informacion a la API

        linkApi = apiBase + apiCrear 
        fetch(linkApi,
            {
                method: 'POST',
                body: JSON.stringify(datosEnviar)
            })
            .then(estructura => estructura.json())
            .then((datosRespuesta) => {
                modalSuccess.show();
                completeInsert() 
                })
            .catch(console.log);
        });

        function completeInsert(){     //Para que al crear un nuevo estudiante me dirija inmediatamente a la tabla de estudiantes
        window.location = "listaEstudiantes.html"}

        //apis/InsertarEstudiantes.php
        //{ "cedula" : "8128128", "correoelectronico":"marioaje@", "telefono":"1212" 
        //, "telefonocelular":"616161", "fechanacimiento": "12-02-2002", "sexo": "Masculino",
        //"direccion": "Mi casa" , "nombre" : "Mari", "apellidopaterno":"1primer", "apellidomaterno": "2segundo",
        //"nacionalidad": "Costa Rica" , "idCarreras": "1", "usuario":"Profesor" }