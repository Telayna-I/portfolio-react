import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import SobreMi from './Components/SobreMi/SobreMi';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <SobreMi/>
      <Skills/>
    </div>
  );
}

export default App;
