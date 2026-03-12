import { Moon, Sun } from "lucide-react";
import { useDarkModeStore } from "../../stores/useDarkModeStore";

const DarkModeToggle = () => {
  const { darkMode, toggle } = useDarkModeStore();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="link hidden sm:inline-flex h-9 w-9 justify-center rounded-lg transition-colors "
    >
      {darkMode ? (
        <Sun size={18} aria-hidden="true" className="text-yellow-400" />
      ) : (
        <Moon size={18} aria-hidden="true" />
      )}
    </button>
  );
};

export default DarkModeToggle;
