import React from "react";

const MenteeList = ({ mentees }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Mentee List</h2>
      <ul>
        {mentees.length > 0 ? (
          mentees.map((mentee) => (
            <li key={mentee.id} className="p-2 border-b">
              {mentee.name} - {mentee.email}
            </li>
          ))
        ) : (
          <p>No mentees found.</p>
        )}
      </ul>
    </div>
  );
};

export default MenteeList;
