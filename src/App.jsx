import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Students from "./pages/Students";
import About from "./pages/About";

const initialStudents = [
  { id: 1, name: "Ahmad Rahimi", email: "ahmad@example.com", age: 22, major: "Computer Science" },
  { id: 2, name: "Sara Ahmadi", email: "sara@example.com", age: 20, major: "Information Systems" },
  { id: 3, name: "Ali Noori", email: "ali@example.com", age: 23, major: "Software Engineering" },
  { id: 4, name: "Maryam Hashemi", email: "maryam@example.com", age: 21, major: "Computer Science" },
];

export default function App() {
  const [students, setStudents] = useState(initialStudents);

  const addStudent = (studentData) => {
    const newStudent = { ...studentData, id: Date.now() };
    setStudents((current) => [...current, newStudent]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents((current) =>
      current.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };

  const deleteStudent = (id) => {
    setStudents((current) => current.filter((student) => student.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <div className="main-area">
          <Topbar />
          <main className="page-content">
            <Routes>
              <Route path="/" element={<Home students={students} />} />
              <Route
                path="/students"
                element={
                  <Students
                    students={students}
                    onAddStudent={addStudent}
                    onUpdateStudent={updateStudent}
                    onDeleteStudent={deleteStudent}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
