import { Bell } from "lucide-react";
import Badge from "./Badge";

const NotificationBell = () => {
  return (
    <button
      type="button"
      aria-label="Notifications"
      className="relative flex h-9 w-9 items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
    >
      <Bell size={18} aria-hidden="true" />
      <Badge />
    </button>
  );
};

export default NotificationBell;
