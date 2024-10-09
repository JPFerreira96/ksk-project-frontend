// index.tsx
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./contexts/Auth/AuthContext";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { Private } from "./pages/Private";

function App() {
  const { user } = useContext(AuthContext);

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

