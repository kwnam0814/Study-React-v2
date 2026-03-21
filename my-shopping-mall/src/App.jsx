import "./App.css";
import { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import ShoesData from "./data";
// import { 변수명1, 변수명2 } from "./data"; // 단, {} 안에는 export 했던 변수명 그대로 사용해야 함!

function App() {
  const [Shoes] = useState(ShoesData);

  return (
    <>
      <div>
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
      </div>
      <div className="bg-[url(./img/bg-1.png)] h-[300px] bg-cover bg-center"></div>
      <Container>
        <Row>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
            />
            <h4>{Shoes[0].title}</h4>
            <p>{Shoes[0].price}</p>
          </Col>
          <Col>
            {/* html에서 public폴더 이미지 사용할 때 권장방식(Vite 사용중일 때) */}
            <img src={import.meta.env.BASE_URL + "shoes2.jpg"} width="80%" />
            <h4>{Shoes[1].title}</h4>
            <p>{Shoes[1].price}</p>
          </Col>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
            />
            <h4>{Shoes[2].title}</h4>
            <p>{Shoes[2].price}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
