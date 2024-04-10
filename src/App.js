import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginRegistrationForm from "./component/loginForm/LoginRegistrationForm";
import Dashboard from "./component/dashboard/Dashboard";
import CourseCatalog from "./component/course-catalog/CourseCatalog";
import CoursePage from "./component/course-page/CoursePage";
import EnrollmentProcess from "./component/enrollment-process/EnrollmentProcess";
import NotFoundPage from "./component/404/NotFoundPage";
import Sidebar from "./component/navbar/sidebar/Sidebar";

function App() {
  return (
   <div className="container">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="login"  element={<LoginRegistrationForm />} />
          <Route path="course-catalog" element={<CourseCatalog />} />
          <Route path="course-page" element={<CoursePage />} />
          <Route path="enrollment" element={<EnrollmentProcess />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
