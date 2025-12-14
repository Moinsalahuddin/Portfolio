import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Moin Uddin</h3>
            <p className="text-sm">
              Software Developer specializing in mobile and full-stack web development.
              Passionate about creating clean, scalable, and user-friendly applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:Moinsalahuddin334@gmail.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  Moinsalahuddin334@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:03142131398"
                  className="hover:text-primary-400 transition-colors"
                >
                  +92 314 2131398
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a
                  href="https://github.com/Moinsalahuddin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Moin Uddin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

