import { Link } from "react-router-dom";

export default function Home({ students }) {
  const countByMajor = (major) =>
    students.filter((student) => student.major === major).length;

  const stats = [
    { label: "Total students", value: students.length, symbol: "♙", tone: "violet", note: "All registered records" },
    { label: "Computer Science", value: countByMajor("Computer Science"), symbol: "⌘", tone: "blue", note: "Students in this major" },
    { label: "Information Systems", value: countByMajor("Information Systems"), symbol: "▤", tone: "green", note: "Students in this major" },
    { label: "Software Engineering", value: countByMajor("Software Engineering"), symbol: "⌁", tone: "orange", note: "Students in this major" },
  ];

  const recentStudents = [...students].slice(-5).reverse();

  return (
    <div className="dashboard-page">
      <section className="welcome-banner">
        <div>
          <span className="welcome-kicker">YOUR ACADEMIC WORKSPACE</span>
          <h2>Good work starts with great organization.</h2>
          <p>Keep student information organized and up to date in one place.</p>
          <Link className="welcome-button" to="/students">Manage students <span>→</span></Link>
        </div>
        <div className="welcome-decoration" aria-hidden="true">
          <div className="decoration-orbit orbit-one" />
          <div className="decoration-orbit orbit-two" />
          <div className="decoration-core">E</div>
        </div>
      </section>

      <div className="section-heading">
        <div>
          <span className="eyebrow">AT A GLANCE</span>
          <h2>Overview</h2>
        </div>
        <span className="live-label"><i /> Live data</span>
      </div>

      <section className="stats-grid">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <div className={`stat-icon ${stat.tone}`}>{stat.symbol}</div>
            <p>{stat.label}</p>
            <div className="stat-value-row">
              <strong>{stat.value}</strong>
              <span className="stat-note">{stat.note}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="panel recent-panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">LATEST RECORDS</span>
            <h2>Recently added students</h2>
          </div>
          <Link to="/students" className="text-link">View all students <span>→</span></Link>
        </div>

        {recentStudents.length ? (
          <div className="recent-list">
            {recentStudents.map((student) => (
              <div className="recent-row" key={student.id}>
                <div className="student-avatar">{student.name.charAt(0).toUpperCase()}</div>
                <div className="recent-person">
                  <strong>{student.name}</strong>
                  <span>{student.email}</span>
                </div>
                <span className="major-badge">{student.major}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state compact-empty">
            <h3>No student records yet</h3>
            <p>Add your first student to see records here.</p>
            <Link to="/students" className="button button-primary">Add a student</Link>
          </div>
        )}
      </section>
    </div>
  );
}
