import { FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa';

function SocialButtons() {
  return (
    <div className="flex justify-center gap-4 mt-2">
      <button className="text-gray-600 hover:text-black">
        <FaGoogle size={24} />
      </button>
      <button className="text-gray-600 hover:text-black">
        <FaLinkedin size={24} />
      </button>
      <button className="text-gray-600 hover:text-black">
        <FaGithub size={24} />
      </button>
    </div>
  );
}

export default SocialButtons;
