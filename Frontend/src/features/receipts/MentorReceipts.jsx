import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReceipts } from "./receiptsSlice";

const MentorReceipts = () => {
  const dispatch = useDispatch();
  const { receipts, loading, error } = useSelector((state) => state.receipts);

  useEffect(() => {
    dispatch(fetchReceipts());
  }, [dispatch]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">My Receipts</h1>

      {loading && <p className="text-center">Loading receipts...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="mt-6">
        {receipts.length === 0 ? (
          <p className="text-center">No receipts found.</p>
        ) : (
          receipts.map((receipt) => (
            <div
              key={receipt._id}
              className="bg-white shadow-md rounded p-4 mb-4"
            >
              <p><strong>Receipt ID:</strong> {receipt._id}</p>
              <p><strong>Amount:</strong> ${receipt.amount}</p>
              <p><strong>Date:</strong> {new Date(receipt.date).toLocaleDateString()}</p>
              <p><strong>For Session:</strong> {receipt.sessionId}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MentorReceipts;
