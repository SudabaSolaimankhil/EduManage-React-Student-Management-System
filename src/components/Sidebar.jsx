import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Dashboard", icon: "▦", end: true },
  { to: "/students", label: "Students", icon: "♙" },
  { to: "/about", label: "About", icon: "ⓘ" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">E</div>
        <span className="brand-name">EduManage</span>
      </div>

      <div className="sidebar-label">WORKSPACE</div>
      <nav className="sidebar-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            <span className="nav-icon" aria-hidden="true">{item.icon}</span>
            <span className="nav-text">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="admin-profile">
          <div className="avatar avatar-light">A</div>
          <div className="admin-copy">
            <strong>Administrator</strong>
            <span>Admin account</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
