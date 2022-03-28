import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ItemListContainer from "./components/ItemListContainer";
import Item from "./components/Item";
import NavBar from "./components/NavBar/NavBar";
import ItemDetail from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound404 from "./components/NotFound404";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:category" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;