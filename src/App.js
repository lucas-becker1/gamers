import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const title= "Bienvenido a Gamers"
  const card = 'Soy el producto'
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer title={title} card={card}/>
    </div>
  );
}

export default App;