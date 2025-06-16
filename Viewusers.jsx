import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Viewusers.css";
import { IoMailSharp } from "react-icons/io5";
import { FcLibrary } from "react-icons/fc";
import './About.css'
import { RiCopyrightLine } from "react-icons/ri";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';





function Viewusers() {
  const [user, setUser] = useState([]);   //it can be stored user documents in start an empty array
  const [search, setSearch] = useState('');   /// it can be used to search user in below the table



  useEffect(() => {
    axios.get("http://localhost:8002/viewallusers")  //used to axios api and can get user details in backend
      .then((res) => {
        setUser(res.data.msg);  ///data coming from api  it stored res.data.msg and can set user state
      })
      .catch((err) => {
        console.log(err);   // find error used to console.log
      });
  }, []);



  // Search filter (firstname, email, contact )
  const filteredUsers = user.filter((data) => {  // create filterdusers in new line and check the search value in user details
    return (
      data.firstname.toLowerCase().includes(search.toLowerCase()) ||  //lowercase() used to search case sensitive 
      data.email.toLowerCase().includes(search.toLowerCase()) ||
      data.contact.toString().includes(search)
    );
  });



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

        <div className="usertable">  {/*container used to style this part*/}
          <div className="table-container">

            <h2>User List</h2>

            {/* Search Box */}   {/* if type user input box onchange even-il update the search state*/}
            <input type="text" placeholder="Search by FirstName, Email or Contact..."
              className="search-box" value={search} onChange={(e) => setSearch(e.target.value)} />


            <table>

              <thead>
                <tr>
                  <th>S.No</th>
                  <th>FirstName</th>
                  <th>FatherName</th>
                  <th>Dateofbirth</th>
                  <th>Password</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Address</th>
                </tr>
              </thead>


              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.firstname}</td>
                      <td>{data.fathername}</td>
                      <td>{data.dateofbirth}</td>
                      <td>{data.password}</td>
                      <td>{data.email}</td>
                      <td>{data.contact}</td>
                      <td>{data.address}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
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
        </div>
      </main>

    </div>
  );
}

export default Viewusers;
