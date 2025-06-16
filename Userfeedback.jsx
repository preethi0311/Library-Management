import React, { useState } from 'react';
import './FeedbackForm.css';
import axios from "axios";
import { navigate, useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BsTelephoneXFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { FcLibrary } from "react-icons/fc";
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';


function Userfeedback() {



  const [user, setUser] = useState({ name: '', email: '', feedback: '' });


  const [submitted, setSubmitted] = useState(false);

  const { email } = user;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/;

  const navigate = useNavigate()// use navigate means it's goes to submit and home page so use use navigate in this feedback


  function update(e) {

    setUser({ ...user, [e.target.name]: e.target.value });
  };



  function handleSubmit(e) {


    e.preventDefault();


    if (!emailRegex.test(email)) {

      alert("❌ Invalid email: must include '@' and domain part ");
      return;
    }


    axios.post("http://localhost:8002/userfeedbackregister", user)

      .then((res) => {
        console.log(res);

        if (res.data.status === 200) {
          alert("👤✅User feedback successfully Registered ")
          navigate("/navbar")
        }
      })


    setSubmitted(true);


  };



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
          <Navbar.Brand href="#home" className='logo fs-5'><FcLibrary />Library Management</Navbar.Brand>
          <Nav className="me-auto">


            <Link to={'/navbar'}><Nav.Link href="#pricing" className='font'>Home</Nav.Link></Link>


            {/*<Link to={'/admin'}> <Nav.Link href="#pricing" className='font'>Admin</Nav.Link></Link>*/}

            {/*} <NavDropdown title="Admin" className='font' id="navbarScrollingDropdown">
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
              <Link to={'/ebooks'}> <NavDropdown.Item href="#action3" className='text-light  fs-5'>📚 Availability Books</NavDropdown.Item></Link>
              {/*  <NavDropdown.Item href="#action3" className='text-success  fs-5'>Browse Catogories</NavDropdown.Item>*/}
            </NavDropdown>
            <Link to={'/about'}><Nav.Link href="#pricing" className='font'>About</Nav.Link></Link>
            <Link to={'/contact'}><Nav.Link href="#pricing" className='font'>Contactus</Nav.Link></Link>
            <Link to={'/usersettings'}><Button variant="warning" className='login'>LogOut</Button></Link>

          </Nav>
        </Container>
      </Navbar>




      <div className='feedbackform'>
        <h2 className='feedtit'> Welcome to my Feedback Page😊</h2>


        <div className="feedback-container">



          <h2>📝We'd love your feedback</h2>

          {submitted && <div className="thank-you">✅😊 Thank you for your response!

          </div>


          }


          <form className="feedback-form" onSubmit={handleSubmit}>


            <input type="text" name="name" placeholder="👤 Your Name" value={user.name} onChange={update} required />

            <input type="email" name="email" placeholder="📧 Your Email" value={user.email} onChange={update} required />


            <textarea name="feedback" placeholder="💬 Your Feedback" value={user.message} onChange={update} rows="5" required />


            <button type="submit">Send Feedback</button>


          </form>

        </div>


      </div>
      <Footer />
    </div>
  )
}

export default Userfeedback

