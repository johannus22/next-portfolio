import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white py-5 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-5">
            <a
              href="https://github.com/johannus22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:jmasilungan1822@gmail.com"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <SiGmail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/john-rafael-masilungan-52417231b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com/rafael.mslngn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <RiInstagramFill size={24} />
            </a>
          </div>
          <p className="text-gray-500 mb-1 text-xs">
            &copy; {year} Designed and Developed with 💗 by Johannus (John
            Rafael Masilungan)
          </p>
        </div>
      </div>
    </footer>
  );
}
