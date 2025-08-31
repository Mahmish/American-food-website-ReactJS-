import React from 'react'
import { Link } from 'react-router-dom'

export default function loginPage() {
  return (
      <div>
          <div className='loginPage'>
              <div className='container'>
                  <div className='row'>
                      <div className='col-lg-12'>
                          <div className='login'>
                              <h1>Register</h1>
                              <form>
                                  <label>Full Name</label><br/>
                                  <input type='text' placeholder='Enter your Full Name' /><br/><br/>
                                  <label>Email</label><br/>
                                  <input type='email' placeholder='Enter your email' /><br/><br/>
                                  <label>Password</label><br/>
                                  <input type='password' placeholder='Enter your Password' /><br/><br/>
                                  <label>Confirm Password</label><br/>
                                  <input type='password' placeholder='Enter your Confirm Password' /><br/><br/>
                                  <button>Register</button><br/><br/>
                                  <p>Already have an account? <Link to="/loginPage">Login</Link></p>
                              </form>
                           </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
