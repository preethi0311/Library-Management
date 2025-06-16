import React from "react";
import { BsTelephoneXFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { FcLibrary } from "react-icons/fc";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './About.css'
import { Link } from 'react-router-dom';
import Footer from './Footer'
import "./Ebooks.css";

const books = [   //let creat array of objects
  { title: "The Adventures", pdf: "/pdfs/The Adventures Story.pdf" }, //pdff path is given this line. src=>public=>pdfs=>the adventures of story
  { title: "The Adventures", pdf: "/pdfs/The Adventures Story.pdf" },
  { title: "The Adventures", pdf: "/pdfs/The Adventures Story.pdf" },
  { title: "The Adventures", pdf: "/pdfs/The Adventures Story.pdf" },
  { title: "The Adventures", pdf: "/pdfs/The Adventures Story.pdf" },
  { title: "The Adventures", pdf: "/pdfs/The Adventures Story.pdf" },
];

const Ebooks = () => {
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
            {/* <Link to={'/admin'}><Nav.Link href="#pricing" className='font'>Admin</Nav.Link></Link>*/}

            {/*<NavDropdown title="Admin" className='font' id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" className='primary  fs-5'>📚 Manage Books</NavDropdown.Item>
              <NavDropdown.Item href="#action3" className='text-success  fs-5'>Manage Members</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='text-success  fs-5'>Statistics & Reports</NavDropdown.Item>
            </NavDropdown>*/}

            {/* <NavDropdown title="Members" className='font' id="navbarScrollingDropdown">
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
              {/* <NavDropdown.Item href="#action3" className='text-success  fs-5'>Browse Catogories</NavDropdown.Item>*/}
            </NavDropdown>
            <Link to={'/about'}><Nav.Link href="#pricing" className='font'>About</Nav.Link></Link>
            <Link to={'/contact'}><Nav.Link href="#pricing" className='font'>Contactus</Nav.Link></Link>
            <Link to={'/usersettings'}><Button variant="warning" className='login'>LogOut</Button></Link>

          </Nav>
        </Container>
      </Navbar>

      <div className="ebooks-container ">
        <h2>📘 Ebooks Library</h2>


        <ul className="ebooks-list">
          {books.map((book, index) => (
            <li key={index} className="book-item">              {/*book map used to show each book in order*/}

              {/*each and every book convert to anchor tag and blank is open pdf in new 
             tap so use target attribute*/}


              {/* rel="noopener noreferrer this line is used to security best practice*/}
              <a
                href={book.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="book-link"
              >
                📖 {book.title}
              </a>
            </li>
          ))}
        </ul>

      </div>

      <Footer />
    </div>
  );
};

export default Ebooks;
