// import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Hello
        name = "Felix"
        pesan = "Selamat datang di kelas IF-31"
       />
       <Hello/>
       <Product/>
      </header>
    </div>

  );
}

export default App;
