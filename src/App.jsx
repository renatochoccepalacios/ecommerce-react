import NavBar from "./components/NavBar/NavBar";
import LogoNike from "./img/logo-nike.png";

function App() {
    return (
        <div>
            <NavBar img={LogoNike} contador={0}/>
        </div>
    );
}

export default App;