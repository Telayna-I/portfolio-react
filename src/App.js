import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import SobreMi from './Components/SobreMi/SobreMi';
import Skills from './Components/Skills/Skills';
import Trabajos from './Components/Trabajos/Trabajos';
import Contacto from './Components/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <SobreMi/>
      <Skills/>
      <Trabajos/>
      <Contacto/>
    </div>
  );
}

export default App;
