import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import LogoNike from "./img/logo-nike.png";

function App() {
    return (
        <div>
            <NavBar img={LogoNike} />
            <ItemListContainer greeting="Bienvenidos a la tienda de Nike" />
        </div>
    );
}

export default App;