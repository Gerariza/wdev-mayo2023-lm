let tablaresultado = document.querySelector("#tablaresultado")
const myModalEliminar = new bootstrap.Modal(document.getElementById('myModalEliminar'));
const myModalEditar = new bootstrap.Modal(document.getElementById('myModalEditar'));
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'));

var apiBase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiConsultar = "ListaProfesores.php"
var apieliminar = "BorrarProfesores.php"
var apiEditar = "ActualizarProfesores.php"
var urlListar = apiBase + apiConsultar;
var urlEliminar = apiBase + apieliminar;

$(document).ready(function () {
    cargardatos()
});

function cargardatos(){
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
}


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
                    <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${datosindividuales.id}','${datosindividuales.cedula}','${datosindividuales.correoelectronico}','${datosindividuales.telefono}','${datosindividuales.telefonocelular}','${datosindividuales.fechanacimiento}','${datosindividuales.sexo}','${datosindividuales.direccion}','${datosindividuales.nombre}','${datosindividuales.apellidopaterno}','${datosindividuales.apellidomaterno}','${datosindividuales.nacionalidad}','${datosindividuales.usuario}','${datosindividuales.idcarreras}')">Editar</a>
                    
                    <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModalEliminar('${datosindividuales.id}')">Eliminar</a>
        </td>
        </tr>
        `
    }
}

// --------------APARTADO DE ELIMINAR -------------

function mostrarModalEliminar (id){
    var datosEnviar = {
        "id":id  //id con comillas es referencia al id de base de datos
    }

    $.ajax({
        type: "POST",
        url: urlEliminar,
        data: JSON.stringify(datosEnviar),
        dataType: "json",
        success: function (response) {
            myModalEliminar.show();
            completeDelete();
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error", errorThrown);
        }
    });
}

function completeDelete(){
    myModalEliminar.hide();
    tablaresultado.innerHTML = ``; //
    cargardatos();
}

// --------------APARTADO DE EDITAR -------------

function mostrarEditarModal (id,cedula,correoelectronico,telefono,telefonocelular,fechanacimiento,sexo,direccion,nombre,apellidopaterno,apellidomaterno,idCarreras,usuario,nacionalidad){
    //EL ORDEN ES EN EL QUE SE ENVIA ES EL ORDEN EN EL QUE SE PONEN LOS ELEMENTOS QUE SE ENVIA DESDE EL BOTON DE EDITAR YA QUE ES EL QUE LO MANDA (EL ORDEN DEL BOTON Y DEL MODAL DEBEN SER IGUAL)
    // se uso JQSET 
    $("#id").val(id); 
    $("#cedula").val(cedula);
    $("#correoelectronico").val(correoelectronico);
    $("#telefono").val(telefono);
    $("#telefonocelular").val(telefonocelular);
    $("#fechanacimiento").val(fechanacimiento);
    $("#sexo").val(sexo);
    $("#direccion").val(direccion);
    $("#nombre").val(nombre);
    $("#apellidopaterno").val(apellidopaterno);
    $("#apellidomaterno").val(apellidomaterno);
    $("#usuario").val(usuario);
    $("#idCarreras").val(idCarreras);
    $("#nacionalidad").val(nacionalidad);
    myModalEditar.show()
}
    //El selector es el id del boton de subir de editar en el modal. 

    var urlEditar = apiBase + apiEditar

$("#btnEditar").click(function (e) { 
    e.preventDefault();
    
    var datosEnviar = {
        // "id": JQvalGet
        "id":$("#id").val(),
        "cedula":$("#cedula").val(),
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

//revisar ID de modal (modalsuccess)
    $.ajax({
        type: "POST",
        url: urlEditar,
        data: JSON.stringify(datosEnviar),
        dataType: "json",
        success: function (response) {
            modalSuccess.show();
            completeEdit
        }
    });

    function completeEdit() {
        modalSuccess.hide();
        window.location = 'listarProfesoresQJ.html'
    }
});


