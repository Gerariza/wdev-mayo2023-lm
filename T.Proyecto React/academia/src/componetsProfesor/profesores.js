import React from 'react';

class ListarProfesores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:" ",
            cedula:" ",
            correoelectronico:" ",
            telefono:" ",
            telefonocelular:" ",
            fechanacimiento:" ",
            sexo:" ",
            direccion:" ",
            nombre:" ",
            apellidopaterno:" ",
            apellidomaterno:" ",
            idCarreras:" ",
            usuario:" ",
            nacionalidad:" ",
            url:"https://paginas-web-cr.com/ApiPHP/apis/",
            listar: "ListaProfesores.php",
            datos: [],
            datosCargados: false
        }
    }

    cargardatos(){

        var urlListar = this.state.url + this.state.listar 
        
        fetch(urlListar)
        .then(respuesta => respuesta.json())
        .then((respuesta) => {
            this.setState({ datos: respuesta.data, datosCargados: true})
        })
        .catch(console.log);
    }

    componentDidMount() {
        this.cargardatos();
    }

    state = {  }
    render() { 
        const {
            id,
            cedula,
            correoelectronico,
            telefono,
            telefonocelular,
            fechanacimiento,
            sexo,
            direccion,
            nombre,
            apellidopaterno,
            apellidomaterno,
            idCarreras,
            usuario,
            nacionalidad,
            url,
            listar,
            datos,
            datosCargados
        } = this.state

        return ( 
            <div class="container-fluid">
                <h1>Listar Profesores</h1>
                <div class="table-responsive">
                    <table class="table table-primary">
                        <thead>
                        <tr class="">
                                <td scope="row">id</td>
                                <td>cedula</td>
                                <td>correoelectronico</td>
                                <td>telefono</td>
                                <td>telefonocelular</td>
                                <td>fechanacimiento</td>
                                <td>sexo</td>
                                <td>direccion</td>
                                <td>nombre</td>
                                <td>apellidopaterno</td>
                                <td>apellidomaterno</td>
                                <td>idCarreras</td>
                                <td>usuario</td>
                                <td>nacionalidad</td>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                datos.map(
                                (datosExtraidos) => (
                                <tr className= "table-success">
                                    <th scope="col">{datosExtraidos.id}</th>
                                    <th scope="col">{datosExtraidos.cedula}</th>
                                    <th scope="col">{datosExtraidos.correoelectronico}</th>
                                    <th scope="col">{datosExtraidos.telefono}</th>
                                    <th scope="col">{datosExtraidos.telefonocelular}</th>
                                    <th scope="col">{datosExtraidos.fechanacimiento}</th>
                                    <th scope="col">{datosExtraidos.sexo}</th>
                                    <th scope="col">{datosExtraidos.direccion}</th>
                                    <th scope="col">{datosExtraidos.nombre}</th>
                                    <th scope="col">{datosExtraidos.apellidopaterno}</th>
                                    <th scope="col">{datosExtraidos.apellidomaterno}</th>
                                    <th scope="col">{datosExtraidos.idCarreras}</th>
                                    <th scope="col">{datosExtraidos.usuario}</th>
                                    <th scope="col">{datosExtraidos.nacionalidad}</th>
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

export default ListarProfesores;