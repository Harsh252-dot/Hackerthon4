import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats, sendMessage } from "./chatSlice";

export default function ChatPage() {
  const dispatch = useDispatch();
  const { messages, loading, error } = useSelector((state) => state.chat);
  const [newMsg, setNewMsg] = useState("");

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  const handleSend = (e) => {
    e.preventDefault();
    if (newMsg.trim()) {
      dispatch(sendMessage({ text: newMsg }));
      setNewMsg("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Chat</h2>
      {loading && <p>Loading messages...</p>}
      {error && <p className="text-red-600">{error}</p>}
      <div className="h-64 overflow-y-auto border p-2 mb-4 bg-gray-50">
        {messages.length === 0 && <p>No messages yet.</p>}
        {messages.map((msg) => (
          <div key={msg._id} className="mb-2">
            <strong>{msg.senderEmail || "Unknown"}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="flex gap-2">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-grow p-2 border rounded"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
          disabled={loading}
        >
          Send
        </button>
      </form>
    </div>
  );
}
