import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [us, setus] = useState(false);
  const [u, setu] = useState({});

  const data = localStorage.getItem("user");
  const name = JSON.parse(data).nickname;

  const navigate = useNavigate();
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
        <h1>Hello, {name}</h1>
      <div className="sessions-right">
        <div
          className="total-sessions-count"
          onClick={() => navigate("/games")}
        >
          <p className="sessions-count-heading">Games</p>
        </div>
        <div className="upcoming-sessions-count">
          <p className="sessions-count-heading">Quiz</p>
        </div>
        <div className="past-sessions-count">
          <p className="sessions-count-heading">Courses</p>
        </div>
        <div className="request-sessions-count">
          <p className="sessions-count-heading">Community</p>
        </div>
      </div>


      <br></br>
      <br></br>
    </>
  );
};

export default Home;
