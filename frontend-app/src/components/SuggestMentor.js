import React, { useState } from "react";
import axios from "axios";

const SuggestMentor = () => {
  const [menteeId, setMenteeId] = useState("");
  const [mentors, setMentors] = useState([]);

  const handleSuggest = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/mentors/suggest/${menteeId}`);
      setMentors(response.data);
    } catch (error) {
      console.error("Error fetching mentors:", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-96 mx-auto">
      <h2 className="text-xl font-semibold mb-4">Suggested Mentors</h2>
      <input
        type="number"
        placeholder="Enter Mentee ID"
        value={menteeId}
        onChange={(e) => setMenteeId(e.target.value)}
        className="border p-2 rounded w-full mb-3"
      />
      <button onClick={handleSuggest} className="bg-green-500 text-white px-4 py-2 rounded w-full">
        Find Mentors
      </button>

      {mentors.length > 0 ? (
        <ul className="mt-4">
          {mentors.map((mentor) => (
            <li key={mentor.id} className="border p-3 rounded mb-2 flex justify-between">
              <div>
                <strong>{mentor.name}</strong> - {mentor.expertise}
                <p>⭐ {mentor.rating}/5</p>
              </div>
              <span className={mentor.available ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
                {mentor.available ? "🟢 Available" : "🔴 Unavailable"}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-center">No mentors found</p>
      )}
    </div>
  );
};

export default SuggestMentor;
