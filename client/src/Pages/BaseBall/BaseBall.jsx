import React, { useEffect, useState } from "react";
import NavBarHome from "../../Components/NavBarHome/NavBarHome";
import gif from "./Tomzepler.gif";
import "./Baseball.css"
const BaseBall = () => {

    const [ans, setAns] = useState("");
    const [count, setCount] = useState(0);
    const [loss, setLoss] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
  
    useEffect(() => {
      // Generate random numbers only once when the component mounts
      setNum1(Math.floor(Math.random() * 10));
      setNum2(Math.floor(Math.random() * 10));
    }, []); // Empty dependency array ensures this effect runs only once
  
    const submitans = () => {
      if (num1 + num2 === parseInt(ans)) {
        setCount(count + 1);
      } else {
        setLoss(loss + 1);
      }

      setNum1(Math.floor(Math.random() * 10));
      setNum2(Math.floor(Math.random() * 10));
      setAns("")
    };

  return (
    <>
      <NavBarHome></NavBarHome>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <center>
          <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>Lets Play !!</p>
          <img style={{ height: "200px", width: "300px" }} src={gif}></img>
          <p>Runs : {count}</p>
          <p>Wickets : {loss}</p>

          <p>
            {num1} + {num2}
          </p>
<div className="teee">
          <input
            type="number"
            className="ans-baseball"
            placeholder="Enter the ans"
            value={ans}
            onChange={(e)=>setAns(e.target.value)}
            style={{padding:"10px",borderRadius:"10px",fontSize:"15px"}}
          ></input>

          <button onClick={submitans}
          style={{padding:"7px 30px",borderRadius:"10px",fontSize:"20px",color:"white",backgroundColor:"rgba(32, 59, 232)"}}
          >Play !!</button>
          </div>
        </center>
      </div>
    </>
  );
};

export default BaseBall;
