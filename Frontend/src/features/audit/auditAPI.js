import axios from "axios";

const BASE_URL = "/api/audit";

export const fetchAuditLogsAPI = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
