import React from 'react'
import { BsTelephoneXFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { FcLibrary } from "react-icons/fc";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import './Contactus.css'
import Footer from './Footer'








function Contactus() {


  const [user, setUser] = useState({ firstname: '', email: '', message: '' })

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/;

  const { firstname, email, message } = user;
  const navigate = useNavigate()// use navigate means it's goes to submit and home page so use use navigate in this feedback

  function update(e) {

    console.log(user)
    setUser({ ...user, [e.target.name]: e.target.value })
  }


  console.log(user);

  function submit(e) {
    e.preventDefault()



    if (!firstname || !email || !message) {
      alert("⚠️ Please fill in all fields.");
      return;
    }


    if (!emailRegex.test(email)) {
      alert("❌ Invalid email: must include '@' and domain part ");
      return;
    }


    axios.post("http://localhost:8002/usercontactregister", user)


      .then((res) => {


        console.log(res); //if you update password show in inspect  password update successfully with status show in console.
        //So, use console .log(res)


        if (res.data.status === 200) {
          alert("👤✅ User message Successfully and submited ")
          navigate("/navbar")

        }





      })
      .catch((err) => {
        console.log(err);
      })


    console.log(user)

  }



  return (

    <div className='dark'>

      <Navbar className="bg">
        <Container>
          <Navbar.Brand href="#home" className='text text-light fs-5'>✏️Discover, Learn, Thrive: Drive into our Library!</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Text>
            <p className='phone text-light fs-5'><BsTelephoneXFill />+91-8124872758, <IoMailSharp /> preethivasan03@gmail.com</p>
          </Navbar.Text>
        </Container>
      </Navbar>


      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className='logo fs-5'><FcLibrary />Library Management</Navbar.Brand>
          <Nav className="me-auto">


            <Link to={'/navbar'}><Nav.Link href="#pricing" className='font'>Home</Nav.Link></Link>
            {/*<Link to={'/admin'}><Nav.Link href="#pricing" className='font'>Admin</Nav.Link></Link>*/}

            {/*<NavDropdown title="Admin" className='font' id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" className='primary fs-5'>📚 Manage Books</NavDropdown.Item>
              <NavDropdown.Item href="#action3" className='text-success fs-5'>Manage Members</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='text-success fs-5'>Statistics & Reports</NavDropdown.Item>
            </NavDropdown>*/}

            {/*   <NavDropdown title="Members" className='font' id="navbarScrollingDropdown">
              <Link to={'/member'}><NavDropdown.Item href="#action3" className='primary fs-5'>Member Registration</NavDropdown.Item></Link>
           <NavDropdown.Item href="#action3" className='text-success fs-5'>Member Profiles</NavDropdown.Item>
              <NavDropdown.Item href="#action3" className='text-success fs-5'>Member List</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='text-success fs-5'>Borrowing History</NavDropdown.Item>
            </NavDropdown>*/}


            <NavDropdown title="Books" className='font' id="navbarScrollingDropdown">
              <Link to={'/fantasy'}><NavDropdown.Item href="#action3" className='text-light fs-5'>📚 Fantasy Books</NavDropdown.Item></Link>
              <Link to={'/novel'}> <NavDropdown.Item href="#action3" className='text-success fs-5'>📚 Novels</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to={'/autobio'}> <NavDropdown.Item href="#action5" className='text-success fs-5'>📚 Autobiography Books</NavDropdown.Item></Link>
            </NavDropdown>

            <NavDropdown title="📚Ebooks" className='font' id="navbarScrollingDropdown">
              <Link to={'/ebooks'}><NavDropdown.Item href="#action3" className='text-light fs-5'>📚 Availability Books</NavDropdown.Item></Link>
              {/*<NavDropdown.Item href="#action3" className='text-success fs-5'>Browse Catogories</NavDropdown.Item>*/}
            </NavDropdown>
            <Link to={'/about'}><Nav.Link href="#pricing" className='font'>About</Nav.Link></Link>
            <Nav.Link href="#pricing" className='font'>Contactus</Nav.Link>
            <Link to={'/usersettings'}><Button variant="warning" className='login'>LogOut</Button></Link>

          </Nav>
        </Container>
      </Navbar>

      <div className='loginbgss'>
        <h1 className='contactus'>CONTACT US</h1><div /><br />
        <form onSubmit={submit} >
          <label className='con fs-2 mt-5 '  >👤Name:</label><br />
          <input className='cons' type="text" name='firstname' onChange={update} placeholder='Name' ></input><div /><br />

          <label className='con fs-2' >📧Email:</label><br />
          <input className='cons' type="text" name='email' onChange={update} placeholder='Email'></input><div /><br />

          <label className='con fs-2' >Message:</label><br />
          <textarea className='cons msgbox ' col="60" row="90" name='message' onChange={update} placeholder='Message' ></textarea><div /><br />

          <button className='cont text-light fs-3' type="submit">Submit</button><div /><br />

        </form>
      </div>
      <Footer />

    </div>
  )
}

export default Contactus