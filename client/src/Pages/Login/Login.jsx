import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Login = () => {
  return (
    <>
    
    <div className='login-body'>
        <div className="split-screen-login">
          <div className="right-login" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form>
              <section className="copy-login">
                <h2 style={{ fontSize: "1.8rem", fontWeight: "700", textAlign: "center" }}>Log In</h2>
                <div className="login-container-login">
                  <p style={{ textAlign: "center" }}>New to our Platform?
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                      <strong>Sign Up</strong>
                    </Link>
                  </p>
                </div>
              </section>
              <div className="input-container-login userid">
                <label htmlFor="userid">Nick Name</label>
                <input className='login-input' id="userid" name="userid" type="text"
                  // onChange={(e) => { setUserid(e.target.value) }}
                  // value={userid}
                  required
                  placeholder='Enter E-mail id'
                />
              </div>

              <div className="input-container-login password">
                <label htmlFor="password">Password</label>
                <input className='login-input' id="password" name="password" placeholder="Enter Your Password" type="password"
                // <input className='login-input' id="password" name="password" placeholder="Must be at least 6 characters" type={showPassword ? "text" : "password"}
                  // onChange={(e) => { setPassword(e.target.value) }}
                  // value={password}
                  required
                />
              </div>
              <div className="show-pass" style={{ display: "flex", alignItems: "center", margin: "20px auto" }}>
                <input
                  type='checkbox'
                  className='login-input'
                  id='showPassword'
                // onChange={handleTogglePassword}
                />
                <label style={{ marginBottom: "0px", marginLeft: "5px" }} htmlFor='showPassword'>Show Password</label>
              </div>

              <div className="input-container-login cta">
              </div>
              <button className="signup-btn" type="submit">Log In</button>
              <Link to={"/forgotPassword"} style={{ textDecoration: "none" }}><p style={{ fontSize: "small", color: "gray", marginTop: "10px" }}>Forgot Password?</p></Link>
              <section className="copy-login legal">
                <p>
                  <span className="small" style={{ fontSize: "80%", textAlign: "center" }}>By continuing, you agree to accept our <br />
                    <Link>Privacy Policy</Link> &amp;
                    <Link>Terms of Service</Link>
                  </span>
                </p>
              </section>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login