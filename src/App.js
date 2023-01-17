import './App.css';
import RenderizadoElementos from './Components/RenderizadoElementos';
import Eventos from './Components/Eventos';
import {EventosEs7, MasSobreEventos} from './Components/EventosEs7';
import Padre from './Components/ComunicaionComponentes';
import CicloDeVida from './Components/CicloDeVida';
import AjaxApis from './Components/AjaxApis';
import ContadorHooks from './Components/ContadorHooks';
import ScrollHooks from './Components/ScrollHooks';
import RelojHooks from './Components/RelojHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RenderizadoElementos></RenderizadoElementos>
        <hr></hr>
        <Eventos></Eventos>
        <hr></hr>
        <EventosEs7></EventosEs7>
        <hr></hr>
        <MasSobreEventos></MasSobreEventos>
        <hr></hr>
        <Padre></Padre>
        <hr></hr>
        <CicloDeVida></CicloDeVida>
        <hr></hr>
        <AjaxApis></AjaxApis>
        <hr></hr>
        <ContadorHooks></ContadorHooks>
        <hr></hr>
        <ScrollHooks></ScrollHooks>
        <hr></hr>
        <RelojHooks></RelojHooks>
      </header>
    </div>
  );
}

export default App;
