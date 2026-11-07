import { useMemo, useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import SearchBar from "../components/SearchBar";

export default function Students({ students, onAddStudent, onUpdateStudent, onDeleteStudent }) {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return students;

    return students.filter((student) =>
      [student.name, student.email, student.major]
        .some((value) => value.toLowerCase().includes(term))
    );
  }, [students, search]);

  const openAddForm = () => {
    setSelectedStudent(null);
    setShowForm(true);
  };

  const openEditForm = (student) => {
    setSelectedStudent(student);
    setShowForm(true);
  };

  const closeForm = () => {
    setSelectedStudent(null);
    setShowForm(false);
  };

  const handleAdd = (studentData) => {
    onAddStudent(studentData);
    closeForm();
  };

  const handleUpdate = (studentData) => {
    onUpdateStudent(studentData);
    closeForm();
  };

  const handleDelete = (id) => {
    const student = students.find((item) => item.id === id);
    if (window.confirm(`Delete ${student?.name ?? "this student"}? This action cannot be undone.`)) {
      onDeleteStudent(id);
    }
  };

  return (
    <div className="students-page">
      <div className="page-intro">
        <div>
          <span className="eyebrow">RECORD MANAGEMENT</span>
          <h2>Students</h2>
          <p>View, search, add, and update your student records.</p>
        </div>
        <button className="button button-primary" type="button" onClick={openAddForm}>
          <span className="button-plus">＋</span> Add new student
        </button>
      </div>

      {showForm && (
        <StudentForm
          selectedStudent={selectedStudent}
          students={students}
          onAddStudent={handleAdd}
          onUpdateStudent={handleUpdate}
          onCancel={closeForm}
        />
      )}

      <section className="panel students-panel">
        <div className="students-toolbar">
          <div>
            <h3>All students <span className="count-pill">{students.length}</span></h3>
            <p>Student directory and academic information</p>
          </div>
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        <StudentList
          students={filteredStudents}
          onEdit={openEditForm}
          onDelete={handleDelete}
        />

        <div className="table-footer">
          <span>Showing <strong>{filteredStudents.length}</strong> of <strong>{students.length}</strong> students</span>
          <span>Student directory</span>
        </div>
      </section>
    </div>
  );
}
