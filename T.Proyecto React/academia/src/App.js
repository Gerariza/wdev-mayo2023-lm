import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

//Seccion de componentes
import ListarCurso from './componetsCurso/index'; //Solo colocamos import y ListarCurso, lo demas se autorellena

function App() {
  return (
    <div className="container-fluid">
      <ListarCurso></ListarCurso> 
    </div>
        );
}

export default App;
