import axios from "axios";

const API_BASE_URL = "http://localhost:8080"; // Your Spring Boot Backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
