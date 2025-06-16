import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { BsTelephoneXFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { FcLibrary } from "react-icons/fc";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RiCopyrightLine } from "react-icons/ri";
//import Footer from './Footer'
import { navigate, useNavigate } from 'react-router-dom';
import './Memberregister.css'

function Memberregistration() {


  const [user, setUser] = useState({
    firstname: '', fathername: '', dateofbirth: '', email: '', password: '',
    contact: '', address: ''
  })
  const navigate = useNavigate()

  const { email } = user;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/;


  function update(e) {

    console.log(user)
    setUser({ ...user, [e.target.name]: e.target.value })
  }


  console.log(user);


  function submit(e) {
    e.preventDefault()

    if (!emailRegex.test(email)) {
      alert("❌ Invalid email: must include '@' and domain part ");
      return;
    }
    if (!/^\d{10}$/.test(user.contact)) {
      alert("📵 Mobile number must be exactly 10 digits");
      return;
    }
    if (user.password.length < 7 || user.password.length > 12) {
      alert("🔒 Password must be between 7 to 12 characters");
      return;
    }

    axios.post("http://localhost:8002/UserRegister", user)


      .then((res) => {

        console.log(res); //if you update password show in inspect  password update successfully with status show in console.
        //So, use console .log(res)



        if (res.data.status === 200) {
          alert("👤✅ Account created Successfully")
          navigate("/navbar")


        }
        else if (res.data.status === 409) {
          alert("⚠️This email is already registered. Please login")
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
          <Navbar.Brand href="#home" className='logos fs-5'><FcLibrary />Library Management</Navbar.Brand>
          <Nav className="me-auto">


            <Nav.Link href="#pricing" className='font homefirst'>Home</Nav.Link>



            {/*<Link to={'/admin'}> <Nav.Link href="#pricing" className='font'>Admin</Nav.Link></Link>*/}

            {/*<NavDropdown title="Admin" className='font' id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" className='primary fs-5'>📚 Manage Books</NavDropdown.Item>
              <NavDropdown.Item href="#action3" className='text-success fs-5'>Manage Members</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='text-success fs-5'>Statistics & Reports</NavDropdown.Item>
            </NavDropdown>*/}

            {/* <NavDropdown title="Members" className='font' id="navbarScrollingDropdown">
              <Link to={'/member'}> <NavDropdown.Item href="#action3" className='primary fs-5'>Member Registration</NavDropdown.Item></Link>
            <NavDropdown.Item href="#action3" className='text-success fs-5'>Member Profiles</NavDropdown.Item>
              <NavDropdown.Item href="#action3" className='text-success fs-5'>Member List</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='text-success fs-5'>Borrowing History</NavDropdown.Item>
            </NavDropdown>*/}
            <Nav.Link href="#pricing" className='font homefirst'>Books</Nav.Link>

            {/*<NavDropdown title="Books" className='font' id="navbarScrollingDropdown">
              <Link to={'/fantasy'}><NavDropdown.Item href="#action3" className='text-light fs-5'>📚 Fantasy Books</NavDropdown.Item></Link>
              <Link to={'/novel'}> <NavDropdown.Item href="#action3" className='text-success fs-5'>📚 Novels</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to={'/autobio'}>  <NavDropdown.Item href="#action5" className='text-success fs-5'>📚 Autobiography Books</NavDropdown.Item></Link>
            </NavDropdown>*/}

            {/*<NavDropdown title="📚Ebooks" className='font' id="navbarScrollingDropdown">
               <Link to={'/ebooks'}><NavDropdown.Item href="#action3" className='text-light fs-5'>📚 Availability Books</NavDropdown.Item></Link> 
              <NavDropdown.Item href="#action3" className='text-success fs-5'>Browse Catogories</NavDropdown.Item>
            </NavDropdown>*/}
            <Nav.Link href="#pricing" className='font homefirst'>About</Nav.Link>
            <Nav.Link href="#pricing" className='font homefirst'>Contactus</Nav.Link>
            <Link to={'/usersettings'}><Button variant="success" className='login homefirst'>LogOut</Button></Link>

          </Nav>
        </Container>
      </Navbar>

      <div className='loginbgm'>

        <h2 className='registration'>Create User Account</h2>

        <form onSubmit={submit} >
          <table className='member' border={4}><br />

            <tr>
              <td className='labt '>👤Firstname:</td>
              <td><input type="text" name='firstname' className='roundin' onChange={update} required></input></td>
            </tr><div /><br />
            <tr>
              <td className='labt'>Father Name:</td>
              <td><input type="text" name='fathername' className='roundin' onChange={update} required></input></td>
            </tr><div /><br />
            <tr>
              <td className='labt'>📅Birthday:</td>
              <td><input type='date' name='dateofbirth' className='roundin' onChange={update} required></input></td>
            </tr><div /><br />
            {/*<tr>
              <td className='labt' name='gender'required >Gender:</td>
              <select className='roundin' onChange={update} >
                <option value='' >Female</option>
                <option value='' >Male</option>
                <option value='' >Other</option>
              </select>
            </tr> <div /><br />*/}
            <tr>
              <td className='labt'>📧Email:</td>
              <td><input type="email" name='email' className='roundin' onChange={update} required></input></td>
            </tr><div /><br />
            <tr>
              <td className='labt'>🔒Password:</td>
              <td><input type="password" name='password' className='roundin' onChange={update} required></input></td>
            </tr><div /><br />
            <tr>
              <td className='labt' >📞Contact:</td>
              <td><input type="text" name='contact' className='roundin' onChange={update} required></input></td>
            </tr>  <div /><br />
            <tr>
              <td className='labt'>🏠Address:</td>
              <td><textarea col='40' row='40' name='address' className='roundin inround' onChange={update} required></textarea></td>
            </tr><div /><br />
            {/*<tr>
              <td><label className='labt'>Government Id:</label></td>
              <td><input type='file' name='file' onChange={update} ></input></td>
            </tr>*/}<div /><br />
            <button type='submit' className=' reset '> Submit</button> <div /><br />
          </table>

        </form>
      </div>



      <div className='bg-primary' >



        <Row md={4}>
          <Col>
            <p className='p1 text-light mt-5 fs-5'>Gateway  to knowledge discovery,
              and belong learning for all of
              students, faculty, and staff: A
              welcoming and inclusive space
              to all lelarners to come together
              and learn.</p>
          </Col>

          <Col>

            <h3 className='use text-light mt-5'>USEFULL LINKS</h3>
            <p className='p2 text-light'>Home</p>
            <p className='p2 text-light'>About Us</p>
            <p className='p2 text-light'>Contact Us</p>
            <p className='p2 text-light'>Login</p>


          </Col>
          <Col >
            <h3 className='other text-light mt-5'>OTHER LINKS</h3>
            <p className='p3 text-light'>📚Books</p>
            <p className='p3 text-light'>📚EBooks</p>
            <p className='p3 text-light'>Dashboard</p>
            <p className='p3 text-light'>Forgot Password</p>

          </Col>

          <Col>
            <h3 className='text-light mt-5 p4'>CONTACT</h3>
            <p className='p4 text-light'><FcLibrary />Library Management</p>
            <p className='p4 text-light'><IoMailSharp />preethivasan03@gmail.com</p>
            <p className='p4 text-light'>📞+91-8124872758</p>
          </Col><div />

        </Row>
        <p className="p14 "><RiCopyrightLine />2025 Copyright: Library Management System, Africa-Uganda</p>


      </div>

    </div>
  )
}

export default Memberregistration