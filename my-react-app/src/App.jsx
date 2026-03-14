import React, { useState } from "react";

import "./App.css";

const App = () => {
  let post = "강남 우동 맛집";

  const [Title1, setTitle1] = useState("리액트 공부하기");
  const [Title2, setTitle2] = useState("남자 정장 추천");
  const [Title3, setTitle3] = useState("여자 정장 추천");
  // 자주 변경될 것 같은 html 부분은 state로 만들어놓기
  // Title 자리 : "리액트 공부하기" 같은 자료가 들어있음
  // setTitle 자리 : state 변경을 도와주는 함수가 들어있음

  // 배열 하나로 깔끔하게 관리하는 법
  // const [titles, setTitles] = useState([
  //   "리액트 공부하기",
  //   "남자 정장 추천",
  //   "여자 정장 추천",
  // ]);

  // 화면에 뿌릴 때는?
  // <h1>{titles[0]}</h1>

  return (
    <>
      <div className="card">
        {/* class가 아니라 className */}
        <div className="black-nav">
          <h2 id={post}>블로그!</h2>
        </div>
        <div>
          {/* 변수 넣을 때(데이터바인딩)는 {중괄호} */}
          <h3>{post}</h3>
        </div>
        <div>
          {/* style 넣을 때는 style={{스타일명: "값"}} */}
          <h4 style={{ color: "red", fontSize: "35px" }}>스타일 속성</h4>
        </div>
      </div>
      <div className="list card">
        <div>
          <h2>{Title1}</h2>
          <p>2월 17일 발행</p>
        </div>

        <hr />

        <div>
          <h2>{Title2}</h2>
          <p>2월 18일 발행</p>
        </div>

        <hr />

        <div>
          <h2>{Title3}</h2>
          <p>2월 19일 발행</p>
        </div>
      </div>
    </>
  );
};

export default App;
