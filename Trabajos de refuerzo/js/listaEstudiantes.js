var linkApi = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiConsultar = "ListaEstudiantes.php";
var apiEliminar = "BorrarEstudiantes.php"
let tablaResultado = document.querySelector("#tablaResultado")
const myModalEliminar = new bootstrap.Modal(document.getElementById('myModalEliminar'))

//Aqui hacemos la funcion para extraer datos
function recolectarDatos() {
apiUrl = linkApi + apiConsultar;
    fetch(apiUrl)                                  //DE DONDE SACO LOS DATOS
    .then((estructura) => estructura.json() )       //FORMATO DE PRECENTACION DE DATOS
    .then ((datosRespuesta) =>{                     //DONDE SE PRESENTAN LOS DATOS
    ajustarDatosTabla(datosRespuesta.data)          //console.log(datosRespuesta) //DONDE VAN LOS DATOS YA TRASFORMADOS EN JSON
    })
    .catch(console.log)                             //catch es para notificar errores
}

function ajustarDatosTabla(datos){
    console.log(datos);   
    for (const objetoIndividual of datos) {
        //console.log(objetoIndividual.id)
        //console.log(objetoIndividual.nombre)
        //console.log(objetoIndividual.descripcion)
        //console.log(objetoIndividual.tiempo)
        //console.log(objetoIndividual.usuario)
        //console.log("/////////////////////")
        tablaResultado.innerHTML += `
                <td scope="row">${objetoIndividual.cedula}</td>    
                <td>${objetoIndividual.correoelectronico}</td>
                <td>${objetoIndividual.telefono}</td>
                <td>${objetoIndividual.telefonocelular}</td>
                <td>${objetoIndividual.fechanacimiento}</td>
                <td>${objetoIndividual.sexo}</td>
                <td>${objetoIndividual.direccion}</td>
                <td>${objetoIndividual.nombre}</td>
                <td>${objetoIndividual.apellidopaterno}</td>
                <td>${objetoIndividual.apellidomaterno}</td>
                <td>${objetoIndividual.nacionalidad}</td>
                <td>${objetoIndividual.idCarreras}</td>
                <td>${objetoIndividual.usuario}</td>
                <td>
                <a name="eliminar" id="eliminar" class="btn btn-danger"  role="button" onclick="modalEliminando('${objetoIndividual.id}')">Eliminar</a>
                ||
                <a name="editar" id="editar" class="btn btn-success"  role="button" onclick="modalEditar('${objetoIndividual.id}')">Editar</a>
                </td>`
    }   
}
//"$ { }" es para adicionar JAVA S a un HTML
//EN "TABLA RESULTADO" ADICIONAMOS INFORMACION DE API A LA TABLA Y VICEVERSA

function modalEliminando(id){
    eliminandoDato(id)
    myModalEliminar.show()
    //alert("Eliminando" + id)
}

function eliminandoDato(id){

var datosEnviar = { 
    "id":id
}

        apiUrl = linkApi + apiEliminar;
            fetch(apiUrl,
                {
                method: 'post',                  //porque se postiara en el api
                body:JSON.stringify(datosEnviar) //la estructura en el la informacion se enviara al api
                })                                  
            .then((estructura) => estructura.json() )    
            .then ((datosRespuesta) =>{                     //DONDE SE PRESENTAN LOS DATOS
                borradoCompleto()  
            })
            .catch(console.log)                             
}

function borradoCompleto(){                   //Esta funcion es para que se refresque la tabla depues de haber borrado una linea.
    tablaResultado.innerHTML = ``;
    recolectarDatos();
    myModalEliminar.hide();
}


//Aqui llamamos a la funcion y la presentammos
recolectarDatos()