var formulario = document.querySelector('formulario');

const myModalCrear = new bootstrap.Modal(document.getElementById('myModalCrear'));

var apiBase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiCrear = "InsertarEstudiantes.php";

var urlCrear = apiBase + apiCrear;

$(document).ready(function () {
    $(btnenviar).click(function (e) { 
       e.preventDefault();

        var datosEnviar = {
            "id": $('#id').val(),
            "cedula": $('#cedula').val(),
            "correoelectronico": $('#correoelectronico').val(),
            "telefono": $('#telefono').val(),
            "telefonocelular": $('#telefonocelular').val(),
            "fechanacimiento": $('#fechanacimiento').val(),
            "sexo": $('#sexo').val(),
            "direccion": $('#direccion').val(),
            "nombre": $('#nombre').val(),
            "apellidopaterno": $('#apellidopaterno').val(),
            "apellidomaterno": $('#apellidomaterno').val(),
            "idCarreras": $('#idCarreras').val(),
            "nacionalidad": $('#nacionalidad').val(),
            "usuario": "Santiago Ariza" 
        }

        $.ajax({
            type: "POST",
            url: urlCrear,
            data: JSON.stringify(datosEnviar),
            dataType: "json",
            success: function (response) {
                completarInsertar()
            },
            error: function ( xhr, textStatus, errorThrown){
                console.log("Error", errorThrown);
            }
        });

        function completarInsertar(){
            window.location = 'listarEstudiantes.html'
        }
    });
});

