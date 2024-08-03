import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Private } from './pages/Private';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Projeto KSK</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Página Privada</Link>
        </nav>
      </header>
      <hr/>
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path = '/private' element={<Private />} />
      </Routes>

    </div>
  );
}

export default App;
