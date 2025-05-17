import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { generateReceipt } from "./receiptsSlice";

const ReceiptForm = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [sessionId, setSessionId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !sessionId) return;

    dispatch(generateReceipt({ amount, sessionId }));

    setAmount("");
    setSessionId("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Generate Receipt</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Amount</label>
        <input
          type="number"
          min="0"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Session ID</label>
        <input
          type="text"
          value={sessionId}
          onChange={(e) => setSessionId(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Generate Receipt
      </button>
    </form>
  );
};

export default ReceiptForm;
