import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                   
                    <div className="row ">
                    <div className="col-md-4 "></div>
                    
                        <div className="col-md-4 my-5">
                        <h1>Login</h1>
                            <div className=" form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                              <Link to="/register">Register</Link>

                            <button className='btn btn-primary btn-md my-3'>Login</button>
                        </div>
                        <div className="col-md-4 "></div>
                    </div>
                </div>
            </div>
        )
    }
}
