import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>Shop20 Docs</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <NavDropdown title="API" id="basic-nav-dropdown">
              <LinkContainer to="/api/endpoints">
                <NavDropdown.Item>Endpoints</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/roster">
                <NavDropdown.Item>other Item</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export { Navigation };

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <Navigation />
  </header>
);

export default Header;
