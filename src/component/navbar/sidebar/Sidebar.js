import "./sidebar.css"; // Assuming you have a separate CSS file for sidebar styles

import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // <Route path="/" element={<LoginRegistrationForm />}>
  //         <Route index element={<Dashboard />} />
  //         <Route path="CourseCatalog" element={<CourseCatalog />} />
  //         <Route path="CoursePage" element={<CoursePage />} />
  //         <Route path="EnrollmentProcess" element={<EnrollmentProcess />} />
  //         <Route path="*" element={<NotFoundPage />} />
  return (
    <div className="conta">
      <div className={`sidebar ${isSidebarOpen ? "active-sidebar" : ""}`}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link ">
              Login/Registration
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Dashboard" className="nav-link ">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/course-catalog" className="nav-link ">
              Course Catalog</Link>
          </li>
          <li className="nav-item">
            <Link to="/course-page" className="nav-link ">
              Course Page</Link>
          </li>
          <li className="nav-item">
            <Link to="/enrollment" className="nav-link ">
              Enrollment</Link>
          </li>
          <li className="nav-item">
            <Link to="/assignment-submission" className="nav-link ">
              Assignment Submission</Link>
          </li>
          <li className="nav-item">
            <Link to="/grades" className="nav-link ">
            Grades</Link>
          </li>
          <li className="nav-item">
            <Link to="/discussion-forum" className="nav-link ">
            Discussion Forum</Link>
          </li>
          <li className="nav-item">
            <Link to="/notifications" className="nav-link ">
              Notifications</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile-management" className="nav-link ">
              Profile Management</Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              id="megaMenu"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Courses
            </Link>
            <ul
              className="dropdown-menu mega-menu mega-menu-content"
              aria-labelledby="megaMenu"
            >
              <div className="container mega-menu-container">
                <div className="row">
                  <div className="col-md-3">
                    <h5>Category 1</h5>
                    <ul className="list-unstyled">
                      <li><Link href="/">Course 1</Link></li>
                      <li><Link href="/">Course 2</Link></li>
                      <li><Link href="/">Course 3</Link></li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h5>Category 2</h5>
                    <ul className="list-unstyled">
                      <li><Link href="/">Course 4</Link></li>
                      <li><Link href="/">Course 5</Link></li>
                      <li><Link href="/">Course 6</Link></li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h5>Category 3</h5>
                    <ul className="list-unstyled">
                      <li><Link href="/">Course 7</Link></li>
                      <li><Link href="/">Course 8</Link></li>
                      <li><Link href="/">Course 9</Link></li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h5>Category 4</h5>
                    <ul className="list-unstyled">
                      <li><Link href="/">Course 10</Link></li>
                      <li><Link href="/">Course 11</Link></li>
                      <li><Link href="/">Course 12</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </div>
      <div className={`content ${isSidebarOpen ? "active" : ""}`}>
        <button className="btn btn-outline-dark btn-lg toggle-btn" onClick={toggleSidebar}>
          <i
            className={`fas ${isSidebarOpen ? "fa-times fa-lg" : "fa-bars"}`}
          ></i>
        </button>
        
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;

