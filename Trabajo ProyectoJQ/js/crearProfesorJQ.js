var formulario = document.querySelector('formulario');
const myModalCrear = new bootstrap.Modal(document.getElementById('myModalCrear'));
var apiBase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiCrear = "InsertarProfesores.php"

var urlCrear = apiBase + apiCrear;

$(btnenviar).click(function (e) { //el selector el es boton que va a ejecutar esta fucnion 
    e.preventDefault();
    //alert("hola enviar")

    var datosEnviar = {
        "cedula":$("#cedula").val(), // JQvalget //datos que vamos a enviar recolectados en el html crear
        "correoelectronico":$("#correoelectronico").val(),
        "telefono":$("#telefono").val(),
        "telefonocelular":$("#telefonocelular").val(),
        "fechanacimiento":$("#fechanacimiento").val(),
        "sexo":$("#sexo").val(),
        "direccion":$("#direccion").val(),
        "nombre":$("#nombre").val(),
        "apellidopaterno":$("#apellidopaterno").val(),
        "apellidomaterno":$("#apellidomaterno").val(),
        "nacionalidad":$("#nacionalidad").val(),
        "idCarreras":$("#idCarreras").val(),
        "usuario":$("#usuario").val(),
        
    }

    $.ajax({
        type: "POST",
        url: urlCrear,
        data: JSON.stringify(datosEnviar),
        dataType: "json",
        success: function (response) {
            completarInsertar() // no se pone entre parensesis response
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error", errorThrown);
        }
    });
});


function completarInsertar(){
    myModalCrear.show
    window.location("listarProfesoresJQ.html");
}


// "id": "1235041",
//             "cedula": "123456789",
//             "correoelectronico": "achaves@cenfotec.com",
//             "telefono": "4019-1940",
//             "telefonocelular": "8765-4321",
//             "fechanacimiento": "0000-00-00",
//             "sexo": "Masculino",
//             "direccion": "Alajuela, Capital del mundo",
//             "nombre": "Asdrubal",
//             "apellidopaterno": "Chaves",
//             "apellidomaterno": "Carmona",
//             "idCarreras": "3",
//             "usuario": "achaves",
//             "nacionalidad": "Costarricense"

