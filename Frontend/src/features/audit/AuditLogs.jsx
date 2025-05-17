import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuditLogs } from "./auditSlice";

const AuditLogs = () => {
  const dispatch = useDispatch();
  const { logs, loading, error } = useSelector((state) => state.audit);

  useEffect(() => {
    dispatch(fetchAuditLogs());
  }, [dispatch]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Audit Logs</h1>

      {loading && <p className="text-center">Loading audit logs...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="overflow-auto">
        {logs.length === 0 ? (
          <p className="text-center">No audit logs found.</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="border px-4 py-2">Timestamp</th>
                <th className="border px-4 py-2">User</th>
                <th className="border px-4 py-2">Action</th>
                <th className="border px-4 py-2">Details</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log._id} className="text-center border-t">
                  <td className="border px-4 py-2">{new Date(log.timestamp).toLocaleString()}</td>
                  <td className="border px-4 py-2">{log.user}</td>
                  <td className="border px-4 py-2">{log.action}</td>
                  <td className="border px-4 py-2">{log.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AuditLogs;
