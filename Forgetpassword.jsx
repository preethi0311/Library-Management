import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { BsTelephoneXFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { FcLibrary } from "react-icons/fc";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';
import Footer from './Footer'
import { navigate, useNavigate } from 'react-router-dom';
import './Forgetpassword.css'

function Forgetpassword() {




  const [user, setUser] = useState({ email: '', password: '', confirmpassword: '' })
  const { email, password, confirmpassword } = user;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|net|edu)$/;
  const navigate = useNavigate()// use navigate means it's goes to submit and home page so use use navigate in this feedback


  function update(e) {

    console.log(user)
    setUser({ ...user, [e.target.name]: e.target.value })


  }
  console.log(user)

  function submit(e) {
    e.preventDefault()


    if (!email || !password || !confirmpassword) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    if (password !== confirmpassword) {
      alert("❌ Passwords do not match.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("❌ Invalid email: must include '@' and domain part ");
      return;
    }
    if (user.password.length < 7 || user.password.length > 12) {
      alert("🔒 Password must be between 7 to 12 characters");
      return;
    }


    axios.post('http://localhost:8002/forgotusers', user)



      .then((res) => {

        console.log(res);  //if you update password show in inspect  password update successfully with status show in console.
        //So, use console .log(res)


        const { status } = res.data;


        if (res.data.status === 200) {
          alert("✅ Password reset successfully.");
          navigate("/navbar")
        }
        else if (status === 400) {
          alert("👤  User not found.");
        }
        else {
          alert("⚠️ Something went wrong.");
        }
      })
      .catch((err) => {
        console.log(err);
      })


    console.log(user)

  }

  return (
    <div>

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

            {/*  <NavDropdown title="Members" className='font' id="navbarScrollingDropdown">
              <Link to={'/member'}> <NavDropdown.Item href="#action3" className='primary fs-5'>Member Registration</NavDropdown.Item></Link>
             <NavDropdown.Item href="#action3" className='text-success fs-5'>Member Profiles</NavDropdown.Item>
              <NavDropdown.Item href="#action3" className='text-success fs-5'>Member List</NavDropdown.Item>
            <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='text-success fs-5'>Borrowing History</NavDropdown.Item>
            </NavDropdown>*/}


            <NavDropdown title="Books" className='font' id="navbarScrollingDropdown">
              <Link to={'/fantasy'}><NavDropdown.Item href="#action3" className='text-light fs-5'>📚 Fantasy Books</NavDropdown.Item></Link>
              <Link to={'/novel'}> <NavDropdown.Item href="#action3" className='text-success fs-5'>📚 Novels</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to={'/autobio'}>  <NavDropdown.Item href="#action5" className='text-success fs-5'>📚 Autobiography Books</NavDropdown.Item></Link>
            </NavDropdown>

            <NavDropdown title="📚Ebooks" className='font' id="navbarScrollingDropdown">
              <Link to={'/ebooks'}><NavDropdown.Item href="#action3" className='text-light fs-5'>📚Availability Books</NavDropdown.Item></Link>
              {/*<NavDropdown.Item href="#action3" className='text-success fs-5'>Browse Catogories</NavDropdown.Item>*/}
            </NavDropdown>
            <Link to={'/about'}><Nav.Link href="#pricing" className='font'>About</Nav.Link></Link>
            <Link to={'/contact'}><Nav.Link href="#pricing" className='font'>Contactus</Nav.Link></Link>
            <Link to={'/usersettings'}><Button variant="warning" className='login'>LogOut</Button></Link>

          </Nav>
        </Container>
      </Navbar>


      <div className='loginbgs'>

        <form onSubmit={submit} className='forgot'>
          <h2 className='wordpass'>Forgot Password</h2><div /><br />

          <label className='forgetpass fs-4'  >📧Email:</label><br />
          <input type="text" className='rounded forput' onChange={update} name="email" placeholder='Email' required></input><div /><br />
          <label className='forgetpass fs-4'>🔒NewPassword:</label><br />
          <input type="password" name="password" className='rounded forput' placeholder='Newpassword' onChange={update} required></input><div /><br />
          <label className='forgetpass fs-4'>🔒ConfirmPassword:</label><br />
          <input type="password" name="confirmpassword" className='rounded forput' placeholder='Confirmpassword' onChange={update} required ></input><div /><br />
          <button className='forin fs-4' onClick={submit}>ResetPassword</button>

        </form>
      </div>


      <Footer />

    </div>
  )
}

export default Forgetpassword