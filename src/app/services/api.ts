import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchLeads = async () => {
  const response = await axios.get(`${API_URL}/leads`);
  return response.data;
};

export const addLead = async (lead: {
  name: string;
  email: string;
  status: string;
}) => {
  const response = await axios.post(`${API_URL}/leads`, lead);
  return response.data;
};
