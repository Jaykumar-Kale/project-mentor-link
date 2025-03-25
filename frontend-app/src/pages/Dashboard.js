import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Users, UserPlus, ClipboardList, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

//<Link to="/assign-mentor" className="bg-blue-600 text-white px-4 py-2 rounded">Assign Mentor</Link>
<Link to="/suggest-mentor" className="bg-green-600 text-white px-4 py-2 rounded">Suggest Mentor</Link>


const data = [
  { name: "Jan", mentees: 30, mentors: 10 },
  { name: "Feb", mentees: 45, mentors: 20 },
  { name: "Mar", mentees: 50, mentors: 25 },
  { name: "Apr", mentees: 70, mentors: 30 },
];

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white p-5 space-y-6">
        <h1 className="text-2xl font-bold">MentorLink</h1>
        <nav>
          <ul className="space-y-4">
            <li><Link to="/dashboard" className="flex items-center gap-2 hover:underline"><ClipboardList size={18} /> Dashboard</Link></li>
            <li><Link to="/mentors" className="flex items-center gap-2 hover:underline"><UserPlus size={18} /> Mentors</Link></li>
            <li><Link to="/mentees" className="flex items-center gap-2 hover:underline"><Users size={18} /> Mentees</Link></li>
            <li><Link to="/messages" className="flex items-center gap-2 hover:underline"><MessageSquare size={18} /> Messages</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Total Mentees</h3>
              <p className="text-2xl font-bold">250</p>
            </div>
            <Users size={40} className="text-blue-600" />
          </div>

          <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Total Mentors</h3>
              <p className="text-2xl font-bold">80</p>
            </div>
            <UserPlus size={40} className="text-green-600" />
          </div>

          <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">New Messages</h3>
              <p className="text-2xl font-bold">12</p>
            </div>
            <MessageSquare size={40} className="text-red-600" />
          </div>
        </div>

        {/* Graph Section */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Mentor & Mentee Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="mentees" fill="#3b82f6" />
              <Bar dataKey="mentors" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
