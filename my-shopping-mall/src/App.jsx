import "./App.css";
import { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import ShoesData from "./data";
// import { 변수명1, 변수명2 } from "./data"; // 단, {} 안에는 export 했던 변수명 그대로 사용해야 함!

import Details from "./components/Details";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/detail">상세페이지</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Link to="/">홈으로</Link>
        <Link to="/detail">상세페이지</Link>

        <div className="bg-[url(./img/bg-1.png)] h-[300px] bg-cover bg-center"></div>
      </div>

      <Routes>
        <Route
          path="/detail"
          element={
            <div>
              <Details />
            </div>
          }
        />
        <Route path="/about" element={<div></div>} />
      </Routes>
    </>
  );
}

export default App;
