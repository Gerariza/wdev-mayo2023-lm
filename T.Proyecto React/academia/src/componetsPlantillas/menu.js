import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div className="container-fluid">
                
                <nav className="navbar navbar-expand-sm navbar-dark bg-secondary">
                    <a className="navbar-brand" href="index.html">Inicio</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="#" aria-current="page"> .... <span className="visually-hidden">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://paginas-web-cr.com/ApiPHP/">API</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cursos</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="">Lista</a>
                                <a className="dropdown-item" href="">Crear</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profesores</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="">Lista</a>
                                <a className="dropdown-item" href="">Crear</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Estudiantes</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="">Lista</a>
                                <a className="dropdown-item" href="">Crear</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Grupo</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="">Lista</a>
                                <a className="dropdown-item" href="">Crear</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Menu;