import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css"
const SignUp = () => {
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("");
  const [standard, setStandard] = useState("");
  const [p,showp]=useState(false);

  const navigate=useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
        localStorage.setItem(
          "user",
          JSON.stringify({
            nickname,
            age,
            standard,
            password,
          })
        );
        console.log("User registered successfully!");
        navigate("/home")

    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
  <div className='login-body'>
        <div className="split-screen-login">
          <div className="right-login" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form onSubmit={handleSignUp}>
              <section className="copy-login">
                <h2 style={{ fontSize: "1.8rem", fontWeight: "700", textAlign: "center" }}>Sign Up</h2>
                <div className="login-container-login">
                  <p style={{ textAlign: "center" }}>Have an account?
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <strong> Log In</strong>
                    </Link>
                  </p>
                </div>
              </section>
              <div className="input-container-login userid">
                <label htmlFor="userid">Ward Name</label>
                <input className='login-input' id="userid" name="userid" type="text"
                  onChange={(e) => { setNickname(e.target.value) }}
                  value={nickname}
                  required
                  placeholder='Enter your Ward Name'
                />
              </div>

              <div className="input-container-login userid">
                <label htmlFor="userid">Age</label>
                <input className='login-input' id="userid" name="userid" type="number"
                  onChange={(e) => { setAge(e.target.value) }}
                  value={age}
                  required
                  placeholder='Enter the Age'
                />
              </div>

              <div className="input-container-login userid">
                <label htmlFor="userid">OCE Level</label>
                <input className='login-input' id="userid" name="userid" type="text"
                  onChange={(e) => { setStandard(e.target.value) }}
                  value={standard}
                  required
                  placeholder='Enter OCE Level'
                />
              </div>

              <div className="input-container-login password">
                <label htmlFor="password">Password</label>
                <input className='login-input' id="password" name="password" placeholder="Must be at least 6 characters"
                 type={p ? "text" : "password"}
                  // <input className='login-input' id="password" name="password" placeholder="Must be at least 6 characters"/>}
                  onChange={(e) => { setPassword(e.target.value) }}
                  value={password}
                  required
                />
              </div>

              <div className="show-pass" style={{ display: "flex", alignItems: "center", margin: "20px auto" }}>
                <input
                  type='checkbox'
                  className='login-input'
                  id='showPassword'
                onChange={()=>{showp(!p)}}
                />
                <label style={{ marginBottom: "0px", marginLeft: "5px" }} htmlFor='showPassword'>Show Password</label>
              </div>

              <div className="input-container-login password">
                <label htmlFor="password">Confirm Password</label>
                <input className='login-input' id="password" name="password" placeholder="Must be at least 6 characters" type="password"
                  // <input className='login-input' id="password" name="password" placeholder="Must be at least 6 characters" type={showPassword ? "text" : "password"}
                  onChange={(e) => { setcPassword(e.target.value) }}
                  value={cpassword}
                  required
                />
              </div>

              <div className="input-container-login cta">
              </div>
              <button className="signup-btn" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
