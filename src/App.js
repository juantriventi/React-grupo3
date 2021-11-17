import logo from './logo.svg';
import './App.css';
import ListaProductos from './components/ListaProductos';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Lista de productos</h1>
      </header>
     <ListaProductos/>
    </div>
  );
}

export default App;
