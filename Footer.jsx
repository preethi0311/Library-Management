import React from 'react'
import { FcLibrary } from "react-icons/fc";
//import { BsTelephoneXFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
//import { IoHome } from "react-icons/io5";
import { RiCopyrightLine } from "react-icons/ri";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './Foot.css';


function Footer() {
  return (
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
          <Link to={'/navbar'}><p className='p2 text-light'>Home</p></Link>
          <Link to={'/about'}><p className='p2 text-light'>About Us</p></Link>
          <Link to='/contact'><p className='p2 text-light'>Contact Us</p></Link>
          <Link to={'/login'}><p className='p2 text-light'>Login</p></Link>


        </Col>
        <Col >
          <h3 className='other text-light mt-5'>OTHER LINKS</h3>
          <p className='p3 text-light'>📚Books</p>
          <p className='p3 text-light'>📚EBooks</p>
          <Link to='/Admin'><p className='p3 text-light'>🧑‍💼Dashboard</p></Link>
          <Link to='/forgetpass'><p className='p3 text-light'>Forgot Password</p></Link>

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
  )
}

export default Footer