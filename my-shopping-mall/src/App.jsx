import "./App.css";
import { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <>
      <nav>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </nav>
      <Button variant="info">Info</Button>
    </>
  );
}

export default App;
