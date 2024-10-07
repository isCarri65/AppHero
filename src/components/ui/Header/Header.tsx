import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { setLogout } from "../../../redux/slices/auth";

export const Header = () => {
  const dispatch = useAppDispatch()
  const handleLogout = ()=>{
    dispatch(setLogout())
  }
  return (
    <Navbar bg="dark" data-bs-theme="dark" >
      <Container style={{
        display: "flex",
        gap: "20px",
      }}>
        <Navbar.Brand href="#home">
          <Link to={"/home"} className="nav-link">
            Inicio
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto" style={{
        display: "flex",
        gap: "20px",
      }}>
          <Nav.Item>
            <Link to={"/search"} className="nav-link">
              Buscar Heroe
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={"/dcHeroes"} className="nav-link">
              DC Heroes
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={"/marvelHeroes"} className="nav-link">
              Marvel Heroes
            </Link>
          </Nav.Item>
        </Nav>
        <Navbar.Collapse className="justify-content-end gap-2">
          <Navbar.Text>Ingresando como: admin</Navbar.Text>
          <Nav.Item>
            <div 
            className="d-flex justiifi-content-center align-items-center"
            onClick={handleLogout}>
              <span style={{color: "#fff"}} className="material-symbols-outlined">logout</span>
            </div>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
