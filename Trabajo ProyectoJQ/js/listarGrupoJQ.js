var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultar = "ListaGrupo.php";
var apieliminar = "BorrarGrupo.php";
var apieditar = "ActualizarGrupo.php";

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
                <td>${objetoindividual.nombre}</td>
                <td>
                    <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.nombre}')">Editar</a>
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

function mostrarEditarModal(id, nombre){
    $("#id").val(id);
    $("#nombre").val(nombre);
    myModalEditar.show();
}

var urlEditar = apibase + apieditar 

$("#btnEditar").click(function (e) { 
    e.preventDefault();
    
    var datosEnviar = { 
        "id":$("#id").val(),
        "nombre":$("#nombre").val(),
        "usuario":"German Ariza"
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
    window.location = 'listarGrupoJQ.html'
}
});

