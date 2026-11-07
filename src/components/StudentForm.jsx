import { useEffect, useState } from "react";

const emptyForm = { name: "", email: "", age: "", major: "" };

export default function StudentForm({
  selectedStudent,
  onAddStudent,
  onUpdateStudent,
  onCancel,
  students,
}) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedStudent) {
      setForm({
        name: selectedStudent.name,
        email: selectedStudent.email,
        age: String(selectedStudent.age),
        major: selectedStudent.major,
      });
    } else {
      setForm(emptyForm);
    }
    setError("");
  }, [selectedStudent]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const normalizedEmail = form.email.trim().toLowerCase();

    const duplicateEmail = students.some(
      (student) =>
        student.email.toLowerCase() === normalizedEmail &&
        student.id !== selectedStudent?.id
    );

    if (duplicateEmail) {
      setError("A student with this email address already exists.");
      return;
    }

    const studentData = {
      ...(selectedStudent ? { id: selectedStudent.id } : {}),
      name: form.name.trim(),
      email: normalizedEmail,
      age: Number(form.age),
      major: form.major.trim(),
    };

    if (selectedStudent) {
      onUpdateStudent(studentData);
    } else {
      onAddStudent(studentData);
    }
    setForm(emptyForm);
    setError("");
  };

  return (
    <section className="form-panel">
      <div className="form-heading">
        <div>
          <span className="eyebrow">{selectedStudent ? "EDIT RECORD" : "NEW RECORD"}</span>
          <h2>{selectedStudent ? "Update student details" : "Add a new student"}</h2>
          <p>Complete the fields below to {selectedStudent ? "update this" : "create a"} student record.</p>
        </div>
        <button className="icon-close" type="button" onClick={onCancel} aria-label="Close form">×</button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="student-name">Full name</label>
            <input id="student-name" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Sara Ahmadi" required maxLength={60} />
          </div>
          <div className="form-group">
            <label htmlFor="student-email">Email address</label>
            <input id="student-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="name@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="student-age">Age</label>
            <input id="student-age" name="age" type="number" min="1" max="120" value={form.age} onChange={handleChange} placeholder="Enter age" required />
          </div>
          <div className="form-group">
            <label htmlFor="student-major">Major / Department</label>
            <select id="student-major" name="major" value={form.major} onChange={handleChange} required>
              <option value="" disabled>Select a major</option>
              <option>Computer Science</option>
              <option>Information Systems</option>
              <option>Software Engineering</option>
              <option>Information Technology</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {error && <p className="form-error" role="alert">{error}</p>}

        <div className="form-actions">
          <button className="button button-ghost" type="button" onClick={onCancel}>Cancel</button>
          <button className="button button-primary" type="submit">
            {selectedStudent ? "Save changes" : "Add student"}
          </button>
        </div>
      </form>
    </section>
  );
}
