import "./App.css";
import { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import ShoesData from "./data";
// import { 변수명1, 변수명2 } from "./data"; // 단, {} 안에는 export 했던 변수명 그대로 사용해야 함!

import Shoes from "./components/shoes";

function App() {
  return (
    <>
      <div>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <div>
        <Shoes />
      </div>
    </>
  );
}

export default App;
