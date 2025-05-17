import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSession } from "../features/sessions/sessionSlice";

const SessionForm = () => {
  const dispatch = useDispatch();
  const [mentor, setMentor] = useState("");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mentor || !topic || !date || !duration) {
      alert("Please fill in all fields");
      return;
    }

    dispatch(addSession({ mentor, topic, date, duration: Number(duration) }));

    // Reset form
    setMentor("");
    setTopic("");
    setDate("");
    setDuration("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add New Session</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Mentor Name</label>
        <input
          type="text"
          value={mentor}
          onChange={(e) => setMentor(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter mentor name"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Topic</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter session topic"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Duration (minutes)</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter duration"
          min="1"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Session
      </button>
    </form>
  );
};

export default SessionForm;
