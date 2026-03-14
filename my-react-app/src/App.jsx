import React, { useState } from "react";

import "./App.css";

const App = () => {
  let post = "강남 우동 맛집";

  const [Title, setTitle] = useState([
    "리액트 공부하기",
    "남자 정장 추천",
    "파이썬 독학",
  ]);

  // 자주 변경될 것 같은 html 부분은 state로 만들어놓기
  // Title 자리 : "리액트 공부하기" 같은 자료가 들어있음
  // setTitle 자리 : state 변경을 도와주는 함수가 들어있음

  // 이런 식으로도 가능함
  // const [Title1, setTitle1] = useState("리액트 공부하기");
  // const [Title2, setTitle2] = useState("남자 정장 추천");
  // const [Title3, setTitle3] = useState("여자 정장 추천");

  let [Like, setLike] = useState(0);

  const [modal1, setModal1] = useState(false); // 형식은 자유

  const [modal2, setModal2] = useState(true); // 형식은 자유

  function Modal1() {
    return (
      <div
        className="modal"
        style={{
          marginTop: "20px",
          padding: "20px",
          background: "#eee",
          textAlign: "left",
        }}
      >
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    );
  }

  const Modal2 = () => {
    return (
      <div
        className="modal"
        style={{
          marginTop: "20px",
          padding: "20px",
          background: "#eee",
          textAlign: "left",
        }}
      >
        <h4>제목2</h4>
        <p>날짜2</p>
        <p>상세내용2</p>
      </div>
    );
  };

  function Count() {
    console.log(1);
  }

  return (
    <>
      <div className="card">
        {/* class가 아니라 className */}
        <div className="black-nav">
          <h2 id={post}>블로그 제목!</h2>
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
          <button
            className="button"
            onClick={() => {
              let copyTitle = [...Title];
              copyTitle.sort();
              setTitle(copyTitle);
            }}
          >
            제목 가나다순 정렬
          </button>
        </div>
        <div>
          <div>
            <h2>
              {Title[0]}{" "}
              <span
                onClick={() => {
                  setLike(Like + 1);
                }}
              >
                👍
              </span>{" "}
              {Like}
            </h2>
            <p>2월 17일 발행</p>
          </div>

          <hr />

          <div>
            <h2>
              {Title[1]}
              <button
                className="button"
                onClick={() => {
                  {
                    /* 기존 state가 array/object이면 독립적 카피본을 만들어서 수정해야 함! */
                  }
                  let copy = [...Title];
                  copy[1] = "여자 정장 추천";
                  setTitle(copy);
                }}
              >
                성별 바꾸기
              </button>
            </h2>
            <p>2월 18일 발행</p>
          </div>

          <hr />

          <div>
            <h2
              onClick={() => {
                setModal1(!modal1);
              }}
            >
              {Title[2]}{" "}
            </h2>
            <p>2월 19일 발행</p>
          </div>
        </div>
      </div>

      {/* [동적인 UI 만드는 step]
      1. html, css로 미리 디자인 완성
      2. UI의 현재 상태를 state로 저장
      3. state에 따라 UI가 어떻게 보일지 작성 */}
      <div>{modal1 === true ? <Modal1 /> : null}</div>

      <div>{modal2 === true ? <Modal2 /> : null}</div>
    </>
  );
};

export default App;
