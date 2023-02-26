import { NavLink } from "react-router-dom";
import { UserContext } from "../context/user.context";
import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbar1() {

  const { loggedUser, logout } = useContext(UserContext);

  console.log(loggedUser)
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container fluid>
          <Navbar.Brand href="/"><img src="/medvicelogo.png" alt="medvice-logo" style={{width:"45px"}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
            

              {loggedUser ? (
                <>
                  {/* <Navbar.Text>Welcome {loggedUser.email}</Navbar.Text> */}
                  <Nav.Link href="/medvice">My Area</Nav.Link>
                  <Nav.Link href="/medication/add">Add new meds</Nav.Link>
                  <Button onClick={logout}>Logout</Button> </>
              ) : (
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/signup">Register</Nav.Link>
                </>
              )}
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      </>

  );
}

export default Navbar1;
