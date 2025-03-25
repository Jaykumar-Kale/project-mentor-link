import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api"; // Backend URL

export const getMentees = async () => {
    return await axios.get(`${API_BASE_URL}/mentees`);
};

export const createMentee = async (menteeData) => {
    return await axios.post(`${API_BASE_URL}/mentees`, menteeData);
};

export const getAdmins = async () => {
    return await axios.get(`${API_BASE_URL}/admins`);
};

export const createAdmin = async (adminData) => {
    return await axios.post(`${API_BASE_URL}/admins`, adminData);
};
