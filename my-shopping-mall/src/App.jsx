import "./App.css";
import { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import ShoesData from "./data";
// import { 변수명1, 변수명2 } from "./data"; // 단, {} 안에는 export 했던 변수명 그대로 사용해야 함!

import Details from "./components/Details";
import About from "./components/About";
import EventPage from "./components/EventPage";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function App() {
  let navigate = useNavigate();

  return (
    <>
      <div>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/detail");
                }}
              >
                상세페이지
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/about");
                }}
              >
                About
              </Nav.Link>
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
          path="/"
          element={
            <div>
              <h1>신발 쇼핑몰 메인입니다</h1>
              <p>상품을 보려면 위 메뉴의 '상세페이지'를 누르세요.</p>
            </div>
          }
        />
        <Route
          path="/detail"
          element={
            <div>
              <Details />
            </div>
          }
        />
        <Route path="/about" element={<About />}>
          <Route
            path="member"
            element={<div>about 내의 member페이지!</div>}
          ></Route>
          <Route
            path="location"
            element={<div>about 내의 location페이지!</div>}
          ></Route>
        </Route>
        <Route path="/event" element={<EventPage />}>
          <Route
            path="one"
            element={<div>첫 주문시 양배추즙 서비스 제공!</div>}
          ></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기!</div>}></Route>
        </Route>
        <Route path="*" element={<div>404 없는 페이지!</div>} />
      </Routes>
    </>
  );
}

export default App;
