import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Viewallbooks.css';
import { IoMailSharp } from "react-icons/io5";
import { FcLibrary } from "react-icons/fc";
import './About.css'
import { RiCopyrightLine } from "react-icons/ri";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Viewuserbookcomments() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8002/viewcomments")
      .then((res) => {
        setBooks(res.data.msg);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <FcLibrary size={30} /> <span>Library Admin</span>
        </div>

        <nav className="sidebar-nav">
          <Link to="/navbar">🏠 Home</Link>
          <Link to="/dashboard">🏠 DashBoard</Link>
          <Link to="/adminprofile">👤 Admin Profile</Link>
          <Link to="/viewuser">👥 View All Users</Link>
          <Link to="/viewallbooks">📚 View All Books</Link>
          {/*<Link to="/viewcomments">📚 View User Comments</Link>*/}
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

        <div className='booktable'>
          <div className="table-container">
            <h2>Books List</h2>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Comment</th>
                </tr>
              </thead>
              <tbody>
                {books.length > 0 ? (
                  books.map((book, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{book.bookTitle}</td>
                      <td>{book.author}</td>
                      <td>{book.category}</td>
                      <td><img src={book.image} alt={book.bookTitle} className="book-image" /></td>
                      <td>{book.comment}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>
                      No books found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className='bg-primary'>
            <Row md={4}>
              <Col>
                <p className='p1 text-light mt-5 fs-5'>
                  Gateway to knowledge discovery,
                  and belong learning for all of
                  students, faculty, and staff: A
                  welcoming and inclusive space
                  to all learners to come together
                  and learn.
                </p>
              </Col>

              <Col>
                <h3 className='use text-light mt-5'>USEFUL LINKS</h3>
                <Link to={'/navbar'}><p className='p2 text-light'>Home</p></Link>
                <Link to={'/about'}><p className='p2 text-light'>About Us</p></Link>
                <Link to='/contact'><p className='p2 text-light'>Contact Us</p></Link>
                <Link to={'/login'}><p className='p2 text-light'>Login</p></Link>
              </Col>

              <Col>
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
              </Col>
            </Row>

            <p className="p14 "><RiCopyrightLine />2025 Copyright: Library Management System, Africa-Uganda</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Viewuserbookcomments;
