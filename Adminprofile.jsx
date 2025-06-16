import React from 'react';
import './Adminprofile.css';
//import { BsTelephoneXFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { FcLibrary } from "react-icons/fc";
import './About.css'
import { RiCopyrightLine } from "react-icons/ri";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Adminprofile() {
  const admin = {
    name: 'M.Preethi',
    email: 'preethivasan03@gmail.com',
    phone: '+91-8124872758',
    role: ' (Admin)',
    joined: '2023-06-15',
    address: 'Uganda - Africa',
    dob: '1999-11-03',
    profileImg: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' // Demo profile image
  };

  return (
    <div className="dashboard-container">


      <aside className="sidebar">        {/*if you want create side bar using aside tag*/}
        <div className="sidebar-logo">
          <FcLibrary size={30} /> <span>Library Admin</span>
        </div>


        <nav className="sidebar-nav">
          <Link to="/navbar">🏠 Home</Link>
          <Link to="/dashboard">🏠 DashBoard</Link>
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
          <h2>🎉 Welcome to Admin Profile</h2>
        </section>


        <div className="admin-profile-container">
          <div className="admin-card">
            <div className="profile-header">
              <img src={admin.profileImg} alt="Admin" className="profile-img" />
              <h2>🧑‍💼 Admin Profile</h2>
            </div>


            <div className="admin-details">
              <p><strong>👤Name:</strong> {admin.name}</p>
              <p><strong>📧 Email:</strong> {admin.email}</p>
              <p><strong>📞Contact Number:</strong> {admin.phone}</p>
              <p><strong>🎓 Role:</strong> {admin.role}</p>
              <p><strong>🎂 DateofBirth:</strong> {new Date(admin.dob).toLocaleDateString()}</p>
              <p><strong>📍 Address:</strong> {admin.address}</p>
              <p><strong>📅 Joined Date:</strong> {new Date(admin.joined).toLocaleDateString()}</p>
            </div>
          </div>


        </div>
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

export default Adminprofile;
