import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navLinkClass } from "../../utils/navLinkClass";
import { NAV_ITEMS } from "../../types/contants/navigation.constant";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500
          transition-colors hover:bg-gray-100 hover:text-gray-700 focus-visible:ring-2
          focus-visible:ring-indigo-400 focus-visible:outline-none lg:hidden dark:text-gray-400
          dark:hover:bg-gray-800 dark:hover:text-gray-200"
      >
        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="absolute top-16 right-0 left-0 border-b border-gray-200 bg-white
            dark:border-gray-800 dark:bg-gray-950"
        >
          <ul role="list" className="flex flex-col gap-1 px-4 py-2">
            {Object.entries(NAV_ITEMS).map(([key, item]) => (
              <li key={key}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => navLinkClass({ isActive, mobile: true })}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
