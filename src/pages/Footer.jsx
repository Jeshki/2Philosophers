import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center p-6 mt-10">
      <p className="mb-4">© 2025 2Philosophers. All rights reserved.</p>
      <div className="flex justify-center gap-6 text-2xl">
        <a href="https://github.com" className="hover:text-indigo-600" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" className="hover:text-indigo-600" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:philosophy@2philosophers.com" className="hover:text-indigo-600" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}