export function TopHeader() {
  return (
    <div className="bg-knbs-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <span>Kenya National Bureau of Statistics</span>
          <span className="text-knbs-300">|</span>
          <span>Statistical Quality Assurance</span>
          <span className="text-knbs-300">|</span>
          <a href="https://www.knbs.or.ke/knbs-downloads/" className="hover:text-knbs-200">
            Downloads
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.knbs.or.ke/contacts/" className="hover:text-knbs-200">
            Contact
          </a>
          <a href="https://www.knbs.or.ke/compliments-complaints/" className="hover:text-knbs-200">
            Feedback
          </a>
        </div>
      </div>
    </div>
  );
}