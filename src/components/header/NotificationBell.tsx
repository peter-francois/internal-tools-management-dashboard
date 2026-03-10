import { Bell } from "lucide-react";
import Badge from "./Badge";

const NotificationBell = () => {
  return (
    <button
      type="button"
      aria-label="Notifications"
      className="relative flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
    >
      <Bell size={18} aria-hidden="true" />
      <Badge />
    </button>
  );
};

export default NotificationBell;
