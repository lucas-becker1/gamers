import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Item from './components/Item'

function App() {
  const title= "Bienvenido a Gamers"
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer title={title}/>
      <Item/>
    </div>
  );
}

export default App;