import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { navigate, useNavigate } from 'react-router-dom';

import './Login.css'



function Loginpage() {
    /*function account() {
        alert("Please create account first")
    }*/

    const [user, setUser] = useState({ email: '', password: '' })

    const { email } = user;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|net|edu)$/;

    const navigate = useNavigate()// use navigate means it's goes to submit and home page so use use navigate in this feedback
    function update(e) {

        console.log(user)
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    console.log(user);

    function submit(e) {
        console.log("data saved")
        e.preventDefault()


        if (!emailRegex.test(email)) {
            alert("❌ Invalid email: must include '@' and domain part ");
            return;
        }


        axios.post('http://localhost:8002/userlogin', user)

            .then((res) => {

                console.log(res);  //if you update password show in inspect  password update successfully with status show in console.
                //So, use console .log(res)






                if (res.data.status === 200) {
                    alert("✅ User login successful");
                    navigate("/navbar");
                }

                else if (res.data.status === 400) {
                    alert("❌ Email not found. Please create account first.");
                    navigate("/member");
                }
                else if (res.data.status === 404) {
                    alert("❌ Incorrect password");
                }




            })
            .catch((err) => {
                console.log(err);
                alert("⚠️ Server error. Please try again later.");
            })


        console.log(user)

    }


    return (

        <div className="loginbg">

            <form className='formcard' onSubmit={submit}>
                <div className='color'>



                    <h1 className="text-dark">Login</h1><div /><br />

                    <label className='email'>📧Email</label><br />
                    <input type="text" name="email" className='rounded logbook' placeholder="Email" onChange={update} required></input><div /><br />

                    <label className='password'>🔒Password</label><br />
                    <input type="password" className='rounded  logbook' placeholder="Password" name="password" onChange={update} required></input><div /><br />

                    <Link to={'/forgetpass'}> <h4>🔒Forgot Password</h4></Link>
                    <Link to={'/member'}> <p className='logp'>Create Account</p></Link>

                    <Button className='fs-3 sign' type='submit' variant="primary">Sign In</Button>

                </div>
            </form>

        </div>

    )
}
export default Loginpage

