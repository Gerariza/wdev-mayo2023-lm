//Se llamó con "irm"
import React from 'react';
//Poneos el react adelante del componet (React.componet)
//Se llamó con "ccc"
class ListarCurso extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
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
                            <tr className="">
                                <td scope="row">R1C1</td>
                                <td>R1C2</td>
                                <td>R1C3</td>
                            </tr>
                            <tr className="">
                                <td scope="row">Item</td>
                                <td>Item</td>
                                <td>Item</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}
export default ListarCurso;