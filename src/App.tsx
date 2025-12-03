import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {Homepage} from "./pages/Home";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public homepage */}
        <Route path="/" element={<Homepage />} />

        {/* Dashboard and all nested routes */}
        <Route path="/dashboard/*" element={<Dashboard />} />

        {/* Redirect unknown URLs to homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
