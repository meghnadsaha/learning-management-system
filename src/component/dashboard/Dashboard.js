import "./dashboard.css";

import React from "react";

const Dashboard = () => {
  // Hardcoded data
  const username = "John Doe";
  const enrolledCourses = ["Course 1", "Course 2", "Course 3"];
  const upcomingAssignments = [
    { name: "Assignment 1", dueDate: "Due Date 1" },
    { name: "Assignment 2", dueDate: "Due Date 2" },
    { name: "Assignment 3", dueDate: "Due Date 3" },
  ];
  const notifications = ["New Announcement", "Assignment Graded", "Forum Post"];
  const courseMaterials = [
    "Course 1 Materials",
    "Course 2 Materials",
    "Course 3 Materials",
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2>Welcome, {username}!</h2>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <h4>Enrolled Courses:</h4>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {enrolledCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <h4>Upcoming Assignments:</h4>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {upcomingAssignments.map((assignment, index) => (
              <li key={index}>
                {assignment.name} ({assignment.dueDate})
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <h4>Notifications:</h4>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <h4>Quick Access to Course Materials:</h4>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {courseMaterials.map((material, index) => (
              <li key={index}>{material}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
