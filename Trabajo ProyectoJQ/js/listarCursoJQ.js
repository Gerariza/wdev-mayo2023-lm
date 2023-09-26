var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultar = "ListaCurso.php";
var url = apiconsultar + apibase;
var apieliminar = "BorrarCursos.php";
var apieditar = "ActualizarCursos.php";

// const myModalEliminar = new bootstrap.Modal(document.getElementById('myModalEliminar'))
// const myModalEditar = new bootstrap.Modal(document.getElementById('myModalEditar'))
// const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'),);

let tablaresultado = document.querySelector(`#tablaresultado`);

$(document).ready(function () {
    consultardatos()
});

function consultardatos(){
    $.ajax({
        type: "POST",
        url: "url",
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

function ajustardatostabla(datos){
    console.log("datos"+datos);
    for (const objetoindividual of datos) {
        tablaresultado.innerHTML += `
            <tr class="table" >
                <td scope="row">${objetoindividual.id}</td>
                <td>${objetoindividual.nombre}</td>
                <td>${objetoindividual.descripcion}</td>
                <td>${objetoindividual.tiempo}</td>
                <td>${objetoindividual.usuario}</td>
                <td>
                    <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.nombre}','${objetoindividual.descripcion}','${objetoindividual.tiempo}')">Editar</a>
                    ||
                    <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModal('${objetoindividual.id}')">Eliminar</a>
                </td>
                
            </tr>
        `;
    }
}

function mostrarModal(id){
    
    eliminandodato(id);
    myModalEliminar.show();
    //alert("Eliminando");
}

function eliminandodato(id){

    var datosEnviar = {
        "id":id
    }

    $.ajax({
        type: "POST",
        url: "url",
        data: JSON.stringify(datosEnviar),
        dataType: "dataType",
        success: function (response) {
            
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }
    });
}
//function eliminarCurso(id) 
// {
//     var datosEnviar = {"id":id}

// $.ajax({
//     type: "post",
//     url: urlBorrar,
//     data: JSON.stringify(datosEnviar),
//     dataType: "json",
//     success: function (response) {
//         modalBorrarCurso.show();
//         refrescarTabla();
//     }
// });
// }

function  completeDelete(){
    myModalEliminar.hide();
    tablaresultado.innerHTML = ``;
    consultardatos();
}

function mostrarEditarModal(id, nombre, descripcion, tiempo){
    $(id).val(id);
    document.getElementById('nombre').value = nombre;
    document.getElementById('descripcion').value = descripcion;
    document.getElementById('tiempo').value = tiempo;
    myModalEditar.show();
}


formulario.addEventListener('submit', function(e)
{
    e.preventDefault();
    //alert('salvando');

    var datosEnviar = { 
        "id":document.getElementById('id').value ,
        "nombre":document.getElementById('nombre').value ,
        "descripcion":document.getElementById('descripcion').value ,
        "tiempo":document.getElementById('tiempo').value ,
        "usuario":"German Ariza"
    }
    $.ajax({
        type: "POST",
        url: "url",
        data: JSON.stringify(datosEnviar),
        dataType: "dataType",
        success: function (response) {
            completeInsert()
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }
    });
});

function completeInsert(){
    
}



consultardatos();

