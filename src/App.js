import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import SobreMi from './Components/SobreMi/SobreMi';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <SobreMi/>
    </div>
  );
}

export default App;
