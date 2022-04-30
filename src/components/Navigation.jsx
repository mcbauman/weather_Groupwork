import { NavLink } from "react-router-dom";
import logo from "../image/logo.png"
import {
  Navbar,
  Container,
  Nav
} from "react-bootstrap";

function Navigation() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <NavLink style={{ fontSize: "1.5rem" }} to="/main/weather">
          <img className="nav-logo" src={logo} alt="" />
          </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="p-2 d-flex "
            style={{ maxHeight: "190px" }}
            navbarScroll>
            <NavLink to="/main/metar">METAR</NavLink>
            <NavLink to="/main/taf">TAF</NavLink>
            <NavLink to="/main/metar-taf">METAR | TAF</NavLink>
            <NavLink to="/main/metar-taf-decoded">DECODED DATA</NavLink>
            <NavLink to="/main/archive">ARCHIVE</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}
export default Navigation;
