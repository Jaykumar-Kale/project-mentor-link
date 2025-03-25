
// MenteesList.js
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
        <div style={{ padding: '20px', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
            <h2 style={{ color: '#1e40af' }}>Mentees List</h2>
            <ul style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                {mentees.map(mentee => (
                    <li key={mentee.id} style={{ padding: '10px', borderBottom: '1px solid gray' }}>
                        <strong>{mentee.name}</strong> - {mentee.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenteesList;
