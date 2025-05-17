import axios from "axios";

const BASE_URL = "/api/receipts";

export const fetchReceiptsAPI = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const generateReceiptAPI = async (receiptData) => {
  const response = await axios.post(BASE_URL, receiptData);
  return response.data;
};
