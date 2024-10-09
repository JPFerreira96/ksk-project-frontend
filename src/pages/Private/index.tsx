import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode, useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../contexts/Auth/AuthContext";

const DashboardContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "navbar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: 60px 1fr 40px;
  height: 100vh;
`;

const Header = styled.header`
  grid-area: header;
  background: #003470;
  color: white;
  padding: 10px;
`;

const Navbar = styled.nav`
  grid-area: navbar;
  background: #0055a4;
  color: white;
  padding: 10px;
  transition: width 0.3s ease;
  width: 200px;

  &.collapsed {
    width: 60px;
  }

  // Estilo para a lista de links
  ul {
    list-style-type: none; // Remove marcadores de lista
    padding: 0; // Remove padding
    margin: 0; // Remove margin

    li {
      margin: 10px 0; // Espaçamento vertical entre os links
      cursor: pointer;

      &:hover {
        text-decoration: underline; // Estilo de hover para melhor usabilidade
      }
    }
  }
`;

const MainContent = styled.main`
  grid-area: main;
  padding: 20px;
  background: #f9f9f9;
`;

const Footer = styled.footer`
  grid-area: footer;
  background: #003470;
  color: white;
  padding: 10px;
  text-align: center;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 18px;
  color: white; // Mudança de cor para o botão
`;

interface DashboardProps {
  children: ReactNode; // Define o tipo para children
}

export const Private: React.FC<DashboardProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  };

  return (
    <DashboardContainer>
      <Header>
        <h1>Header do Dashboard</h1>
      </Header>
      <Navbar className={collapsed ? "collapsed" : ""}>
        <ToggleButton onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "▶" : "▼"} {/* Ícone de seta */}
        </ToggleButton>
        {!collapsed && (
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/settings">Configurações</Link>
            </li>
            {auth.user && (
              <li>
                <button onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </button>
              </li>
            )}
          </ul>
        )}
      </Navbar>
      <MainContent>{children}</MainContent>
      <Footer>
        <p>Footer do Dashboard</p>
      </Footer>
    </DashboardContainer>
  );
};
