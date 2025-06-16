import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsTelephoneXFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { FcLibrary } from "react-icons/fc";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './About.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Admin.css';


function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminUser = {

      username: 'preethi',
      password: 'preethi123',
    };

    if (username === adminUser.username && password === adminUser.password) {
      alert('👤 Login successful!');
      navigate('/dashboard'); // Redirect after successful login
    } else {
      alert('❌ Invalid username or password');
    }
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


      <div className="admin-background">
        <Form onSubmit={handleSubmit} className="admin-form">
          <h3 className="text-center mb-4">🔐 Admin Login</h3>

          <Form.Group className="mb-3">
            <Form.Label className='newadmin'>👤 Username</Form.Label>
            <Form.Control type="text" className='newadminin' placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}
              required /></Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className='newadmin'>🔒 Password</Form.Label>
            <Form.Control
              type="password" className='newadminin' placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">Login </Button>
        </Form>


      </div>
      <Footer />
    </div>
  );
}

export default Admin;

