import { ChevronDown } from "lucide-react";
import Avatar from "./Avatar";

const UserMenuButton = () => {
    return (
 <button
      type="button"
      aria-label="User menu"
      className="flex items-center gap-1 rounded-lg px-2 py-1.5 hover:bg-gray-100 "
    >
      <Avatar />
      <ChevronDown size={14} aria-hidden="true" className="text-gray-700 hidden lg:block" />
    </button>
    );
};

export default UserMenuButton;