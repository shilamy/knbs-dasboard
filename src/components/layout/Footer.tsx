export function Footer() {
  return (
    <div className="bg-knbs-700 border-t border-knbs-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm">
        <div className="grid grid-cols-3 gap-8 mb-6">
          <div>
            <h4 className="font-medium mb-2">About KNBS</h4>
            <p className="text-knbs-200">Kenya National Bureau of Statistics</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Resources</h4>
            <ul className="space-y-1 text-knbs  -200">
              <li>
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Legal</h4>
            <ul className="space-y-1 text-teal-200">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-knbs-700 pt-4 text-center text-knbs-200">
          <p>
            &copy; 2025 Kenya National Bureau of Statistics. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
