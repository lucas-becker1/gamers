import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>

      <h1>GAMERS</h1>
      <h2>Tienda Online</h2>

    </div>
  );
}

export default App;
