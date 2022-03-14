import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Bienvenido a Gamers" />
      <Item/>
    </div>
  );
}

export default App;