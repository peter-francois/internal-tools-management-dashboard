import { Moon, Sun } from "lucide-react";

interface DarkModeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const DarkModeToggle = ({ isDarkMode, onToggle }: DarkModeToggleProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors "
    >
      {isDarkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
};

export default DarkModeToggle;
