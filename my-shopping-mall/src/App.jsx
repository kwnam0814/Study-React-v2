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
  // 1. 현재 시간을 저장할 상태(state) 생성
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    // 2. 1초마다 timer 상태를 업데이트하는 타이머 설정
    const intervalId = setInterval(() => {
      setTimer(new Date());
    }, 1000);

    // 3. 컴포넌트가 언마운트될 때 타이머 해제 (메모리 누수 방지)
    return () => clearInterval(intervalId);
  }, []);

  // 4. 보기 좋게 포맷팅 (원하는 형식으로 변경 가능)
  const formattedDate = timer.toLocaleDateString(); // 예: 2026. 3. 22.
  const formattedTime = timer.toLocaleTimeString(); // 예: 오후 4:46:18

  return (
    <>
      <div>
        <Navbar bg="light" variant="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                <Nav.Link onClick={() => navigate("/detail")}>
                  상세페이지
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
              </Nav>

              {/* --- 실시간 시간 표시 영역 시작 --- */}
              <Nav className="ms-auto">
                <span style={{ color: "#666", fontSize: "0.9rem" }}>
                  📅 {formattedDate} | ⏰ {formattedTime}
                </span>
              </Nav>
              {/* --- 실시간 시간 표시 영역 끝 --- */}
            </Navbar.Collapse>
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
        <Route path="/detail" element={<Details shoes={ShoesData} />} />
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
