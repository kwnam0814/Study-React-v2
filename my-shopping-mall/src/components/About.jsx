import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h3>About페이지!</h3>
      <p>회사 정보</p>
      <Outlet></Outlet>
    </div>
  );
};

export default About;
