// src/components/NavBar.jsx
import { useState, useEffect, useRef } from 'react';
import { FaBell, FaCog, FaMoon, FaSync, FaArrowLeft, FaUser } from 'react-icons/fa';
import UserMenu from './UserMenu';

function NavBar({ user, onLogout }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white font-['Roboto']">

      {/* Center search */}
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-full px-4 py-1 w-1/3 focus:outline-none hover:shadow transition"
      />

      {/* Right icons */}
      <div className="flex items-center gap-4 relative" ref={menuRef}>
        <FaBell className="cursor-pointer text-gray-700 hover:text-[#AAD9D9] transition" />
        <FaCog className="cursor-pointer text-gray-700 hover:text-[#AAD9D9] transition" />
        <FaMoon className="cursor-pointer text-gray-700 hover:text-[#AAD9D9] transition" />
        <FaSync className="cursor-pointer text-gray-700 hover:text-[#AAD9D9] transition" />
        <FaArrowLeft className="cursor-pointer text-gray-700 hover:text-[#AAD9D9] transition" />
        <FaUser
          className="cursor-pointer text-gray-700 hover:text-[#AAD9D9] transition"
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <UserMenu user={user} onLogout={onLogout} />
        )}
      </div>
    </div>
  );
}

export default NavBar;