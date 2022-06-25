import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import SobreMi from './Components/SobreMi/SobreMi';
import Skills from './Components/Skills/Skills';
import Trabajos from './Components/Trabajos/Trabajos';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <SobreMi/>
      <Skills/>
      <Trabajos/>
    </div>
  );
}

export default App;
