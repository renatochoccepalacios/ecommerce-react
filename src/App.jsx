import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa el JS de Bootstrap


function App() {
    return (
        <div>
            <NavBar />

            {/* <div className="container">
                <h1 className="text-center">Hola, Bootstrap en React</h1>
                <button className="btn btn-primary">Botón</button>
            </div> */}
        </div>
    );
}

export default App;