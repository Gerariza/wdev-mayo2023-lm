import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

//Seccion de componentes
import ListarCurso from './componetsCurso/index'; //Solo colocamos import y ListarCurso, lo demas se autorellena
import Menu from './componetsPlantillas/menu';
import Dashboard from './componetsPlantillas/dashboard';
import ListarEstudiantes from './componetsEstudiante/estudiantes';
import ListarGrupo from './componetsGrupo/grupo';
import ListarProfesores from './componetsProfesor/profesores';
import ListarUsuario from './componetsUsuario/usuario';

import CrearCurso from './componetsCurso/crearCurso';

//Routeo - se actualice sola la pagina (servidor) //Se descargo exencion
import{ Route, BrowserRouter as Router} from 'react-router-dom' //Se adicionó manuealmente

//NOTAS:
//Poner nombre de componentes siempre con inicial en mayuscula.
//Solo la primer ruta lleva exact (Principal componente)
//El COMPONENT dentro de ROUTE es la url, es de donde toma la informacion el path es el nombre que le damos.

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Route exact path= "/" component={Dashboard}></Route>
        
        <Route path= "/Menu" component={Menu}></Route>

        <Route path= "/ListarCurso" component={ListarCurso}></Route>
        <Route path= "/ListarEstudiantes" component={ListarEstudiantes}></Route>
        <Route path= "/ListarGrupo" component={ListarGrupo}></Route>
        <Route path= "/ListarProfesores" component={ListarProfesores}></Route>
        <Route path= "/ListarUsuario" component={ListarUsuario}></Route>

        <Route path= "/CrearCurso" component={CrearCurso}></Route>
        
      </Router>
      
    </div>
        );
}

export default App;
