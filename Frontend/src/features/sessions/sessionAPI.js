import axios from "axios";

const API_BASE = "http://localhost:5000/api/sessions"; // Update if different

// GET sessions (admin sees all, mentor sees their own)
export const fetchSessionsAPI = async () => {
  const response = await axios.get(API_BASE);
  return response.data;
};

// POST a new session (admin only)
export const addSessionAPI = async (sessionData) => {
  const response = await axios.post(API_BASE, sessionData);
  return response.data;
};
