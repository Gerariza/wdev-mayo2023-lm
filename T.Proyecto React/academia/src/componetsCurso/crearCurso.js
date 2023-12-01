import React from 'react';

class CrearCurso
extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id : "",
            nombre : "",
            descripcion : "",
            tiempo : "",
            usuario : "",
            url:"https://paginas-web-cr.com/ApiPHP/apis/",
            crear: "InsertarCursos.php",
            datos: [],
            datosCargados: false
        }

    }
    state = {  }
    render() { 

        const {
            id ,
            nombre,
            descripcion,
            tiempo,
            usuario,
            url,
            listar,
            datos,
            datosCargados
        } = this.state

        

        return (  
            <div className="container-fluid">
                <h1>Crear Curso</h1>
                <form id="formulario" onSubmit = {this.enviarDatos}> 
                <div className="mb-3">
                <label for="" className="form-label">Nombre</label>
                <input required type="text" onChange = {this.cambioValorInput} value={nombre}
                    className="form-control" name="nombre" id="nombre" aria-describedby="helpId" placeholder="Ingresa el nombre">
                </input>
                <small id="helpId" className="form-text text-muted">Nombre</small>
                </div>
                <div className="mb-3">
                <label for="" className="form-label">Descripcion</label>
                <input required type="text" onChange = {this.cambioValorInput} value={descripcion}
                    className="form-control" name="descripcion" id="descripcion" aria-describedby="helpId" placeholder="Descripcion">
                        </input>
                <small id="helpId" className="form-text text-muted">Descripcion</small>
                </div>
                <div className="mb-3">
                <label for="" className="form-label">Tiempo</label>
                <input required type="text" onChange = {this.cambioValorInput} value={tiempo}
                    className="form-control" name="tiempo" id="tiempo" aria-describedby="helpId" placeholder="Ingrese el tiempo">
                        </input>
                <small id="helpId" className="form-text text-muted">Tiempo</small>
                </div>
                <div className="mb-3">
                <label for="" className="form-label">Usuario</label>
                <input required type="text" onChange = {this.cambioValorInput} value={usuario}
                    className="form-control" name="usuario" id="usuario" aria-describedby="helpId" placeholder="Ingrese el tiempo">
                        </input>
                <small id="helpId" className="form-text text-muted">usuario</small>
                </div>


                <button type="reset" className="btn btn-danger">Borrar</button>
                ||
                <button id="btnenviar" type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        );
    }

// ------ AQUI ABAJO VAN LAS FUNCIONES ------ //

    //funcion para actualizar los state
        //(e) = son eventos
        //esa funcion la creamos dentro de los imput
        // se agrega en input con onChange = {this.cambioValorInput} value={nombre}
        cambioValorInput = (e) => {
            const state = this.state;
            state[e.target.name] = e.target.value;
            this.setState({state});
        }
        

        //Se coloca como onSubmit = {this.enviarDatos} en la etiqueta ed FORM
        enviarDatos = (e) => {
            alert("TEST")
            
            e.preventDefault();
        
        const { id, nombre, descripcion, tiempo, usuario, url, crear } = this.state;
        const urlCrear = url + crear;

        const datos = {
            id,
            nombre,
            descripcion,
            tiempo,
            usuario
        };
            
        fetch(urlCrear, {
            method: 'POST',
            body: JSON.stringify(datos)
            
        })
        .then(response => response.json())
        .then(result => {
            
            alert("Datos enviados correctamente");
        })
        .catch(error => {
            console.error("Error al realizar la solicitud:", error);
            alert(`Error al enviar los datos: ${error.message}`);
        });
        
    }
}


export default CrearCurso
;