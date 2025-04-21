import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ConnectSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#1C1C1C] text-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 max-w-6xl">
        {/* Left side - Contact Information */}
        <div className="flex-1">
          <h2 className="text-4xl font-semibold mb-4">Let's connect</h2>
          <p className="text-gray-400 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="space-y-6">
            <a 
              href="mailto:viniciuslemesds@gmail.com" 
              className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-white transition-colors">
                <FaEnvelope className="text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Email</span>
                <span className="text-base">viniciuslemesds@gmail.com</span>
              </div>
            </a>

            <a 
              href="https://github.com/lemesvini" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-white transition-colors">
                <FaGithub className="text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">GitHub</span>
                <span className="text-base">github.com/lemesvini</span>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/vinicius-lemes-ds/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-white transition-colors">
                <FaLinkedin className="text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">LinkedIn</span>
                <span className="text-base">linkedin.com/in/vinicius-lemes-ds</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right side - Create Something Amazing Card */}
        <div className="flex-1">
          <div className="bg-[#252525] rounded-lg p-8 h-full flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#333] flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4-4-4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Let's Create Something Amazing</h3>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-[#333] rounded-full text-sm">⌨️ Code</span>
              <span className="px-4 py-2 bg-[#333] rounded-full text-sm">🎨 Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection; 