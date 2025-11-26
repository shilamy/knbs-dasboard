import { ExternalLink } from "lucide-react";

export function Dictionary() {
  const quartoBookUrl = "http://localhost:6316/";

  return (
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
      <div className="bg-knbs-500 text-white px-4 py-2 flex items-center justify-between text-sm">
        <span className="font-medium">Statistical Dictionary</span>
        <a
          href={quartoBookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:underline"
        >
          <ExternalLink size={14} />
          Open in new tab
        </a>
      </div>
      <iframe
        src={quartoBookUrl}
        className="w-full border-0"
        style={{ height: "calc(100vh - 200px)" }}
        title="Statistical Dictionary"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </div>
  );
}
