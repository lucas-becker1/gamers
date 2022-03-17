import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemList from "./components/ItemList";
import "./components/ConsumiendoPokeApi";
import PokemonContainer from "./components/PokemonContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Gamers" />
      <PokemonContainer />
    </div>
  );
}

export default App;