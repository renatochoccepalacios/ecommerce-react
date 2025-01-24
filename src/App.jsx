import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <div>
            <NavBar />

            <div className="container">
                <h1 className="text-center">Hola, Bootstrap en React</h1>
                <button className="btn btn-primary">Botón</button>
            </div>
        </div>
    );
}

export default App;