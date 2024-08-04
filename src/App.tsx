import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContext } from './contexts/Auth/AuthContext';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Home } from './pages/Home';
import { Private } from './pages/Private';

function App() {

  const auth = useContext(AuthContext);
  // const navigate = useNavigate();


  const handleLogout = async () => {
    await auth.signout();
    // navigate('/');
    window.location.href = window.location.href;
  }
  return (
    <div className="App">
      <header>
        <h1>Projeto KSK</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Login</Link>
          {auth.user && <button onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Sair
          </button>}
        </nav>
      </header>
      <hr/>
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path = '/private' element={<RequireAuth><Private /></RequireAuth>} />
      </Routes>

    </div>
  );
}

export default App;
