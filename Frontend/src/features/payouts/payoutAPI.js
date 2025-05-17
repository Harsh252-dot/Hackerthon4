// src/features/payouts/payoutAPI.js
import axios from "axios";

const BASE_URL = "/api/payouts";

export const fetchPayoutsAPI = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const generatePayoutAPI = async (payoutData) => {
  const response = await axios.post(BASE_URL, payoutData);
  return response.data;
};
