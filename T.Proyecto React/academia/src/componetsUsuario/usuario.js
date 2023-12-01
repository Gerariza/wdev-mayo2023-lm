//Se llamó con "irm"
import React from 'react';
//Poneos el react adelante del componet (React.componet)
//Se llamó con "ccc"
class ListarUsuario extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id : "",
            name : "",
            email : "",
            password : "",
            url:"https://paginas-web-cr.com/ApiPHP/apis/",
            listar: "ListaUsuarios.php",
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
            id,
            name,
            email,
            password,
            url,
            listar,
            datos,
            datosCargados
        } = this.state

        return (  
            <div className="container-fluid">
                <h1>Listar Usuario</h1>
                <div className="table-responsive">
                    <table className="table table-primary">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Correo Electronico</th>
                                <th scope="col">Contraseña</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            datos.map(
                                (datosExtraidos) => (
                                    <tr className= "table-success">
                                <th scope="col">{datosExtraidos.Id}</th>
                                <th scope="col">{datosExtraidos.name}</th>
                                <th scope="col">{datosExtraidos.email}</th>
                                <th scope="col">{datosExtraidos.password}</th>
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
export default ListarUsuario;