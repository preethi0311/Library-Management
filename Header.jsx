import React from 'react'
import { IoBookSharp } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { IoStar } from "react-icons/io5";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header.css'

function Newarrivel() {
  return (
    <div>

      <Container>
        <Row>
          <Col xs>
            <IoBookSharp className="book" />
            <p className='sharp'  >Total Books</p>
            <p className='books'>12</p>
          </Col>

          <Col xs={{ order: 5 }}>
            <MdLibraryBooks className="ebook" />
            <p className='eb' >Total EBooks</p>
            <p className='ebooks'>5</p>
          </Col>

          <Col xs={{ order: 0 }}>
            <FaUser className="user" />
            <p className='fause'>Total User</p>
            <p className='users'>12</p>
          </Col>

          <Col xs={{ order: 0 }}>
            <BiSolidCategory className='cat' />
            <p className='bisolid'>Total Categories</p>
            <p className='cats'>3</p>
          </Col>
        </Row>
      </Container><div /><br />

      <h3 className="a">NEW ARRIVALS</h3>




      <Row>
        <Col >


          <Card data-bs-theme="dark" className='pos2' style={{ width: '16rem' }}>
            <Card.Img variant="top" height="190" src="https://images-platform.99static.com//irtuJaycfqG80g-AXkxjyCGu7h8=/0x97:812x909/fit-in/500x500/projects-files/56/5652/565254/4cba847c-57b6-41f3-9352-8f3543783531.jpg" />
            <Card.Body>
              <Card.Title className='title2'>KnightMare </Card.Title>
              <Card.Text className='card2'>
                KnightMare Arcanist is a magic-wrapped adventure
              </Card.Text><div />
              <p className='card2 text-success'>By Shami Stovall</p>
              <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><div /><br />
              <Link to={'/knightmare'}> <Button variant="primary">VIEW DETAILS</Button></Link>
            </Card.Body>
          </Card>

        </Col>




        <Col>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <Card className='pos2' style={{ width: '16rem' }}>
                <Card.Img variant="top" height="190" src="https://i0.wp.com/noveldelights.com/wp-content/uploads/2023/09/img_5322.jpg?fit=1440%2C1440&ssl=1" />
                <Card.Body>
                  <Card.Title className='title2'>Keeper of Hidden</Card.Title>
                  <Card.Text className='card2'>
                    A heartwarming story about Books and Best Friends
                  </Card.Text><div />
                  <p className='card2 text-success'>By Madeline Martin</p>
                  <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><div /><br />
                  <Link to={'/threebooks'}> <Button variant="primary" className='viewdetails'>VIEW DETAILS</Button></Link>
                </Card.Body>
              </Card>
            </Carousel.Item>


            <Carousel.Item>
              <Card className='pos2' style={{ width: '16rem' }}>
                <Card.Img variant="top" height="190" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxEXxQgo2e-znbny5JDZ3d2Jje1uSXkBXjCvBXCYolTjOrbp1oe24MTBnvZWvPtZPxjhk&usqp=CAU" />
                <Card.Body>
                  <Card.Title className='title2'>Story of My Life</Card.Title>
                  <Card.Text className='card2'>
                    The theme is determination and perseverance
                  </Card.Text><div />
                  <p className='card2 text-success'>By Helen Heller </p>
                  <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><div /><br />
                  <Link to={'/secondheader'}> <Button variant="primary">VIEW DETAILS</Button></Link>
                </Card.Body>
              </Card>
            </Carousel.Item>


            <Carousel.Item>
              <Card data-bs-theme="dark" className='pos2' style={{ width: '16rem' }}>
                <Card.Img variant="top" height="190" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRhaG0bXg7ibHqcgm-MAhO8fKkyoULZeM9fr7gnXlp3c7dUHUyd563Emn03GiCRw5KqVw&usqp=CAU" />
                <Card.Body>
                  <Card.Title className='title2'>My Life in Full</Card.Title>
                  <Card.Text className='card2'>
                    The story of Extraordinary Leader's Life
                  </Card.Text><div />
                  <p className='card2 text-success'>By Indra Nooyi</p>
                  <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><div /><br />
                  <Link to={'/thirdheader'}> <Button variant="primary">VIEW DETAILS</Button></Link>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>

        </Col>



        <Col >

          <Card data-bs-theme="dark" className='pos2' style={{ width: '16rem' }}>
            <Card.Img variant="top" height="190" src="https://i.etsystatic.com/28249836/r/il/8168a4/5213573245/il_fullxfull.5213573245_q5ck.jpg" />
            <Card.Body>
              <Card.Title className='title2'>Giants</Card.Title>
              <Card.Text className='card2'>
                Large Beautifully illustrated hardcover childrens
              </Card.Text><div />
              <p className='card2 text-success'>By Doug Cushman</p>
              <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><div /><br />
              <Link to={'/giants'}> <Button variant="primary">VIEW DETAILS</Button></Link>
            </Card.Body>
          </Card>


        </Col>

      </Row>

    </div>
  )
}

export default Newarrivel