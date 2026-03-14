import React from "react";

import "./App.css";

const App = () => {
  let post = "강남 우동 맛집";

  return (
    <div className="App">
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
  );
};

export default App;
