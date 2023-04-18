//import logo from './logo.svg';
import "./App.css";
import Favorites from "./components/Favourites";
import Meals from "./components/Meals.jsx";
import Modal from "./components/Modal";
import Search from "./components/Search";
import { useGlobalContext } from "./context";

function App() {
  const { showModal, favorites } = useGlobalContext();
  return (
    <div className="App">
      {<Search />}
      {favorites.length > 0 && <Favorites />}
      {<Meals />}
      {showModal && <Modal />}
    </div>
  );
}

export default App;
