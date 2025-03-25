

import React, { useEffect, useState } from "react";
import { getMentees } from "../services/api";

const MenteesList = () => {
    const [mentees, setMentees] = useState([]);

    useEffect(() => {
        getMentees()
            .then(response => setMentees(response.data))
            .catch(error => console.error("Error fetching mentees:", error));
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Mentees List</h2>
            <ul className="bg-white shadow-md rounded-lg p-4">
                {mentees.map(mentee => (
                    <li key={mentee.id} className="p-2 border-b border-gray-200 last:border-none">
                        <span className="font-semibold">{mentee.name}</span> - {mentee.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenteesList;
