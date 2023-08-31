var formulario = document.getElementById('formulario');
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'));

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrer = "InsertarCursos.php";

formulario.addEventListener('submit', function(e)
{
    e.preventDefault();

    var datosEnviar = {
        "nombre":document.getElementById('nombre').value,
        "descripcion":document.getElementById('descripcion').value,
        "tiempo":document.getElementById('tiempo').value,
        "usuario":"German Ariza"
    }

    apiurl = apibase + apicrer;
    fetch(apiurl,
        {
            method:'POST',
            body: JSON.stringify(datosEnviar)
        })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
            modalSuccess.show(); 
            completeInsert();
        })
    .catch(console.log);

});

function completeInsert(){
    window.location = 'Listarcurso.html';
}