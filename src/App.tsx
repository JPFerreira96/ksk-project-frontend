// index.tsx
import { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AuthContext } from "./contexts/Auth/AuthContext";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { Private } from "./pages/Private";

function App() {
  const { user, signout } = useContext(AuthContext);
  const location = useLocation();

  const handleLogout = async () => {
    await signout();
    window.location.href = window.location.href; // Redireciona após logout
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/private" 
          element={
            user ? (
              <RequireAuth>
                <Private>
                  <h1>Olá {user.name}, seja bem-vindo !!!</h1>
                </Private>
              </RequireAuth>
            ) : (
              <Login />
            )
          } 
        />
      </Routes>
    </div>
  );
}

export default App;

// Adicione esta linha para evitar o erro TS1208
export { };

