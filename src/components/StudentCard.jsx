export default function StudentCard({ student, onEdit, onDelete }) {
  const initial = student.name.trim().charAt(0).toUpperCase();

  return (
    <tr>
      <td>
        <div className="student-identity">
          <div className="student-avatar">{initial}</div>
          <div>
            <strong>{student.name}</strong>
            <span>Student ID: {student.id}</span>
          </div>
        </div>
      </td>
      <td className="email-cell">{student.email}</td>
      <td>{student.age}</td>
      <td><span className="major-badge">{student.major}</span></td>
      <td>
        <div className="row-actions">
          <button className="table-action edit-action" type="button" onClick={() => onEdit(student)}>Edit</button>
          <button className="table-action delete-action" type="button" onClick={() => onDelete(student.id)}>Delete</button>
        </div>
      </td>
    </tr>
  );
}
