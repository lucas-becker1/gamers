import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "./components/ConsumiendoPokeApi";
import PokemonContainer from "./components/PokemonContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Gamers" />
      <PokemonContainer />
    </div>
  );
}

export default App;