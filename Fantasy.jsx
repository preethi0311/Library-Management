import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { BsTelephoneXFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { FcLibrary } from "react-icons/fc";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Footer from './Footer'


function Fantasy() {
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
              <NavDropdown.Item href="#action3" className='primary fs-5'>Manage Books</NavDropdown.Item>
              <NavDropdown.Item href="#action3" className='text-success fs-5'>Manage Members</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='text-success fs-5'>Statistics & Reports</NavDropdown.Item>
            </NavDropdown>*/}

            {/* <NavDropdown title="Members" className='font' id="navbarScrollingDropdown">
              <Link to={'/member'}><NavDropdown.Item href="#action3" className='primary fs-5'>Member Registration</NavDropdown.Item></Link>
             <NavDropdown.Item href="#action3" className='text-success fs-5'>Member Profiles</NavDropdown.Item>
              <NavDropdown.Item href="#action3" className='text-success fs-5'>Member List</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='text-success fs-5'>Borrowing History</NavDropdown.Item>
            </NavDropdown>*/}


            <NavDropdown title="Books" className='font' id="navbarScrollingDropdown">
              <Link to={'/fantasy'}><NavDropdown.Item href="#action3" className='text-light fs-5'>📚 Fantasy Books</NavDropdown.Item></Link>
              <Link to={'/novel'}> <NavDropdown.Item href="#action3" className='text-success fs-5' >📚 Novels</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to={'/autobio'}>  <NavDropdown.Item href="#action5" className='text-success fs-5'>📚 Autobiography Books</NavDropdown.Item></Link>
            </NavDropdown>

            <NavDropdown title="📚Ebooks" className='font' id="navbarScrollingDropdown">
              <Link to={'/ebooks'}><NavDropdown.Item href="#action3" className='text-light fs-5'>📚 Availability Books</NavDropdown.Item></Link>
              {/*<NavDropdown.Item href="#action3" className='text-success fs-5'>Browse Catogories</NavDropdown.Item>*/}
            </NavDropdown>
            <Link to={'/about'}><Nav.Link href="#pricing" className='font fs-5'>About</Nav.Link></Link>
            <Link to={'/contact'}><Nav.Link href="#pricing" className='font fs-5'>Contactus</Nav.Link></Link>
            <Link to={'/usersettings'}><Button variant="success" className='login fs-5'>LogOut</Button></Link>

          </Nav>
        </Container>
      </Navbar>
      <div /><br />


      <Row>

        <Col >


          <Card className='bg-dark dragon ms-5' style={{ width: '16rem', height: '40vh' }}>
            <Card.Img variant="top" height='150' width='10px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYKvMlU_fnIsdYHzZZthdH5SHbIHe-0PNRQ&" />
            <Card.Body>
              <Card.Title className='text-light fs-2'>Dragon</Card.Title>
              <Card.Text className='text-light fs-4 '>
                By Jason Hamilton
              </Card.Text>
              <Link to={'/dragon'}><button className='rounded circle bg-primary text-light fs-3'>View Details</button></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col >

          <Card className='bg-dark ms-4 ' style={{ width: '16rem', height: '40vh' }}>
            <Card.Img variant="top" height='150' width='10px' src="https://images-platform.99static.com//dwTNLDRxoGyLB_hKk8g8wQlc7Fo=/21x101:812x892/fit-in/500x500/projects-files/77/7779/777916/b786e2bd-feec-4b86-8fdd-0f745759efc3.jpg" />
            <Card.Body>
              <Card.Title className='text-light  fs-3 '>Reign of Seth'ra</Card.Title>
              <Card.Text className='text-light fs-4'>
                By Stephen Brist
              </Card.Text>
              <Link to={'/reignsethra'}>  <button className='rounded circle bg-primary text-light fs-3'>View Details</button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col >

          <Card className='bg-dark ms-3' style={{ width: '16rem', height: '40vh' }}>
            <Card.Img variant="top" height='150' width='10px' src="https://mpd-biblio-covers.imgix.net/9781250840707.jpg" />
            <Card.Body>
              <Card.Title className='text-light  fs-2 '>First Binding</Card.Title>
              <Card.Text className='text-light fs-4'>
                By R.R.Virdi
              </Card.Text>
              <Link to={'/firstbind'}><button className='rounded circle bg-primary text-light fs-3'>View Details</button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col >

          <Card className='bg-dark ms-4' style={{ width: '16rem', height: '40vh' }}>
            <Card.Img variant="top" height='150' width='10px' src="https://m.media-amazon.com/images/I/712wIRkfUWL._UF1000,1000_QL80_.jpg" />
            <Card.Body>
              <Card.Title className='text-light  fs-2 ' >Darkness</Card.Title>
              <Card.Text className='text-light fs-4'>
                By Rutherford
              </Card.Text>
              <Link to={'/darkness'}> <button className='rounded bg-primary text-light fs-3'>View Details</button></Link>
            </Card.Body>
          </Card>
        </Col>

      </Row>

      <div /><br />
      <Footer />

    </div>


  )

}

export default Fantasy