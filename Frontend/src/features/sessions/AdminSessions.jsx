import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSessions } from "../features/sessions/sessionSlice";
import SessionForm from "../components/SessionForm";

const AdminSessions = () => {
  const dispatch = useDispatch();
  const { sessions, loading, error } = useSelector((state) => state.sessions);

  useEffect(() => {
    dispatch(fetchSessions());
  }, [dispatch]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Admin - All Sessions</h1>

      <SessionForm />

      {loading && <p className="text-center mt-4">Loading sessions...</p>}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      <div className="mt-6">
        {sessions.map((session) => (
          <div
            key={session._id}
            className="bg-gray-100 rounded shadow p-4 mb-4"
          >
            <p><strong>Mentor:</strong> {session.mentor}</p>
            <p><strong>Topic:</strong> {session.topic}</p>
            <p><strong>Date:</strong> {new Date(session.date).toLocaleDateString()}</p>
            <p><strong>Duration:</strong> {session.duration} mins</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSessions;
