export default function About() {
  return (
    <div className="about-page">
      <div className="page-intro">
        <div>
          <span className="eyebrow">ABOUT THE PLATFORM</span>
          <h2>About EduManage</h2>
          <p>A simple workspace for organizing student records.</p>
        </div>
      </div>

      <section className="panel about-panel">
        <div className="about-mark">E</div>
        <h3>Student information, organized.</h3>
        <p>
          EduManage is a student management demonstration application built with
          React. It allows an administrator to add, view, edit, delete, and search
          student records through a clear dashboard interface.
        </p>
        <div className="about-features">
          <div><strong>01</strong><span>Manage student records</span></div>
          <div><strong>02</strong><span>Search student information</span></div>
          <div><strong>03</strong><span>View live dashboard statistics</span></div>
        </div>
        <p className="about-note">
          Demonstration note: records are stored in React state. They reset when
          the browser is refreshed.
        </p>
      </section>
    </div>
  );
}
