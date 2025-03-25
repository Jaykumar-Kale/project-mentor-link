import React, { useState } from "react";
import axios from "axios";

const RateMentor = ({ mentorId, menteeId }) => {
  const [rating, setRating] = useState(0);

  const submitRating = async () => {
    if (rating < 1 || rating > 5) {
      alert("Please select a rating between 1 and 5.");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/ratings/add", null, {
        params: { menteeId, mentorId, stars: rating },
      });
      alert("Rating submitted successfully!");
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-md">
      <h3 className="text-lg font-bold mb-2">Rate This Mentor</h3>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`cursor-pointer text-2xl ${rating >= star ? "text-yellow-500" : "text-gray-300"}`}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      <button
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
        onClick={submitRating}
      >
        Submit Rating
      </button>
    </div>
  );
};

export default RateMentor;
