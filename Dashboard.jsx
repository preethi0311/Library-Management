import React from 'react';
import { Link } from 'react-router-dom';
//import { BsTelephoneXFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { FcLibrary } from "react-icons/fc";
import Carousel from 'react-bootstrap/Carousel';
import './Dashboard.css';
import { RiCopyrightLine } from "react-icons/ri";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Dashboard() {
  return (
    <div className="dashboard-container">


      <aside className="sidebar">        {/*if you want create side bar using aside tag*/}
        <div className="sidebar-logo">
          <FcLibrary size={30} /> <span>Library Admin</span>
        </div>


        <nav className="sidebar-nav">
          <Link to="/navbar">🏠 Home</Link>
          <Link to="/adminprofile">👤 Admin Profile</Link>
          <Link to="/viewuser">👥 View All Users</Link>
          <Link to="/viewallbooks">📚 View All Books</Link>
          <Link to="/viewcomments">📚 View User Comments</Link>

        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="contact-info">
            📞+91-8124872758 | <IoMailSharp /> preethivasan03@gmail.com
          </div>
        </header>

        <section className="welcome-section">
          <h2>🎉 Welcome to Admin Dashboard</h2>
        </section>

        <section className="statistics">
          <div className="stat-card">
            <h3>👥 Users</h3>
            <p>152</p>
          </div>
          <div className="stat-card">
            <h3>📚 Books</h3>
            <p>284</p>
          </div>
          <div className="stat-card">
            <h3>🛒 Orders</h3>
            <p>76</p>
          </div>
        </section>

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 banner" src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-beauty-mask-pass-train-show-poster-psd-image_189479.jpg" alt="Slide 1" />
          </Carousel.Item>


          <Carousel.Item>
            <img className="d-block w-100 banner" src="https://img.freepik.com/premium-photo/cherry-blossom-spring-background-with-space-text-vector-illustration_867442-4279.jpg" alt="Slide 2" />
          </Carousel.Item>


          <Carousel.Item>
            <img className="d-block w-100 banner" src="https://img.freepik.com/premium-photo/flowers-composition-white-flowers-gray-background_906149-28576.jpg" alt="Slide 3" />
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
              <p className='p4 text-light'><IoMailSharp />preethi03@gmail.com</p>
              <p className='p4 text-light'>📞+91-8124872758</p>
            </Col><div />

          </Row>
          <p className="p14 "><RiCopyrightLine />2025 Copyright: Library Management System, Africa-Uganda</p>

        </div>
      </main>

    </div>
  );
}

export default Dashboard;
