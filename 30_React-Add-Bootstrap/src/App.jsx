// import { Button } from "react-bootstrap"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Alert } from "react-bootstrap";

// function App() {

//   return (
//     <>
//      <h1> Add Bootstrap in React js </h1>
//      <Button variant="dark">ok</Button>
//      <Alert variant="success" >install....</Alert>
//      <button>Simple button</button>
//      <Button onClick={()=>alert("bootstrap button")}>Bootstrap button</Button>
//     </>
//   );
// }

// export default App
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-secondary" >
      <Container style={{backgroundColor:"grey"}}>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
