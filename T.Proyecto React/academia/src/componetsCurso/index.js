//Se llamó con "irm"
import React from 'react';
//Poneos el react adelante del componet (React.componet)
//Se llamó con "ccc"
class ListarCurso extends React.Component {
    constructor(props) {
        super(props);
        
        //THIS.STATE: crea un arreglo para manejar estados = memorias = igual a un Json
        this.state = {
            id : "",
            nombre : "",
            descripcion : "",
            tiempo : "",
            usuario : "",
            url:"https://paginas-web-cr.com/ApiPHP/apis/",
            listar: "ListaCurso.php",
            datos: [],
            datosCargados: false
        }
    }

    cargardatos(){

        //const { url } = this.state;
        var urlListar = this.state.url + this.state.listar;

        fetch(urlListar)//Solicitud
        .then( respuesta => respuesta.json())//Todo va a ser de tipo JSON
        .then((datosrespuesta) => {
            console.log(datosrespuesta.data)
            this.setState ({datos: datosrespuesta.data, datosCargados: true})
            //pintartabla(datosrespuesta.data)
            //this.setState({ id,nombre,descripcion,tiempo,usuario : datosrespuesta.data });
        })
        .catch(console.log);
    }

    componentDidMount(){
        this.cargardatos();
    }

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
                <h1>Listar Curso</h1>
                <div className="table-responsive">
                    <table className="table table-primary">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Tiempo</th>
                                <th scope="col">Usuario</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            datos.map(
                                (datosExtraidos) => (
                                    <tr className= "table-success">
                                <th scope="col">{datosExtraidos.Id}</th>
                                <th scope="col">{datosExtraidos.nombre}</th>
                                <th scope="col">{datosExtraidos.descripcion}</th>
                                <th scope="col">{datosExtraidos.tiempo}</th>
                                <th scope="col">{datosExtraidos.usuario}</th>
                            </tr>
                                )
                            )
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}
export default ListarCurso;