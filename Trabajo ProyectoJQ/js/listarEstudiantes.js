var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultar = "ListaEstudiantes.php";
var apieliminar = "BorrarEstudiantes.php";
var apieditar = "ActualizarEstudiantes.php";

var url =  apibase + apiconsultar;
var urlBorrar = apibase + apieliminar

const myModalEliminar = new bootstrap.Modal(document.getElementById('myModalEliminar'))
const myModalEditar = new bootstrap.Modal(document.getElementById('myModalEditar'))
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'),);

let tablaresultado = document.querySelector(`#tablaresultado`);

$(document).ready(function () {
    consultardatos()
});

function consultardatos(){
    $.ajax({
        type: "POST",
        url: url,
        //data: "JSON", NO SE USA
        dataType: "json",
        success: function (response) {
            ajustardatostabla(response.data);
            console.log(response);
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error", errorThrown);
        }
    });
}

function ajustardatostabla(response){
    console.log(response);
    for (const objetoindividual of response) {
        tablaresultado.innerHTML += `
            <tr class="table" >
                <td scope="row">${objetoindividual.id}</td>
                <td>${objetoindividual.cedula}</td>
                <td>${objetoindividual.correoelectronico}</td>
                <td>${objetoindividual.telefono}</td>
                <td>${objetoindividual.telefonocelular}</td>
                <td>${objetoindividual.fechanacimiento}</td>
                <td>${objetoindividual.sexo}</td>
                <td>${objetoindividual.direccion}</td>
                <td>${objetoindividual.nombre}</td>
                <td>${objetoindividual.apellidopaterno}</td>
                <td>${objetoindividual.apellidomaterno}</td>
                <td>${objetoindividual.idCarreras}</td>
                <td>${objetoindividual.nacionalidad}</td>
                <td>${objetoindividual.usuario}</td>
                <td>
                    <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.nombre}','${objetoindividual.descripcion}','${objetoindividual.tiempo}')">Editar</a>
                    ||
                    <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModalEliminar('${objetoindividual.id}')">Eliminar</a>
                </td>
                
            </tr>
        `;
    }
}

// --------------APARTADO DE ELIMINAR -------------

function mostrarModalEliminar(id){
    var datosEnviar = {
        "id":id
    }

    $.ajax({
        type: "POST",
        url: urlBorrar,
        data: JSON.stringify(datosEnviar),
        dataType: "json",
        success: function (response) {
            myModalEliminar.show()
            completeDelete()
        },
        error: function (xhr,textStatus, errorThrown){
            console.log("Error", errorThrown)
        }
    });
}

function  completeDelete(){
    myModalEliminar.hide();
    tablaresultado.innerHTML = ``;
    consultardatos();
}

// --------------APARTADO DE EDITAR -------------

function mostrarEditarModal(id, cedula, correoelectronico, telefono, nombre, telefonocelular, fechanacimiento, sexo, direccion, nombre, apellidopaterno, apellidomaterno, idCarreras, nacionalidad){
    $("#id").val(id);
    $('#cedula').val(cedula)
    $('#correoelectronico').val(correoelectronico),
    $('#telefono').val(telefono),
    $('#telefonocelular').val(telefonocelular),
    $('#fechanacimiento').val(fechanacimiento),
    $('#sexo').val(sexo),
    $('#direccion').val(direccion),
    $('#nombre').val(nombre),
    $('#apellidopaterno').val(apellidopaterno),
    $('#apellidomaterno').val(apellidomaterno),
    $('#idCarreras').val(idCarreras),
    $('#nacionalidad').val(nacionalidad),
    myModalEditar.show();
}

var urlEditar = apibase + apieditar 

$("#btnEditar").click(function (e) { 
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
        url: urlEditar,
        data: JSON.stringify(datosEnviar),
        dataType: "json",
        success: function (response) {
            modalSuccess.show();
            completeEdit();
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }
    });

function completeEdit(){
    modalSuccess.hide();
    window.location = 'listarEstudiantes.html'
}
});