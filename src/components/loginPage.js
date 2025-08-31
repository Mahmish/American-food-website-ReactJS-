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
                              <h1>Login</h1>
                              <form>
                                  <label>Email</label><br/>
                                  <input type='email' placeholder='Enter your email' /><br/><br/>
                                  <label>Password</label><br/>
                                  <input type='password' placeholder='Enter your Password' /><br/><br/>
                                  <button>Login</button><br/><br/>
                                  <p>Don’t have an account? <Link to="/register">Register</Link></p>
                              </form>
                           </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
