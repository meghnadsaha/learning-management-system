import React, { useState } from "react";
import "./CoursePage.css"; // Import your custom CSS file

const CoursePage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Dummy data for course
  const course = {
    title: "Course Title",
    instructor: "John Doe",
    description: "Course Description",
    objectives: ["Objective 1", "Objective 2", "Objective 3"],
    modules: [
      {
        title: "Module 1: Introduction",
        lessons: ["Lesson 1.1: Welcome", "Lesson 1.2: Course Structure"],
      },
      {
        title: "Module 2: Main Concepts",
        lessons: [
          "Lesson 2.1: Concepts Overview",
          "Lesson 2.2: In-depth Analysis",
        ],
      },
    ],
    assignments: [
      { title: "Assignment 1: Introduction to the Course", dueDate: "MM/DD" },
      { title: "Assignment 2: Main Concepts Review", dueDate: "MM/DD" },
    ],
    grades: [
      { title: "Assignment 1", grade: "A" },
      { title: "Assignment 2", grade: "B+" },
    ],
    forumPosts: ["Post 1: Topic", "Post 2: Topic"],
    announcements: ["Latest Announcement"],
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container-fluid mt-5">
      <h2>{course.title}</h2>
      <p>Instructor: {course.instructor}</p>

      <div className="row">
        <div className="col-md-3">
          <ul className="nav flex-column nav-pills">
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "overview" ? "active" : ""
                }`}
                onClick={() => handleTabClick("overview")}
              >
                Overview
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "modules" ? "active" : ""
                }`}
                onClick={() => handleTabClick("modules")}
              >
                Modules/Lessons
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "assignments" ? "active" : ""
                }`}
                onClick={() => handleTabClick("assignments")}
              >
                Assignments
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "grades" ? "active" : ""}`}
                onClick={() => handleTabClick("grades")}
              >
                Grades
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "announcements" ? "active" : ""
                }`}
                onClick={() => handleTabClick("announcements")}
              >
                Announcements
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "forum" ? "active" : ""}`}
                onClick={() => handleTabClick("forum")}
              >
                Discussion Forum
              </button>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          <div className="tab-content mt-3">
            {activeTab === "overview" && (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Course Overview</h5>
                  <p>{course.description}</p>
                  <h5 className="card-title">Objectives</h5>
                  <ul>
                    {course.objectives.map((objective, index) => (
                      <li key={index}>{objective}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {activeTab === "modules" && (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Modules/Lessons</h5>
                  {course.modules.map((module, index) => (
                    <div key={index}>
                      <h6>{module.title}</h6>
                      <ul>
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex}>{lesson}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "assignments" && (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Assignments</h5>
                  {course.assignments.map((assignment, index) => (
                    <p key={index}>
                      {assignment.title} (Due Date: {assignment.dueDate})
                    </p>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "grades" && (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Grades</h5>
                  {course.grades.map((grade, index) => (
                    <p key={index}>
                      {grade.title}: Grade: {grade.grade}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "announcements" && (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Announcements</h5>
                  {course.announcements.map((announcement, index) => (
                    <p key={index}>{announcement}</p>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "forum" && (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Discussion Forum</h5>
                  {course.forumPosts.map((post, index) => (
                    <p key={index}>{post}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
