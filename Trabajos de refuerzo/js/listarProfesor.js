var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultar = "ListaProfesores.php";
var apieliminar = "BorrarProfesores.php";
var apieditar = "ActualizarProfesores.php";

const myModalEliminar = new bootstrap.Modal(document.getElementById('myModalEliminar'))
const myModalEditar = new bootstrap.Modal(document.getElementById('myModalEditar'))
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'),);

let tablaresultado = document.querySelector(`#tablaresultado`);

function consultardatos(){
    // alert("consulta");
    // fetch sirve para extrar, insertar, modificar, eliminar, consultardatos
    apiurl = apibase + apiconsultar;
    fetch(apiurl)
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
        // ajustardatostabla
        console.log(datosrespuesta.code)
        console.log(datosrespuesta.data)
        ajustardatostabla(datosrespuesta.data)
        })
    .catch(console.log);
}

function ajustardatostabla(datos){
    console.log("datos"+datos);
    for (const objetoindividual of datos) {
        // console.log(objetoindividual.id);
        // console.log(objetoindividual.nombre);
        // console.log(objetoindividual.descripcion);
        // console.log(objetoindividual.tiempo);
        // console.log(objetoindividual.usuario);
        // console.log("//////////")

        tablaresultado.innerHTML += `
            <tr class="table-primary" >
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

    apiurl = apibase + apieliminar;
    fetch(apiurl,
        {
            method:'POST',
            body: JSON.stringify(datosEnviar)
        })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
            completeDelete()
        })
    .catch(console.log);
}

function  completeDelete(){
    myModalEliminar.hide();
    tablaresultado.innerHTML = ``;
    consultardatos();
}

function mostrarEditarModal(id, cedula, correoelectronico, telefono, telefonocelular, fechanacimiento, sexo, direccion, nombre, apellidopaterno, apellidomaterno, idCarreras, nacionalidad){
    document.getElementById('id').value = id;
    document.getElementById('cedula').value = cedula;
    document.getElementById('correoelectronico').value = correoelectronico;
    document.getElementById('telefono').value = telefono;
    document.getElementById('telefonocelular').value = telefonocelular;
    document.getElementById('fechanacimiento').value = fechanacimiento;
    document.getElementById('sexo').value = sexo;
    document.getElementById('direccion').value = direccion;
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellidopaterno').value = apellidopaterno;
    document.getElementById('apellidomaterno').value = apellidomaterno;
    document.getElementById('idCarreras').value = idCarreras;
    document.getElementById('nacionalidad').value = nacionalidad;
    myModalEditar.show();
}

formulario.addEventListener('submit', function(e)
{
    e.preventDefault();
    //alert('salvando');

    var datosEnviar = { 
        "id":document.getElementById('id').value ,
        "cedula":document.getElementById('cedula').value ,
        "correoelectronico":document.getElementById('correoelectronico').value ,
        "telefono":document.getElementById('telefono').value ,
        "telefonocelular":document.getElementById('telefonocelular').value ,
        "fechanacimiento":document.getElementById('fechanacimiento').value ,
        "sexo":document.getElementById('sexo').value ,
        "direccion":document.getElementById('direccion').value ,
        "nombre":document.getElementById('nombre').value ,
        "apellidopaterno":document.getElementById('apellidopaterno').value ,
        "apellidomaterno":document.getElementById('apellidomaterno').value ,
        "idCarreras":document.getElementById('idCarreras').value ,
        "usuario":"Santiago Ariza",
        "nacionalidad":document.getElementById('nacionalidad').value
    }

    apiurl = apibase + apieditar ;
    fetch(apiurl,
        {
            method:'POST',
            body: JSON.stringify(datosEnviar)
        })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
        alert("Salvado")
            // modalSuccess.show()
             completeInsert()
        })
    .catch(console.log);

   
});

function completeInsert(){
    
}



consultardatos();

