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
            <h2>
              {Title[2]}{" "}
              {/* 기존 state가 array/object이면 독립적 카피본을 만들어서 수정해야 함! */}
              <button
                className="button"
                onClick={() => {
                  let copyTitle = [...Title];
                  copyTitle[2] = "자바 독학";
                  setTitle(copyTitle);
                }}
              >
                언어 변경
              </button>
            </h2>
            <p>2월 19일 발행</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
