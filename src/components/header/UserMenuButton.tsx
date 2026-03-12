import { ChevronDown } from "lucide-react";
import Avatar from "../ui/Avatar";

const UserMenuButton = () => {
    return (
 <button
      type="button"
      aria-label="User menu"
      className="link gap-1 rounded-lg px-2 py-1.5 hover:bg-gray-100 transition-colors dark:hover:bg-gray-800 "
    >
      <Avatar />
      <ChevronDown size={14} aria-hidden="true" className="text-gray-700 hidden lg:block dark:text-gray-400" />
    </button>
    );
};

export default UserMenuButton;