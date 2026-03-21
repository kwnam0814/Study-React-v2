import React from "react";
import { useState } from "react";
import ShoesData from "../data";
import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap";

const Shoes = () => {
  const [Shoes] = useState(ShoesData);
  return (
    <>
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
};

export default Shoes;
