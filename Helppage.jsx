import React from 'react';
import { BsTelephoneXFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { FcLibrary } from "react-icons/fc";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './About.css'
import Footer from './Footer'
import { Link } from 'react-router-dom';


import './Help.css';

function Helppage() {
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


      <div className='helppage'>

        <div className="help-page">
          <h1>Help & Support</h1>

          <section>
            <h2>📚 How to Use the Library Management System</h2>
            <ul>
              <li>Login as Admin or Member.</li>
              <li>Search for books using the search bar.</li>
              <li>Members can borrow/return books.</li>
              <li>Admins can add, update or delete book and user records.</li>
            </ul>
          </section>

          <section>
            <h2>📞 Contact Support</h2>
            <p>If you're facing any issues, reach out to us:</p>
            <ul>
              <li>Email: <a href="mailto:preethivasan03@gmail.com">preethivasan03@gmail.com</a></li>
              <li>Phone: +91-8124872758</li>
              <li>Helpdesk: 9 AM – 6 PM, Monday to Friday</li>
            </ul>
          </section>

          <section>
            <h2>❓ Frequently Asked Questions (FAQ)</h2>
            <ul>
              <li><strong>Q:</strong> How to reset password?<br /><strong>A:</strong> Click on "Forgot Password" in login page.</li>
              <li><strong>Q:</strong> Can I renew a book online?<br /><strong>A:</strong> Yes, if it's not overdue.</li>
              <li><strong>Q:</strong> How to report a bug?<br /><strong>A:</strong> Email us with screenshots and steps to reproduce.</li>
            </ul>
          </section></div>
      </div>


      <Footer />





    </div>
  );
};

export default Helppage;
