export function TopHeader() {
  return (
    <div className="bg-knbs-600 text-white">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <span>Kenya National Bureau of Statistics</span>
          <span className="text-knbs-300">|</span>
          <span>Statistical Quality Assurance</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-knbs-200">
            Contact
          </a>
          <a href="#" className="hover:text-knbs-200">
            Help
          </a>
        </div>
      </div>
    </div>
  );
}
