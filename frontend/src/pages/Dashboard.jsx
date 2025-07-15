import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useNavigate } from 'react-router-dom';

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

    return (
    <div className="min-h-screen bg-gray-100 text-black">
        {/* Nav */}
        <div className="flex justify-between items-center px-6 py-4 shadow bg-white">
            <div className="text-lg font-semibold">
                {user ? `Hello, ${user.user_metadata?.name || 'User'}` : 'Loading...'}
        </div>
        <button
            onClick={handleLogout}
            className="bg-[#AAD9D9] border border-black text-black px-4 py-2 rounded hover:bg-opacity-90"
        >
            Logout
        </button>     
        </div>
        
        {/* Main content */}
        <div className="flex flex-col items-center justify-center mt-20">
            <div className="text-3xl font-bold mb-4">Welcome to the Dashboard</div>
        </div>
    </div>
    );
}

export default Dashboard;