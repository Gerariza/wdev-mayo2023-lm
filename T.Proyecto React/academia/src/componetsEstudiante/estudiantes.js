import React from 'react';

class ListarEstudiantes extends React.Component {
    constructor(props) {
        super(props);

        //Extraemos datos
        this.state = {
            id : "",
            cedula : "",
            correoelectronico: "",
            telefono: "",
            telefonocelular: "",
            fechanacimiento: "",
            sexo: "",
            direccion: "",
            nombre: "",
            apellidopaterno: "",
            apellidomaterno: "",
            nacionalidad: "",
            idCarreras: "",
            usuario: "",
            url:"https://paginas-web-cr.com/ApiPHP/apis/",
            listar: "ListaEstudiantes.php",
            datos: [],
            datosCargados: false
        }
    }

    //funcion para extraer datos de api con fetch
    cargardatos() {
    
    var urlListar = this.state.url + this.state.listar;
    
    fetch(urlListar)
    .then(respuesta => respuesta.json()) //tipo JSON
    .then((datosrespuesta) => {
        console.log(datosrespuesta.data)
            this.setState ({datos: datosrespuesta.data, datosCargados: true})
    })
    .catch(console.log);
}

componentDidMount(){
    this.cargardatos();
}

    state = {  }
    render() {
        const{
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
            nacionalidad,
            idCarreras,
            usuario,
            url,
            listar,
            datos,
            datosCargados} = this.state
            
        return ( 
            <div className="container-fluid">
                <h1>Listar Estudiantes</h1>
                <div className="container-fluid">
                    <div className="table-responsive">
                        <table className="table table-primary">

                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">cedula</th>
                                    <th scope="col">correo electronico</th>
                                    <th scope="col">telefono</th>
                                    <th scope="col">telefono celular</th>
                                    <th scope="col">fecha nacimiento</th>
                                    <th scope="col">sexo</th>
                                    <th scope="col">direccion</th>
                                    <th scope="col">nombre</th>
                                    <th scope="col">apellido paterno</th>
                                    <th scope="col">apellido materno</th>
                                    <th scope="col">nacionalidad</th>
                                    <th scope="col">id Carreras</th>
                                    <th scope="col">usuario</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    datos.map(
                                    (datosExtraidos) => (                                <tr className="">
                                    <th scope="row">{datosExtraidos.id}</th>
                                    <th >{datosExtraidos.cedula}</th>
                                    <th >{datosExtraidos.correoelectronico}</th>
                                    <th >{datosExtraidos.telefono}</th>
                                    <th >{datosExtraidos.telefonocelular}</th>
                                    <th >{datosExtraidos.fechanacimiento}</th>
                                    <th >{datosExtraidos.sexo}</th>
                                    <th >{datosExtraidos.direccion}</th>
                                    <th >{datosExtraidos.nombre}</th>
                                    <th >{datosExtraidos.apellidopaterno}</th>
                                    <th >{datosExtraidos.apellidomaterno}</th>
                                    <th >{datosExtraidos.nacionalidad}</th>
                                    <th >{datosExtraidos.idCarreras}</th>
                                    <th >{datosExtraidos.usuario}</th>
                                </tr>
                                    )
                                )
                                }
                            </tbody>

                        </table>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default ListarEstudiantes;