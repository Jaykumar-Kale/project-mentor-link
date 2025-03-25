// API.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api"; 

export const getMentees = async () => await axios.get(`${API_BASE_URL}/mentees`);
export const createMentee = async (menteeData) => await axios.post(`${API_BASE_URL}/mentees`, menteeData);
export const getAdmins = async () => await axios.get(`${API_BASE_URL}/admins`);
export const createAdmin = async (adminData) => await axios.post(`${API_BASE_URL}/admins`, adminData);
