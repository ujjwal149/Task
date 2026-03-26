import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Employee from "./pages/Employee";
import TaskList from "./components/TaskList";

import AdminLayout from "./layouts/AdminLayout";
import EmployeeLayout from "./layouts/EmployeeLayout";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="tasks" element={<TaskList />} />
        </Route>

        {/* ✅ Employee Layout FIX */}
        <Route path="/employee" element={<EmployeeLayout />}>
          <Route index element={<Employee />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;