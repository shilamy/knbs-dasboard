import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-knbs-600 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About KNBS</h4>
            <p className="text-sm leading-relaxed text-knbs-100">
              The Kenya National Bureau of Statistics (KNBS) is a State Corporation established by the Statistics Act, 2006, for the collection, compilation, analysis, publication and dissemination of statistical information, and the coordination of the national statistical system.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-knbs-100">
              <li>
                <a href="https://www.knbs.or.ke/publications/" className="hover:text-white transition-colors">
                  📑 Publications
                </a>
              </li>
              <li>
                <a href="https://www.knbs.or.ke/portals/" className="hover:text-white transition-colors">
                  📊 Data Portal
                </a>
              </li>
              <li>
                <a href="https://www.knbs.or.ke/contacts/" className="hover:text-white transition-colors">
                  📞 Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Info Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Info</h4>
            <ul className="space-y-2 text-sm text-knbs-100">
              <li>
                <a href="https://www.knbs.or.ke/statistical-releases/" className="hover:text-white transition-colors">
                  📈 Statistical Releases
                </a>
              </li>
              <li>
                <a href="https://www.knbs.or.ke/articles/" className="hover:text-white transition-colors">
                  📰 Articles
                </a>
              </li>
              <li>
                <a href="https://www.knbs.or.ke/new/" className="hover:text-white transition-colors">
                  🆕 Recent Releases
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom */}
        <div className="border-t border-knbs-500 pt-6 text-center text-sm text-knbs-100">
          <p>&copy; 2025 Kenya National Bureau of Statistics. All rights reserved.</p>
          
          <div className="flex justify-center space-x-4 mt-3">
            <a
              href="#"
              aria-label="Facebook"
              className="text-knbs-100 hover:text-white transition-colors rounded focus:outline-none focus:ring-2 focus:ring-white/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="text-knbs-100 hover:text-white transition-colors rounded focus:outline-none focus:ring-2 focus:ring-white/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="text-knbs-100 hover:text-white transition-colors rounded focus:outline-none focus:ring-2 focus:ring-white/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

