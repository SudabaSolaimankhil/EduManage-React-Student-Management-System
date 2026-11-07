import { useLocation } from "react-router-dom";

const pageNames = {
  "/": ["Dashboard", "Overview of your student records"],
  "/students": ["Student Management", "Manage and organize student records"],
  "/about": ["About EduManage", "Learn more about this application"],
};

export default function Topbar() {
  const location = useLocation();
  const [title, subtitle] = pageNames[location.pathname] || pageNames["/"];

  return (
    <header className="topbar">
      <div className="topbar-heading">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="topbar-actions">
        <div className="topbar-date">
          <span className="status-dot" />
          <span>Workspace active</span>
        </div>
        <div className="topbar-user">
          <div className="avatar">A</div>
          <div className="topbar-user-copy">
            <strong>Admin</strong>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}
