# EduManage – React Student Management System

A responsive student-management dashboard built with React, React Router, and custom CSS only.

## Included
- Dashboard with live statistics calculated from the student array
- Students page with create, read, update, delete, and search
- About page
- Sidebar, topbar, footer
- Responsive layout
- No Bootstrap, Tailwind, icon package, or UI framework

## Install into an existing Vite React project

1. Copy the `src` folder from this package into your project, replacing your existing `src` folder.
2. Install React Router if it is not already installed:

   ```bash
   npm install react-router-dom
   ```

3. Make sure your `index.html` has a root element:

   ```html
   <div id="root"></div>
   ```

4. Run:

   ```bash
   npm run dev
   ```

## Notes
- Data is stored in React state and resets after refreshing the browser.
- The initial records are demonstration data.
- The form validates required fields and checks for duplicate email addresses.
