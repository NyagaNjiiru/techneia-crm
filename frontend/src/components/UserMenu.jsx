// src/components/UserMenu.jsx
import { FaQuestionCircle, FaLifeRing, FaEnvelope, FaCommentDots } from 'react-icons/fa';

function UserMenu({ user, onLogout }) {
  return (
    <div className="absolute right-4 top-full mt-2 min-w-64 bg-white rounded-xl shadow-md text-sm p-4 space-y-2 font-['Roboto'] z-20">
      <div className="font-semibold mb-2">Account Info</div>

      <div className="flex justify-between">
        <span>Username:</span>
        <span>{user?.user_metadata?.name || 'User'}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>User ID:</span>
        <span className="truncate">{user?.id?.slice(0, 8) || 'N/A'}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Organization:</span>
        <span>Techneia</span>
      </div>

      <button
        onClick={onLogout}
        className="w-full text-left px-3 py-1 rounded bg-[#AAD9D9] text-white hover:bg-[#88c0c0] transition"
      >
        Logout
      </button>

      <div className="border-t pt-2 space-y-2">
        <div className="flex items-center gap-2 cursor-pointer hover:text-[#AAD9D9] transition">
          <FaQuestionCircle /> <span>Need Help?</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-[#AAD9D9] transition">
          <FaCommentDots /> <span>Talk to us</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-[#AAD9D9] transition">
          <FaLifeRing /> <span>Help Resources</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <FaEnvelope /> <span>support@techneia.com</span>
        </div>
      </div>
    </div>
  );
}

export default UserMenu;