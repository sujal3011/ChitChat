import React from 'react'

const Login = () => {
  return (
    <div className='container main'>


        <form>

        <h1>Log In</h1>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>


    <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password"/>
    </div>


    <button type="submit" className="btn btn-primary">Log In</button>
        </form>

        <p>Don't have an account? Sign up here</p>

    </div>

  )
}

export default Login