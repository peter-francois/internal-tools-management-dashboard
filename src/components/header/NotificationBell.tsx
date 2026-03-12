import { Bell } from "lucide-react";
import DotBadge from "./DotBadge";

const NotificationBell = () => {
  return (
    <button
      type="button"
      aria-label="Notifications"
      className="link relative h-9 w-9 justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
    >
      <Bell size={18} aria-hidden="true" />
      <DotBadge />
    </button>
  );
};

export default NotificationBell;
