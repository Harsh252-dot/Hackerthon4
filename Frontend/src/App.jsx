import React from "react";
import "./index.css"; 
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import ChatPage from "./features/chat/ChatPage";
import MentorSessions from "./features/sessions/MentorSessions";
import ProtectedRoute from "./components/ProtectedRoute";
import { Link } from "react-router-dom";
import MentorReceipts from "./features/receipts/MentorReceipts";
import AdminReceipts from "./features/receipts/AdminReceipts";

// Placeholder dashboards
const AdminDashboard = () => (
  <div className="p-4 text-center">
    <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
    <p>Manage sessions, payouts, receipts, audits here.</p>
  </div>
);



const MentorDashboard = () => (
  <div className="p-4 text-center">
    <h1 className="text-3xl font-bold mb-4">Mentor Dashboard</h1>
    <p>View your sessions, payouts, receipts here.</p>
    <Link
      to="/mentor/sessions"
      className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      View My Sessions
    </Link>
  </div>
);


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mentor/receipts" element={<MentorReceipts />} />
      <Route path="/admin/receipts" element={<AdminReceipts />} />

      {/* Dashboard routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <ChatPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/mentor/sessions"
        element={
          <ProtectedRoute>
            <MentorSessions />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  if (!user) return null;

  return user.role === "admin" ? <AdminDashboard /> : <MentorDashboard />;
}
