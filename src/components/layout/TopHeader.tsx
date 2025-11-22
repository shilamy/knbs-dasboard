interface TopHeaderProps {
  organizationName?: string;
  showLinks?: boolean;
}

export function TopHeader({
  organizationName = "Kenya National Bureau of Statistics",
  showLinks = true,
}: TopHeaderProps) {
  return (
    <div className="bg-knbs-700 border-b border-knbs-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <span>{organizationName}</span>
          <span className="text-knbs-300">|</span>
          <span>Statistical Quality Assurance</span>
        </div>
        {showLinks && (
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-knbs-200">
              Contact
            </a>
            <a href="#" className="hover:text-knbs-200">
              Help
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
