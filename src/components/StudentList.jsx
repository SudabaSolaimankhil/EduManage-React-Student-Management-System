import StudentCard from "./StudentCard";

export default function StudentList({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">⌕</div>
        <h3>No students found</h3>
        <p>Try another search term or add a new student record.</p>
      </div>
    );
  }

  return (
    <div className="table-scroll">
      <table className="student-table">
        <thead>
          <tr>
            <th>STUDENT</th>
            <th>EMAIL ADDRESS</th>
            <th>AGE</th>
            <th>MAJOR</th>
            <th className="actions-heading">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
