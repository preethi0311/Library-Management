import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { BsTelephoneXFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { FcLibrary } from "react-icons/fc";
import { IoStar } from "react-icons/io5";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'
import axios from "axios";
import './Homebooks.css'


function Secondbook() {
  const [comment, setComment] = useState("");

  const [bookStatus, setBookStatus] = useState("Available");

  const [isBuyDisabled, setIsBuyDisabled] = useState(false);

  function handleBuyNow() {

    const book = {
      title: "Graph Theory",
      author: "Narsingh Deo",
      isbn: "103",
      category: "Mathematical",
      almirah: "Graph Theory (Mathematical)",
      edition: "2nd",
      publisher: "Upkar's Publishers",
      status: "Available",
      description: " The authors describe industrial Mathematical vertices the approaches. adopted, and the main industrial systems and applications to give the reader extensive insight into  the technical nature of the field.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-B-iKZ9Kh0dY4qkKOxG0rY3KYZGKPMfXpxA&s",


    };





    axios.post('http://localhost:8002/purchasebook', book)
      .then(function (response) {

        console.log(response);
        if (response.status === 200) {
          alert("✅ Book Purchase successfully!");
          setBookStatus("Soled Out");

          setIsBuyDisabled(true);
          setTimeout(() => {
            setBookStatus("Available");

            setIsBuyDisabled(false);
          }, 20000)
        } else {
          alert("⚠️ Something went wrong.");
        }
      })
      .catch(function (error) {
        console.error("Error saving book:", error);
        alert("❌ Server error occurred.");
      });
  }
  function handleCommentSubmit(e) {
    e.preventDefault(); // form refresh prevent

    const data = {
      bookTitle: "Graph Theory",   // optional: identify which book
      author: "Narsingh Deo",
      isbn: "103",
      category: "Mathematical",
      status: "Available",
      edition: "2nd",
      publisher: "Upkar's Publishers",
      description: " The authors describe industrial Mathematical vertices the approaches. adopted, and the main industrial systems and applications to give the reader extensive insight into  the technical nature of the field.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-B-iKZ9Kh0dY4qkKOxG0rY3KYZGKPMfXpxA&s",
      comment: comment
    };

    console.log("Submitting comment:", data); // comment data log

    axios.post("http://localhost:8002/addcomment", data)
      .then((res) => {
        if (res.status === 200) {
          alert("✅ Comment saved successfully!");
          setComment("");  // clear comment box
        } else {
          alert("⚠️ Failed to save comment.");
        }
      })
      .catch((err) => {
        console.error("Comment save error:", err);
        alert("❌ Server error while saving comment.");
      });
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
                            <Link to={'/member'}> <NavDropdown.Item href="#action3" className='primary fs-5'>Member Registration</NavDropdown.Item></Link>
                           <NavDropdown.Item href="#action3" className='text-success fs-5'>Member Profiles</NavDropdown.Item>
                            <NavDropdown.Item href="#action3" className='text-success fs-5'>Member List</NavDropdown.Item>
                           <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5" className='text-success fs-5'>Borrowing History</NavDropdown.Item>
                        </NavDropdown>*/}


            <NavDropdown title="Books" className='font' id="navbarScrollingDropdown">
              <Link to={'/fantasy'}><NavDropdown.Item href="#action3" className='text-light fs-5'>📚 Fantasy Books</NavDropdown.Item></Link>
              <Link to={'/novel'}> <NavDropdown.Item href="#action3" className='text-success fs-5'>📚 Novels</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to={'/autobio'}>  <NavDropdown.Item href="#action5" className='text-success fs-5'>📚 Autobiography Books</NavDropdown.Item></Link>
            </NavDropdown>

            <NavDropdown title="📚Ebooks" className='font' id="navbarScrollingDropdown">
              <Link to={'/ebooks'}>  <NavDropdown.Item href="#action3" className='text-light fs-5'>📚 Availability Books</NavDropdown.Item></Link>
              {/*<NavDropdown.Item href="#action3" className='text-success fs-5'>Browse Catogories</NavDropdown.Item>*/}
            </NavDropdown>
            <Link to={'/about'}><Nav.Link href="#pricing" className='font'>About</Nav.Link></Link>
            <Link to={'/contact'}><Nav.Link href="#pricing" className='font'>Contactus</Nav.Link></Link>
            <Link to={'/usersettings'}><Button variant="success" className='login'>LogOut</Button></Link>

          </Nav>
        </Container>
      </Navbar>
      <div className='homedesign'>
        <div /><br />

        <Link to={'/navbar'}><button className='rounded bg-primary text-light homebut'>Go Back</button></Link>

        <div /><br />

        <Card className='homec ms-5 ' style={{ width: '16rem' }}>
          <Card.Img variant="top" height="190" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-B-iKZ9Kh0dY4qkKOxG0rY3KYZGKPMfXpxA&s" />
          <Card.Body>
            <Card.Title className='title1'>Graph Theory</Card.Title>
            <Card.Text className='card1'>
              Simple Graph, Vertices and Degree of a vertex graph theory
            </Card.Text><div />
            <p className='card1'>By Narsingh Deo</p>
            <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><div /><br />
            <Button variant="primary ms-5" onClick={handleBuyNow} disabled={isBuyDisabled}>Buy Now</Button>
          </Card.Body>
        </Card>
        <div /><br />


        <div className='aibook'>

          <h3> <strong>Simple Graph Vertices and Degree Vertex Graph Theory</strong></h3><br />
          <p><strong>Id No. </strong>2</p>
          <p><strong>ISBN:</strong> is 103 </p>
          <p><strong>Narsingh Deo</strong></p>
          <p><strong>Status: </strong><button className={`rounded text-dark ${bookStatus === "Available" ? "bg-success" : "bg-danger"}`}>{bookStatus}</button></p>
          <p><strong>Category:</strong> Mathematical</p>
          <p><strong>Almirah:</strong>  Graph Theory ( Mathematical)</p>
          <p> <strong>Editon:</strong> 2nd</p>
          <p><strong>Publishers: </strong>Upkar's Publishers</p>
          <p><strong>Description: </strong> The authors describe industrial Mathematical vertices the approaches  </p>
          <p>  adopted, and the main industrial systems and applications to give the</p>
          <p>   reader extensive insight into  the technical nature of the field.</p>



          {/* <button className='bg-success rounded text-light'>This Book is available</button>*/}
        </div>
        <div /><br />


        <div className='review'>

          <h1 className='comlab text-success'>Reviews</h1> <br />


          <p className='comlab'>Please Comment in below:</p><br />

          <form onSubmit={handleCommentSubmit}>
            <label className='comlab'>Comment:</label><br />
            < textarea cols={100} rows={5} className='comin' value={comment} onChange={(e) => setComment(e.target.value)} required /><div /><br />

            <button className='bg-primary rounded text-light ms-5 comsub' >Submit</button>
          </form>
        </div>
        <div /><br />





      </div>
      <Footer />



    </div>
  )
}

export default Secondbook