// src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line
} from 'recharts';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        navigate('/login');
      } else {
        setUser(data.user);
      }
    }
    getUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const sampleData = [
    { name: 'Mon', leads: 5, tasks: 3 },
    { name: 'Tue', leads: 8, tasks: 4 },
    { name: 'Wed', leads: 6, tasks: 2 },
    { name: 'Thu', leads: 10, tasks: 5 },
    { name: 'Fri', leads: 7, tasks: 3 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-black font-['Roboto']">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <NavBar user={user} onLogout={handleLogout} />

        <div className="p-6 space-y-6">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-2xl font-bold mb-2">5</div>
              <div className="text-gray-500">Total Leads</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-2xl font-bold mb-2">12</div>
              <div className="text-gray-500">Contacts</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-2xl font-bold mb-2">3</div>
              <div className="text-gray-500">Tasks Today</div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Leads this week</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={sampleData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="leads" fill="#AAD9D9" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Tasks this week</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={sampleData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="tasks" stroke="#AAD9D9" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent activity */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Recent Activity</h3>
            <ul className="space-y-2">
              <li className="border-b pb-2">Added new lead: John Doe</li>
              <li className="border-b pb-2">Completed task: Follow-up call</li>
              <li className="border-b pb-2">Sent email to client</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;