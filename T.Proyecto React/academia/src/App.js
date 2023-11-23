import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

//Seccion de componentes
import ListarCurso from './componetsCurso/index'; //Solo colocamos import y ListarCurso, lo demas se autorellena
import Menu from './componetsPlantillas/menu';
import Dashboard from './componetsPlantillas/dashboard';

//Routeo - se actualice sola la pagina (servidor) //Se descargo exencion
import{ Route, BrowserRouter as Router} from 'react-router-dom' //Se adicionó manuealmente

//NOTAS:
//Poner nombre de componentes siempre con inicial en mayuscula.
//Solo la primer ruta lleva exact (Prinsipal componente)
//El COMPONENT dentro de ROUTE es la url, es de donde toma la informacion el path es el nombre que le damos.

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Route exact path= "/" component={Dashboard}></Route>
        <Route path= "/Menu" component={Menu}></Route>
        <Route path= "/ListarCurso" component={ListarCurso}></Route>
      </Router>
      
    </div>
        );
}

export default App;
