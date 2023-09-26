let tablaresultado = document.querySelector("#tablaresultado")
const myModalEliminar = new bootstrap.Modal(document.getElementById('myModalEliminar'));
var apiBase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiConsultar = "ListaProfesores.php"
var apieliminar = "BorrarProfesores.php"
var urlListar = apiBase + apiConsultar;
var urlEliminar = apiBase + apieliminar;


$.ajax({
    type: "POST",
    url: urlListar,
    //data: "data", para enviar datos solamente
    dataType: "json",
    success: function (response) {
        ajustardatostabla(response.data)
        console.log(response)
    },
    error: function ( xhr, textStatus, errorThrown){
        console.log("Error", errorThrown);
    }
});

function ajustardatostabla(response){
    for (const datosindividuales of response) {
        tablaresultado.innerHTML += `
        <tr class="table-primary" >
        <td scope="row">${datosindividuales.id}</td>
        <td>${datosindividuales.cedula}</td>
        <td>${datosindividuales.correoelectronico}</td>
        <td>${datosindividuales.telefono}</td>
        <td>${datosindividuales.telefonocelular}</td>
        <td>${datosindividuales.fechanacimiento}</td>
        <td>${datosindividuales.sexo}</td>
        <td>${datosindividuales.direccion}</td>
        <td>${datosindividuales.nombre}</td>
        <td>${datosindividuales.apellidopaterno}</td>
        <td>${datosindividuales.apellidomaterno}</td>
        <td>${datosindividuales.idcarreras}</td>
        <td>${datosindividuales.usuario}</td>
        <td>${datosindividuales.nacionalidad}</td>
        <td>
                    <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${datosindividuales.id}',)">Editar</a>
                    
                    <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModalEliminar('${datosindividuales.id}')">Eliminar</a>
        </td>
        </tr>
        `
    }
}

function mostrarModalEliminar (id){
    var datosEnviar = {
        "id":id  //id con comillas es referencia al id de base de datos
    }
}

$.ajax({
    type: "POST",
    url: apieliminar,
    data: JSON.stringify(datosEnviar),
    dataType: "json",
    success: function (response) {
        alert(Exitoso)
    }
});



