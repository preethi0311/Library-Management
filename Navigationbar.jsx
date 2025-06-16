import React from 'react'
import { BsTelephoneXFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { FcLibrary } from "react-icons/fc";
import { IoStar } from "react-icons/io5";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Nav.css'
import Footer from './Footer'
import Header from './Header'






function Navigationbar() {


  //function admin(){
  //alert("This page only access admin")
  //}



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
          <Navbar.Brand href="#home" className='logo fs-5 '><FcLibrary />Library Management</Navbar.Brand>
          <Nav className="me-auto">

            <NavDropdown title=" 🏠Home" className='font' id="navbarScrollingDropdown">
              {/* <NavDropdown.Item href="#action3" className='text-light fs-5'>Active Members</NavDropdown.Item>
              <NavDropdown.Item href="#action3" className='text-success fs-5'>📚 Borrow & Return Books</NavDropdown.Item>
            <Link to={'/event'}><NavDropdown.Item href="#action3" className='text-success fs-5'>Events & Notices</NavDropdown.Item></Link>
             <Link to={'/finepay'}><NavDropdown.Item href="#action3" className='text-success fs-5'>Fine & Payments</NavDropdown.Item></Link> 
              <NavDropdown.Divider />*/}

              {/*<Link to={'/adminprofile'}>   <NavDropdown.Item href="#action5" className='text-success fs-5'>Admin Profile</NavDropdown.Item></Link>
            <Link to={'/usersettings'}>   <NavDropdown.Item href="#action5" className='text-success fs-5'>User Settings</NavDropdown.Item></Link>*/}
              <Link to={'/userfeedback'}> <NavDropdown.Item href="#action5" className='text-success fs-5'>User Feedback</NavDropdown.Item></Link>
              {/*<Link to={'/admin'}><NavDropdown.Item href="#action5" className='text-success fs-5'>Admin</NavDropdown.Item></Link>*/}
              <Link to={'/help'}><NavDropdown.Item href="#action5" className='text-success fs-5'>Help</NavDropdown.Item></Link>
            </NavDropdown>

            {/*<Link to={'/admin'}> <Nav.Link href="#pricing" className='font'>Admin</Nav.Link></Link>*/}

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


            <NavDropdown title="Books" className='font' id="navbarScrollingDropdown">
              <Link to={'/fantasy'}><NavDropdown.Item href="#action3" className='text-light fs-5'>📚 Fantasy Books</NavDropdown.Item></Link>
              <Link to={'/novel'}><NavDropdown.Item href="#action3" className='text-success fs-5'>📚 Novels</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to={'/autobio'}> <NavDropdown.Item href="#action5" className='text-success fs-5'>📚 Autobiography Books</NavDropdown.Item></Link>
            </NavDropdown>

            <NavDropdown title="📚Ebooks" className='font' id="navbarScrollingDropdown">
              <Link to={'/ebooks'}> <NavDropdown.Item href="#action3" className='text-light fs-5'>📚 Availability Books</NavDropdown.Item></Link>
              {/* <NavDropdown.Item href="#action3" className='text-success fs-5'>Browse Catogories</NavDropdown.Item>*/}
            </NavDropdown>
            <Link to={'/About'}><Nav.Link href="#pricing" className='font'>About</Nav.Link></Link>
            <Link to={'/contact'}> <Nav.Link href="#pricing" className='font'>Contactus</Nav.Link></Link>
            <Link to={'/usersettings'}><Button variant="success" className='login'>LogOut</Button></Link>




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


      <div className='loginbgmah'>
        <h2 className='msg'>WELCOME MESSAGE</h2>
        <h3 className='wel'>Welcome to my Library Management System!</h3>
        <p className='modern'>Our modern, fully automated library is undoubtedly a state-of-the-art information</p>
        <p className='modern'> Resources. Center which fulfills over-evolving needs of our academic. We are </p>
        <p className='modern'>dedicated to support the curriculum and educational mission of the Library. The aim</p>
        <p className='modern'>of the Library is to deliver the best print, digital and online information resources </p>
        <p className='modern'>and reference services to support your teaching, learning, and research activities.</p>
        <p className='modern'>We also provide conducive environment and wonderful spaces for research, study and</p>
        <p className='modern'>collaboration.</p>

        <img className='img' width="390" height="380" src="https://www.shutterstock.com/image-photo/happy-young-indian-arabic-businessman-600nw-2187607295.jpg"></img>

        <p id="pop">POPULAR BOOKS</p><div /><br />

        <Row>
          <Col >

            <Card className='posi1' style={{ width: '16rem' }}>
              <Card.Img variant="top" height="190" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJtpGQex5IUDwryg6kN1nlSHlMPPFQwOn5A&s" />
              <Card.Body>
                <Card.Title className='title1 text-light fs-4'>AI Intelligence</Card.Title>
                <Card.Text className='card1'>
                  Industrial Artificial Intelligence Technologies and Applications
                </Card.Text><div />
                <p className='card1 text-success fs-5'>By John Doe</p>
                <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><div /><br />
                <Link to={'/homebook'}> <Button variant="primary">VIEW DETAILS</Button></Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className='posi1' style={{ width: '16rem' }}>
              <Card.Img variant="top" height="190" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-B-iKZ9Kh0dY4qkKOxG0rY3KYZGKPMfXpxA&s" />
              <Card.Body>
                <Card.Title className='title1 text-light fs-4'>Graph Theory</Card.Title>
                <Card.Text className='card1'>
                  Simple Graph, Vertices and Degree of a vertex graph theory
                </Card.Text><div />
                <p className='card1 text-success fs-5'>By Narsingh Deo</p>
                <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><div /><br />
                <Link to={'/secondbook'}> <Button variant="primary">VIEW DETAILS</Button></Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className='posi1' style={{ width: '16rem' }}>
              <Card.Img variant="top" height="190" src="https://m.media-amazon.com/images/I/31C9bhHG8BL._SY200_.jpg" />
              <Card.Body>
                <Card.Title className='title1 text-light '>Binary Transistors</Card.Title>
                <Card.Text className='card1'>
                  Field-Effect Transistors and get-insulated bipolar transistors
                </Card.Text><div />
                <p className='card1 text-success fs-5'>By Richard Whipple</p>
                <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><div /><br />
                <Link to={'/thirdbook'}> <Button variant="primary">VIEW DETAILS</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        </Row><div /><br />


        {/* <Link to={'/'}><Button className='all' variant="warning">SEE ALL</Button></Link><div/><br/>*/}


        <Header /><div /><br />
      </div>
      <Footer />


    </div>


  )

}

export default Navigationbar