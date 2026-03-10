import { NAV_ITEMS } from "../../contants/navigation";

const DesktopNav = () => {
  return (
    <nav aria-label="Main navigation" className="hidden md:block">
      <ul role="list" className="flex items-center gap-1">
        {Object.entries(NAV_ITEMS).map(([key, item]) => {
          return (
            <li key={key}>
              <a
                href={item.path}
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150 "
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNav;
