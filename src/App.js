import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Item from './components/Item';

function App() {
  const title= "Bienvenido a Gamers!"
  const card = 'Soy el producto'
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer titulo={title} card={card}/>
      <Item/>
    </div>
  );
}

export default App;