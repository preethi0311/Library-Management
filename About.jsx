import React from 'react'
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






function Navigationbar() {

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
            {/*<Link to={'/admin'}><Nav.Link href="#pricing" className='font'>Admin</Nav.Link></Link>*/}

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
            <Nav.Link href="#pricing" className='font'>About</Nav.Link>
            <Link to={'/contact'}><Nav.Link href="#pricing" className='font'>Contactus</Nav.Link></Link>
            <Link to={'/usersettings'}><Button variant="warning" className='login'>LogOut</Button></Link>

          </Nav>
        </Container>
      </Navbar>


      <div className='loginbgma'>

        <h2 className='msgfirst'>INTRODUCTION</h2><br />
        <p className='modernfirst'>The Libraries are wonderful gathering places to study, to write and</p>
        <p className='modernfirst'>pursue scholarly research, to learn and use information technology,</p>
        <p className='modernfirst'>and draw on collections of printed of electronic resources. The</p>
        <p className='modernfirst'>Library acts as a gateway to information and knowledge. Graduate</p>
        <p className='modernfirst'>candidates are prepare for some exams this system is very useful</p>
        <p className='modernfirst'> to all.</p>


        <img className='imgfirst' width="470" height="400" src="https://infobase.com/wp-content/uploads/2021/03/Blog_SimpleStrategies_030421-1.jpg"></img>



        <h2 className='msg2'>MISSION</h2><br />
        <p className='modern2'>The mission of the Library is to achieve excellence in the provision, </p>
        <p className='modern2'>and the promotion of information services to meet the research, and</p>
        <p className='modern2'>teaching,learning needs of the students. We are committed to help the</p>
        <p className='modern2'>students and the all graduates to take advantage of these resources. An</p>
        <p className='modern2'>effective use of information resources is a necessary precaondition to an</p>
        <p className='modern2'>academic success and even throughout life. It is out goal at the libraries</p>
        <p className='modern2'>to provide excellent service to all peoples and aspirants that will advance</p>
        <p className='modern2'>each user's learning, teaching and research experience at the government.</p>



        <img className='img2' width="470" height="400" src="https://plus.unsplash.com/premium_photo-1661964153042-56211a8e2d0b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>


        <h2 className='msg3'>COLLECTIONS</h2><br />
        <p className='modern3'>The library collection of scholarly materials catering to the two</p>
        <p className='modern3'>needs of the community, comprising students to staff members,</p>
        <p className='modern3'>teachers/scholors. and visiting researchers. Total Collection of all</p>
        <p className='modern3'>the libraries are about 25000/volumes. The Libraries vary widely</p>
        <p className='modern3'>in size and quantity of their stack but include well organized to </p>
        <p className='modern3'>collections of considerable value our book collection contains a</p>
        <p className='modern3'> rare editions, reference volumes. Critical guides and latestly is </p>
        <p className='modern3'> releases. We have a large collection of research journals/ </p>
        <p className='modern3'>periodicals including magazines.</p>

        <img className='img3' width="470" height="400" src="https://assets.ebsco.com/m/3bcc0b27fc35cd83/original/Book-Display-Blog-Image-780x498.png"></img>


        <h2 className='msg4'>ACCESS/FACILITIES</h2><br />
        <p className='modern4'>Most of the Libraries have open shelf systems and users can get  </p>
        <p className='modern4'>free access to the library materials. Computers with access to a</p>
        <p className='modern4'>library resources and the internet are available in Libraries, are</p>
        <p className='modern4'>mostly. Research access is available to all College Community in</p>
        <p className='modern4'>the form of catalogs. Licensed library resources and websites. A</p>
        <p className='modern4'>priority for use is given to students, faculty, and staff pursuing a</p>
        <p className='modern4'>research. The concerned library staff is available to the advise to</p>
        <p className='modern4'>guide the users. Information about the library use policy is far</p>
        <p className='modern4'>available at the Library Circulation Desks.</p>



        <img className='img4' width="470" height="400" src="https://www.shutterstock.com/image-photo/portrait-college-student-man-library-600nw-282062105.jpg"></img><br />
      </div>
      <Footer />



    </div>



  )
}

export default Navigationbar