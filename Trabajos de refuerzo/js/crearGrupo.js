var formulario = document.getElementById('formulario');
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'));

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrer = "InsertarGrupo.php";

formulario.addEventListener('submit', function(e)
{
    e.preventDefault();

    var datosEnviar = {
        "id":document.getElementById('id').value,
        "nombre":document.getElementById('nombre').value,
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
    window.location = 'listaGrupo.html';
}