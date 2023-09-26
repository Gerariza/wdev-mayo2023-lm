// Etiqueta de jQuery utilizada: $.ajax
const apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
const apiconsultar = "ListaCurso.php";
const apieditar = "ActualizarCursos.php";

const myModalEliminar = new bootstrap.Modal($('#myModalEliminar')[0]);
const myModalEditar = new bootstrap.Modal($('#myModalEditar')[0]);
const modalSuccess = new bootstrap.Modal($('#modalSuccess')[0]);

const tablaresultado = $('#tablaresultado');

function consultardatos() {
  const apiurl = apibase + apiconsultar;
  $.ajax({
    url: apiurl,
    dataType: 'json',
    success: function (datosrespuesta) {
      console.log(datosrespuesta.code);
      console.log(datosrespuesta.data);
      ajustardatostabla(datosrespuesta.data);
    },
    error: function (error) {
      console.log(error);
    }
    
  });
}

function ajustardatostabla(datos) {
  console.log("datos" + datos);
  for (const objetoindividual of datos) {
    tablaresultado.then(function (datosrespuesta) {
      completeDelete();
    }).catch(console.log);
  }
}

function completeDelete() {
  myModalEliminar.hide();
  tablaresultado.html('');
  consultardatos();
}

function mostrarEditarModal(id, nombre, descripcion, tiempo) {
  $('#id').val(id);
  $('#nombre').val(nombre);
  $('#descripcion').val(descripcion);
  $('#tiempo').val(tiempo);
  myModalEditar.show();
}

$('form').submit(function (e) {
  e.preventDefault();
  var datosEnviar = {
    "id": $('#id').val(),
    "nombre": $('#nombre').val(),
    "descripcion": $('#descripcion').val(),
    "tiempo": $('#tiempo').val(),
    "usuario": "German Ariza"
  };

  const apiurl = apibase + apieditar;
  $.ajax({
    url: apiurl,
    method: 'POST',
    dataType: 'json',
    data: JSON.stringify(datosEnviar),
    success: function (datosrespuesta) {
      alert("Salvado");
      completeInsert();
    },
    error: function (error) {
      console.log(error);
    }
  });
});

function completeInsert() {
  // Aquí puedes agregar código para manejar la inserción completa.
}

consultardatos();


tablaresultado.innerHTML += `
           
           <tr class="table-success text-align-center" >
           <td scope="row">${objetoindividual.id}</td>
           <td>${objetoindividual.nombre}</td>
           <td>${objetoindividual.descripcion}</td>
           <td>${objetoindividual.tiempo}</td>
           <td>${objetoindividual.usuario}</td>
           <td>
           <a name="Eliminar" id="Eliminar" class="btn-get-started"  role="button" data-bs-toggle="modal" data-bs-target="#myModalEliminar" onclick="mostrarModal('${objetoindividual.id}')">Eliminar |</a>
           <a name="Editar" id="editar" class="btn-get-started"  role="button" data-bs-toggle="modal" data-bs-target="#myModalEditar" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.nombre}','${objetoindividual.descripcion}','${objetoindividual.tiempo}')">| Editar</a>
           </td>
       </tr>`;