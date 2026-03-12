import { NavLink } from "react-router-dom";
import { navLinkClass } from "../../utils/navLinkClass";
import { NAV_ITEMS } from "../../types/contants/navigation.constant";

const DesktopNav = () => {
  return (
    <nav aria-label="Main navigation" className="hidden lg:flex">
      <ul role="list" className="flex items-center gap-1">
        {Object.entries(NAV_ITEMS).map(([key, item]) => {
          return (
            <li key={key}>
              <NavLink to={item.path} className={navLinkClass}>
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNav;
