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
import { Link } from 'react-router-dom'
import Footer from './Footer'


function Autobio() {
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

            {/*<NavDropdown title="Members" className='font' id="navbarScrollingDropdown">
              <Link to={'/member'}><NavDropdown.Item href="#action3" className='primary fs-5'>Member Registration</NavDropdown.Item></Link>
            <NavDropdown.Item href="#action3" className='text-success fs-5'>Member Profiles</NavDropdown.Item>
              <NavDropdown.Item href="#action3" className='text-success fs-5'>Member List</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='text-success fs-5'>Borrowing History</NavDropdown.Item>
            </NavDropdown>*/}


            <NavDropdown title="Books" className='font' id="navbarScrollingDropdown">
              <Link to={'/fantasy'}><NavDropdown.Item href="#action3" className='text-light fs-5'>📚 Fantasy Books</NavDropdown.Item></Link>
              <Link to={'/fantasy'}><NavDropdown.Item href="#action3" className='text-success fs-5'>📚 Novels</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='text-success fs-5'>📚 Autobiography Books</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="📚Ebooks" className='font' id="navbarScrollingDropdown">
              <Link to={'/ebooks'}><NavDropdown.Item href="#action3" className='text-light fs-5'>📚 Availability Books</NavDropdown.Item></Link>
              {/* <NavDropdown.Item href="#action3" className='text-success fs-5'>Browse Catogories</NavDropdown.Item>*/}
            </NavDropdown>
            <Link to={'/about'}><Nav.Link href="#pricing" className='font '>About</Nav.Link></Link>
            <Link to={'/contact'}><Nav.Link href="#pricing" className='font '>Contactus</Nav.Link></Link>
            <Link to={'/usersettings'}><Button variant="success" className='login '>LogOut</Button></Link>

          </Nav>
        </Container>
      </Navbar>
      <div /><br />


      <Row>

        <Col >


          <Card className='bg-dark ms-5' style={{ width: '16rem', height: '40vh' }}>
            <Card.Img variant="top" height='150' width='10px' src="https://cdn.kobo.com/book-images/204d7c7b-5dc1-4fbb-8727-59e6b9b4bb34/166/300/False/autobiography-94.jpg" />
            <Card.Body>
              <Card.Title className='text-light fs-3'>Rajendra Prasad</Card.Title>
              <Card.Text className='text-light fs-5'>
                By Ragendra Prasad
              </Card.Text>
              <Link to={'/autobio1'}><button className='rounded circle bg-primary text-light fs-4'>View Details</button></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col >

          <Card className='bg-dark ms-5' style={{ width: '16rem', height: '40vh' }}>
            <Card.Img variant="top" height='150' width='10px' src="https://www.indicinspirations.com/cdn/shop/products/wings-of-fire-an-autobiography-of-abdul-kalam-books-908170.jpg?v=1627154447&width=565" />
            <Card.Body>
              <Card.Title className='text-light fs-3'>Wings of Fire</Card.Title>
              <Card.Text className='text-light fs-5'>
                By APJ Abdul Kalam
              </Card.Text>
              <Link to={'/autobio2'}> <button className='rounded circle bg-primary text-light fs-4'>View Details</button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col >

          <Card className='bg-dark ms-4' style={{ width: '16rem', height: '40vh' }}>
            <Card.Img variant="top" height='150' width='10px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRp9uT5dDmkQzIgBdP-T4b1zCzujFxcN0j_Q&s" />
            <Card.Body>
              <Card.Title className='text-light fs-3'>My Autobio</Card.Title>
              <Card.Text className='text-light fs-5'>
                By Dr.Br.Ambedkar
              </Card.Text>
              <Link to={'/autobio3'}> <button className='rounded circle bg-primary text-light fs-4'>View Details</button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col >

          <Card className='bg-dark ms-4' style={{ width: '16rem', height: '40vh' }}>
            <Card.Img variant="top" height='150' width='10px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlTiq8Dx7Rt1sBUzMsFuMqqHbvjsWnBpcIw&s" />
            <Card.Body>
              <Card.Title className='text-light fs-3'>Citizen</Card.Title>
              <Card.Text className='text-light fs-5'>
                By Bill Clinton
              </Card.Text>
              <Link to={'/autobio4'}> <button className='rounded circle bg-primary text-light fs-4'>View Details</button></Link>
            </Card.Body>
          </Card>
        </Col>

      </Row>
      <div /><br />
      <Footer />
    </div>
  )
}

export default Autobio