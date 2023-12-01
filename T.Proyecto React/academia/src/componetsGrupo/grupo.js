import React from 'react';

class ListarGrupo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : "",
            nombre : "",
            url:"https://paginas-web-cr.com/ApiPHP/apis/",
            listar: "ListaGrupo.php",
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
            id ,
            nombre,
            url,
            listar,
            datos,
            datosCargados
        } = this.state

        return ( 
            <div class="container-fluid">
                <h1>Listar Grupo</h1>
                <div class="table-responsive">
                    <table class="table table-primary">
                        <thead>
                        <tr class="">
                                <td scope="row">id</td>
                                <td>nombre</td>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                datos.map(
                                (datosExtraidos) => (
                                <tr className= "table-success">
                                    <th scope="col">{datosExtraidos.id}</th>
                                    <th scope="col">{datosExtraidos.nombre}</th>
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

export default ListarGrupo;