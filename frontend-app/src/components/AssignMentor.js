import React, { useState } from "react";
import axios from "axios";

const AssignMentor = () => {
  const [menteeId, setMenteeId] = useState("");
  const [mentorId, setMentorId] = useState("");
  const [message, setMessage] = useState("");

  const handleAssign = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/api/assign/${menteeId}/mentor/${mentorId}`);
      setMessage(response.data);
    } catch (error) {
      setMessage("Error assigning mentor.");
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-96 mx-auto">
      <h2 className="text-xl font-semibold mb-4">Assign Mentor to Mentee</h2>
      <input
        type="number"
        placeholder="Enter Mentee ID"
        value={menteeId}
        onChange={(e) => setMenteeId(e.target.value)}
        className="border p-2 rounded w-full mb-3"
      />
      <input
        type="number"
        placeholder="Enter Mentor ID"
        value={mentorId}
        onChange={(e) => setMentorId(e.target.value)}
        className="border p-2 rounded w-full mb-3"
      />
      <button onClick={handleAssign} className="bg-blue-500 text-white px-4 py-2 rounded w-full">Assign</button>
      {message && <p className="mt-3 text-center">{message}</p>}
    </div>
  );
};

export default AssignMentor;
