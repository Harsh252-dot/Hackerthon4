import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSessions } from "./sessionSlice";

const MentorSessions = () => {
  const dispatch = useDispatch();
  const { sessions, loading, error } = useSelector((state) => state.sessions);

  useEffect(() => {
    dispatch(fetchSessions());
  }, [dispatch]);

  // Sort sessions by date descending
  const sortedSessions = [...sessions].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">My Sessions</h1>

      {loading && <p className="text-center">Loading sessions...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="mt-6">
        {sortedSessions.length === 0 ? (
          <p className="text-center">No sessions found.</p>
        ) : (
          sortedSessions.map((session) => (
            <div
              key={session._id}
              className="bg-white shadow-md rounded p-4 mb-4"
            >
              <p>
                <strong>Topic:</strong> {session.topic}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(session.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Duration:</strong> {session.duration} minutes
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MentorSessions;
