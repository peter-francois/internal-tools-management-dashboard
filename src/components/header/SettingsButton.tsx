import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../types/contants/navigation";
import { Settings } from "lucide-react";

function SettingsButton() {
  return (
    <Link
      to={NAV_ITEMS.settings.path}
      aria-label={NAV_ITEMS.settings.label}
      className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
    >
      <Settings size={18} aria-hidden="true" />
    </Link>
  );
}

export default SettingsButton;