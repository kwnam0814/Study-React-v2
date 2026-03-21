import React, { useState } from "react";

import "./App.css";

const App = () => {
  let post = "강남 우동 맛집";

  const [Title, setTitle] = useState([
    "리액트 공부하기",
    "남자 정장 추천",
    "파이썬 독학",
  ]);

  let [Like, setLike] = useState([0, 0, 0]);

  const [modal1, setModal1] = useState(false);

  const [modal2, setModal2] = useState(true);

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

  const Modal2 = (props) => {
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
        <h4>{props.Title[0]}</h4>
        <p>날짜2</p>
        <p>상세내용2</p>
        <button
          className="button"
          onClick={() => {
            let copy = [...props.Title];
            copy[0] = "여자 정장 추천";
            props.setTitle(copy);
          }}
        >
          글 수정
        </button>
      </div>
    );
  };

  function Count() {
    console.log(1);
  }

  class Modal3 extends React.Component {
    constructor() {
      super();
      this.state = {
        name: "KIM",
        age: 20,
      };
    }
    render() {
      return (
        <div>
          안녕!!! {this.state.name} & {this.state.age}
        </div>
      );
    }
  }

  return (
    <>
      <div>
        <Modal3 />
      </div>
      <div className="card">
        <div className="black-nav">
          <h2 id={post}>블로그 제목!</h2>
        </div>
        <div>
          <h3>{post}</h3>
        </div>
        <div>
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
                  let copy = [...Like];
                  copy[0] = copy[0] + 1;
                  setLike(copy);
                }}
              >
                👍
              </span>{" "}
              {Like[0]}
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
              </button>{" "}
              <span
                onClick={() => {
                  let copy = [...Like];
                  copy[1] = copy[1] + 1;
                  setLike(copy);
                }}
              >
                👍
              </span>{" "}
              {Like[1]}
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
              {Title[2]}
            </h2>{" "}
            <span
              onClick={() => {
                let copy = [...Like];
                copy[2] = copy[2] + 1;
                setLike(copy);
              }}
            >
              👍
            </span>{" "}
            {Like[2]}
            <p>2월 19일 발행</p>
          </div>
        </div>
      </div>

      <div className="card">
        <button
          onClick={() => {
            setTitle[0];
          }}
        >
          0번글
        </button>
        <button
          onClick={() => {
            setTitle[1];
          }}
        >
          1번글
        </button>
        <button
          onClick={() => {
            setTitle[2];
          }}
        >
          2번글
        </button>
      </div>

      <div>{modal1 === true ? <Modal1 /> : null}</div>
      <div>
        {modal2 === true ? <Modal2 Title={Title} setTitle={setTitle} /> : null}
      </div>

      <div className="card">
        {[1, 2, 3].map(function () {
          return 1;
        })}
      </div>
      <div className="card">
        {[1, 2, 3].map(function (a) {
          return a;
        })}
      </div>
      <div className="card">
        {[1, 2, 3].map(function (b) {
          return "테스트";
        })}
      </div>

      <div className="card">
        {[1, 2, 3, 4, 5].map(function () {
          return <div>map 반복문입니다!</div>;
        })}
      </div>

      <div>
        {[1, 2, 3].map(function () {
          return (
            <div className="list card">
              <h3>html 반복생성</h3>
              <p>2월 20일 발행</p>
            </div>
          );
        })}
      </div>

      <div>
        {Title.map(function (c, i) {
          return (
            <div className="card" key={i}>
              <h3>{c}</h3>
              <p>2월 21일 발행</p>
            </div>
          );
        })}
      </div>

      <div>
        {Title.map(function (d, i) {
          return (
            <div className="card">
              <div className="card" key={i}>
                <h3>{Title[i]}</h3>
                <p>2월 21일 발행</p>
              </div>
              <button
                onClick={() => {
                  let copy = [...Title];
                  copy.splice(i, 1);
                  setTitle(copy);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
      </div>

      <div>
        <div>
          <input type="text" name="" id="" />
        </div>
        <div>
          <input type="range" name="" id="" />
        </div>
        <div>
          <input type="datetime-local" name="" id="" />
        </div>
        <div>
          <input type="number" name="" id="" />
        </div>
        <div>
          <select name="" id=""></select>
        </div>
        <div>
          <textarea name="" id=""></textarea>
        </div>
      </div>
    </>
  );
};

export default App;
