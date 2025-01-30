import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import LogoNike from "./img/logo-nike.png";

function App() {
    return (
        <div>
            <NavBar imgBrand={LogoNike} />
            <ItemListContainer greeting="Bienvenidos a la tienda de Nike" />
        </div>
    );
}

export default App;