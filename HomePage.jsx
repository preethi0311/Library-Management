import React from 'react'
import { BsTelephoneXFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { FcLibrary } from "react-icons/fc";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { RiCopyrightLine } from "react-icons/ri";
import './Nav.css';
import './HomePage.css';

//import { navigate, useNavigate } from 'react-router-dom';
//import Card from 'react-bootstrap/Card';
//import { IoStar } from "react-icons/io5";
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import Footer from './Footer'
//import Header from './Header'






function HomePage() {

  //const navigate = useNavigate()           // use navigate means it's goes to submit and home page so use use navigate in this feedback

  function admin() {
    alert("Please Login first")

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


      <Navbar className='nav' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className='logos fs-5'><FcLibrary />Library Management</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link href="#pricing" className='font  homefirst' onClick={admin}>Home</Nav.Link>

            {/*<NavDropdown title=" 🏠Home" className='font' id="navbarScrollingDropdown">
             <NavDropdown.Item href="#action3" className='text-light fs-5'>Active Members</NavDropdown.Item>
              <NavDropdown.Item href="#action3" className='text-success fs-5'>📚 Borrow & Return Books</NavDropdown.Item>
            <Link to={'/event'}><NavDropdown.Item href="#action3" className='text-success fs-5'>Events & Notices</NavDropdown.Item></Link>
             <Link to={'/finepay'}><NavDropdown.Item href="#action3" className='text-success fs-5'>Fine & Payments</NavDropdown.Item></Link> 
              <NavDropdown.Divider />

             <NavDropdown.Item href="#action5" className='text-success fs-5'>Admin Profile</NavDropdown.Item>
             <Link to={'/usersettings'}>   <NavDropdown.Item href="#action5" className='text-success fs-5'>User Settings</NavDropdown.Item></Link>
             <Link to={'/userfeedback'}> <NavDropdown.Item href="#action5" className='text-success fs-5'>User Feedback</NavDropdown.Item></Link>
             <Link to={'/admin'}><NavDropdown.Item href="#action5" className='text-success fs-5'   onClick={admin}>Admin</NavDropdown.Item></Link>
             <Link to={'/help'}><NavDropdown.Item href="#action5" className='text-success fs-5'>Help</NavDropdown.Item></Link>
             </NavDropdown>*/}

            <Nav.Link href="#pricing" className='font homefirst' onClick={admin}>Admin</Nav.Link>

            {/*<NavDropdown title="Admin" className='font' id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3" className='primary fs-5'>📚 Manage Books</NavDropdown.Item>
              <NavDropdown.Item href="#action3" className='text-success fs-5'>Manage Members</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='text-success fs-5'>Statistics & Reports</NavDropdown.Item>
            </NavDropdown>*/}

            {/*<NavDropdown title="Members" className='font' id="navbarScrollingDropdown">
              <Link to={'/member'}><NavDropdown.Item href="#action3" className='primary fs-5'>Member Registration</NavDropdown.Item></Link>
              <Link to={'/memberprofile'}><NavDropdown.Item href="#action3" className='text-success fs-5'>Member Profiles</NavDropdown.Item></Link>
              <NavDropdown.Item href="#action3" className='text-success fs-5'>Member List</NavDropdown.Item>
             <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='text-success fs-5'>Borrowing History</NavDropdown.Item>
            </NavDropdown>*/}

            <Nav.Link href="#pricing" className='font homefirst' onClick={admin}>Books</Nav.Link>
            {/*<NavDropdown title="Books" className='font' id="navbarScrollingDropdown">
              <Link to={'/fantasy'}><NavDropdown.Item href="#action3" className='text-light fs-5'>📚 Fantasy Books</NavDropdown.Item></Link>
              <Link to={'/novel'}><NavDropdown.Item href="#action3" className='text-success fs-5'>📚 Novels</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to={'/autobio'}> <NavDropdown.Item href="#action5" className='text-success fs-5'>📚 Autobiography Books</NavDropdown.Item></Link>
            </NavDropdown>*/}

            {/* <NavDropdown title="📚Ebooks" className='font' id="navbarScrollingDropdown">
             <Link to={'/ebooks'}> <NavDropdown.Item href="#action3" className='text-light fs-5'>📚 Availability Books</NavDropdown.Item></Link>
              <NavDropdown.Item href="#action3" className='text-success fs-5'>Browse Catogories</NavDropdown.Item>
            </NavDropdown>*/}
            <Nav.Link href="#pricing" className='font homefirst' onClick={admin}>About</Nav.Link>
            <Nav.Link href="#pricing" className='font homefirst' onClick={admin}>Contactus</Nav.Link>
            <Link to={'/login'}><Button variant="success " className='login homefirst'>Login</Button></Link>



          </Nav>
        </Container>
      </Navbar>



      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            width="155" height="700" src="https://static.vecteezy.com/system/resources/thumbnails/022/574/915/small_2x/abstract-blurred-public-library-interior-space-blurry-room-with-bookshelves-by-defocused-effect-use-for-background-or-backdrop-in-abstract-blurred-publicbusiness-or-education-concepts-generative-ai-photo.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="caption">
            <p className='web'>Welcome to my Library Management Website</p>
            <p className="vast">Explore our vast collection of books and resources</p>
            <Button variant="primary" className='click'>BROWSE CATALOG</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            width="155" height="700" src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            width="155" height="700" src="https://c0.wallpaperflare.com/preview/469/70/385/background-book-bookcase-books.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            width="155" height="700" src="https://png.pngtree.com/background/20250108/original/pngtree-antique-library-featuring-a-treasured-collection-of-rare-and-vintage-books-picture-image_15935544.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>




        <Carousel.Item>
          <img
            className="d-block w-100"
            width="155" height="700" src="https://img.freepik.com/premium-photo/book-table-with-library-background_865967-29196.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            width="300" height="700" src="https://w0.peakpx.com/wallpaper/960/362/HD-wallpaper-library-background-beautiful-library-book.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



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

export default HomePage