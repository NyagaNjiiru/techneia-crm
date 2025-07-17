import { NavLink } from 'react-router-dom';
import { FaHome, FaAddressBook, FaComments, FaTasks, FaChartBar, FaBuilding } from 'react-icons/fa';
import logo from '../assets/techneia.png';

function Sidebar() {
  const menuItems = [
    { to: '/dashboard', icon: <FaHome />, label: 'Dashboard' },
    { to: '/contacts', icon: <FaAddressBook />, label: 'Contacts' },
    { to: '/chat', icon: <FaComments />, label: 'Chat' },
    { to: '/tasks', icon: <FaTasks />, label: 'Tasks' },
    { to: '/analytics', icon: <FaChartBar />, label: 'Analytics' },
    { to: '/companies', icon: <FaBuilding />, label: 'Companies' },
  ];

  return (
    <div className="flex flex-col bg-white text-black min-h-screen font-['Roboto'] 
                rounded-tr-3xl rounded-br-3xl w-20">
      {/* Logo */}
      <div className="flex justify-center mb-8 py-6">
        <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
      </div>

      <nav className="flex-1">
        {menuItems.map(({ to, icon, label }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center py-4 cursor-pointer 
               transition-colors duration-200
               ${isActive ? 'bg-[#AAD9D9] text-white' : 'hover:bg-[#AAD9D9] hover:text-white'}`
            }
          >
            <span className="text-xl">{icon}</span>
            <span className="text-xs mt-1">{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;