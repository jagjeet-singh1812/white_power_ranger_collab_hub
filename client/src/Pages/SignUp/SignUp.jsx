import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import "./SignUp.css"

const SignUp = () => {
  return (
    <>

      <div className='login-body'>
        <div className="split-screen-login">
          <div className="right-login" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form>
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
                <label htmlFor="userid">Nick Name</label>
                <input className='login-input' id="userid" name="userid" type="text"
                  // onChange={(e) => { setUserid(e.target.value) }}
                  // value={userid}
                  required
                  placeholder='Enter your Nick Name'
                />
              </div>

              <div className="input-container-login userid">
                <label htmlFor="userid">Age</label>
                <input className='login-input' id="userid" name="userid" type="text"
                  // onChange={(e) => { setUserid(e.target.value) }}
                  // value={userid}
                  required
                  placeholder='Enter your Age'
                />
              </div>

              <div className="input-container-login userid">
                <label htmlFor="userid">Standard</label>
                <input className='login-input' id="userid" name="userid" type="text"
                  // onChange={(e) => { setUserid(e.target.value) }}
                  // value={userid}
                  required
                  placeholder='Enter your Standard'
                />
              </div>

              <div className="input-container-login password">
                <label htmlFor="password">Password</label>
                <input className='login-input' id="password" name="password" placeholder="Must be at least 6 characters" type="password"
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

              <div className="input-container-login password">
                <label htmlFor="password">Confirm Password</label>
                <input className='login-input' id="password" name="password" placeholder="Must be at least 6 characters" type="password"
                  // <input className='login-input' id="password" name="password" placeholder="Must be at least 6 characters" type={showPassword ? "text" : "password"}
                  // onChange={(e) => { setPassword(e.target.value) }}
                  // value={password}
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
  )
}

export default SignUp