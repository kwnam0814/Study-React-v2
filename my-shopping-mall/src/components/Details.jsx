import React, { useEffect, useState } from "react";
import ShoesData from "../data";
import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import styled from "styled-components";

let Btn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === "blue" ? "white" : "black")};
  padding: 10px;
  border: 1px solid black;
`;

let Box = styled.div`
  background: grey;
  padding: 20px;
`;

const Shoes = (props) => {
  useEffect(() => {
    console.log("안녕");
  }, []);
  const [count, setCount] = useState(0);

  return (
    <>
      {count}
      <button
        className="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <Box>
        <Btn bg="red">버튼</Btn>
        <Btn bg="green">버튼</Btn>
        <Btn bg="blue">버튼</Btn>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold p-[10px] border border-black">
          주문하기
        </button>
      </Box>

      <Container>
        <Row>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
            />
            <h4>{props.shoes[0].title}</h4>
            <p>{props.shoes[0].price}</p>
            <button className="btn btn-danger">주문하기</button>
          </Col>
          <Col>
            {/* html에서 public폴더 이미지 사용할 때 권장방식(Vite 사용중일 때) */}
            <img src={import.meta.env.BASE_URL + "shoes2.jpg"} width="80%" />
            <h4>{props.shoes[1].title}</h4>
            <p>{props.shoes[1].price}</p>
            <button className="btn btn-danger">주문하기</button>
          </Col>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
            />
            <h4>{props.shoes[2].title}</h4>
            <p>{props.shoes[2].price}</p>
            <button className="btn btn-danger">주문하기</button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Shoes;
