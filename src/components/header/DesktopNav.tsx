import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../types/contants/navigation";

const DesktopNav = () => {
  return (
    <nav aria-label="Main navigation" className="hidden lg:flex">
      <ul role="list" className="flex items-center gap-1">
        {Object.entries(NAV_ITEMS).map(([key, item]) => {
          return (
            <li key={key}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600 "
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  }`
                }
              >{item.label}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNav;
