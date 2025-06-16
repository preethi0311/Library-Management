import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BsTelephoneXFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { FcLibrary } from "react-icons/fc";
import { navigate, useNavigate } from 'react-router-dom';
import Footer from './Footer';

import './Usersettings.css'



function Usersettings() {

    const [user, setUser] = useState({ email: '', password: '' })

    const { email } = user;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|net|edu)$/;

    const navigate = useNavigate()// use navigate means it's goes to submit and home page so use use navigate in this feedback
    function update(e) {

        console.log(user)
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    console.log(user);

    /*function submit(e) {
        
        e.preventDefault()


        if (!emailRegex.test(user.email)) {
            alert("❌ Invalid email: must include '@' and domain part ");
            return;
        }


        axios.post('http://localhost:8002/useraccountdelete', user)

            .then((res) => {

                console.log(res.data);  //if you update password show in inspect  password update successfully with status show in console.
                //So, use console .log(res)






                if (res.data.status === 400) {
                    alert("❌ Email not found");
                }

                else if (res.data.status === 404) {
                   
                      alert("❌ Incorrect password");
                }
                else if (res.data.status === 200) {
                  
                     alert("✅ User logout successful")
                     navigate("/navbar")
                }




            })
            .catch((err) => {
                console.log(err);
            })


        console.log(user)

    }*/
    function submit(e) {
        e.preventDefault();

        if (!emailRegex.test(user.email)) {
            alert("❌Invalid email: must include '@' and domain part  ");
            return;
        }

        axios.post('http://localhost:8002/useraccountdelete', user)
            .then((res) => {
                console.log(res.data);                // which data send backend so do check

                const status = res.data.status;

                if (status === 400) {
                    alert("❌ Email not found ");
                } else if (status === 404) {
                    alert("❌ Password Incorrect");
                } else if (status === 200) {
                    alert("✅ User Account delete successfully");
                    navigate("/navbar");
                } else {
                    alert("⚠️ Internal Server Error");
                }
            })
            .catch((err) => {
                console.error("Server error:", err);
                alert("🚫Server Error Occured");
            });
    }




    return (



        <div className='dark'>

            <Navbar className="bg">
                <Container>
                    <Navbar.Brand href="#home" className='text text-light fs-5 '>✏️Discover, Learn, Thrive: Drive into our Library!</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Text>
                        <p className='phone text-light fs-5'><BsTelephoneXFill />+91-8124872758, <IoMailSharp /> preethivasan03@gmail.com</p>
                    </Navbar.Text>
                </Container>
            </Navbar>


            <Navbar className='nav' bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home" className='logos fs-5'><FcLibrary />Library Management</Navbar.Brand>
                    <Nav className="me-auto">


                        <Link to={'/navbar'}><Nav.Link href="#pricing" className='font ms-5'>Home</Nav.Link></Link>
                        {/*<Link to={'/admin'}><Nav.Link href="#pricing" className='font ms-5'>Admin</Nav.Link></Link>*/}

                        {/*<NavDropdown title="Admin" className='font' id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3" className='primary  fs-5'>📚 Manage Books</NavDropdown.Item>
                      <NavDropdown.Item href="#action3" className='text-success  fs-5'>Manage Members</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5" className='text-success  fs-5'>Statistics & Reports</NavDropdown.Item>
                    </NavDropdown>*/}

                        {/*<NavDropdown title="Members" className='font' id="navbarScrollingDropdown">
                      <Link to={'/member'}> <NavDropdown.Item href="#action3" className='primary   fs-5'>Member Registration</NavDropdown.Item></Link>
                      <NavDropdown.Item href="#action3" className='text-success  fs-5'>Member Profiles</NavDropdown.Item>
                      <NavDropdown.Item href="#action3" className='text-success  fs-5'>Member List</NavDropdown.Item>
                   <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5" className='text-success  fs-5'>Borrowing History</NavDropdown.Item>
                    </NavDropdown>*/}


                        <NavDropdown title="Books" className='font' id="navbarScrollingDropdown">
                            <Link to={'/fantasy'}> <NavDropdown.Item href="#action3" className='text-light  fs-5'>📚 Fantasy Books</NavDropdown.Item></Link>
                            <Link to={'/novel'}><NavDropdown.Item href="#action3" className='text-success  fs-5'>📚 Novels</NavDropdown.Item></Link>

                            <NavDropdown.Divider />
                            <Link to={'/autobio'}> <NavDropdown.Item href="#action5" className='text-success  fs-5'>📚 Autobiography Books</NavDropdown.Item></Link>
                        </NavDropdown>
                        <NavDropdown title="📚Ebooks" className='font' id="navbarScrollingDropdown">
                            <Link to={'/ebooks'}><NavDropdown.Item href="#action3" className='text-light  fs-5'>📚 Availability Books</NavDropdown.Item></Link>
                            {/* <NavDropdown.Item href="#action3" className='text-success  fs-5'>Browse Catogories</NavDropdown.Item>*/}
                        </NavDropdown>
                        <Nav.Link href="#pricing" className='font ms-5'>About</Nav.Link>
                        <Link to={'/contact'}><Nav.Link href="#pricing" className='font'>Contactus</Nav.Link></Link>
                        {/*<Link to={'/login'}><Button variant="warning" className='login'>Login</Button></Link>*/}

                    </Nav>
                </Container>
            </Navbar>

            <div className="loginbgout">

                <form className='formcards' onSubmit={submit}>
                    <div className='color'>



                        <h1 className="text-dark">LogOut</h1><div /><br />

                        <label className='logoutmail'>📧Email</label><br />
                        <input type="text" name="email" className='rounded logbooks' placeholder="Email" onChange={update} required></input><div /><br />

                        <label className='logoutpass'>🔒Password</label><br />
                        <input type="password" className='rounded  logbooks' splaceholder="Password" name="password" onChange={update} required></input><div /><br />

                        <Link to={'/forgetpass'}> <h4>🔒Forgot Password</h4></Link>
                        {/*<Link to={'/member'}> <p className='logp'>Create Account</p></Link>*/}

                        <Button className='fs-3 sign' type='submit' >LogOut</Button>

                    </div>
                </form>

            </div>
            <Footer />
        </div>

    )
}
export default Usersettings

