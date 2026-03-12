import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
import { NAV_ITEMS } from "../../types/contants/navigation.constant";

function SettingsButton() {
  return (
    <Link
      to={NAV_ITEMS.settings.path}
      aria-label={NAV_ITEMS.settings.label}
      className="link hidden h-9 w-9 items-center justify-center rounded-lg text-gray-500
        transition-colors hover:bg-gray-100 hover:text-gray-700 focus-visible:ring-2
        focus-visible:ring-indigo-400 focus-visible:outline-none sm:flex dark:text-gray-400
        dark:hover:bg-gray-800 dark:hover:text-gray-200"
    >
      <Settings size={18} aria-hidden="true" />
    </Link>
  );
}

export default SettingsButton;
