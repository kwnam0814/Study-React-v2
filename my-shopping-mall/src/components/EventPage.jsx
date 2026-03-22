import React from "react";
import { Outlet } from "react-router-dom";

const EventPage = () => {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
};

export default EventPage;
